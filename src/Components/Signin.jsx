import React, {useState } from 'react'


const Signin = ({ showInFunc, data=[], handleUser }) => {

   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const signIn = (e) => {
        e.preventDefault()
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            return alert("email xato kiritild!")
        }
        if (password.length < 8) {
            return alert("Password 8-tadan kam bo'lmasligi kerak!")
        }
        const findUser= data.findIndex(
            (elem) =>elem.email === email && elem.password === password);
            if(findUser > 0){
                showInFunc()
                handleUser()
            }
            console.log(findUser);
    }


    return (
        <>
            <div className='shadow' onClick={showInFunc}></div>
            <form className='sign z-depth-4 #ffffff white' onSubmit={signIn}>
                <h2>Sign In</h2>
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




                <input type="submit" value="Sign In "
                    className='waves-effect waves-light btn' />



            </form>
        </>

    )
}

export default Signin
