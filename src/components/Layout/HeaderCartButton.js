import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
    
    const cartCtx = useContext(CartContext);


    const {items} = cartCtx;//object restructuring es para obteneer los items del cart, asi solo los items del context quedn en la depetendencia

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    const btnClasses = `${styles.button} ${btnIsHighLighted ?  styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);
        return  () => {
            clearTimeout(timer);
        };//cleanup function
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span className={styles.badge}>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;