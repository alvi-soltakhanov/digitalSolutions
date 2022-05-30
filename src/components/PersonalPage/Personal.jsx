import React from 'react';
import styles from './Personal.module.css'
import Header from '../UsersPage/Header/Header'
import Information from './Information/Information';
import Posts from './Posts/Posts';
import Publication from './Publication/Publication';

const Personal = () => {
    return (
        <div className={styles.Personal}>
            <Header />
            <Information />
            <Posts />
            <Publication />
        </div>
    );
};

export default Personal;