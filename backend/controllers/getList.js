const client = require('./elk')

async function getList(req, res) {
	let result
	let unisex = ''
	const size = req.params['page'] > 100 ? 0 : req.params['limit']
	const skip = req.params['page'] > 100 ? 0 : size * (Number(req.params['page']) - 1)
	const sort =
		req.params['sort'] == 'priceDESC'
			? {
					_script: {
						script:
							"doc['sale'].value == 0? doc['price'].value : doc['price'].value - doc['price'].value * doc['sale'].value / 100",
						type: 'number',
						order: 'desc',
					},
			  }
			: req.params['sort'] == 'priceASC'
			? {
					_script: {
						script:
							"doc['sale'].value == 0? doc['price'].value : doc['price'].value - doc['price'].value * doc['sale'].value / 100",
						type: 'number',
						order: 'asc',
					},
			  }
			: [{ class: { order: 'desc' } }, { category: { order: 'asc' } }]

	if (req.params['props'].includes('мужское') || req.params['props'].includes('женское')) {
		unisex = req.params['props'].replace('мужское', 'унисекс').replace('женское', 'унисекс')
	}
	if (req.params['props'].includes('sale') && req.params['props'].length > 4) {
		unisex = unisex.replace('sale', '').trim()
		const params = req.params['props'].replace('sale', '').trim()
		result = await client.search({
			index: 'bs_item',
			from: skip,
			size: size,
			query: {
				bool: {
					must: [
						{
							bool: {
								should: [
									{
										match: {
											list_prop: {
												query: params,
												operator: 'AND',
												fuzziness: 'AUTO',
											},
										},
									},
									{
										match: {
											list_prop: {
												query: unisex,
												operator: 'AND',
												fuzziness: 'AUTO',
											},
										},
									},
								],
							},
						},
						{
							range: {
								sale: {
									gt: 0,
								},
							},
						},
					],
				},
			},
			sort: sort,
		})
	} else if (req.params['props'] == 'new') {
		result = await client.search({
			index: 'bs_item',
			from: skip,
			size: size,
			query: {
				match_all: {},
			},
			sort: sort,
		})
	} else if (req.params['props'] == 'sale') {
		result = await client.search({
			index: 'bs_item',
			from: skip,
			size: size,
			query: {
				range: {
					sale: {
						gt: 0,
					},
				},
			},
			sort: sort,
		})
	} else {
		result = await client.search({
			index: 'bs_item',
			from: skip,
			size: size,
			query: {
				bool: {
					should: [
						{
							match: {
								list_prop: {
									query: req.params['props'],
									operator: 'AND',
									fuzziness: 'AUTO',
								},
							},
						},
						{
							match: {
								list_prop: {
									query: unisex,
									operator: 'AND',
									fuzziness: 'AUTO',
								},
							},
						},
					],
				},
			},
			sort: sort,
		})
	}
	result = result.hits.hits.map(el => el._source)
	res.send(result)
}

module.exports = getList
