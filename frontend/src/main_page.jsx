
import './App.css'
import DarkModeBut from './darkmode_but.jsx';
import Header from './header.jsx'
import BottomLinks from './bottom_links.jsx';
import Projects from './Projects.jsx';
// eslint-disable-next-line no-unused-vars
import {motion} from "motion/react"
import Typewriter from 'typewriter-effect';

function Main() {


  return (

  <div className=' min-h-screen  text-white '>
    <Header></Header>
    <DarkModeBut />
    <div className=' mainLay_out grid grid-cols-2'>
      <div >
        <motion.div
        initial={{ opacity: 0, y: -20}}
        animate={{ opacity: 1, y: 0}}
        transition= {{ duration:1.5 , delay: 0.5}}

        className=" mt-72 ml-20 rounded">
          <h1 className="text-7xl text-white"> Miguel </h1>

        </motion.div>

        <motion.div  className='ml-20'
        initial={{ opacity: 0, x: -50}}
        animate={{ opacity: 1, x: 0}}
        transition= {{ duration:1.5 , delay: 1}}>
          <motion.p>___________________</motion.p>
        </motion.div>



        <motion.div className="text-xl ml-20 mt-5"
        initial={{opacity:0, x:-20}}
        animate={{ opacity: 1, x:0}}
        transition={{  duration: 2, delay: 0.8}}>
          <Typewriter options={{strings:['Software Engineering Student', 'Second Year', 'Junior Standing', 'Research Experience', 'Club experience'],
            autoStart: true, loop:true, cursor: "_",delay:100}}/>
        </motion.div>

        <motion.div className="text-xl ml-20 mt-2"
        initial={{opacity:0, x:-20}}
        animate={{ opacity: 1, x:0}}
        transition={{  duration: 2 , delay: 0.8}}>
          California Polytechnic State University San Luis Obispo
        </motion.div>

      </div>
      <div className="flex justify-center  items-end mb-20  ">
        <div className=" bg-amber-900 pl rounded p-25">
          <p>filler spot that idk what to do with </p>

        </div>
      </div>
    </div>

    <div className='grid'>
        <motion.div className="flex flex-row "
            transition={{ duration: 2, delay: 1.5}}
        >
            <motion.button className="bg-blue-500 rounded p-1 w-35 mt-5 ml-20"
                initial={{opacity:0, x:-20}}
                animate={{ opacity: 1, x:0}}

                whileHover={{scale: 1.02, boxShadow: "0px 0px 8px rgba(128, 128, 128, 0.5)"}}
                whileTap={{scale: 0.9 ,y: 2, }}
                transition={{type:"spring"}}>
                    <p>Contact Me</p>
                </motion.button>
            <motion.button
                className="bg-blue-500 rounded p-1 w-35 mt-5 ml-5"
                initial={{opacity:0, x:-20}}
                animate={{ opacity: 1, x:0}}

                whileHover={{scale: 1.02, boxShadow: "0px 0px 8px rgba(38, 63, 226, 0.5)"}}
                whileTap={{scale: 0.9 ,y: 2, }}
                transition={{type:"spring"}}>
                    <p>View Resume</p>
            </motion.button>
        </motion.div>


        <BottomLinks></BottomLinks>


    </div>



  </div>
  );

}

export default Main;
