import s from './LandingButton.module.scss'

export default function LandingButton({textSize, text}) {
	
  const style = {
    fontSize: `${textSize}`
  }

  return (
    <button className={s.button} style ={style}>{text}</button>
  )
}
