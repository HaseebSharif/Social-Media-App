import React from 'react'
import './closefriend.css'


const CloseFriends = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="leftbarfriend">
            <img src={PF+user.profilePicture} alt="pf" className="leftbarfriendimg" />
            <span className="leftbarfriendname">{user.username}</span>
          </li>
  )
}

export default CloseFriends
