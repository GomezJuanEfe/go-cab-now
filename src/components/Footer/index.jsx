import './Footer.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import FooterSection from '../FooterSection';
import FooterBlog from '../FooterBlog';
import gcnLogo from '../../assets/icons/GCN-logo.png';
import blogImg1 from '../../assets/images/1(2).jpg';
import blogImg2 from '../../assets/images/2(2).jpg';

const Footer = () => {
  const [active, setActive] = useState(undefined);

  return (
    <footer className="footer">

      <div className="footer-container">

        <FooterSection title="Contact Us" active={active} setActive={setActive} id={1}>
          <img src={gcnLogo} alt="logo" />
          <p>
            {/* eslint-disable-next-line max-len */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium dolore quis a, expedita, nostrum doloremque veritatis iusto magni voluptate hic inventore ipsa earum iure quam voluptates quaerat culpa quisquam.
          </p>
          <ul>
            <li>
              <FaMapMarkerAlt />
              A-32, Albany, Newyork.
            </li>
            <li>
              <FaPhoneAlt />
              518 - 457 - 5181
            </li>
            <li>
              <FaEnvelope />
              contact@gmail.com
            </li>
          </ul>
        </FooterSection>

        <FooterSection title="Useful Links" active={active} setActive={setActive} id={2}>
          <ul>
            <li>Home</li>
            <li>Our Vehical</li>
            <li>Latest Video</li>
            <li>Services</li>
            <li>Booking Deal</li>
            <li>Emergency Call</li>
            <li>Mobile App</li>
          </ul>
        </FooterSection>

        <FooterSection title="About" active={active} setActive={setActive} id={3}>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Login</li>
            <li>Register</li>
            <li>Terms & Co.</li>
            <li>Privacy</li>
            <li>Support</li>
          </ul>
        </FooterSection>

        <FooterSection title="Our Location" active={active} setActive={setActive} id={4}>
          <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin" allowFullScreen />
        </FooterSection>

        <FooterSection title="New Topics" active={active} setActive={setActive} id={5}>
          <div className="footer-blog">

            <FooterBlog
              img={blogImg1}
              title="Recent News"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, totam quibusdam. Excepturi, recusandae animi expedita saepe libero modi dignissimos a."
            />

            <FooterBlog
              img={blogImg2}
              title="Recent News"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, totam quibusdam. Excepturi, recusandae animi expedita saepe libero modi dignissimos a."
            />

          </div>
        </FooterSection>

      </div>

    </footer>
  );
};

export default Footer;
