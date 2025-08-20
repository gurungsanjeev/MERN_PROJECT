import React from 'react'
import Login from './Signup-Login/login'
import Navbar from './Navbar'
import Footer from './Footer'
import HomeBody from './HomeBody'


const Home = () => {
    return (
        <div className="relative flex max-h-screen h-screen w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('/images/home.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.6, // only affects this div
                }}

            >


            </div>

            {/* Content on top */}
            <div className="relative z-10 w-full">
                <Navbar />
                <HomeBody />
                <Footer />

            </div>
            <div>

            </div>

        </div>
    )
}

export default Home
