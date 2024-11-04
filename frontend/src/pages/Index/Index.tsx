import { Suspense, useEffect, useRef } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Footer } from '../../comp/Footer/Footer'
import { IndexBanner } from '../../comp/Index__banner/IndexBanner'
import { IndexInfo } from '../../comp/Index__info/IndexInfo'
import { IndexSex } from '../../comp/Index__sex/IndexSex'
import { IndexSliderItem } from '../../comp/Index__slider_item/IndexSliderItem'
import { itemData } from '../../comp/Index__slider_item/IndexSliderItem.props'
import { IndexSliderLogo } from '../../comp/Index__slider_logo/IndexSliderLogo'
import { logoData } from '../../comp/Index__slider_logo/IndexSliderLogo.props'
import { pageIsLoad } from '../../helpers/pageIsLoad'

export function Index() {
	const mainRef = useRef<HTMLDivElement>(null)
	const { logos, news, pop } = useLoaderData() as {
		logos: logoData[]
		news: itemData[]
		pop: itemData[]
	}

	useEffect(() => {
		pageIsLoad(mainRef)
	}, [])

	return (
		<Suspense>
			<Await resolve={{ logos, news, pop }}>
				{({ logos, news, pop }: { logos: logoData[]; news: itemData[]; pop: itemData[] }) => {
					return (
						<div className={'main'} ref={mainRef}>
							<div className={'cont'}>
								<IndexSex />
								<IndexSliderLogo name='Популярные бренды' logos={logos} />
								<IndexBanner />
								<IndexSliderItem name='Новые поступления' items={news} />
								<IndexInfo />
								<IndexSliderItem name='Популярные товары' items={pop} />
							</div>
							<Footer />
						</div>
					)
				}}
			</Await>
		</Suspense>
	)
}
