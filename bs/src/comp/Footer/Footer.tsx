import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import { FooterProps } from './Footer.props'

export function Footer() {
	const ulSocial = [
		{ h1: 'Социальные сети' },
		{ to: '', img: '/img/footer/link/vk.png', text: 'Вконтакте' },
		{ to: '', img: '/img/footer/link/youtube.png', text: 'Youtube' },
		{ to: '', img: '/img/footer/link/telegram.png', text: 'Telegram' },
		{ h1: 'Отследить заказ' },
		{ to: '', img: '/img/footer/link/telegram.png', text: 'Telegram Бот' },
		{ to: '', img: '/img/footer/link/phone.png', text: 'Заказать по телефону' },
	]
	const ulAdress = [
		{ h1: 'Интернет-магазин' },
		{ to: '', text: '+7 (495) 544-57-70' },
		{ to: '', text: '+7 (800) 775-28-34' },
		{ h1: 'Адреса магазинов' },
		{ to: '', text: 'Москва, Каретный Ряд, 8' },
		{ h1: 'Партнерам' },
		{ to: '', text: 'Партнерская программа' },
	]

	const ulHelp = [
		{ h1: 'Поддержка' },
		{ to: '', text: 'Помощь покупателю' },
		{ to: '', text: 'Доставка и оплата' },
		{ to: '', text: 'Возврат' },
		{ to: '', text: 'Программа лояльности' },
		{ to: '', text: 'Партнеры' },
	]

	const ulInfo = [
		{ h1: 'Информация' },
		{ to: '', text: 'Контакты' },
		{ to: '', text: 'Магазины' },
		{ to: '', text: 'Блог' },
		{ to: '', text: 'Вакансии' },
	]
	const icons = [
		{ img: '/img/footer/mir.svg' },
		{ img: '/img/footer/dolyame.svg' },
		{ img: '/img/footer/chastyami.svg' },
		{ img: '/img/footer/tinkoff.svg' },
		{ img: '/img/footer/plait.svg' },
		{ img: '/img/footer/sberpay.svg' },
		{ img: '/img/footer/split.svg' },
		{ img: '/img/footer/russian-post.svg' },
		{ img: '/img/footer/ems.svg' },
		{ img: '/img/footer/cdek.svg' },
	]
	const copy = [
		{ to: '', text: 'Пользовательское соглашение' },
		{ to: '', text: 'Политика о конфиденциальности' },
		{ to: '', text: 'Карта сайта' },
	]

	function createUl(ul: FooterProps) {
		return ul.map(el => {
			if (el.h1) {
				return (
					<li className={styles['footerTop__li']}>
						<h1 className={styles['footerTop__h1']}>{el.h1}</h1>
					</li>
				)
			} else if (el.img) {
				return (
					<li
						className={cn(styles['footerTop__li'], {
							[styles['footerTop__li_bot']]: el.text === 'Telegram Бот',
						})}
					>
						<Link to={el.to} className={styles['footerTop__link']}>
							<img src={el.img} alt='' className={styles['footerTop__img']} />
							{el.text}
						</Link>
					</li>
				)
			} else if (el.to != undefined && !el.img && !el.h1) {
				return (
					<li className={styles['footerTop__li']}>
						<Link
							to={el.to}
							className={cn(styles['footerTop__link_border'], styles['footerTop__link'])}
						>
							{el.text}
						</Link>
					</li>
				)
			}
		})
	}

	return (
		<footer className={styles['footer']}>
			<div className={styles['footerTop']}>
				<ul className={styles['footerTop__ul']}>{createUl(ulSocial)}</ul>
				<ul className={styles['footerTop__ul']}>{createUl(ulAdress)}</ul>
				<ul className={styles['footerTop__ul']}>{createUl(ulHelp)}</ul>
				<ul className={styles['footerTop__ul']}>{createUl(ulInfo)}</ul>
			</div>
			<div className={styles['footerBottom']}>
				<ul className={styles['footerIcons']}>
					{icons.map(el => (
						<li>
							<picture>
								<img src={el.img} alt='' />
							</picture>
						</li>
					))}
				</ul>
				<ul className={styles['footerCopy']}>
					<li className={styles['footerCopy__item']}>© BRANDSHOP, 2024</li>
					{copy.map(el => (
						<li className={styles['footerCopy__item']}>
							<Link to={el.to} className={styles['footerCopy__link']}>
								{el.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
