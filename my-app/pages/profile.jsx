import React,{useRef,createContext,useEffect,useState} from 'react'
import LoginForm from '../component/LoginForm'
const Profile=createContext();
const profile = () => {
    const [form,setForm]=useState({
        Name:"Name",
        Bio:"Bio",
        ProfileImage:"Profile Image",
        Site:"Portfolio site",
    });
    const ProfileRef=useRef();
    useEffect(()=>{
        const loogedInUser=window.localStorage.getItem('user');
        setForm((window.localStorage.getItem('user')));
    },[]);
    useEffect(()=>{
        window.localStorage.setItem('user',form);
    },[form]);
    return (
        <Profile.Provider value={{ProfileRef,form,setForm}}>
        <div className="text-center">
        Profile 
        <LoginForm />
        </div>
        </Profile.Provider>
     
    )
}

export default profile
export {Profile}
