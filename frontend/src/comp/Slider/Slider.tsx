import { Link } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slider.module.scss'
import { SliderProps } from './Slider.props'

export function Slider({ logos, custom_styles }: SliderProps) {
	function logoSlider() {
		return logos.map(el => (
			<SwiperSlide key={el.id} className={styles['indexSlider__slide']}>
				<Link to=''>
					<picture className={custom_styles['indexSlider__img']}>
						<img src={el.logo} alt='' className={custom_styles['indexSlider__img']} />
					</picture>
				</Link>
			</SwiperSlide>
		))
	}

	return (
		<Swiper
			spaceBetween={24}
			slidesPerView={10}
			slidesPerGroup={10}
			className={styles['indexSlider']}
			pagination={{
				el: '.' + styles['sliderNav__pagi'],
				type: 'fraction',
			}}
			navigation={{
				nextEl: '.' + styles['sliderNav__next'],
				prevEl: '.' + styles['sliderNav__prev'],
				disabledClass: styles['sliderNav__prev_disabled'],
			}}
			modules={[Pagination, Navigation]}
		>
			<div className={styles['sliderNav']}>
				<div className={styles['sliderNav__name']}>Популярные бренды</div>
				<div className={styles['sliderNav__pagi']}></div>
				<button className={styles['sliderNav__prev']}>
					<img src='/img/slider/left.png' alt='' className={styles['sliderNav__img']} />
				</button>
				<button className={styles['sliderNav__next']}>
					<img src='/img/slider/right.png' alt='' className={styles['sliderNav__img']} />
				</button>
			</div>
			{logos && logoSlider()}
		</Swiper>
	)
}
