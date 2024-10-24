import { IndexSex } from '../../comp/Index__sex/IndexSex'
import { IndexSliderLogo } from '../../comp/Index__slider_logo/IndexSliderLogo'
import styles from './Index.module.scss'

export function Index() {
	return (
		<div className={styles['Index']}>
			<IndexSex />
			<IndexSliderLogo />
		</div>
	)
}
