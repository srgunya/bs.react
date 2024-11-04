import cn from 'classnames'
import { ReactNode, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PREFIX } from '../../helpers/API'
import styles from './HeaderMenuBlock.module.scss'
import { HeaderMenuBlockProps } from './HeaderMenuBlock.props'

export function HeaderMenuBlock({
	ul1,
	ul2,
	ul3,
	ul4,
	img,
	apperance,
	menuActive,
}: HeaderMenuBlockProps) {
	const menuNav = useRef<HTMLDivElement>(null)

	useEffect(() => {
		let timerId: number
		if (menuActive === apperance) {
			menuNav.current?.classList.add(styles['menu_active'], 'menu_active')
		} else {
			if (menuActive === '') {
				timerId = setTimeout(() => {
					menuNav.current?.classList.remove(styles['menu_active'], 'menu_active')
				}, 250)
			} else {
				menuNav.current?.classList.remove(styles['menu_active'], 'menu_active')
			}
		}
		return () => clearTimeout(timerId)
	}, [menuActive, apperance])

	function createUl(ul: typeof ul1): ReactNode {
		return (
			<ul className={styles['menuNav__ul']}>
				{ul.map((el, i, arr) => (
					<li
						key={el.text}
						className={cn('menuNav__li', {
							[styles['menuNav__li_capital']]: arr.length === 14 && i === 0,
							[styles['menuNav__li_brand']]: apperance === 'Бренды' && arr.length < 14 && i === 0,
						})}
					>
						<Link
							to={el.to}
							className={cn(styles['menuNav__a'], {
								[styles['menuNav__a_capital']]: arr.length === 14 && i === 0,
							})}
						>
							{el.text}
						</Link>
					</li>
				))}
			</ul>
		)
	}
	function createImg(): ReactNode {
		return img.map(i => (
			<Link
				to={i.to}
				key={i.text}
				className={cn(styles['menuImg__a'], {
					[styles['menuImg__a_brand']]: apperance === 'Бренды',
					[styles['menuImg__a_sex']]: apperance === 'Мужское' || apperance === 'Женское',
				})}
			>
				<picture className={styles['menuImg__img']}>
					<img src={PREFIX + i.img} className={styles['menuImg__img']} />
				</picture>
				<span className={styles['menuImg__span']}>{i.text}</span>
			</Link>
		))
	}
	return (
		<div className={styles['menu']} ref={menuNav}>
			<div
				className={cn(styles['menuNav'], {
					[styles['menuNav_brand']]: apperance === 'Бренды',
				})}
			>
				{createUl(ul1)}
				{createUl(ul2)}
				{ul3 && createUl(ul3)}
				{ul4 && createUl(ul4)}
			</div>
			<div
				className={cn(styles['menuImg'], {
					[styles['menuImg_brand']]: apperance === 'Бренды',
				})}
			>
				{createImg()}
			</div>
		</div>
	)
}
