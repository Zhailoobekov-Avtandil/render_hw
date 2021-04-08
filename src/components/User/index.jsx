import React from 'react'
import './User.css'

export const User = ({data}) => {
    return <div 
    className="block" style={{backgroundColor: 'grey'}}>
        <img src={data.img} alt='' className="img"></img>
        <div>{data.full_name}</div>
        <div>{data.age}</div>
        <div>{data.country}</div>
    </div>
}