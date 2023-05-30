import Image from 'next/image'
import LandingButton from '../LandingButton/LandingButton'
import s from './AboutBlock.module.scss'


export default function AboutBlock({img, direction}) {

  const left = {
    order: '1'
  }

  const right = {
    order: '2'
  }

  return (
    <div className={s.block}>
      <div className={s.content} style={(direction === 'right')?right:left}>
        <div className={s.text}>Наш магазин специализируется на двух ... - профессиональной косметике и отливной парфюмерии. Ex Lorem excepteur laborum ad. Mollit Lorem nisi culpa voluptate deserunt minim. Cillum non consectetur id non laborum eu veniam nostrud. Ipsum excepteur laboris minim et ullamco non ipsum veniam id laborum laborum elit dolor deserunt. Ex nisi anim ut incididunt ut dolor sit minim.
        </div>
        <LandingButton text='Подробнее'/>
      </div>
      <Image className={s.image} src={img} alt="product" style={(direction === 'right')?left:left} />
    </div>
  )
}
