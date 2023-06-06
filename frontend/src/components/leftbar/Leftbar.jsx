import './leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from '../../dummyData'
import CloseFriends from '../closeFriends/CloseFriends';


const Leftbar = () => {
  return (
    <div className='leftbar'>

      <div className="leftwrapper">
        <ul className="leftbarlist">
          <li className="leftbarlistitem">
          <RssFeedIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Feed
          </span>
          </li>
          <li className="leftbarlistitem">
          <ChatIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Chat
          </span>
          </li>
          <li className="leftbarlistitem">
          <PlayCircleIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Videos
          </span>
          </li>
          <li className="leftbarlistitem">
          <GroupsIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Groups
          </span>
          </li>
          <li className="leftbarlistitem">
          <BookmarksIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Bookmarks
          </span>
          </li>
          <li className="leftbarlistitem">
          <QuestionMarkIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Questions
          </span>
          </li>
          <li className="leftbarlistitem">
          <WorkIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Jobs
          </span>
          </li>
          <li className="leftbarlistitem">
          <EventIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Events
          </span>
          </li>
          <li className="leftbarlistitem">
          <SchoolIcon className='leftbaricon'/>
          <span className="leftbarlistitemtext">
            Courses
          </span>
          </li>
        </ul>
        <button className='leftbarbutton'>Show More</button>
        <hr className='leftbarhr'/>
        <ul className="leftbarfriendlist">
          {
                 Users.map((u)=>(
                  <CloseFriends key={u.id} user={u} />
                 ))
          }
         
         
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
