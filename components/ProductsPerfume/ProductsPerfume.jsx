import ProductTextBlock from '../ProductTextBlock/ProductTextBlock'
import s from './ProductsPerfume.module.scss'
import perfume from '../../public/perfumeProduct.png'
import Image from 'next/image'

export default function ProductsPerfume() {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <ProductTextBlock title='Отливной парфюм' text='Ex Lorem excepteur laborum ad. Mollit Lorem nisi culpa voluptate deserunt minim. Cillum non consectetur id non laborum eu veniam nostrud.' direction='right'/>
        <div className={s.product}>
          <Image src={perfume} alt="pefume" className={s.img} width={400}/>
        </div>
      </div>
    </div>
  )
}
