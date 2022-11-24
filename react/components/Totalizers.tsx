import React from "react";
import {generateBlockClass} from "@vtex/css-handles"
import styles from './styles.css'
interface Props {
  totalizers : {
    id: string
    name: string
    value: number
  }
  quantity: number
  blockClass: string
}

const Totalizers = ({totalizers: {id = "123", name = "lol", value}, quantity, blockClass}: Props) => {
  const cartInfoTotalizersClasses = generateBlockClass(styles['cartInfoContainer__totalizersContainer'], blockClass)

  console.log(id, name, value);
  return (
    <div className={cartInfoTotalizersClasses}>
      <p>Tienes {quantity} productos en tu compra</p>

      {value && <p>Total: {value/100 }</p> }
      {/* <p>Total: {value ? value/100 : ""}</p> */}
    </div>
  )
}

export default Totalizers
