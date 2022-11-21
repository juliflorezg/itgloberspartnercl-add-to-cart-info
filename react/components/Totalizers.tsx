import React from "react";

interface Props {
  totalizers : {
    id: string
    name: string
    value: number
  }
  quantity: number
}

const Totalizers = ({totalizers: {id = "123", name = "lol", value = 6669}, quantity}: Props) => {
  console.log(id, name, value);
  return (
    <div>
      <p>Tenemos {quantity} items en tu compra</p>
      <p>Total: {value/100}</p>
    </div>
  )
}

export default Totalizers
