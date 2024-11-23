import cn from 'classnames'
import { Link } from 'react-router-dom'
import { PREFIX } from '../../helpers/API'
import styles from './IndexInfo.module.scss'
import { info } from './IndexInfo.params'

export function IndexInfo() {
	return (
		<div className={styles['IndexInfo']}>
			{info.map((el, i) => (
				<div
					className={cn(styles['IndexInfo__item'], {
						[styles['IndexInfo__item_first']]: i === 0,
					})}
					key={i}
				>
					<Link to={el.to} className={styles['IndexInfo__link']}>
						<picture
							className={cn('wrap_tr', {
								[styles['IndexInfo__pic_big']]: i == 0,
								[styles['IndexInfo__pic_smal']]: i != 0,
							})}
						>
							<img src={PREFIX + el.img} alt='' className={styles['IndexInfo__img'] + ' img_tr'} />
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
