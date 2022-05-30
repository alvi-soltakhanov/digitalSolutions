import React from 'react';
import styles from './Request.module.css'

const Request = () => {
    return (
        <div className={styles.Request}>

            <div className={styles.OboutGroud}>
                <div className={styles.Title}>
                     О площадке
                </div>

                <div className={styles.Text}>
                    Современная площадка для проведения концертов и других мероприятий любой сложности.

                    <div className={styles.GreyText}>
                    Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения 
                    под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </div> 
                </div>
            </div>

            <div className={styles.RequestForm}>
                <div>Оставить заявку на проведение концерта</div>

                <textarea name="" id="" cols="30" rows="10">Расскажите о вашем предложении </textarea>

                <button>отправить</button>
            </div>

        </div>
    );
};

export default Request;