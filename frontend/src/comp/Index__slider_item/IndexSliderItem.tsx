import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import { useDataSlider } from '../../hooks/use-dataSlider.hook'
import { Slider } from '../Slider/Slider'
import styles from './IndexSliderItem.module.scss'
import { IndexSliderItemProps, itemData } from './IndexSliderItem.props'

export function IndexSliderItem({ name }: IndexSliderItemProps) {
	const [items] = useDataSlider<itemData>('/itemCount', '/getItemById')

	function itemSlider() {
		return items.map(el => (
			<SwiperSlide key={el.id} className={styles['indexSlider__slide']}>
				<Link to='' className={styles['indexSlider__link']}>
					<picture>
						<img src={el.img} alt='' className={styles['indexSlider__img']} />
					</picture>
					<span className={styles['indexSlider__brand']}>{el.brand}</span>
					<span className={styles['indexSlider__type']}>{el.type}</span>
					<span className={styles['indexSlider__model']}>{el.model}</span>
					<span className={styles['indexSlider__price']}>
						{el.price.toLocaleString('ru-RU') + ' ₽'}
					</span>
				</Link>
			</SwiperSlide>
		))
	}

	return (
		<Slider className={styles['indexSlider_item']} slidesPerView={5} slidesPerGroup={5} name={name}>
			{itemSlider()}
		</Slider>
	)
}
