import React from 'react';
import Header from '../UsersPage/Header/Header';
import styles from './Post.module.css'
import PostBlock from './PostBlock/PostBlock';

const Post = () => {
    return (
        <div className={styles.Post}>
            <Header />
            <PostBlock />
        </div>
    );
};

export default Post;