import React, {useState,useId, useEffect} from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactCard from './Components/ContactCard';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import ContactDetail from './Components/ContactDetail';
import {Route,Routes,Navigate,useNavigate} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const history=useNavigate()
  const [contacts, setContacts] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [])
  const email = useId();
  const name =useId();

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const addContactHandler =(user) =>{
    console.log(user,'test from app.js');
    setContacts([...contacts,user ])
    history('/contactList')
  }

  useEffect(()=>{
    console.log('Contact list')
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])




  const validate = (values) =>{
    const errors ={};
    if(!values.name){
      errors.name= "Name is required!";
    }
    if(!values.email){
      errors.email="Email is required!";
    }
    return errors;
  };

  return (
    <div className="ui container" style={{marginTop: "50px"}}>
    <Header />
    <Routes>
    <Route path='contactList' element=
      {<ContactList contacts={contacts} getContactId={removeContactHandler}/>}>
    </Route>
    <Route path='addContact' element=
      {<AddContact addContactHandler={addContactHandler}
      />}></Route>
    <Route path='contact/:id' element={<ContactDetail contacts={contacts}/>}></Route>
    <Route path='*' element={<Navigate to='addContact' replace/>}  />
    </Routes>
      
    </div>
  );
}

export default App;
