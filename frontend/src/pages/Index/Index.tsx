import { IndexBanner } from '../../comp/Index__banner/IndexBanner'
import { IndexInfo } from '../../comp/Index__info/IndexInfo'
import { IndexSex } from '../../comp/Index__sex/IndexSex'
import { IndexSliderItem } from '../../comp/Index__slider_item/IndexSliderItem'
import { IndexSliderLogo } from '../../comp/Index__slider_logo/IndexSliderLogo'
import styles from './Index.module.scss'

export function Index() {
	return (
		<div className={styles['Index']}>
			<IndexSex />
			<IndexSliderLogo name='Популярные бренды' />
			<IndexBanner />
			<IndexSliderItem name='Новые поступления' />
			<IndexInfo />
			<IndexSliderItem name='Популярные товары' />
		</div>
	)
}
