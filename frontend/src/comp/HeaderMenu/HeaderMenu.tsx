import cn from 'classnames'
import { useContext } from 'react'
import { HeaderContext } from '../../context/header.context'
import { HeaderMenuBlock } from '../HeaderMenu__block/HeaderMenuBlock'
import styles from './HeaderMenu.module.scss'
import { access } from './HeaderMenu.params.access'
import { brand } from './HeaderMenu.params.brand'
import { man } from './HeaderMenu.params.man'
import { news } from './HeaderMenu.params.news'
import { sale } from './HeaderMenu.params.sale'
import { wooman } from './HeaderMenu.params.wooman'

export function HeaderMenu() {
	const { menuActive, setMenuActive } = useContext(HeaderContext)

	return (
		<div
			className={cn(styles['menuWrap'], {
				[styles['menuWrap_open']]: menuActive != '',
			})}
			onMouseLeave={() => setMenuActive('')}
		>
			<HeaderMenuBlock
				ul1={news.ul1}
				ul2={news.ul2}
				img={news.img}
				apperance='Новинки'
				menuActive={menuActive}
			/>
			<HeaderMenuBlock
				ul1={brand.ul1}
				ul2={brand.ul2}
				ul3={brand.ul3}
				ul4={brand.ul4}
				img={brand.img}
				apperance='Бренды'
				menuActive={menuActive}
			/>
			<HeaderMenuBlock
				ul1={man.ul1}
				ul2={man.ul2}
				img={man.img}
				apperance='Мужское'
				menuActive={menuActive}
			/>
			<HeaderMenuBlock
				ul1={wooman.ul1}
				ul2={wooman.ul2}
				img={wooman.img}
				apperance='Женское'
				menuActive={menuActive}
			/>
			<HeaderMenuBlock
				ul1={access.ul1}
				ul2={access.ul2}
				img={access.img}
				apperance='Аксессуары'
				menuActive={menuActive}
			/>
			<HeaderMenuBlock
				ul1={sale.ul1}
				ul2={sale.ul2}
				img={sale.img}
				apperance='Скидки'
				menuActive={menuActive}
			/>
		</div>
	)
}
