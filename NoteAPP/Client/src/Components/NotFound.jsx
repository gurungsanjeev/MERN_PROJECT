import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NotFound = () => {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4">
            <motion.h1 
                className="text-9xl font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                404
            </motion.h1>
            <motion.p 
                className="text-lg mt-4 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                >
                Oops! The page you're looking for doesn't exist.
            </motion.p>
            
            <motion.div 
                className="mt-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                <Link to="/" className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all">
                    Go Home
                </Link>
            </motion.div>
        </div>
                </>
    );
};

export default NotFound;
