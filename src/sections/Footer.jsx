import { socialImgs } from "../constants/index1";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              href={`${img.url}`}
              key={img.name}
            >
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Youssef Amen Allah. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
