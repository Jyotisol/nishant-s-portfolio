// import React from 'react';
// import Logo from './Logo';
// import { InstagramIcon, LinkedInIcon, WhatsAppIcon, SunIcon, MoonIcon, FacebookIcon } from './Icon';
// import { motion } from 'framer-motion';
// import useThemeSwitcher from './hooks/useThemeSwitcher';

// const Navbar = () => {
//     const [mode, setMode] = useThemeSwitcher();

//     const CustomLink = ({ href, title, className = "" }) => (
//         <a
//             href={href}
//             className={`${className} relative group`}
//             onClick={(e) => {
//                 // Prevent navigation if the href is "#"
//                 if (href === "#") e.preventDefault();
//             }}
//         >
//             {title}
//             <span
//                 className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
//                 group-hover:w-full transition-[width] ease duration-300 
//                 dark:bg-light`}
//             >
//                 &nbsp;
//             </span>
//         </a>
//     );

//     return (
//         <header
//             className="fixed top-0 left-0 w-full px-8 py-4 font-medium flex items-center justify-between 
//             dark:text-light bg-light dark:bg-dark z-50 shadow-md lg:px-16 md:px-12 sm:px-8"
//         >
//             {/* Navigation Links */}
//             <nav className="flex items-center space-x-4">
//                 <CustomLink href="/" title="Home" />
//                 <CustomLink href="#About" title="About" />
//                 <CustomLink href="#Experience" title="Experience" />
//             </nav>

//             {/* Center Logo */}
//             <div className="absolute left-1/2 transform -translate-x-1/2">
//                 <Logo />
//             </div>

//             {/* Social Icons and Theme Toggle */}
//             <nav className="flex items-center space-x-3">
//                 {/* WhatsApp Link */}
//                 <motion.a
//                     href="https://wa.me/8109820949"
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-6"
//                 >
//                     <WhatsAppIcon />
//                 </motion.a>

//                 {/* LinkedIn Link */}
//                 <motion.a
//                     href="https://www.linkedin.com/in/nishant-singh-chouhan-553405187"
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-6"
//                 >
//                     <LinkedInIcon />
//                 </motion.a>

              

//                 {/* Instagram Link */}
//                 <motion.a
//                     href="https://www.instagram.com/the_.asset/profilecard/?igsh=MTM5NW83ZG02b2hnYg=="
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-6"
//                 >
//                     <InstagramIcon />
//                 </motion.a>


//                 <motion.a
//                     href="https://www.facebook.com/share/15bWToduUt/"
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-6"
//                 >
//                     <FacebookIcon />
//                 </motion.a>

//                 {/* Theme Toggle Button */}
//                 <button
//                     className={`ml-3 flex items-center justify-center rounded-full p-1 transition-colors ${
//                         mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
//                     }`}
//                     onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
//                 >
//                     {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
//                 </button>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;
