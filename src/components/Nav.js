import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, SunIcon, MoonIcon, FacebookIcon } from './Icon';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const Nav = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    // Function to handle screen resizing
    const handleResize = () => {
        if (window.innerWidth < 1000) {  // If screen width is smaller than custom-md (1000px)
            setShowHamburger(true);     // Show hamburger button
        } else {
            setShowHamburger(false);    // Hide hamburger button
        }
    };

    // useEffect to add a listener for resizing and set initial state
    useEffect(() => {
        handleResize();  // Set initial value based on screen size
        window.addEventListener('resize', handleResize); // Add listener

        return () => window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
    }, []);

    // Toggles the mobile menu visibility
    const handleClick = () => {
        setIsOpen(!isOpen); // Toggle the state
    };

    const CustomLink = ({ href, title, className = "" }) => {
        return (
            <a href={href} className={`${className} relative group`}>
                {title}
                <span
                    className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] ease duration-300 
                    dark:bg-light`}
                >
                    &nbsp;
                </span>
            </a>
        );
    };

    const CustomMobileLink = ({ href, title, className = "", toggle }) => {
        const handleClick = () => {
            toggle(); // Close the menu after clicking a link
        };

        return (
            <a
                href={href}
                className={`${className} relative group text-light dark:text-dark my-2`}
                onClick={handleClick}
            >
                {title}
                <span
                    className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] ease duration-300 
                    dark:bg-dark`}
                >
                    &nbsp;
                </span>
            </a>
        );
    };

    return (
        <header
            className="w-full px-8 py-8 font-medium flex items-center justify-between 
            dark:text-light bg-light dark:bg-dark relative z-10 lg:px-16 md:px-12 sm:px-8  "
        >
            {/* Hamburger button for mobile menu (visible only on small screens) */}
            {showHamburger && (
                <button
                    className="flex-col justify-center items-center" // Now we conditionally render this button based on screen size
                    onClick={handleClick} // Toggles the mobile menu on click
                >
                    <span
                        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
                            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`}
                    ></span>
                    <span
                        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    ></span>
                    <span
                        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
                            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`}
                    ></span>
                </button>
            )}

            {/* Main navigation for larger screens */}
            <div className="w-full flex justify-between items-center custom-md:flex lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="#About" title="About" className="mx-4" />
                    <CustomLink href="#Experience" title="Experience" className="mx-4" />
                    <CustomLink href="#connect" title='conenct' className='mx-4' />
                    <CustomLink href="#Education" title="Education" className="ml-4" />
                </nav>

                <nav className="flex items-center">
                    <motion.a
                        href="https://wa.me/8109820949"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <WhatsAppIcon />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/nishant-singh-chouhan-553405187"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a
                        href="https://www.instagram.com/the_.asset/profilecard/?igsh=MTM5NW83ZG02b2hnYg=="
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3"
                    >
                        <InstagramIcon />
                    </motion.a>

                    <motion.a
                    href="https://www.facebook.com/share/15bWToduUt/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3
                    "
                >
                   <FacebookIcon />
                </motion.a>

                    <button
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
                        }`}
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    >
                        {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
                    </button>
                </nav>
            </div>

            {/* Mobile menu (only shown when isOpen is true) */}
            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                        <CustomMobileLink href="#About" title="About" toggle={handleClick} />
                        <CustomMobileLink href="#Experience" title="Experience" toggle={handleClick} />
                        {/* <CustomMobileLink href="#Education" title="Articles" toggle={handleClick} /> */}
                    </nav>

                    <nav className="flex items-center mt-8 flex-wrap">
                        <motion.a
                            href=""
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3"
                        >
                            <WhatsAppIcon />
                        </motion.a>

                        <motion.a
                            href=""
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3"
                        >
                            <LinkedInIcon />
                        </motion.a>

                        <motion.a
                            href=""
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 ml-3"
                        >
                            <InstagramIcon />
                        </motion.a>

                        <button
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
                            }`}
                            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                        >
                            {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
                        </button>
                    </nav>
                </motion.div>
            )}

            {/* Logo in the center */}
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Nav;
