import React from 'react'
import './conversation.scss'
import { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
export default function Conversation({ conver, user }) {
  const [userdata, setUdata] = useState(null)
  const [name, setName] = useState('')
  const [pic, setPic] = useState('')
  // console.log(conver.members.find((m)=>m!==user))
  const nonuser = conver.members.find((m) => m !== user)
    // console.log(nonuser)
  useEffect(() => {
    const getuserinfo = async () => {
      try {
        const comes = await userRequest.get(`user/find/${user}/${nonuser}`)
        if (comes) {
          // console.log(comes)
          setUdata(comes.data)

          setName(comes.data.data.name)
          setPic(comes.data.data.profilepic)
        }
      }
      catch (e) {
        console.log(e)
      }

    }
    getuserinfo()
  }, [user, conver])
  //   console.log(name,pic)
  return (
    <div className="conversation">
      <img src={pic} alt="" />
      <span>{name}</span>
    </div>
  )
}
