import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup"
import Totalizers from "./Totalizers"
import ProductGroup from "./ProductGroup"
import { generateBlockClass } from "@vtex/css-handles"
import styles from './styles.css'

const AddToCartInfo = ({blockClass}: {blockClass: string}) => {
  const classes = generateBlockClass(styles.container, blockClass)
  const productInfo = useProduct()
  const {
    orderForm: {
      items,
      totalizers
  } } = useOrderForm()

  const totalItems = items.map((item: any) => item.quantity).reduce((curr:number , acc: number) => curr + acc, 0)


  console.log("Información de mi producto:", productInfo);
  console.log("~~~~~~~~~~~Mi info de orden:::", items);
  console.log("~~~~~~~Totales:::", totalizers); // [], there are no totalizers for this orden


  return (
    // <div>Aqui se renderizará mi info jejeje</div>
    <div className={classes}>
      {/* listado de productos */}
      <ProductGroup products={items}/>
      {/* valor total */}
      <Totalizers totalizers={totalizers[0] ?? {}} quantity={totalItems}/>
      {/* acciones */}
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
