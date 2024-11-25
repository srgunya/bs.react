import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Await, useLoaderData, useLocation } from 'react-router-dom'
import { IndexBanner } from '../../comp/Index__banner/IndexBanner'
import { IndexInfo } from '../../comp/Index__info/IndexInfo'
import { IndexSex } from '../../comp/Index__sex/IndexSex'
import { IndexSliderItem } from '../../comp/Index__slider_item/IndexSliderItem'
import { itemData } from '../../comp/Index__slider_item/IndexSliderItem.props'
import { IndexSliderLogo } from '../../comp/Index__slider_logo/IndexSliderLogo'
import { logoData } from '../../comp/Index__slider_logo/IndexSliderLogo.props'
import { pageIsLoad, pageRefresh } from '../../helpers/pageIsLoad'

export function Index() {
	const mainRef = useRef<HTMLDivElement>(null)
	const location = useLocation()
	const { logos, news, pop } = useLoaderData() as {
		logos: logoData[]
		news: itemData[]
		pop: itemData[]
	}

	useEffect(() => {
		pageIsLoad(mainRef)
	}, [location])

	useLayoutEffect(() => {
		pageRefresh(mainRef)
	}, [location])

	return (
		<Suspense>
			<Await resolve={{ logos, news, pop }}>
				{({ logos, news, pop }: { logos: logoData[]; news: itemData[]; pop: itemData[] }) => {
					return (
						<div className={'main'} ref={mainRef}>
							<IndexSex />
							<IndexSliderLogo name='Популярные бренды' logos={logos} />
							<IndexBanner />
							<IndexSliderItem name='Новые поступления' items={news} />
							<IndexInfo />
							<IndexSliderItem name='Популярные товары' items={pop} />
						</div>
					)
				}}
			</Await>
		</Suspense>
	)
}
