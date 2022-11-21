import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup"
import Totalizers from "./Totalizer"
import ProductGroup from "./ProductGroup"

const AddToCartInfo = () => {
  const productInfo = useProduct()
  const {
    orderForm: {
      items,
      totalizers
  } } = useOrderForm()
  console.log("Información de mi producto:", productInfo);
  console.log("~~~~~~~~~~~Mi info de orden:::", items, totalizers);


  return (
    // <div>Aqui se renderizará mi info jejeje</div>
    <>
      {/* listado de productos */}
      <ProductGroup />
      {/* valor total */}
      <Totalizers />
      {/* acciones */}
      <ButtonGroup />
    </>
  )
}

export default AddToCartInfo
