import React from 'react';
import styles from './Publication.module.css'

const Publication = () => {
    return (
        <div className={styles.Publication}>
             <div className={styles.Title}>
                Публикации
            </div>

            <div className={styles.AllPublication}>

                <div className={styles.OnePost}>

                </div>
            </div>
        </div>
    );
};

export default Publication;