const client = require('./elk')
const url = require('url')

async function getList(req, res) {
	let result
	const unisex =
		req.params['props'].includes('мужское') || req.params['props'].includes('женское')
			? req.params['props'].replace('мужское', 'унисекс').replace('женское', 'унисекс')
			: ''
	const price =
		"doc['sale'].value == 0? Math.round(doc['price'].value) : Math.round(doc['price'].value - doc['price'].value * doc['sale'].value / 100)"
	const aggs = {
		price: {
			terms: {
				script: price,
				size: 10000,
			},
		},
		sex: {
			terms: { field: 'sex', size: 10000 },
		},
		category: {
			terms: { field: 'category', size: 10000 },
		},
		color: {
			terms: { field: 'color', size: 10000 },
		},
		size: {
			terms: { field: 'size', size: 10000 },
		},
		brand: {
			terms: { field: 'brand.keyword', size: 10000 },
		},
	}
	if (req.params['props'].includes('sale') && req.params['props'].length > 4) {
		unisex = unisex.replace('sale', '').trim()
		const params = req.params['props'].replace('sale', '').trim()
		result = await client.search({
			index: 'bs_item',
			size: 0,
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
			aggs: aggs,
		})
	} else if (req.params['props'] == 'new') {
		result = await client.search({
			index: 'bs_item',
			size: 0,
			query: {
				match_all: {},
			},
			aggs: aggs,
		})
	} else if (req.params['props'] == 'sale') {
		result = await client.search({
			index: 'bs_item',
			size: 0,
			query: {
				range: {
					sale: {
						gt: 0,
					},
				},
			},
			aggs: aggs,
		})
	} else {
		result = await client.search({
			index: 'bs_item',
			size: 0,
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
			aggs: aggs,
		})
	}

	result = result.aggregations
	res.send(result)
}

module.exports = getList
