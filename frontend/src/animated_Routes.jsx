import { Routes, Route, useLocation } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import Main from "./main_page.jsx";
import About from "./About_me.jsx";
import Projects from "./Projects.jsx";
import New_viewer from "./New_viewer";
import Experience from "./experience.jsx"

function PageTransition({children}){
    return <motion.div
    initial={{opacity: 0 , x:-50 }}
    animate={{opacity:1, x:0}}
    exit={{opacity: 0 ,x:50}}
    transition={{duration: 0.5}}
    >
      {children}
    </motion.div>

}

function AnimatedRoutes(){
  const location = useLocation();


  return(
  <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

            <Route path="/" element={<PageTransition><Main /> </PageTransition>}></Route>
            <Route path= "/about" element= {<PageTransition><About/></PageTransition>}></Route>
            <Route path = "/projects" element = {<PageTransition><Projects/></PageTransition>}></Route>
            <Route path = "/experience" element = {<PageTransition> <Experience/> </PageTransition>}></Route>

      </Routes>

  </AnimatePresence>


  )
}
export default AnimatedRoutes;
