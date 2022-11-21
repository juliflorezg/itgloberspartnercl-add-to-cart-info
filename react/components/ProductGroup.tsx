import React from "react";

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
  products: any[]
}

// const ProductGroup:React.FC<Props> = (products) =>{
const ProductGroup = ({products}: Props) =>{
  console.log("Mis productos en ProductGroup::::", products)

  return (
    <div>Mi listado de productos

    {products.map((product: any, index: number) => (
      <div key={index}>
        <div>
          <img src={product.imageUrls.at1x} alt={`imagen para producto ${product.name}`} />
        </div>
        <p>{product.name}</p>
        <p>{product.id}</p>
        <p>${product.price / 100}</p>
        <p>Cant:{product.quantity}</p>
      </div>
    ))}

    </div>

  )


}


export default ProductGroup
