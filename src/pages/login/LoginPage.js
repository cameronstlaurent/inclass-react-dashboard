import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import {BiMessageSquareError} from 'react-icons/bi';
import {signInWithEmailAndPassword} from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from 'libs/firebase';
import { LoginPageStyles, FormControl } from './styles';
import { Label } from 'ui/forms';
import { Input } from 'ui/forms';
import { SubmitButton } from 'ui/buttons';

function LoginPage(props) {
    
    // start with state declarations
    const navigator = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon:<BiMessageSquareError/>
  
    });

    function onHandleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCrediental=>{
            // move dashboard page
            // useNavigate() react router
            navigator("dashboard")
        })
        .catch(error=>{
            
            notify(error)
        })
    }
    // console.log(auth)
    return(
    <LoginPageStyles>
        <ToastContainer/>
        <header>
            <h1>Welcome Please Login In</h1>
        </header>
        <form onSubmit={onHandleSignIn}>
            <FormControl>
                <Label>Email</Label>
                <Input type="text" placeholder="janedoe@gmail.com" onChange={(e)=> setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <Label>Password</Label>
                <Input type="text" placeholder="account password" onChange={(e)=> setPassword(e.target.value)}/>
            </FormControl>
            <FormControl>
            <SubmitButton>
                Sign into dashboard
            </SubmitButton>
            </FormControl>
        </form>
    </LoginPageStyles>
    
    )
    
    }
 
 export default LoginPage 

