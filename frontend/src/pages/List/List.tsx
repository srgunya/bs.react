import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { itemData } from '../../comp/Index__slider_item/IndexSliderItem.props'
import { ListNav } from '../../comp/List_nav/ListNav'
import { pageIsLoad } from '../../helpers/pageIsLoad'
import { getItems, isTranslit } from '../../loaders/getDataList'

export function List() {
	const mainRef = useRef<HTMLDivElement>(null)
	const location = useLocation()
	const [params, setParams] = useState<string[]>([])
	const [items, setItems] = useState<itemData[]>([])

	const getList = useCallback(async () => {
		const params = await isTranslit(location.pathname)
		const items = await getItems(params)
		setParams(params)
		setItems(items)
	}, [location.pathname])

	useEffect(() => {
		pageIsLoad(mainRef)
	}, [])

	useEffect(() => {
		getList()
	}, [location, getList])

	return (
		<div className={'main'} ref={mainRef}>
			<div className={'cont'}>
				<div className={'listHeader'}>
					<ListNav params={params} items={items} />
				</div>
			</div>
			<Footer />
		</div>
	)
}
