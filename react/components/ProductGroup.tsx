import React from "react";
import { generateBlockClass} from "@vtex/css-handles"
import styles from "./styles.css"

// interface Props {
//   products: items[]
// }

// type items = {
//   additionalInfo: {
//     brandName: string
//     __typeName: string
//   }
//   id: string
//   price: number
//   sellingPrice: number
// }

type Props = {
  products: any[],
  blockClass?: string
}

// const ProductGroup:React.FC<Props> = (products) =>{
const ProductGroup = ({products, blockClass=""}: Props) =>{
  const titleClasses = generateBlockClass(styles['cartInfoContainer__title'], blockClass)
  const productClasses = generateBlockClass(styles['cartInfoContainer__productContainer'], blockClass)
  const imageContainerClasses = generateBlockClass(styles['productContainer__img-container'], blockClass)
  const infoContainerClasses = generateBlockClass(styles['productContainer__info-container'], blockClass)
  const productNameClasses = generateBlockClass(styles['productContainer__info-container--product-name'], blockClass)
  const productIdClasses = generateBlockClass(styles['productContainer__info-container--product-id'], blockClass)
  const productUnitPriceClasses = generateBlockClass(styles['productContainer__info-container--product-unit-price'], blockClass)
  const productUnitPriceAmountClasses = generateBlockClass(styles['info-container__product-price-amount'], blockClass)
  const productQuantityClasses = generateBlockClass(styles['productContainer__info-container--product-quantity'], blockClass)

  console.log("Mis productos en ProductGroup::::", products)
  console.log("classes in product group::;;", productClasses)

  return (
    <div>
      <span className={titleClasses}>
        Tu lista de productos
      </span>

    {products.map((product: any, index: number) => (
      <div key={index} className={productClasses}>
      {/* <div key={index} > */}
        <div className={imageContainerClasses}>
          <img src={product.imageUrls.at1x} alt={`imagen para producto ${product.name}`} />
        </div>
        <div className={infoContainerClasses}>
          <p className={productNameClasses}>{product.name}</p>
          <p className={productIdClasses}>id del producto: {product.id}</p>
          <p className={productUnitPriceClasses}>
            Precio unitario:
            <span className={productUnitPriceAmountClasses}>${product.price / 100}</span>
          </p>
          <p className={productQuantityClasses}>Cantidad: {product.quantity}</p>
        </div>
      </div>
    ))}

    </div>

  )


}


export default ProductGroup
