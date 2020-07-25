import React from 'react'

function users(props){
    return(
        <div> 
            <h1 id="red">This is component-2</h1>         
            <h4>Your username is {props.username}</h4>
            <hr/>
        </div>
    );
}
export default users;