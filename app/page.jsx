import LandingFirstScreen from '@/components/LandingFirstScreen/LandingFirstScreen'
import s from './page.module.scss'
import LandingAbout from '@/components/LandingAbout/LandingAbout'
import LandingProducts from '@/components/LandingProducts/LandingProducts'

export default function Landing() {
  return (
    <div>
      <LandingFirstScreen/>
      <LandingAbout/>
      <LandingProducts/>
    </div>
  )
}
