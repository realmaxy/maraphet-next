import s from './BurgerMenu.module.scss'
import { useState } from 'react'
import exit from '../../public/exit.svg'
import burger from '../../public/bars.svg'
import { Link } from 'react-scroll'
import Image from 'next/image'

export default function BurgerMenu() {

  const [active, setActive] = useState(false)

  return (
    <div className={s.menu}>
      <div className={s.icon} onClick = {() => setActive(!active)}>
        <Image src={burger} alt="burger" width={30}/>
      </div>
      <div className={(active)? [s.list, s.active].join(' ') : s.list}>
        <div className={s.exitButton} onClick= {() => setActive(!active)}>
          <Image src={exit} alt="exit" width={50}/>
        </div>
        <div className={s.links}>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500} className={s.link} onClick={()=> setActive(false)}>О нас</Link>
          <Link to='products' spy={true} smooth={true} offset={50} duration={500} className={s.link} onClick={()=> setActive(false)}>Продукция</Link>
          <Link to='contacts' spy={true} smooth={true} offset={50} duration={500} className={s.link} onClick={()=> setActive(false)}>Контакты</Link>
        </div>
      </div>
    </div>
  )	
}
