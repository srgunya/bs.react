import { Outlet } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { Header } from '../../comp/Header/Header'

export function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
