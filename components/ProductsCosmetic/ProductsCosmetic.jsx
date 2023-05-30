import React from 'react'
import ProductTextBlock from '../ProductTextBlock/ProductTextBlock'
import cosmetic from '../../public/cosmeticProduct.png'
import s from './ProductsCosmetic.module.scss'
import Image from 'next/image'


export default function ProductsCosmetic() {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <ProductTextBlock title='Профессиональная косметика' text='Ex Lorem excepteur laborum ad. Mollit Lorem nisi culpa voluptate deserunt minim. Cillum non consectetur id non laborum eu veniam nostrud.' direction='left'/>
        <div className={s.product}>
          <Image src={cosmetic} alt="cosmetic" className={s.img} width={400}/>
        </div>
      </div>
    </div>
  )
}
