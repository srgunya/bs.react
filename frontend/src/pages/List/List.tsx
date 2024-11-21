import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { itemData } from '../../comp/Index__slider_item/IndexSliderItem.props'
import { ListFilter } from '../../comp/List__filter/ListFilter'
import { ListItems } from '../../comp/List__items/ListItems'
import { ListNav } from '../../comp/List__nav/ListNav'
import { ListSort } from '../../comp/List__sort/ListSort'
import { pageIsLoad } from '../../helpers/pageIsLoad'
import { getItems, isTranslit } from '../../loaders/getDataList'
import styles from './List.module.scss'

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
			<div className={styles['listWrap']}>
				<div className={'cont'}>
					<div className={styles['listHeader']}>
						<ListNav params={params} items={items} />
						<ListSort />
					</div>
					<div className={styles['catalog']}>
						<ListFilter />
						<ListItems items={items} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
