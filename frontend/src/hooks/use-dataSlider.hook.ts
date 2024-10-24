import { useCallback, useEffect, useState } from 'react'
import { PREFIX } from '../helpers/API'

export function useDataSlider<T>(url_count: string, url_id: string) {
	const [data, setData] = useState<T[]>([])

	const getData = useCallback(async () => {
		const count = await getCount()
		async function getCount() {
			const res = await fetch(`${PREFIX + url_count}`)
			const data = await res.text()
			return data
		}

		const ids = Array<number>(40)
		for (let i = 0; i < ids.length; ) {
			const rndm = getRandomInt()
			if (ids.indexOf(rndm) == -1) {
				ids[i] = rndm
				i++
			}
		}
		function getRandomInt() {
			const min = 1
			const max = Number(count)
			return Math.floor(Math.random() * (max - min + 1)) + min
		}

		async function getById(id: number) {
			const res = await fetch(`${PREFIX + url_id}/${id}`)
			const data: T = await res.json()
			return data
		}
		async function getAllData() {
			const data = await Promise.all(ids.map(id => getById(id)))
			return data
		}
		const allData = await getAllData()
		setData(allData)
	}, [url_count, url_id])

	useEffect(() => {
		getData()
	}, [getData])

	return [data]
}
