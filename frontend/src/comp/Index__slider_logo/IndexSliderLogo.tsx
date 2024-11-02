import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import { PREFIX } from '../../helpers/API'
import { Slider } from '../Slider/Slider'
import styles from './IndexSliderLogo.module.scss'
import { IndexSliderLogoProps } from './IndexSliderLogo.props'

export function IndexSliderLogo({ logos, name }: IndexSliderLogoProps) {
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
