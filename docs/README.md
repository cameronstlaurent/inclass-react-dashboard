 
 

 

 

 

 # React Firebase Authentication
 



## Pre Flight Check List
Install [react-toastify](https://fkhadra.github.io/react-toastify/introduction) we will use this for error handeling in our form.
```bash
   npm i react-toastify
```
<br/>
Check your package.json file and make sure that following packages are installed.

```bash   
   "firebase": "^9.6.7",
   "react-router-dom": "^6.2.1",
   "react-toastify": "^8.2.0",
```
<br/>
Check your authentication service in the firebase dashboard. Make sure you have created the following user and have enabled the sign in with email and password message. 

```
   user: jim@home.com
   password: 123456
```
<br/>

## Adding Toast Messages
To add toast message you need to download and install react-toastify.
```bash
   npm install react-toastify
```
Next import the ToastContainer and the toast control component into the LoginPage.js
```jsx
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```
Then define a notify function this function will be called from the login form Submit Event Handler. 

```jsx
  const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
  
    });
```

Login form Event Handler function
```jsx
function onHandleSignIn (e){
         e.preventDefault()
         signInWithEmailAndPassword(auth, email,password)
         .then(res=>{
             notifySuccess("done")
         })
         .catch(error=>{
             
           notifyError(error)
         })
         

    }
```



 

 

 

 