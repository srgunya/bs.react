import { Link } from 'react-router-dom'
import { HeaderButton } from '../Header__button/HeaderButton'
import { HeaderNav } from '../Header__nav/HeaderNav'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header className='header'>
			<div className={styles['headerSale']}>
				<Link to='' className={styles['headerSale__a']}>
					SALE
				</Link>
			</div>
			<div className={styles['headerCont']}>
				<Link to='/' className={styles['HeaderLogo']}>
					<picture>
						<source
							srcSet='/img/header/Logo-big.svg'
							media={'(min-width: 1000px)'}
							className={styles['HeaderLogo__img']}
						/>
						<img src='/public/img/header/Logo-sm.svg' className={styles['HeaderLogo__img']} />
					</picture>
				</Link>
				<HeaderNav />
				<HeaderButton />
			</div>
		</header>
	)
}
