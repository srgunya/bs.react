import { Link } from 'react-router-dom'
import { PREFIX } from '../../helpers/API'
import styles from './IndexSex.module.scss'

export function IndexSex() {
	const index_sex = [
		{ to: '', text: 'Мужское', img: `${PREFIX}/img/index-sex/men_home.jpg` },
		{ to: '', text: 'Женское', img: `${PREFIX}/img/index-sex/women_home.jpg` },
	]

	return (
		<div className={styles['indexSex']}>
			{index_sex.map((el, i) => (
				<Link to={el.to} className={styles['indexSex__link']} key={i}>
					<picture className={styles['indexSex__img']}>
						<img src={el.img} alt='' className={styles['indexSex__img']} />
					</picture>
					<div className={styles['indexSex__block']}>
						<span className={styles['indexSex__span']}>{el.text}</span>
					</div>
				</Link>
			))}
		</div>
	)
}
