import React,{useState,useContext,useEffect} from 'react'
import {Web3Storage} from 'web3.storage'
import {Profile} from "../pages/profile"

const LoginForm = () => {
    const userProfile=useContext(Profile);
    const profileRef=userProfile.ProfileRef;
    const [image,setImage]=useState();
    const [loading,setLoading] = useState(false);
    const [profilePicURI,setProfilePicURI] = useState("");
    const [isProfileSet,setIsProfileSet] = useState(false);
    const [form,setForm]=useState({
        Name:"Name",
        Bio:"Bio",
        ProfileImage:"Profile Image",
        Site:"Portfolio site",
    });
    function formHandler(event){
      userProfile.setForm({
        ...form,
        [event.target.name]:event.target.value
       })
       
       console.log(form);
    }
    async function uploadJsontoIpfs(object){
        const IPFSclient=makeStorageClient();
        profileRef.current=object;
        window.localStorage.setItem('user', JSON.stringify(object));
        console.log("local Storage",JSON.parse(window.localStorage.getItem('user')));
        const data=JSON.stringify(object);
        const blob=new Blob([data]);
        const file=[
            new File([blob],"profileDetails")
        ];
        setLoading(true);
        const cid=await IPFSclient.put(file);
        setLoading(false);
        console.log(cid);
        console.log(data);
    }
    async function uploadImagetoIpfs(){
        const IPFSclient=makeStorageClient();
        const blob=new Blob([image]);
        const files=[
            new File([blob],'image')
        ];
        setLoading(true);
        const cid=await IPFSclient.put(files);
        setLoading(false);
        console.log(cid);
        setProfilePicURI(cid);
        userProfile.setForm({
            ...form,
            ["ProfileImage"]:cid
           })
           setTimeout(()=>{console.log(form.ProfileImage);
           },2000)
        
    }
   useEffect(()=>{
    if(!isProfileSet){
        
    }
    const loogedInUser=" "+(window.localStorage.getItem('user'));
    
    console.log(loogedInUser);
   },[]);
    function makeStorageClient () {
        return new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY3NjNkQjMyRUFBMjM1RGRmQmJhOURkNjg0MzcyOUJCZTI0ZDk1REQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjgzNTc4MjQzMzQsIm5hbWUiOiJDcm93ZEZ1bmRpbmcifQ.br1aPfVkG01QJmobmv-Jscl5GTsMiWoy161t2CyQPvs" })
      }
    return ( 
        <div className="flex w-[100vw] flex-col	justify-center items-center">
            
            <input type="text" placeholder="Name" className="border-2	 border-black	w-[50vw] m-5" onChange={formHandler} name="Name"></input>
            <textarea type="text" placeholder="Bio" className="border-2	 border-black	w-[50vw] m-5" onChange={formHandler} name="Bio"></textarea>
            <input type="text" placeholder="Portfolio Site" className="border-2	 border-black	w-[50vw] m-5" onChange={formHandler} name="Site"></input>
            <label>Profile Image</label>
            <input type="file" placeholder="Name" className="border-2	 border-black	w-[50vw] m-5"   name="ProfileImage" onChange={(e)=>{e.preventDefault();setImage(e.target.files[0])}}></input>
            <button onClick={()=>uploadImagetoIpfs()}>Upload Profile Image</button>
            <br />
            <button onClick={()=>uploadJsontoIpfs(userProfile.form)}>Save Profile</button>
            

        </div>
    )
}

export default LoginForm
