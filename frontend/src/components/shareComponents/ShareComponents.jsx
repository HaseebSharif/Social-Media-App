import './sharecomponents.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext , useRef , useState } from 'react';
import { AuthContext } from '../../context/AuthContext';


const ShareComponents = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  return (
    <div className='sharecomponents'>

      <div className="sharecomponentswrapper">
        <div className="sharecomponenttop">
            <img className='sharecomponentsimg' src='/assets/ppp.png' alt=''/>
            <input className='sharecomponentsinput'  ref={desc} placeholder={`${user.username} Whats in your mind`} />
        </div>
        <hr className='sharecomponentshr'/>
        <div className="sharecomponentbottom">
            <div className="sharecomponentsoptions">
                <div className="sharecomponentsoption">
                    <PermMediaIcon htmlColor='tomato' className='sharecomponentsicon' />
                    <span className='sharecomponentsoptiontext'>Photo or Video</span>
                </div>
                <div className="sharecomponentsoption">
                    <LabelImportantIcon htmlColor='blue'  className='sharecomponentsicon' />
                    <span className='sharecomponentsoptiontext'>Tag</span>
                </div>
                <div className="sharecomponentsoption">
                    <RoomIcon htmlColor='green'  className='sharecomponentsicon' />
                    <span className='sharecomponentsoptiontext'>Location</span>
                </div>
                <div className="sharecomponentsoption">
                    <EmojiEmotionsIcon htmlColor='goldenrod'  className='sharecomponentsicon' />
                    <span className='sharecomponentsoptiontext'>Feelings</span>
                </div>
            </div>
            <button className='sharecomponentsbutton'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default ShareComponents
