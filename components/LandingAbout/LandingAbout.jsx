import AboutBlock from '../AboutBlock/AboutBlock'
import s from './LandingAbout.module.scss'
import cosmetic from '../../public/cosmetic.png'
import perfume from '../../public/perfume.png'


export default function LandingAbout() {
  return (
    <div className={s.wrapper} id='about'>
      <div className='container'>
        <h1 className={s.title}>О нас</h1>
        <div className={s.aboutPC}>
          <AboutBlock img={cosmetic} direction='left'/>
          <AboutBlock img={perfume} direction='right'/>
        </div>
        <div className={s.aboutMob}>
          <AboutBlock img={cosmetic} direction='right'/>
          <AboutBlock img={perfume} direction='right'/>
        </div>
      </div>
    </div>
  )
}
