import 'normalize.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom'
import { itemData } from './comp/Index__slider_item/IndexSliderItem.props'
import { logoData } from './comp/Index__slider_logo/IndexSliderLogo.props'
import { getDataSlider } from './helpers/getDataSlider'
import { Layout } from './layout/Layout/Layout'
import './main.scss'
import { Index } from './pages/Index/Index'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Index />,
				loader: async () => {
					return defer({
						logos: await getDataSlider<logoData>('/logoCount', '/getLogoById'),
						news: await getDataSlider<itemData>('/itemCount', '/getItemById'),
						pop: await getDataSlider<itemData>('/itemCount', '/getItemById'),
					})
				},
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
)
