import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { Header } from '../../comp/Header/Header'
import { HeaderContextProvider } from '../../context/header.context'

export function Layout() {
	const HeaderMenu = lazy(() => import('../../comp/HeaderMenu/HeaderMenu'))
	return (
		<>
			<HeaderContextProvider>
				<Header />
				<Suspense>
					<HeaderMenu />
				</Suspense>
			</HeaderContextProvider>
			<Outlet />
			<Footer />
		</>
	)
}
