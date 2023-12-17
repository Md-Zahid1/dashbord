import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Avatar from '../data/avatar.jpg'
import { Cart, Notification, UserProfile } from '.'
import Chat from './Chat'
import { useStateContext } from '../contexts/ContextProvider'


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
   <TooltipComponent contetent={title} position='BottomCenter'>
      <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
         <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/> {icon} 
      </button>
   </TooltipComponent>
)

const Navbar = () => {
   const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize ,setScreenSize, currentColor } = useStateContext();

   useEffect(() => {
     const handleResize = () => setScreenSize(window.innerWidth);
     window.addEventListener('resize', handleResize)
     handleResize()
     return () => window.removeEventListener('resize', handleResize)
   }, [])

   useEffect(() => {
     if(screenSize <= 900) {
      setActiveMenu(false)
     }else{
      setActiveMenu(true)
     }
   }, [screenSize])

   return (
      <div className='flex justify-between p-2 md:mx-6 relative'>
         <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />
         <div className='flex'>
            <NavButton title="Cart" customFunc={() => handleClick('Cart')} color={currentColor} icon={<FiShoppingCart />} />
            <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('Chat')} color={currentColor} icon={<BsChatLeft />} />
            <NavButton title="Notification" dotColor="#03C9D7" customFunc={() => handleClick('Notification')} color={currentColor} icon={<RiNotification3Line />} />
            <TooltipComponent content='profile' possition="BottomCenter" >
               <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg ' onClick={() => handleClick('userprofile')}>
                  <img src={Avatar} className='rounded-full w-8 h-8' />
                  <p>
                     <spam className="text-gray-400 text-14">Hi, </spam> {''}
                     <span className='text-gray-400 font-bold ml-1 text-14'>Michale</span>
                  </p>
                  <MdKeyboardArrowDown className='text-gray-400 text-14 ' />
               </div>
            </TooltipComponent>
            {isClicked.cart && <Cart />}
            {isClicked.chat && <Chat />}
            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <UserProfile />}
         </div>
      </div>
   )
}

export default Navbar
