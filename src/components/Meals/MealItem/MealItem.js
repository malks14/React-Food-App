import {useContext} from 'react';

import styles from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {

    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
    <li className={styles.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
    )
  
}

export default MealItem;

//.toFixed(2) es para mostrar dos digitos