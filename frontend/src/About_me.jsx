import Header from "./header";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function About() {
    return (
        <div className="bg-black min-h-screen ">
            <Header/>
                <div>
                    <motion.h1 className="text-white text-5xl mt-50 ml-50  rounded max-w-60"
                    initial={{opacity: 0 ,y:50 }}
                    animate={{opacity: 1 ,y:0,}}
                    transition={{duration:2}}>
                        About Me
                    </motion.h1>
                    <motion.p className="text-xl mt-5 ml-20 p-5 text-white rounded max-w-250"
                    initial={{x:-50}}
                    animate={{x:0}}
                    transition={{duration:2}}>
                        Hello! My name is Miguel, and I am a software engineering student at California Polytechnic State University San Luis Obispo. I am passionate about technology and programming, and I am always eager to learn new skills and take on new challenges. In my free time, I enjoy working on personal projects, exploring new programming languages, and collaborating with others in the tech community. I am excited to continue growing as a developer and to make meaningful contributions to the field of software engineering.
                    </motion.p>
                    <motion.hr className="text-white ml-10 mr-10 "
                    initial={{x:1560}}
                    animate={{x:0}}
                    transition={{duration:1.5, delay:0.3}}></motion.hr>

                </div>

        </div>
    );
}
export default About;
