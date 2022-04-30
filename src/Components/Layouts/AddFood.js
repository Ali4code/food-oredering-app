import React,{ useContext, useState } from 'react'
import Classes from './AddFood.module.css'
import Input from '../UI/Input'
import CartContext from '../../store/cart-context'

function AddFood(props) {
    const cartCntx = useContext(CartContext)
    const [inputValue,setInputValue] =useState(1)
    const inputChange = (event) => {
        setInputValue(event.target.value)
    }
    
    const addFoodClickHandler = () => {
     cartCntx.addFood(props.id,inputValue)
    }
    return (
        <div>
            <div className={Classes.container}>
                <Input input={{
                    id: 'amount'+ props.id,
                    type : "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    width: '25px',
                    height: '20px',
                    margin: '10px',
                    label: "Amount",
                    value: inputValue,
                    onChange: inputChange
                }} />
            </div>
            <button className={Classes.btn} onClick={addFoodClickHandler}>+ Add</button>
        </div>

    )
}

export default AddFood