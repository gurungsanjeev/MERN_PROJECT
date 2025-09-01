import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { NavLink } from 'react-router';


const Footer = () => {


    return (
        <>


            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 bg-gradient-to-l from-yellow-500 to-indigo-300">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/gurungsanjeev' target='_blank'>

                            <FaGithub className='text-4xl' />
                        </a>
                        <a href='https://www.linkedin.com/in/sanjeev-gurung/' target='_blank'>
                            <FaLinkedin className='text-4xl' />


                        </a>
                        <a>
                            <a href="https://gurungsanjeev.vercel.app/" target='_blank'><IoPersonCircleSharp className='text-4xl' /></a>

                        </a>

                    </div>
                </nav>
                <aside>
                    <h3 className='text-xl font-semibold'>Copyright © {new Date().getFullYear()} - Developed by Sanjeev</h3>
                </aside>
            </footer>

        </>
    )
}

export default Footer
