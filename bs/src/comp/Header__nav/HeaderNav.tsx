import { MouseEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import styles from './HeaderNav.module.scss'

export function HeaderNav() {
	const [menuActive, setMenuActive] = useState<string>('')
	const nav = useRef<HTMLElement>(null)

	const header_nav = [
		{
			to: '',
			text: 'Новинки',
		},
		{
			to: '',
			text: 'Бренды',
		},
		{
			to: '',
			text: 'Мужское',
		},
		{
			to: '',
			text: 'Женское',
		},
		{
			to: '',
			text: 'Аксессуары',
		},
		{
			to: '',
			text: 'Скидки',
		},
	]

	function showMenu(e: MouseEvent) {
		if (e.target instanceof Element && e.relatedTarget instanceof Element) {
			if (e.type === 'mouseout' && !nav.current?.contains(e.relatedTarget)) {
				clearHover()
				setMenuActive('')
				return false
			}
			if (e.target.className === styles['headerNav__a']) {
				clearHover()
				e.target.parentElement?.classList.add(styles['headerNav__li_active'])
				setMenuActive(e.target.innerHTML)
			}
		}
		function clearHover() {
			nav.current?.firstChild?.childNodes.forEach(i => {
				if (i instanceof Element) {
					i.classList.remove(styles['headerNav__li_active'])
				}
			})
		}
	}

	return (
		<nav className={styles['headerNav']} onMouseOver={showMenu} onMouseOut={showMenu} ref={nav}>
			<ul className={styles['headerNav__ul']}>
				{header_nav.map(el => (
					<li className={styles['headerNav__li']} key={el.text}>
						<Link to={el.to} className={styles['headerNav__a']}>
							{el.text}
						</Link>
					</li>
				))}
			</ul>
			<HeaderMenu menuActive={menuActive} />
		</nav>
	)
}
