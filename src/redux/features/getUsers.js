const initialState = {
    data: [],
    posts: [],
    comments: []
}


export const getUsers = (state = initialState, action) => {
    switch (action.type) {

        case "fulfilled-allUsers": 
        return {
            ...state,
            data: action.payload,
        }

        case "fulfilled-posts": 
        return {
            ...state,
            posts: action.payload,
        }

        case "fulfilled-comments": 
        return {
            ...state,
            comments: action.payload,
        }

        default: 
            return state;
    }
}

export const getAllUsers = () => {
    return async(dispatch) => {
        try {
            const res  = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json();
            dispatch({ type: "fulfilled-allUsers", payload: data });
        } catch (e) {
            console.log(e)
        }
    }
}

export const getPostOnePerson = (id) => {
    return async(dispatch) => {
        try {
            const res  = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            const data = await res.json();
            dispatch({ type: "fulfilled-posts", payload: data });
        } catch (e) {
            console.log(e)
        }
    }
}

export const getComments = (id) => {
    return async(dispatch) => {
        try {
            const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            const data = await res.json();
            dispatch({ type: "fulfilled-comments", payload: data });
        } catch (e) {
            console.log(e)
        }
    }
}


export const submitComment = (email, name, comment, onePost) => {
    return async (dispatch) => {
        dispatch({ type: "fullfield-postComment" });
        console.log(onePost)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${onePost}/comments`, {
            method: 'POST',
            body: JSON.stringify({
              email: email,
              name: name,
              comment: comment,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }        
        });
        const json = await res.json();
        console.log(json);
      };
}

