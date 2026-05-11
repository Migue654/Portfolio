
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState} from "react";
import New_viewer from "./New_viewer.jsx";
function Header (){

    const [showModal, setShowModal] = useState(false);

    return (
        <div className=" pt-5 text-white ">


           <div className="grid grid-cols-2 p-3  ">
                <motion.button className="bg-blue-500 rounded p-1 w-40"
                    initial={{opacity:0, }}
                    animate={{ opacity: 1, }}
                    whileHover={{scale: 1.05 , boxShadow: "0px 0px 8px rgba(38, 63, 226, 0.5)"}}
                    whileTap={{scale: 0.8 ,y: 2, }}
                    transition={{type:"spring" , duration: 3}}
                    onClick={()=>setShowModal(!showModal)}>
                        <p>New Viewer?</p>
                    </motion.button>



                <div className="flex flex-row gap-2 justify-end ">





                    <Link to="/" >
                        <motion.p className="rounded " whileHover={{scale: 1.09}}> Home</motion.p>
                    </Link>
                    <div> |</div>
                     <Link to="/about" className="bg-">
                        <motion.p whileHover={{scale: 1.09}}> About Me</motion.p>
                    </Link>
                    <div> |</div>
                    <Link to ="/projects">
                        <motion.p whileHover={{scale: 1.09}}>
                            Projects
                        </motion.p>

                     </Link>
                    <div> |</div>
                    <Link to="/experience">
                        <motion.p whileHover={{scale: 1.09}}>
                            Experience
                        </motion.p>
                        </Link>
                </div>

            </div>
            {showModal && <New_viewer onClose={() => setShowModal(false)} />}
        </div>
    );
}
export default Header;
