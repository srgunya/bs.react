import { Suspense, useLayoutEffect, useState } from 'react'
import { Await, useLoaderData, useSearchParams } from 'react-router-dom'
import { itemData } from '../../comp/Index__slider_item/IndexSliderItem.props'
import { ListFilter } from '../../comp/List__filter/ListFilter'
import { ListItems } from '../../comp/List__items/ListItems'
import { ListNav } from '../../comp/List__nav/ListNav'
import { ListPagination } from '../../comp/List__pagination/ListPagination'
import { ListSort } from '../../comp/List__sort/ListSort'
import { useLoadPage } from '../../hooks/use-loadPage.hook'
import { getItems } from '../../loaders/getDataList'
import styles from './List.module.scss'

export function List() {
	const { params, items, pagination, page, limit, sort } = useLoaderData() as {
		params: string[]
		items: itemData[]
		pagination: string
		page: number
		limit: number
		sort: string
	}
	const [search] = useSearchParams()
	const mainRef = useLoadPage(search)
	const [itemsData, setItemsData] = useState(items)
	const [more, setMore] = useState<itemData[]>([])
	const [searchParams, setSearchParams] = useState({ page: page, limit: limit, sort: sort })

	useLayoutEffect(() => {
		mainRef.current?.classList.remove('list_loading')
		window.scrollTo(0, 0)
		setSearchParams({ page: page, limit: limit, sort: sort })
		setMore([])
		setItemsData(items)
	}, [params, items, pagination, page, limit, sort, mainRef])

	async function loadMoreData() {
		mainRef.current?.classList.add('list_loading')
		await new Promise(resolve => {
			setTimeout(() => {
				getItems(params, searchParams.page + 1, searchParams.limit, searchParams.sort).then(
					data => {
						if (more.length > 0) {
							setItemsData(state => [...state, ...more])
						}
						setMore(data)
						setSearchParams(state => ({ ...state, page: state.page + 1 }))
						setTimeout(() => {
							mainRef.current?.classList.remove('list_loading')
						}, 1)
						resolve(data)
					}
				)
			}, 300)
		})
	}

	async function reRender(limit: number, sort: string) {
		mainRef.current?.classList.add('list_loading')
		await new Promise(resolve => {
			setTimeout(() => {
				getItems(params, 1, limit, sort).then(data => {
					setItemsData(data)
					setMore([])
					setSearchParams({ page: 1, limit: limit, sort: sort })
					setTimeout(() => {
						mainRef.current?.classList.remove('list_loading')
					}, 1)
					resolve(data)
				})
			}, 300)
		})
	}

	return (
		<Suspense>
			<Await resolve={{ params, items, pagination }}>
				{({
					params,
					items,
					pagination,
				}: {
					params: string[]
					items: itemData[]
					pagination: string
				}) => {
					return (
						<div className={styles['list_background']}>
							<div className={'main'} ref={mainRef}>
								<div className={styles['listHeader']}>
									<ListNav params={params} items={items} />
									<ListSort
										limit={searchParams.limit}
										sort={searchParams.sort}
										reRender={reRender}
									/>
								</div>
								<div className={styles['catalog']}>
									<ListFilter />
									<ListItems items={itemsData} more={more} />
									<ListPagination
										pagination={pagination}
										searchParams={searchParams}
										loadMoreData={loadMoreData}
									/>
								</div>
							</div>
						</div>
					)
				}}
			</Await>
		</Suspense>
	)
}
