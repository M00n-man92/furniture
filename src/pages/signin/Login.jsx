import { useState } from 'react'
import './login.scss'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../redux/apiCall'
import { login } from '../../redux/apiCall'
import { useHistory } from 'react-router'

// import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
// import Forgot from '../forgot/Forgot'
import { Link } from 'react-router-dom'
export default function Login() {
     const [email, setUserName] = useState(null)
    const [password, setPassport] = useState(null)
    const { isFetching, error } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const userr = { email, password }
    const [success, setSuccess] = useState()
    const [message, setMessage] = useState('')
    const history = useHistory()
    // const location=useLocation()
    const forgot = async (e) => {
        e.preventDefault()
        if (email === null) { setMessage("please fill in your email") }
        else {
            try {
                const reply = await update(dispatch, email)
                if (reply) {
                    // console.log(reply)
                    setSuccess(reply.success)
                    setMessage(reply.msg)
                }
                else {

                    setSuccess(false)
                    setMessage("something went wrong with our server")

                }
            }
            catch (e) {

                console.log(e.responce.data)
            }
        }

    }
    const handler = async (e) => {
        e.preventDefault()
        // console.log(password)
        if (password.length > 0 && password.lenght < 8) {
            // console.log("hello")
            setMessage("please input your correct password")
            setSuccess(false)
        }
        else if (password === null) {
            setMessage("please input your password")
            setSuccess(false)
        }


        else {
            try {
                const res = await login(dispatch, userr)

                if (res) {
                    // console.log(res)
                    setSuccess(res.success)
                    setMessage(res.msg)
                    if (success === true) {
                        history.push("/")

                        
                        //  history.push("/")
                    //    setInterval(()=>{ window.location.reload()},2000)
                       
                    }

                }

                else {
                    setSuccess(false)
                    setMessage("something went wrong with our server")
                }
                window.location.reload()
               
            }
            catch (e) {
                console.log(e)
            }
        }

    }

    // console.log(message, success, status)    
return (
  

           
                <div className="login">
                    <div className="logintitle">SignIn</div>
                    <div className="noronoro">
                        <form className="loginform" >

                            <div className="lael">
                                <label >Email</label>
                                <input type="email" placeholder="Email" onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="lael">
                                <label >Password</label>
                                <input type="password" placeholder="Password" onChange={(e) => setPassport(e.target.value)} />
                            </div>
                            <div className="klill">
                                {error || success === false ? <span className='op'>{message}</span> : <span className='lol' >{message}</span>}
                                <button className="submitform" type="submit" onClick={handler} disabled={isFetching} >SignIn</button>

                            </div>
                        </form>
                    </div>


                    {/* <div className="tio">
                            <h5>OR</h5>
                            <Link to="register" className='link'><button className="register" >Register</button></Link>
                        </div> */}
                    <div className="tio"><h4>or create an account</h4>
                        <Link to="/register" className='link'><button className='regitration' >Signup</button></Link></div>
                    <div className="tio"><h4>forgot password?</h4>
                        <button onClick={forgot} disabled={isFetching}>Reset Password</button></div>


                </div>


)
}


   