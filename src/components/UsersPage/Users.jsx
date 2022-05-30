import React from 'react';
import styles from './Users.module.css'
import Banner from './Banner/Banner';
import Buyer from './Buyers/Buyer';
import OboutGroup from './OboutGroup/OboutGroup';
import Request from './RequestBlock/Request';
import Header from './Header/Header';

const Users = () => {
    return (
        <div className={styles.Users}>
            <div className={styles.Wrapper}>
            <Header />
            </div>
            <Banner />
            <Buyer />
            <Request />
            <OboutGroup />
        </div>
    );
};

export default Users;