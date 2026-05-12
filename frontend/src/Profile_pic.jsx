import TiltedCard from './Profile_pic_import';


function Profile_Pic(){

    return(

<TiltedCard
  imageSrc="/Portfolio/public/Linkedin_me.JPG"
  altText="Miguel-Medina"
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
