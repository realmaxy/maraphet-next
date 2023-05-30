import ProductsCosmetic from '../ProductsCosmetic/ProductsCosmetic'
import ProductsPerfume from '../ProductsPerfume/ProductsPerfume'
import s from './LandingProducts.module.scss'

export default function LandingProducts() {
  return (
    <div className={s.texture}>
      <div className={s.wrapper} id='products'>
        <ProductsCosmetic/>
        <ProductsPerfume/>
      </div>
    </div>
  )
}
