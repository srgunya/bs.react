import { itemData } from '../comp/Index__slider_item/IndexSliderItem.props'
import { filterData } from '../comp/List__filter/ListFilter.props'
import { PREFIX } from '../helpers/API'
import { translitToRus } from '../helpers/translitToRus'

export async function getParams(url: string) {
	const words = url
		.split('/')
		.filter(el => el != '')
		.map(el => el.replace(/-/gi, ' '))

	async function isTranslit(el: string) {
		const res = await fetch(`${PREFIX}/getParams/${el}`)
		const data = await res.text()
		return data
	}
	async function getData() {
		const data = await Promise.all(words.map(el => isTranslit(el)))
		return data
	}
	const count = await getData()

	const wordNotTranslit: string[] = []
	const wordIsTranslit = words.filter((el, i) =>
		count[i] == '0' && words[i] != 'sale' && words[i] != 'new'
			? true
			: wordNotTranslit.push(el) && false
	)
	const wordIsRus = wordIsTranslit.map(el => translitToRus(el))

	return [...wordIsRus, ...wordNotTranslit].sort(function (x, y) {
		return x == 'sale' ? -1 : y == 'sale' ? 1 : 0
	})
}

export async function getList(props: string[], page: number, limit: number, sort: string) {
	const res = await fetch(`${PREFIX}/getList/${props.join(' ')}/${page}/${limit}/${sort}`)
	const data: itemData[] = await res.json()
	return data
}

export async function getFilter(props: string[]) {
	const res = await fetch(`${PREFIX}/getFilter/${props.join(' ')}`)
	const data: filterData = await res.json()
	return data
}

export async function getPagination(props: string[]) {
	const res = await fetch(`${PREFIX}/getPagination/${props.join(' ')}`)
	const data = await res.text()
	return data
}
