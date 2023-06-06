import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({user}) => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const HomePageRightBar = () => {

  return(<>
   <div className="birthdaycontainer">
    <img src='assets/gift.png ' alt='' className='birthdayimg' />
    <span className="birthdaytext">
      {''}
     <b> Usama , Horairah</b> and 3 other friends have a birthday today
    </span>
  </div>
  <img src="assets/ad.png" alt="ad" className="rightbarad" />
  <h4 className="rightbartitle">Online Friends</h4>
  <ul className="rightbarfriendlist">
   {
          Users.map((u)=>(
            <Online key={u.id} user = {u} />
          ))
   }
   
  
  </ul>
  
  </>
  )
}
const ProfileRightBar = () =>{
  return(<>
  <h3 className='rightbartitle'>User Information</h3>
  <div className="rightbarinfo">
<div className="rightbarinfoitem">
  <span className="rightbarinfokey">City:</span>
  <span className="rightbarinfovalue">NewYork</span>
</div>
<div className="rightbarinfoitem">
  <span className="rightbarinfokey">From:</span>
  <span className="rightbarinfovalue">Madrid</span>
</div>
<div className="rightbarinfoitem">
  <span className="rightbarinfokey">Relationship:</span>
  <span className="rightbarinfovalue">Single</span>
</div>

  </div>
  <h1>User Friends</h1>
  <div className="rightbarfollowings">
    <div className="rightbarfollowing">
      <img className='rightbarfollowingimg' src={`${PF}person/6.jpeg`} alt="pic" />
      <span className='rightbarfollowingname'>asdaf</span>
    </div>
    <div className="rightbarfollowing">
      <img className='rightbarfollowingimg' src={`${PF}person/5.jpeg`} alt="pic" />
      <span className='rightbarfollowingname'>sdf</span>
    </div>
    <div className="rightbarfollowing">
      <img className='rightbarfollowingimg' src={`${PF}person/4.jpeg`} alt="pic" />
      <span className='rightbarfollowingname'>sdfaa</span>
    </div>
    <div className="rightbarfollowing">
      <img className='rightbarfollowingimg' src={`${PF}person/3.jpeg`} alt="pic" />
      <span className='rightbarfollowingname'>sdfsdfsdsds</span>
    </div>
    <div className="rightbarfollowing">
      <img className='rightbarfollowingimg' src={`${PF}person/2.jpeg`} alt="pic" />
      <span className='rightbarfollowingname'>ssd</span>
    </div>
    <div className="rightbarfollowing">
      <img className='rightbarfollowingimg' src={`${PF}person/1.jpeg`} alt="pic" />
      <span className='rightbarfollowingname'>asj</span>
    </div>
  </div>
  
  </>
  
  )
}
  return (
    <div className='rightbar'>
 <div className="rightbarwrapper">
{
  user ?  <ProfileRightBar/> : <HomePageRightBar/>
}
 </div>
    </div>
  )
}

export default Rightbar
