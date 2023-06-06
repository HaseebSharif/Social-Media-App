import Post from '../post/Post'
import ShareComponents from '../shareComponents/ShareComponents'
import './feed.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = ({username}) => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async() =>{

      const response  = username ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`) 
      : await axios.get(`http://localhost:8800/api/posts/timeline/645752837e5b154e10ce13cc`)
    

      console.log(response.data)
     
          setPosts(response.data)
    }
    fetchPosts();
  },[username]);

  
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <ShareComponents/>
         {
          posts.map((p) => (
            <Post key={p._id} postFeed={p} />

         ))
         }

        
       
      </div>
    </div> 
  )
}

export default Feed
