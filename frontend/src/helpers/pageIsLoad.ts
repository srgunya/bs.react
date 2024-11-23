export function pageIsLoad(mainRef: React.RefObject<HTMLDivElement>) {
	setTimeout(() => {
		window.scrollTo(0, Number(sessionStorage.getItem('scrollPos')))
	}, 50)
	setTimeout(() => {
		mainRef.current?.classList.add('main_isLoad')
		mainRef.current?.classList.add('lazy__img')
		sessionStorage.removeItem('scrollPos')
	}, 100)
	window.onbeforeunload = () => {
		sessionStorage.setItem('scrollPos', `${window.scrollY}`)
	}
}
