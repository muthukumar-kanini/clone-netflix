import React from 'react'
import Netflix from "../utils/Netflix.png"
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import appStore from '../utils/appStore'
const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)

  const handelSignOut = () =>{
    signOut(auth)
    .then(()=>{
     navigate("/")
    })
    .catch((error)=>{
      navigate("/error")
    })
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img  className = "w-44" src={Netflix}/>
      {user && (
        <div className='flex p-3'>
        <img className="w-12 h-12 m-2 "
        src={user.photoURL} alt="" srcset="" />
        <button className='font-bold text-white' onClick={handelSignOut}>(Sign Out)</button>
      </div>
      )}
    </div>
  )
}
//"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
export default Header
