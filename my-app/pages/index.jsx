import  { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginPage from '../component/LoginPage'
import {useState,createContext} from 'react'
import Sidebar from '../component/Sidebar'
import {useRef} from 'react'
import LoginForm from '../component/LoginForm'
const WalletCheck=createContext();
const Home=()=> {

  const [walletConnected,setWalletConnected]=useState(false);
  const [walletAddress,setWalletAddress] =useState();

  return (
    <>
      <WalletCheck.Provider value={{walletConnected,setWalletConnected,walletAddress,setWalletAddress}} >

    {
      walletConnected? <div className="wrapper">
      <div className="flex justify-around">
    <Sidebar /> 
    <h1> Feed </h1>
    <h1>Pinned Tweets</h1>
      </div>
    
    </div>:
    
    <LoginPage />
    }
   
    </WalletCheck.Provider>

    
    </>
  )
}

export default Home
export {WalletCheck}

