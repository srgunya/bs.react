import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../comp/Header/Header'
import { HeaderContextProvider } from '../../context/header.context'

const HeaderMenu = lazy(() => import('../../comp/HeaderMenu/HeaderMenu'))

export function Layout() {
	return (
		<>
			<HeaderContextProvider>
				<Header />
				<Suspense>
					<HeaderMenu />
				</Suspense>
			</HeaderContextProvider>
			<Outlet />
		</>
	)
}
