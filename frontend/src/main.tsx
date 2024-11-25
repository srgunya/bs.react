import 'normalize.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom'
import { itemData } from './comp/Index__slider_item/IndexSliderItem.props'
import { logoData } from './comp/Index__slider_logo/IndexSliderLogo.props'
import { Layout } from './layout/Layout/Layout'
import { getItems, isTranslit } from './loaders/getDataList'
import { getDataSlider } from './loaders/getDataSlider'
import './main.scss'
import { Brandlist } from './pages/BrandList/BrandList'
import { Index } from './pages/Index/Index'
import { List } from './pages/List/List'

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
			{
				path: '/brandlist',
				element: <Brandlist />,
			},
			{
				path: '*',
				element: <List />,
				loader: async params => {
					return defer({
						params: await new Promise(resolve => {
							setTimeout(() => {
								isTranslit(typeof params.params['*'] == 'string' ? params.params['*'] : '').then(
									data => resolve(data)
								)
							}, 300)
						}),
						items: await getItems(
							await isTranslit(typeof params.params['*'] == 'string' ? params.params['*'] : '')
						),
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
