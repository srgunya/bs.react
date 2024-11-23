import { Link } from 'react-router-dom'
import { PREFIX } from '../../helpers/API'
import styles from './IndexBanner.module.scss'
export function IndexBanner() {
	return (
		<Link to='' className={styles['indexBanner']}>
			<picture className={styles['indexBanner__pic'] + ' wrap_tr'}>
				<img
					src={PREFIX + '/img/index-banner/puma.jpg'}
					alt=''
					className={styles['indexBanner__img'] + ' img_tr'}
				/>
			</picture>
		</Link>
	)
}
