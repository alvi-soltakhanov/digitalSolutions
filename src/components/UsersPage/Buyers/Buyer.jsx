import React, { useEffect } from 'react';
import styles from './Buyer.module.css'
import {getAllUsers} from '../../../redux/features/getUsers'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Buyer = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const res = useSelector(state => state.getUsers.data)

    return (
        <div className={styles.Buyer}>
            <div className={styles.Title}>Купили билеты</div>

            <div className={styles.ListBuyers}>

                {res?.map((item) => {
                    return (
                        <div className={styles.Card}>
                            <div className={styles.CardName}>{item.name}</div>
                            <div className={styles.CardCity}>i{item.address.city}</div>
                            <Link to={`Personal/${item.id}`}><button className={styles.CardsButton}>Смотреть профиль</button></Link>
                        </div>
                    )})}

            </div>
        </div>
    );
};

export default Buyer;