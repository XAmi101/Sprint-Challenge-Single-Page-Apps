import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
  return (
    <div className='ui attached tabular menu '>
         <NavLink exact to='/' className=' item'>Home Page</NavLink>
         <NavLink to='/character' className='item'>Characters </NavLink>
         <NavLink to='/location' className='item'>Locations </NavLink>
         <NavLink to='/episode' className='item'>Episodes </NavLink>
       </div>

 );
 };
