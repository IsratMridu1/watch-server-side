import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const[orders,setOrders]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/manageAllOrders')
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])


    return (
        <div className='container row g-0 mx-auto py-3'>
            {
                orders.map(order =>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className="card">
  <img src={order.image} className="card-img-top w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <p className="card-text">User Mail: {order.email}</p>
    <p className="card-text">Name: {order.title}</p>
    <p className="card-text">Brand: {order.brand}</p>
    <p className="card-text">Category: {order.type}</p>
    <p className="card-text">Description: {order.description}</p>
    <h5 className="card-text">Status: {order.status}</h5>
    <button className='btn btn-warning mt-3'>Update</button>

  </div>
</div>
                        
                    </div>)
            }
            
        </div>
    );
};

export default ManageAllOrders;