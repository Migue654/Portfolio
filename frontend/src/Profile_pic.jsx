import TiltedCard from './Profile_pic_import';


function Profile_Pic(){

    return(

<TiltedCard
  imageSrc="/public/Linkedin_me.JPG"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText=""
  containerHeight="400px"
  containerWidth="400px"
  imageHeight="400px"
  imageWidth="400px"
  rotateAmplitude={15}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text mt-5 ml-5 text-black">

    </p>
  }
/>
  );
}

export default Profile_Pic;

//  I was looking into how much id pay and whatnot but i could'nt find the fees and everything, and I just wanted to ask you what fees you pay and yea for that apartment just so i can have an idea
