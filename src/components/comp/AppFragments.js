import React from 'react';


class Columns extends React.Component {
    render() {
    return ( 
   <React.Fragment> 
   <td>ONE</td>
   |
    <td>TWO</td> 
    </React.Fragment> 
    ); } } 
   
class AppFragments extends React.Component { 
    render() {
     return (
     <table>
         <caption>DATA</caption>
         
            <tr> 
                <Columns /> 
            </tr> 
    </table>
     ); } } 

     export default AppFragments;