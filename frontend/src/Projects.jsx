import React from 'react';

import Header from './header.jsx';
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

function Projects(){

    return (

        <div className=' min-h-screen'>
            <Header></Header>
            <div className="flex justify-center">
                <h1 className='text-white text-6xl'> Projects </h1>

            </div>


            <motion.div className="flex flex-col gap-10 mt-10"
            initial={{ opacity:0,x:-300}}
            animate={{opacity:1,x:0}}
            transition={{duration:2}}>
                <div className='ml-15 bg-black/70 min-width-100 max-w-300 p-5 rounded-4xl'>
                    <div>
                        <h2 className='text-white text-3xl'> Personal React Project </h2>
                    </div>

                    <hr className='text-white max-w-120 mb-10'/>
                    <div className='flex flex-col'>

                        <p className='text-white text-xl'> - Description:  </p>
                        <div className='max-w-300'>
                            <p className='text-white'>
                            After finishing up a Web Development class I finally took the leap forward
                            and decided to create my own personal project from scratch. Not only to show employers that
                            I have a intermediate knowledge of React but also to prove that this invisible barrier called "Imposter Syndrome"
                            that was holding me back for so long was simply a nonexistent barrier that I created in my mind. I am very proud of this project
                             and I am excited to show it off to employers and friends alike.
                            </p>
                        </div>

                        <p className='text-white text-xl mt-10'> - Technologies Used:  </p>
                        <ul className='text-white ml-10 list-disc'>
                            <li> React </li>
                            <li> Tailwind CSS </li>
                            <li> Framer Motion </li>
                            <li> Typewriter library</li>
                            <li> Turned Old Computer into Server.....soon :)</li>

                        </ul>
                    </div>


                </div>

                <div className='ml-15'>
                    <h2 className='text-white text-3xl'> Machine Learning </h2>
                    <p className='text-white text-xl'> Description of project 2 </p>
                </div>

                <div className='ml-15'>
                    <h2 className='text-white text-3xl'> C / C++ Project </h2>
                    <p className='text-white text-xl'> Description of project 3 - Lockheed Martin Project ???</p>
                </div>
            </motion.div>
        </div>

    );
}

export default Projects;
