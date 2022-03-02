 import React from 'react'
 
 import {IoNotificationsOutline} from "react-icons/io5"

 import {AppBarStyles, AppBarItem, AppBarItems} from './styles'
 import {IconButton} from './../../ui/buttons'
 function AppBar  (props){
     return( 
       <AppBarStyles>
              
              <AppBarItems>
                  <AppBarItem>Branding</AppBarItem>
                  <AppBarItem>
                      <IconButton> <IoNotificationsOutline color="tomato" size="1.75rem"/></IconButton>
                  </AppBarItem>
              </AppBarItems>

       </AppBarStyles>
     )
 }
 
 export default AppBar 