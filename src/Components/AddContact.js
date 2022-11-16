import React,{useState,useId, useEffect} from 'react'
import { useNavigate } from "react-router-dom";


function AddContact({addContactHandler}) {
    //set states
    const[formErrors, setFormErrors]= useState({});
    const[isAdd, setisAdd]= useState(false);

    
    const history=useNavigate()
    console.log('handler prop',addContactHandler)
    const id = useId()
    const [user, setUser] = useState({
        id,
        name:'',
        email:''
    });
    const addUser = (e)=>{
        e.preventDefault();

        //validation
        if(user.name === ''){
            setFormErrors({...formErrors,name:'Name Field is requierd*'})
        } else if(user.email === ''){
            setFormErrors({...formErrors,email:'Email Field is requierd*'})
        } else{
            setUser({
                id,
                name:'',
                email:''
            }); 
            addContactHandler(user)
        }
    }

    useEffect (()=>{

    },[formErrors])

  return (
    <div className='ui main' style={{marginTop: "50px"}}>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={(e)=>addUser(e)}>
        <p style={{color:'red'}}>{formErrors.name}</p>
            <div className='field'>
                <label>Name</label>
                <input type="text" 
                name="name" id="name"
                placeholder= "Name"
                value={user.name}
                onChange={(e) => setUser({...user,name: e.target.value})}/>
            </div>
            <p style={{color:'red'}}>{formErrors.email}</p>
            <div className='field'>
                <label>Email</label>
                <input type="text" name="email" placeholder= "Email" id="email" 
                value={user.email}
                onChange={(e) => setUser({...user,email: e.target.value})} />
            </div>
            <button className='ui button blue' type='submit'>Add</button>
        </form>
      </div>
  )
}

export default AddContact


