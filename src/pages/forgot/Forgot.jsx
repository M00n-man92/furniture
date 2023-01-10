import React from 'react'
import { useState } from 'react'
import {forgot} from '../../redux/apiCall'
import { useLocation } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import './forgot.scss'
export default function Forgot() {
    
    const { isFetching, error, currentUser } = useSelector(state => state.user)
    const location = useLocation()
    const dispatch = useDispatch()
    const token = location.pathname.split("/")[2]
    // console.log(token)
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [success, setSuccess] = useState()
    const [status, setStatus] = useState()
    const [message, setMessage] = useState('')
  
    const handler =async (e) => {
        e.preventDefault()
        // console.log(password,confirm)

        if(password===confirm){
            try{
                const res= await forgot(dispatch,token,password)
                
                if(res){
                    setSuccess(res.success)
                    setMessage(res.msg)
                    setStatus(res.status)

                }
            }
            catch(e){
                console.log(e)
            }
        }
        else{
            // console.log("liop")
            setMessage("check your password.")
            setSuccess(false)
        }



    }
    return (
        <div className='forgot'>
            <div className="divide">
                <div className="holdon">
                    <div className="jaxx">
                        <span className="mji">Reset Password</span>
                    </div>
                    <div className="patra">
                        <div className="killla">
                            <span className="text">New Password</span>
                            <input type="password" className="lio" id="password" name='password' onChange={(e)=>setPassword(e.target.value)} />
                            
                        </div>
                        {password.length < 8 && password.length >= 1 ? <span className="reddevil">please enter more characters</span> : <span></span>}
                        <div className="killla">
                            <span className="text">Confirm Password</span>
                            <input type="password" className="lio" id="confirmedpassword" name='confirmedpassword' onChange={(e)=>setConfirm(e.target.value)} />
                        </div>
                    </div>

                </div>
                <div className="drownms">
                    <button onClick={handler} disabled={isFetching}>Submit</button>
                </div>
                <div className="drownms">
                   {success?<span className="right">{message}</span>: <span className="wrong">{message}</span>}
                </div>

            </div>

        </div>
    )
}
