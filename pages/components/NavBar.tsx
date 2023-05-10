import{IoClose} from 'react-icons/io5'
import{GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react"
import Link from 'next/link';
import NavBarList from './NavBarList';
function NavBarComponent(){
    const [navbar, setnavbar] = useState(false);
    return (
        <div className='bg-creamy-brown'>
            <nav className="w-full fixed z-10 ">
                <div className="justify-center px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8 lg:z-10"> 
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link  href="/">
                                <h2 className="text 2xl font-bold md:hidden">LOGO</h2>
                            </Link>
                            {/*HAMBURGER BUTTON FOR MOBILE*/}
                            <div className="md:hidden">
                                <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                                onClick={() => setnavbar(!navbar)}
                                >
                                {navbar ? <IoClose/>:<GiHamburgerMenu/>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0              bg-creamy-brown ${
                            navbar ? 'p-12 md:p-0 block ' : 'hidden'}`}>
                                <NavBarList/>
                        </div>
                    </div>
                </div>
            </nav>
        </div> 
    )
}

export default NavBarComponent