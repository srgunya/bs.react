import { Outlet } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { Header } from '../../comp/Header/Header'
import { HeaderMenu } from '../../comp/HeaderMenu/HeaderMenu'
import { HeaderContextProvider } from '../../context/header.context'

export function Layout() {
	return (
		<>
			<HeaderContextProvider>
				<Header />
				<HeaderMenu />
			</HeaderContextProvider>
			<Outlet />
			<Footer />
		</>
	)
}
