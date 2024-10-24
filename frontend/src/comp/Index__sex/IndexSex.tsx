import { Link } from 'react-router-dom'
import styles from './IndexSex.module.scss'

export function IndexSex() {
	const index_sex = [
		{ to: '', text: 'Мужское', img: '/img/index-sex/men_home.jpg' },
		{ to: '', text: 'Женское', img: '/img/index-sex/women_home.jpg' },
	]

	return (
		<div className={styles['indexSex']}>
			{index_sex.map((el, i) => (
				<Link to={el.to} className={styles['indexSex__link']} key={i}>
					<picture>
						<img src={el.img} alt='' className={styles['indexSex__img']} />
					</picture>
					<span className={styles['indexSex__span']}>{el.text}</span>
				</Link>
			))}
		</div>
	)
}
