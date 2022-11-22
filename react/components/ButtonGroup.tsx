import React from "react";
import {generateBlockClass} from '@vtex/css-handles'
import styles from './styles.css'
// import { useMinicartDispatch } from 'vtex.minicart/MinicartContext'
// import { MinicartIconButton } from 'vtex.minicart'
// import { MinicartIconButton } from 'vtex.minicart'


interface Props {
  blockClass: string
}

const ButtonGroup:React.FC<Props> = ({blockClass}) => {
  // const dispatch = useMinicartDispatch()
  // console.log(dispatch);
  // console.log( useMinicartDispatch ); // ! Cannot read properties of undefined (reading 'useMinicartDispatch')
  // console.log( MinicartIconButton ); // ! "Component not found: vtex.minicart@2.63.5/MinicartIconButton"

  const buttonGroupClasses = generateBlockClass(styles['cartInfoContainer__buttonsContainer'], blockClass)
  const buttonContinueClasses = generateBlockClass(styles['buttonsContainer__continue-btn'], blockClass)
  const buttonCartClasses = generateBlockClass(styles['buttonsContainer__cart-btn'], blockClass)

  return (
    <>
      {/* <div>
        <a href="/">CHECK OUT</a>
      </div> */}
      <div className={buttonGroupClasses}>
        <button className={buttonContinueClasses}>CONTINÚA COMPRANDO</button>
        <a className={buttonCartClasses} href="/checkout">VER TU BOLSA</a>
      </div>
    </>
  )
}

export default ButtonGroup
