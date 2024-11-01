import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import { PREFIX } from '../../helpers/API'
import { useDataSlider } from '../../hooks/use-dataSlider.hook'
import { Slider } from '../Slider/Slider'
import styles from './IndexSliderLogo.module.scss'
import { IndexSliderLogoProps, logoData } from './IndexSliderLogo.props'

export function IndexSliderLogo({ name }: IndexSliderLogoProps) {
	const [logos] = useDataSlider<logoData>('/logoCount', '/getLogoById')

	function logoSlider() {
		return logos.map(el => (
			<SwiperSlide key={el.id} className={styles['indexSlider__slide']}>
				<Link to=''>
					<picture className={styles['indexSlider__img']}>
						<img src={PREFIX + el.logo} alt='' className={styles['indexSlider__img']} />
					</picture>
				</Link>
			</SwiperSlide>
		))
	}

	return (
		<Slider
			className={styles['indexSlider_logo']}
			slidesPerView={10}
			slidesPerGroup={10}
			name={name}
		>
			{logoSlider()}
		</Slider>
	)
}
