import React, {useRef, useState} from 'react';
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input';


const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true); //para el mensaje de error

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value; //siempre queda como string
        const enteredAmountNumber = +enteredAmount //hace que el string anterior sea numero
        if(
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1', //es el que sume de a 1?
                defaultValue: '1'
            }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;