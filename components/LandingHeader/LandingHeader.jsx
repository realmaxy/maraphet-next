'use client'

import BurgerMenu from '../BurgerMenu/BurgerMenu'
import s from './LandingHeader.module.scss'
import logo from '../../public/logo.png'
import { Link } from 'react-scroll'
import Image from 'next/image'

export default function LandingHeader() {
  return (
    <div className={s.header}>
        <Link to='home' spy={true} smooth={true} offset={50} duration={500} className={s.logo}>
          <Image src={logo} alt="logo" width={150}/>
        </Link>
        <div className={s.links}>
            <Link to='about' spy={true} smooth={true} offset={50} duration={500} className={s.link}>О нас</Link>
            <Link to='products' spy={true} smooth={true} offset={50} duration={500} className={s.link}>Продукция</Link>
            <Link to='contacts' spy={true} smooth={true} offset={50} duration={500} className={s.link}>Контакты</Link>
        </div>
        <div className={s.burger}>
          <BurgerMenu/>
        </div>
    </div>
  )
}
