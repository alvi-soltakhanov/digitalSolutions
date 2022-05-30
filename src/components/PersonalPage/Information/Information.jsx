import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Information.module.css'

const Information = () => {

    const params = useParams();

    const res = useSelector(state => state.getUsers.data)
    const user = res?.filter((item) => item.id === Number(params.id))
       

    return (
        <div className={styles.Information}>
            <tr className={styles.FirstBlock}>
                <td></td>
                <td colSpan='5'>{user[0]?.name}</td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td>{user[0]?.address.city}</td>
                <td>{user[0]?.email}</td>
                <td>{user[0]?.phone}</td>
                <td className={styles.ButtonTD}><button>Написать сообщение</button></td>
                <td className={styles.ButtonTD}><button>Предложить сходить на концерт</button></td>
                <td></td>
            </tr>
        </div>
    );
};

export default Information;