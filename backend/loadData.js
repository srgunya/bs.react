require('dotenv').config()
const bs = require('./controllers/mysql')
const client = require('./controllers/elk')

function load() {
	createItemIndex()
	createLogoIndex()
	loadIndex('item', 'bs_item')
	loadIndex('logo', 'bs_logo')
}

function loadIndex(name_mysql, name_elk) {
	let mas_for_elk = []
	let query = `SELECT * FROM ${name_mysql}`
	bs.query(query, async (err, result, field) => {
		await result.forEach(el => {
			mas_for_elk.push({
				index: {
					_index: `${name_elk}`,
					_id: el.id,
				},
			})
			mas_for_elk.push(el)
		})
		const response = await client.bulk({
			body: mas_for_elk,
		})
		if (!response.err) {
			console.log('Успешно загрузили данные')
		}
	})
}
async function createLogoIndex() {
	return await client.indices.create({
		index: 'bs_logo',
		body: {
			mappings: {
				properties: {
					all_prop: {
						type: 'text',
					},
					id: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					brand: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					logo: {
						type: 'keyword',
						index: false,
					},
				},
			},
		},
	})
}
async function createItemIndex() {
	return await client.indices.create({
		index: 'bs_item',
		body: {
			mappings: {
				properties: {
					all_prop: {
						type: 'text',
					},
					id: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					brand: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					sale: {
						type: 'keyword',
						index: false,
					},
					img: {
						type: 'keyword',
						index: false,
					},
					class: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					type: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					model: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					price: {
						type: 'keyword',
						index: false,
					},
					sex: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					category: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					color: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					size: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
					photo: {
						type: 'keyword',
						index: false,
					},
					info: {
						type: 'keyword',
						copy_to: 'all_prop',
					},
				},
			},
		},
	})
}
load()
