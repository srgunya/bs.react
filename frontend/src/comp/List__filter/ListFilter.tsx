import styles from './ListFilter.module.scss'
import { ListFilterProps } from './ListFilter.props'
export function ListFilter({ facets }: ListFilterProps) {
	console.log(facets)
	return <div className={styles['filter']}>Фильтр</div>
}
