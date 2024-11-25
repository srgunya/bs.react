export function pageIsLoad(mainRef: React.RefObject<HTMLDivElement>) {
	setTimeout(() => {
		mainRef.current?.classList.add('lazy__img')
	}, 100)
}

export function pageRefresh(mainRef: React.RefObject<HTMLDivElement>) {
	mainRef.current?.classList.remove('lazy__img')
}
