import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/Concert.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div><Link to={'/'}><img src={logo} alt="#" /></Link></div> 
            <div> 
                <button>Версия для слабовидящих</button>
                <button>Мой профиль</button>
            </div>
        </div>
    );
};

export default Header;