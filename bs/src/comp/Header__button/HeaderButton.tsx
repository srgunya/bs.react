import styles from './HeaderButton.module.scss'
export function HeaderButton() {
	const header_but = [
		{ img: '/img/header/star.png' },
		{ img: '/img/header/lupa.png' },
		{ img: '/img/header/bag.png' },
		{ img: '/img/header/user.png' },
	]

	return (
		<div className={styles['headerBut']}>
			{header_but.map((el, i) => (
				<button className={styles['headerBut__button']} key={i}>
					<img src={el.img} className={styles['headerBut__img']} />
				</button>
			))}
		</div>
	)
}
