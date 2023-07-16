import React, {useEffect, useState } from 'react'
import useHttp from '../hooks/useHttp';
import { Signin,Signup } from '.';

const Home =() => {
    const {request}= useHttp()
    const [data, setData]= useState([])
    const [showUp, setShowUp]= useState(false);
    const [showIn, setShowIn]= useState(false);
    const [user, setUser]= useState(false)

    const showUpFunc = () => {
        setShowUp((prev) => !prev);
        setShowIn(false);
    }
    const showInFunc = () => {
        setShowIn((prev) => !prev);
        setShowUp(false)
    }
    const handleUser = ()=>{
       setUser(true) 
    }
    useEffect(()=>{
        request("http://localhost:3001/users")
        .then((res)=> res && setData(res))
    }, []);
    console.log(data);
    return (
        <div className='home #00e5ff cyan accent-3'>
        {user ? <h2>Hello User</h2> : <h2>Welcome public</h2> }
        {!user ?  (<div className='btns'>
<button 
className='waves-effect waves-light btn green'
onClick={showInFunc}
>Sign In</button>
 <button 
 className='waves-effect waves-light btn'
 onClick={showUpFunc}
 >Sign Up</button>
</div>) :(<button className='waves-effect waves-light btn red  btns' >Log Out</button>)}

      
        {showUp ? <Signup showUpFunc={showUpFunc}/> : null}
        {showIn ? <Signin showInFunc={showInFunc} data= {data} handleUser={handleUser}/> : null}
        
        </div>
    )
    
}

export default Home
