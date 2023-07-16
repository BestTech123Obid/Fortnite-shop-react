import React, { useState } from 'react'
import useHttp from '../hooks/useHttp'
import {v4} from "uuid"
const Signup = ({showUpFunc}) => {
    const { request } = useHttp()
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const signUp = (e) => {
        e.preventDefault()
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            return alert("email xato kiritild!")
        }
        if (password.length < 8) {
            return alert("Password 8-tadan kam bo'lmasligi kerak!")
        }

        const newUser = {
            id: v4(),
            name,
            password,
            email,

        }
        console.log(newUser);
       

        request("http://localhost:3001/users",
           "POST",
           JSON.stringify(newUser))
            .then((data) => {
               console.log(data);
                alert("Foydalanuvchi qo'shildi!")
               
                setName("");
                setEmail("");
                setPassword("");
            })
        
            

    }

    
    return (
        <>
        <div className='shadow' onClick={showUpFunc}></div>
        <form className='sign z-depth-4 #ffffff white' onSubmit={signUp}>
        <h2>Sign Up</h2>
            <div className="input-field col s12">
              
                <input
                    placeholder="name"
                    id="first_name"
                    type="text"
                    className="validate"
                    value={name}
                    onChange={handleName}
                />



            </div>
            <div className="input-field col s12">
                <input
                    id="last_name"
                    type="email"
                    className="validate"
                    placeholder='email'
                    value={email}
                    onChange={handleEmail}
                />

            </div>

            <div className="input-field col s12">
                <input

                    id="password"
                    type="password"
                    className="validate"
                    placeholder='password'
                    value={password}
                    onChange={handlePassword}
                />

            </div>




            <input type="submit" value="Register "
                className='waves-effect waves-light btn' />



        </form>
        </>
        
    )
}

export default Signup
