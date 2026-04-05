

import { Link } from "react-router";

function BottomLinks(){
    return(
        <div className="fixed bottom-4 left-0 right-0 flex flex-row justify-center gap-5 text-md">
        <div> <Link to="https://github.com/Migue654"> 💀 GitHub </Link> </div>
        <div> |</div>
        <div> <Link to="https://www.linkedin.com/in/miguel-medi/"> Linkedin </Link> </div>
        <div> |</div>
        <div> <Link to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHTfzQbtMBHGDjqdkqBdSScTFwzQQLHNRhZldmhQcNGDXZLQkbLVqvkLJbWkXsHJfpbSJ"> Email</Link> </div>

        </div>
    );

}
export default BottomLinks;
