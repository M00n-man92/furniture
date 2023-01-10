import './register.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/apiCall'
// import { publicRequest } from '../../requestMethods'
import { Link } from 'react-router-dom'
export default function Register() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { isFetching, error } = useSelector(state => state.user)
    

    const user = { name, email, password }
    const dispatch = useDispatch()
    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState("")
    const handler = async (e) => {
        e.preventDefault()
       const res= await register(dispatch,user)
      if(res){
        // console.log(res)
        setSuccess(res.success)
              setMsg(res.msg)
      }
       
        // try {
        //     const res = await publicRequest.post("/user/register", user)
        //     const rep = res.data
        //     console.log(rep)
        //     
        // }
        // catch (e) {
        //     console.log(e)

        // }
    }
    // console.log(msg)
    return (
        <div className="Register">
            <div className="registertitle">Register</div>
            <div className="loki">
                <div className="title">
                    <span>Create New Account</span>
                </div>
                <form className="registerform">
                    <div className="lael"><label> Username</label>
                        <input type="text" placeholder="Your User Name" onChange={e => setName(e.target.value)} /></div>
                    <div className="lael">
                        <label> Email</label>
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="lael">
                        <label> Password</label>
                        <div className="yeyeye">
                            <input type="password" placeholder="password must contain multiple characters" onChange={e => setPassword(e.target.value)} />

                            {password.length < 8 && password.length >= 1 ? <span className="reddevil">please enter more characters</span> : <span></span>}
                        </div>
                    </div>
                    <div className="inside">
                        <span>By joining this platform you've agreed to our <b>Privacy Policy</b>  </span>
                    </div>
                    <div className="klill"> <button type="submit" disabled={isFetching} onClick={handler} >Register</button>
                        {success===false ||error? <span className='downbad'>{msg}</span> : <span className="sucess">{msg}</span>}
                        
                    </div>

                </form>
            </div>

            <div className="tio"><h4>Do you have an account?</h4>
                <Link to="/login" className='link'><button >Login </button></Link></div>



        </div>
    )
}
