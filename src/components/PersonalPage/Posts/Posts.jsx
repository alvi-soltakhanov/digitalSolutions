import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPostOnePerson } from '../../../redux/features/getUsers';
import styles from './Posts.module.css'

const Posts = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostOnePerson(Number(params.id)))
    }, [dispatch])

    const posts = useSelector(state => state.getUsers.posts)

    return (
        <div className={styles.PostsBlock}>
            <div className={styles.Title}>
                Посты
            </div>

            <div className={styles.AllPosts}>
                    {posts.map((item) => {
                        return (
                                <div className={styles.OnePost}>
                                <div className={styles.Name}><Link to={`Posts/${item.id}`}>{item.title}</Link></div>
                                <div className={styles.Description}>{item.body}</div>
                                </div>      
                        )})}    
            </div>
        </div>
    );
};

export default Posts;