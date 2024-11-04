import { useCallback, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { pageIsLoad } from '../../helpers/pageIsLoad'
import { getItems, isTranslit } from '../../loaders/getDataList'

export function List() {
	const mainRef = useRef<HTMLDivElement>(null)
	const location = useLocation()

	const getList = useCallback(async () => {
		const params = await isTranslit(location.pathname)
		const items = await getItems(params)
		console.log(params)
		console.log(items)
	}, [location.pathname])

	useEffect(() => {
		pageIsLoad(mainRef)
	}, [])

	useEffect(() => {
		getList()
	}, [location, getList])

	return (
		<div className={'main'} ref={mainRef}>
			<div className={'cont'}>sddasdasdas</div>
			<Footer />
		</div>
	)
}
