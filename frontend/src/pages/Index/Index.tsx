import { IndexSex } from '../../comp/Index__sex/IndexSex'
import styles from './Index.module.scss'

export function Index() {
	return (
		<div className={styles['Index']}>
			<IndexSex />
		</div>
	)
}
