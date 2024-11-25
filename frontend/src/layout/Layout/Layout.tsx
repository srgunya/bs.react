import { lazy, Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { Header } from '../../comp/Header/Header'
import { HeaderContextProvider } from '../../context/header.context'

const HeaderMenu = lazy(() => import('../../comp/HeaderMenu/HeaderMenu'))

export function Layout() {
	return (
		<>
			<ScrollRestoration />
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
