import React from 'react';
import { Link } from 'react-router-dom';
import images1 from "../images/images1.png";
import { useSearchParams,useParams } from "react-router-dom";


const ContactDetail = (props) => {
    let { id } = useParams();
    // console.log(props.contacts,id)
    const contact = props?.contacts.find((contact)=>contact.id === id);
    console.log(contact)
  return (
    <div className='main' style={{marginTop:'100px'}}>
        <div className='ui card centered'>
            <div className='image'>
                <img src={images1} alt ='images1' />
            </div>
            <div className='content'>
                <div className='header'>{contact?.name}</div>
                <div className='description'>{contact?.email}</div>
            </div>
        </div>
        <div className='center-div'>
            <Link to='/contactList'>
            <button className='ui button blue center' style={{marginLeft: '417px'}}>Back to Contact List</button>
            </Link>
        </div>
    </div>
  )
}

export default ContactDetail
