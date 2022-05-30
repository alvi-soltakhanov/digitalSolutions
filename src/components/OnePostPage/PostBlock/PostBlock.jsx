import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments, submitComment } from '../../../redux/features/getUsers';
import styles from './PostBlock.module.css'

const PostBlock = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments(Number(params.id)))
    }, [dispatch])

    const data = useSelector(state => state.getUsers.posts)
    const onePost = data.filter((item) => item.id === Number(params.id)) 

    const comments = useSelector(state => state.getUsers.comments);


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleEMail = (e) => {
        setEmail(e.target.value);
      };
    
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleComment = (e) => {
        setComment(e.target.value);
        console.log(comment);
    };


    const submit = () => {
        dispatch(submitComment(email, name, comment, onePost[0].id));
    };

    return (
        <div className={styles.PostBlock}>
            <div className={styles.Title}>
                {onePost[0]?.title}
            </div>
            <div className={styles.body}>
                {onePost[0]?.body}
            </div>

            <div className={styles.Comments}>
                <div className={styles.allComments}>
                    <div>Комментарии</div>
                    {comments.map((item) => {
                        return (
                            <>
                                <div className={styles.comment}>{item.body}</div>
                            </>
                        )
                    })}

                </div>
                <div className={styles.Write}>
                        <div>Оставить комментарий</div>
                    
                        <input 
                         type="text"
                         value={email}
                         onChange={(e) => handleEMail(e)}
                         />

                        <input 
                         type="text"
                         value={name}
                         onChange={(e) => handleName(e)}
                         />

                        <input 
                         type="text"
                         value={comment}
                         onChange={(e) => handleComment(e)}
                         />

                        <button onClick={() => submit()}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default PostBlock;