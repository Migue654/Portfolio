
import BorderGlow from './Border_glow.jsx';
import StarBorder from './Star_border'
function ContactInfo(){

return(
<div>


    <StarBorder
    as="button"
    className="custom-class ml-35"
    color="white"
    speed="5s"
    >
    // content
    </StarBorder>


    <BorderGlow
        edgeSensitivity={20}
        glowColor="40 80 80"
        backgroundColor="#060010"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={['#c084fc', '#f472b6', '#38bdf8']}
        className='w-100 h-100 m-10'
        >
        <div style={{ padding: '2em',}}>
            <h2>-Contact Info-</h2>
            <p>Here is my Contact info</p>
        </div>
        </BorderGlow>

</div>

    );


}

export default ContactInfo;
