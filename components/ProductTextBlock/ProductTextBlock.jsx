import LandingButton from '../LandingButton/LandingButton'
import s from './ProductTextBlock.module.scss'


export default function ProductTextBlock({title, text, direction}) {

  const right =  {
    marginRight: 'auto',
  }

  const left =  {
    marginLeft: 'auto',
  }

  return (
    <div className={s.block} style={(direction === 'left')?right:left}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.text}>{text}</p>
      <div className={s.button}>
        <LandingButton text='Купить'/>
      </div>
    </div>
  )
}
