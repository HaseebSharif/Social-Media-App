import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const Profile = () => {
  const [user , setUser] = useState({})
const username = useParams().username;
console.log(username)

  useEffect(()=>{
    const fetchUsers = async() =>{
      const response  = await axios.get(`http://localhost:8800/api/users?username=${username}`)
    

      console.log('profileuser res is',response.data)
     
      setUser(response.data)
    }
    fetchUsers();
  },[]);


  return (
    <>
     <Topbar/>
      <div className="profile">
      <Leftbar />
      <div className="profileright">
        <div className="profilerighttop">
            <div className="profilecover">

            <img src= { user.profilePicture  || '/assets/person/noCover.png'} alt="coverimg" className='profilecoverimg' />
            <img src={user.profilePicture  || '/assets/person/noAvatar.png'} alt="dp" className='profileuserimg' />
            </div>
            <div className="profileinfo">
                <h2 className='profileinfoname'>{user.username}</h2>
                <span className='profileinfodescription'>Programmer</span>
            </div>
        </div>
        <div className="profilerightbottom">
      <Feed username = {username}/>
      <Rightbar user={user}/>
      

        </div>
      </div>

      </div>
    </>
  )
}

export default Profile
