import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './IndexInfo.module.scss'

export function IndexInfo() {
	const info = [
		{
			to: '',
			img: '/img/index-info/blog1.jpg',
			h1: 'Новые поступления',
			text: 'Diadora x BRANDSHOP',
			link: 'Смотреть',
		},
		{
			to: '',
			img: '/img/index-info/blog2.jpg',
			h1: 'Sneakerhead',
			text: 'Сonverse x Naturally Digital Chuck 70 High',
			link: 'Подробнее',
		},
		{
			to: '',
			img: '/img/index-info/blog3.jpg',
			h1: 'Новая коллекция',
			text: 'Diadora - круто, стильно, молодёжно',
			link: 'Подробнее',
		},
		{
			to: '',
			img: '/img/index-info/blog4.jpg',
			h1: 'Рюкзаки',
			text: 'MAZI UNTITLED - воплощение стиля и функциональности',
			link: 'Подробнее',
		},
		{
			to: '',
			img: '/img/index-info/blog5.jpg',
			h1: 'Ботинки',
			text: 'KLEMAN: мануфактура с богатым наследием',
			link: 'Подробнее',
		},
	]

	return (
		<div className={styles['IndexInfo']}>
			{info.map((el, i) => (
				<div
					className={cn(styles['IndexInfo__item'], {
						[styles['IndexInfo__item_first']]: i === 0,
					})}
				>
					<Link to={el.to} className={styles['IndexInfo__link']}>
						<picture className={styles['IndexInfo__img']}>
							<img src={el.img} alt='' className={styles['IndexInfo__img']} />
						</picture>
					</Link>
					<div className={styles['IndexInfo__block']}>
						<Link to={el.to}>
							<h1 className={styles['IndexInfo__h1']}>{el.h1}</h1>
						</Link>
						<p className={styles['IndexInfo__p']}>{el.text}</p>
						<Link to={el.to}>
							<span className={styles['IndexInfo__span']}>{el.link}</span>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}
