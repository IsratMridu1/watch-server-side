import React, { useRef } from 'react';
import './Review.css'
import useAuth from '../Context/useAuth';

const Review = () => {
    const {user} = useAuth();
    const reviewRef = useRef();

    const addReview = (e) =>{
        e.preventDefault();

        const userReview ={
            name: user.displayName,
            email: user.email,
            comment: reviewRef.current.value
        }

        fetch('http://localhost:5000/addReview',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }



    return (
        <div>
            <form className='text-center mt-4' onSubmit={addReview}>
                <input type='text' className='w-25' defaultValue={user.displayName}/>
                <br/>
                <input type='text' className='w-25' defaultValue={user.email}/>
                <br/>
                <textarea placeholder='Enter Your Feedback Here' ref={reviewRef} className='w-50 size'></textarea>
                <br/>
                <br/>
                <button className='btn btn-primary px-3 py-2' type='submit'>Post</button>

            </form>
            
        </div>
    );
};

export default Review;