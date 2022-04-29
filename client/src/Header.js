import reddit_logo from './reddit_logo.png';
import reddit_avatar from './reddit_avatar.png';
import {PlusIcon, ChatIcon,BellIcon, SearchIcon, ChevronDownIcon, UserIcon, LoginIcon} from '@heroicons/react/outline';
import Button from './Button';
import React, { useState } from 'react';

export default function header(){
    const [DropDownClass, setDropDownClass]= useState('hidden');
    function toggleDropDown(){
       if(DropDownClass === 'hidden'){
           setDropDownClass('block');
       }else{
           setDropDownClass('hidden');
       }
    }

    return (
      <header className="w-full bg-redditDark p-2">
        <div className=" mx-4 flex relative">
        <img src={reddit_logo} alt="reddit" className="w-8 h-9 mr-4"></img>
        <form action="" className="bg-redditDark-light px-3 flex rounded-md border border-redditborder mx-4 flex-grow">
            <SearchIcon className="text-white h-6 w-6 mt-1"></SearchIcon>
            <input type="text" className="bg-redditDark-light text-sm p-1 pr-0 pl-2 block focus:outline-none text-white flex-grow" placeholder="Search"></input>
            </form>
        {/* <button className="px-2 py-1">
            <BellIcon className="text-white w-6 h-6 mx-1 "></BellIcon>
        </button>
        <button className="px-2 py-1">
            <ChatIcon className="text-white w-6 h-6 mx-2"></ChatIcon>
        </button>
        <button className="px-2 py-1">
            <PlusIcon className="text-white w-6 h-6 mx-2"></PlusIcon>
        </button>  */}
        <div className='mx-2'>
            <Button outline className='mr-1'>Log In</Button>
            <Button className=''>Sign Up</Button>
        </div>

        <button className='rounded-md flex ml-4 border border-gray-700' onClick={() => toggleDropDown()}>
            <UserIcon className='w-6 h-6 text-gray-400 m-1'></UserIcon>
            {/* <div className="bg-gray-600 rounded-md w-5 h-5"> */}
                {/* <img src={reddit_avatar} alt="" style={{filter:'invert(100%)'}} className="mt-1 block"></img> */}
            {/* </div> */}
            <ChevronDownIcon className='text-gray-500 w-5 h-5 ml-1 mt-2'></ChevronDownIcon>
        </button>
        <div className={'absolute right-0 top-8 bg-redditDark border border-gray-700 z-10 rounded-md text-redditText overflow-hidden ' + DropDownClass}>
            <a href='' className='block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black overflow-hidden text-sm'>
                <LoginIcon className='h-5 w-5 mr-2'></LoginIcon>
                Login / Sign Up
            </a>

        </div>
        </div>
    </header>
    );
}
