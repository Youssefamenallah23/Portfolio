import { logoIconsList } from "../constants/index1";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt="logo" />
    </div>
  );
};
const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>
      <div className=" marquee h-52">
        <div className="marquee-box md:gap-16 gap-5">
          {logoIconsList.map((logo, index) => (
            <LogoIcon key={index} icon={logo} />
          ))}
          {logoIconsList.map((logo, index) => (
            <LogoIcon key={index} icon={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
