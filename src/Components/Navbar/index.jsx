import { NavLink } from 'react-router-dom'

import { useContext } from 'react';
import { DonateContext } from '../../Context'

const Navbar = () => {
    const context = useContext(DonateContext)
    
    return (
        <nav className='top-0 flex justify-between fixed w-full border-b border-green-300 bg-white'>
            <img src='./src/assets/menu.svg' alt='menu' className='w-12 block md:hidden'/>
            <div className='flex'>
                <img src='./src/assets/logo.svg' alt='logo' className='w-20'/>
                <ul className='flex items-center list-none p-0 m-0 ml-4 space-x-4 hidden md:flex'>
                    <li>
                        <NavLink
                        to='/todos'>
                        <a href='' className='text-green-600 border border-white px-2 py-1 
                        rounded-md text-md hover:bg-green-300 hover:text-gray-800
                        hover:border-green-300'>Todos</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/Machos'>
                        <a href='' className='text-green-600 border border-white px-2 py-1 
                        rounded-md text-md hover:bg-green-300 hover:text-gray-800
                        hover:border-green-300'>Machos</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/Hembras'>
                        <a href='' className='text-green-600 border border-white px-2 py-1
                        rounded-md text-md hover:bg-green-300 hover:text-gray-800
                        hover:border-green-300'>Hembras</a>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex items-center space-x-4'>
                <span className='text-green-400 text-sm'>user@gmai.com</span>
                <img src='./src/assets/adoption.svg' alt='' className='w-20 p-5'/>
                <img src='./src/assets/donate.svg' alt='' className='w-20 p-5'/> <p className='absolute bottom-2 right-4   rounded-full  '>{context.count}</p>
            </div>
        </nav>


    )
}

export default Navbar