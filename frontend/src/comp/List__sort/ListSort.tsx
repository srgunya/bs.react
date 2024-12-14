import cn from 'classnames'
import { MouseEvent, useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ListSort.module.scss'
import { ListSortProps } from './ListSort.props'

export function ListSort({ limit, sort, reRender }: ListSortProps) {
	const lengthRef = useRef<HTMLUListElement>(null)
	const sortRef = useRef<HTMLUListElement>(null)
	const firstRender = useRef(true)
	const location = useLocation()
	const [sortState, setSortState] = useState('Сортировка')

	useLayoutEffect(() => {
		if (firstRender.current) {
			firstRender.current = false
		} else {
			setSortState('Сортировка')
		}
	}, [location.pathname])

	useLayoutEffect(() => {
		setSortState(state => {
			return state == 'Сортировка' && sort == 'default' ? state : sort
		})
	}, [sort])

	function click(e: MouseEvent, ref: HTMLUListElement | null) {
		if (e.target instanceof HTMLLIElement && e.target.parentNode instanceof Element) {
			if (e.target == e.target.parentNode.childNodes[0]) {
				ref?.classList.toggle(styles['listSort__ul_active'])
				return
			}
			if (e.target.classList.contains(styles['listSort__li_active'])) {
				return
			}
			if (e.target.dataset.limit) {
				const url = new URL(window.location.href)
				url.searchParams.delete('page')
				url.searchParams.set('limit', e.target.dataset.limit)
				if (url.searchParams.get('limit') == '20') {
					url.searchParams.delete('limit')
				}
				history.pushState(null, '', url.toString())
				reRender(Number(e.target.dataset.limit), sort)
			}
			if (e.target.dataset.sort) {
				setSortState(e.target.dataset.sort)
				const url = new URL(window.location.href)
				url.searchParams.delete('page')
				url.searchParams.set('sort', e.target.dataset.sort)
				if (url.searchParams.get('sort') == 'default') {
					url.searchParams.delete('sort')
				}
				history.pushState(null, '', url.toString())
				reRender(limit, e.target.dataset.sort)
			}
		}
	}

	function open(ref: HTMLUListElement | null) {
		ref?.classList.add(styles['listSort__ul_active'])
		return
	}
	function close(ref: HTMLUListElement | null) {
		ref?.classList.remove(styles['listSort__ul_active'])
		return
	}

	return (
		<div className={styles['listSort']}>
			<ul
				className={cn(styles['listSort__ul'], styles['listSort__ul_length'])}
				onClick={e => {
					click(e, lengthRef.current)
				}}
				onMouseEnter={() => {
					open(lengthRef.current)
				}}
				onMouseLeave={() => {
					close(lengthRef.current)
				}}
				ref={lengthRef}
			>
				<li className={styles['listSort__li']}>
					Показывать: {limit}
					<img src='/img/slider/arrow.png' alt='' className={styles['listSort__img']} />
				</li>
				<li
					className={cn(styles['listSort__li'], {
						[styles['listSort__li_active']]: limit == 20,
					})}
					data-limit='20'
				>
					Показывать: 20
				</li>
				<li
					className={cn(styles['listSort__li'], {
						[styles['listSort__li_active']]: limit == 40,
					})}
					data-limit='40'
				>
					Показывать: 40
				</li>
				<li
					className={cn(styles['listSort__li'], {
						[styles['listSort__li_active']]: limit == 80,
					})}
					data-limit='80'
				>
					Показывать: 80
				</li>
			</ul>
			<ul
				className={cn(styles['listSort__ul'], styles['listSort__ul_sort'])}
				onClick={e => {
					click(e, sortRef.current)
				}}
				onMouseEnter={() => {
					open(sortRef.current)
				}}
				onMouseLeave={() => {
					close(sortRef.current)
				}}
				ref={sortRef}
			>
				<li className={styles['listSort__li']}>
					{sortState == 'Сортировка' && 'Сортировка'}
					{sortState == 'default' && 'По умолчанию'}
					{sortState == 'priceASC' && 'По возрастанию цены'}
					{sortState == 'priceDESC' && 'По убыванию цены'}
					<img src='/img/slider/arrow.png' alt='' className={styles['listSort__img']} />
				</li>
				<li
					className={cn(styles['listSort__li'], {
						[styles['listSort__li_active']]: sort == 'default',
					})}
					data-sort='default'
				>
					По умолчанию
				</li>
				<li
					className={cn(styles['listSort__li'], {
						[styles['listSort__li_active']]: sort == 'priceASC',
					})}
					data-sort='priceASC'
				>
					По возрастанию цены
				</li>
				<li
					className={cn(styles['listSort__li'], {
						[styles['listSort__li_active']]: sort == 'priceDESC',
					})}
					data-sort='priceDESC'
				>
					По убыванию цены
				</li>
			</ul>
		</div>
	)
}
