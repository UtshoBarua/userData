import React from 'react';

const Details = (props) => {
    const {name,email ,image,annual}= props.user;
    const imgStyle ={
        height: '200px',
        width:'200px'
    }
    const mainStyle ={
        border : '1px solid red',
        margin: '5px',
        padding: '5px'
    }
 
    return (
        <div style={mainStyle}>
            <p>this is name :{name}</p>
            <p>this is email: {email}</p>
            <p>this is annual Income: {annual}</p>
            <img style={imgStyle} src={image} alt="" srcset=""/>
            <br/>
            <button onClick={props.handleAddIncome} style={{padding:'10px',fontSize:'15px',backgroundColor:"rebeccapurple", border:'2px solid' }}  >this is the main adding button</button>
        </div>
    );
};

export default Details;