import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Await, useLoaderData, useLocation } from 'react-router-dom'
import { itemData } from '../../comp/Index__slider_item/IndexSliderItem.props'
import { ListFilter } from '../../comp/List__filter/ListFilter'
import { ListItems } from '../../comp/List__items/ListItems'
import { ListNav } from '../../comp/List__nav/ListNav'
import { ListSort } from '../../comp/List__sort/ListSort'
import { pageIsLoad, pageRefresh } from '../../helpers/pageIsLoad'
import styles from './List.module.scss'

export function List() {
	const mainRef = useRef<HTMLDivElement>(null)
	const location = useLocation()
	const { params, items } = useLoaderData() as {
		params: string[]
		items: itemData[]
	}

	useEffect(() => {
		pageIsLoad(mainRef)
	}, [location])

	useLayoutEffect(() => {
		pageRefresh(mainRef)
	}, [location])

	return (
		<Suspense>
			<Await resolve={{ params, items }}>
				{({ params, items }: { params: string[]; items: itemData[] }) => {
					return (
						<div className={styles['list_background']}>
							<div className={'main'} ref={mainRef}>
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
					)
				}}
			</Await>
		</Suspense>
	)
}
