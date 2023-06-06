import './online.css'

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarfriend">
    <div className="rightbarprogileimgcontainer">
      <img src={PF+user.profilePicture} alt="" className='rightbarprofileimg' />
      <span className='rightbaronline'></span>
    </div>
    <span className='rightbarusername'>{user.username}</span>
  </li>
  )
}

export default Online
