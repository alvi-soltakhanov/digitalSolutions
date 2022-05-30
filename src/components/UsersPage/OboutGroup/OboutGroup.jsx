import React from 'react';
import styles from './OboutGroup.module.css'

const OboutGroup = () => {
    return (
        <div className={styles.OboutGroup}>
            <div className={styles.Title}>О группе</div>

            <div className={styles.Description}>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. 
            Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. 
            Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</div>
            
        </div>
    );
};

export default OboutGroup;