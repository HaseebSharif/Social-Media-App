import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {format} from 'timeago.js'
import { Link } from 'react-router-dom';


const Post = ({postFeed }) => {

  const [like , setLike] = useState(postFeed.likes.length)
  const [islike, setIslike] = useState(false)
  const [user , setUser] = useState({})

  const handleLike = () =>{
   setLike(islike ? like-1 : like + 1)
   setIslike(!islike)
}

useEffect(()=>{
    const fetchUsers = async() =>{
      const response  = await axios.get(`http://localhost:8800/api/users?userId=${postFeed.userId}`)
    

      console.log('user res is',response.data)
     
      setUser(response.data)
    }
    fetchUsers();
  },[postFeed.userId]);

  return (
    <div className='post'>
<div className="postwrapper">
    <div className="posttop">
        <div className="posttopleft">
            <Link to={`/profile/${user.username}`} >
            
        <img src={user.profilePicture || 'assets/person/noAvatar.png'} alt='dp' className='postprofileimg' />
        </Link>
            <span className='postusername'>{user.username}</span>
            <span className='postdate'>{format(postFeed.createdAt)}</span>
        </div>
        <div className="posttopright">
           <MoreVertIcon/>
        </div>
    </div>
    <div className="postcenter">
        <span className='posttext'>{postFeed.desc}</span>
        <img src={postFeed.img} alt='postimg' className='postimg' />
    </div>
    <div className="postbottom">
        <div className="postbottomleft">
          <img className = 'likeicon' src={`/assets/like.png`} onClick={handleLike} alt='like'  />
          <img className = 'likeicon' src={`/assets/heart.png`} onClick={handleLike} alt='heart'  />
          <span className='postlikecounter'>{like} people like this</span>
        </div>
        <div className="postbottomright">
            <span className="postcommenttext">12 comments</span>
        </div>
    </div>
</div>
    </div>
  )
}

export default Post
