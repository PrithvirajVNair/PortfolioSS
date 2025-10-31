import React, { useState } from 'react'

const Header = () => {

    const navBar = [
        { text: 'Home', link: '#' },
        { text: 'About Me', link: '#about' },
        { text: 'Skills', link: '#skills' },
        { text: 'My Works', link: '#project' },
        { text: 'Contact Me', link: '#contact' },
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='fixed w-full' style={{ zIndex: '999' }}>
            <div className='flex justify-between items-center text-white px-5 sm:px-20 backdrop-blur-xl'>
                <div className='text-xl p-3'>
                    <a href='#'>LOGO</a>
                </div>
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        {
                            navBar.map(nav => (
                                <li key={nav.text} className='mx-1 text-xl p-3 hover:text-[#969fb9]'><a href={nav.link}>{nav.text}</a></li>
                            ))
                        }
                    </ul>
                    <div className='ml-1 flex items-center'>
                        <a className='text-lg border p-1 rounded-2xl text-black bg-white ml-5 hover:bg-[#bcbcbc]' href="">Download CV</a>
                    </div>
                </div>
                <div className='sm:hidden px-5'>
                    <button onClick={toggleMenu} className='' ><i class={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i></button>
                </div>
            </div>
            <div className={`grid grid-cols-5`}>
                    <div></div>
                    <ul className={`sm:hidden ${menuOpen && 'border border-[#374151]'} backdrop-blur-2xl text-center rounded-2xl col-span-3 leading-8`}>
                        {
                            menuOpen && (
                                navBar.map((items, index) => (
                                    <li key={items.text} className='hover:text-[#969fb9] hover:underline underline-offset-2'>
                                        <a href={items.link}>{items.text}</a>
                                    </li>
                                ))
                            )
                        }
                        {menuOpen && 
                        <div>
                            <div className='border border-[#374151]'></div>
                            <div className='my-2'>
                                <a className='text-sm border p-1 rounded-2xl text-black bg-white hover:bg-[#bcbcbc]' href="">Download CV</a>
                            </div>
                        </div>}
                    </ul>
                    <div></div>
                </div>
        </div>
    )
}

export default Header