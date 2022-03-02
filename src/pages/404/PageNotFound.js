 import React from 'react'
 import {Link} from "react-router-dom"
 function PageNotFound  (props){
     return( 
         <>
          <nav>
            <ul>
                <li>
                    <Link to="/">LoginPage</Link>
                </li>
                <li>
                    <Link to="/dashboard">DashBoard Page</Link>
                </li>
            </ul>
        </nav>
         <header>
             <h1>Page Not Found</h1>
         </header>
         
         </>
     )
 }
 
 export default PageNotFound 