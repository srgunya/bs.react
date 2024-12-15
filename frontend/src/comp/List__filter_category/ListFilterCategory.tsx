import cn from 'classnames'
import { useRef, useState } from 'react'
import { ListFilterSearch } from '../List__filter_search/ListFilterSearch'
import { ListFilterTitle } from '../List__filter_title/ListFilterTitle'
import styles from './ListFilterCategory.module.scss'
import { ListFilterCategoryProps } from './ListFilterCategory.props'

export function ListFilterCategory({ category, name }: ListFilterCategoryProps) {
	const ulRef = useRef<HTMLUListElement>(null)
	const [error, setError] = useState('')

	function createCategory() {
		return (
			<>
				<ListFilterTitle name={name} />
				{category.length > 7 && <ListFilterSearch ulRef={ulRef} setError={setError} />}
				<ul
					className={cn(styles['filter__ul'], {
						[styles['filter__ul_size']]: name == 'Размер',
					})}
					ref={ulRef}
				>
					{category.map(el => {
						return (
							<li key={el} className={styles['filter__li']} data-category={el}>
								<input type='checkbox' id={el} className={styles['filter__checkbox']} />
								<label htmlFor={el} className={styles['filter__label']}>
									{el}
								</label>
							</li>
						)
					})}
				</ul>
			</>
		)
	}
	return (
		<>
			{createCategory()}
			{error && (
				<div className={styles['filter__error']}>
					По запросу<span className={styles['filter__error_span']}>&nbsp;«{error}»&nbsp;</span>
					ничего не найдено
				</div>
			)}
		</>
	)
}
