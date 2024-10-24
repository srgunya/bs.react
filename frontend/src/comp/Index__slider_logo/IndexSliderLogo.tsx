import 'swiper/css'
import { useDataSlider } from '../../hooks/use-dataSlider.hook'
import { Slider } from '../Slider/Slider'
import styles from './IndexSliderLogo.module.scss'
import { IndexSliderLogoProps } from './IndexSliderLogo.props'

export function IndexSliderLogo() {
	const [logos] = useDataSlider<IndexSliderLogoProps>('/logoCount', '/getLogoById')

	return <Slider logos={logos} custom_styles={styles} />
}
