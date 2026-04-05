

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


function DarkModeBut() {
    // const [darkmode, SetDarkMode] = useState(false);

    function toggleDarkMode (){

    }
    return(
        <div className='flex justify-end'>
            <motion.button onClick={()=>toggleDarkMode} className='bg-sky-500 p-1 rounded mt-5 mr-5'
                whileHover={{scale:1.05}}>
                darkmode button(possible slider animation???)
            </motion.button>
        </div>
    );

}
export default DarkModeBut;
