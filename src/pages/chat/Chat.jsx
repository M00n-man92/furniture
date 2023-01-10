import React from 'react'
import './chat.scss'
import {format} from 'timeago.js'
export default function Chat({own,message,picture,time}) {
  return (
   
                        <div className={own?"blackexcellence own":"blackexcellence"}>
                            <div className="somethings">
                                
                                    {/* <img src={picture} alt="" className="crazy" /> */}
                                
                                
                                    <p className="lettingyoudown">
                                       {message}
                                    </p>
                              
                            </div>
                            <div className="cuzhehurtin">
                                <span>{format(time)}</span>
                            </div>
                        </div>
                    
  )
}
