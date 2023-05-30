import s from './LandingFooter.module.scss'
import phone from '../../public/phone.svg'
import location from '../../public/location.svg'
import vk from '../../public/vk.svg'
import inst from '../../public/instagram.svg'
import telegram from '../../public/telegram.svg'
import logo from '../../public/logo.png'
import Image from 'next/image'

export default function LandingFooter() {
  return (
    <div className={s.footer} id='contacts'>
      <div className={s.content}>
        <div className={s.logo}>
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div className={s.contacts}>
          <h3 className={s.title}>Контакты</h3>
          <div className={s.phone}>
            <Image src={phone} alt="phone" width={24}/>
            <div className={s.tel}>
              <a href="tel:+79186336693" className={s.phoneNumber}>+7 (918)-633-66-93</a>
            </div>
          </div>
          <div className={s.address}>
            <Image src={location} alt="location" width={24}/>
            <p className={s.text}>ул. Тургенева, 189/6, Краснодар</p>
          </div>
        </div>
        <div className={s.socials}>
          <h3 className={s.title}>Социальные сети</h3>
          <div className={s.socialsLinks}>
            <a className={s.link} href="">
              <Image src={vk} alt="VK" width={30}/>
            </a>
            <a className={s.link} href="">
              <Image src={inst} alt="Instagram" width={30}/>
            </a>
            <a className={s.link} href="">
              <Image src={telegram} alt="Telegram" width={30}/>
            </a>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.894332123027!2d38.962810315309696!3d45.06765457909833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f045f24c71f829%3A0x750561cc998e5cf3!2z0YPQuy4g0KLRg9GA0LPQtdC90LXQstCwLCAxODkvNiwg0JrRgNCw0YHQvdC-0LTQsNGALCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUwMDc4!5e0!3m2!1sru!2sru!4v1681044700947!5m2!1sru!2sru" width="500" height="250" style={{
        borderRadius: '10px'
      }}  loading="lazy"  className={s.map}></iframe>
    </div>
  )
}
