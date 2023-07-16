import React from 'react'

function Regex(email) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return  re.test(email);
}

export default Regex
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


<><div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
<div className="content">
  <h1>Sliding Diagonals Background Effect</h1>
</div></>