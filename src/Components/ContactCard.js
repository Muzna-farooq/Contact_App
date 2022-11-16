import React from 'react';
import { Link } from 'react-router-dom';
import user from "../images/user.png"

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
  return (
    <div>
      <div className='item' style={{borderBottom: "1px solid rgba(34,36,38,.15)"}}>
        <div className='img_user' style={{display: "flex"}}>
        <img className='ui avatar image' src={user} alt="user" />
                <div className='content'>
                 {console.log('the id',id)}
                  <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                    </Link>
                </div>
                </div>
                <i className='trash alternate outline icon'
                style={{color: "red", marginRight: "auto", width: "100%", textAlign: "right"}}
                onClick= {()=>props.clickHandler(id)}
                ></i>
            </div>
    </div>
  )
}

export default ContactCard
