

import Header from "./header.jsx";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
function New_viewer({onClose}){


    return (
        <motion.div className=" fixed inset-0 flex justify-center items-center z-10"
        initial={{opacity:0,  }}
        animate={{opacity:1, }}
        transition={{duration:0.5}}>


                <div className="   rounded-3xl p-5 flex flex-col  bg-[rgb(64,64,64)] text-white ">
                    <div className="grid grid-cols-3 ">
                        <div/>
                        <h1 className=" text-2xl "> Welcome New Viewer</h1>
                        <div className=" flex justify-end">
                            <motion.button className="bg-red-500 rounded-full w-10 h-10 p-2"
                            whileHover={{scale:1.1 ,boxShadow: "0px 0px 12px rgba(255, 0, 0, 0.9)" }}
                            whileTap={{scale:0.99}}
                            onClick={onClose}>
                                    X
                                </motion.button>
                        </div>


                    </div>

                    <p className="mb-5 self-center"> Your feedback is very much appreciated 😄 !!</p>

                    <div>
                        <p> Some possible feedback may include....</p>
                        <ul  className="ml-10 list-disc mb-5">
                            <li>What are some bugs that you noticed?</li>
                            <li>What would you like to see added to this website?</li>
                            <li> Resume Feedback </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">

                        <label>
                        <p>(Optional) Full Name:</p>
                            <input type="text"  placeholder="Name" className=" ml-2 bg-gray-600 p-1 border rounded-xl w-xl "></input>
                        </label>

                        <label>
                            <p>(Optional) Email:</p>
                            <input type="email" placeholder="Email" className=" ml-2 bg-gray-600 p-1 border rounded-xl w-xl "></input>
                        </label>

                        <label>
                            <p className="ml-3">Feedback:</p>
                            <textarea placeholder="Your feedback here..." className=" ml-2 bg-gray-600 p-1 border rounded-xl w-3xl "></textarea>
                        </label>
                    </div>

                    <motion.button className="bg-blue-500 rounded p-1 w-35 mt-5 ml-20 self-end"
                    whileTap={{scale: 0.9 ,y: 0.5, }}
                    >
                        Submit

                    </motion.button>


                </div>




        </motion.div>
    );
}

export default New_viewer;
