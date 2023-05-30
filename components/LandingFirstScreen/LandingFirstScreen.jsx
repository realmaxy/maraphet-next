import LandingButton from '../LandingButton/LandingButton'
import s from './LandingFirstScreen.module.scss'

export default function LandingFirstScreen() {

  return (
		<div className={s.firstScreen} id='home'>
			<div className='container'>
				<div className={s.content}>
					<h2 className={s.title}>Магазин профессиональной косметики и отливной парфюмерии</h2>
					<LandingButton textSize='16px' text='Подробнее'/>
				</div>
			</div>
		</div>
  )
}
