import { Link } from 'react-router-dom'
import styles from './IndexBanner.module.scss'
export function IndexBanner() {
	return (
		<Link to='' className={styles['indexBanner']}>
			<picture className={styles['indexBanner__img']}>
				<img src='/img/index-banner/puma.jpg' alt='' className={styles['indexBanner__img']} />
			</picture>
		</Link>
	)
}
