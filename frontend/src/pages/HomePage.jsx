import Topbar from '../components/topbar/Topbar'
import Rightbar from  '../components/rightbar/Rightbar'
import Leftbar from '../components/leftbar/Leftbar'
import Feed from '../components/feed/Feed'
import './homepage.css'

const HomePage = () => {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
      <Leftbar />
      <Feed />
      <Rightbar />

      </div>
      
    </div>
  )
}

export default HomePage
