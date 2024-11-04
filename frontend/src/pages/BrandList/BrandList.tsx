import { useEffect, useRef } from 'react'
import { Footer } from '../../comp/Footer/Footer'
import { pageIsLoad } from '../../helpers/pageIsLoad'

export function Brandlist() {
	const mainRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		pageIsLoad(mainRef)
	}, [])

	return (
		<div className={'main'} ref={mainRef}>
			<div className={'cont'}></div>
			<Footer />
		</div>
	)
}
