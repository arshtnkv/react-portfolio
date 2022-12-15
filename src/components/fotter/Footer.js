import socials from './../../helpers/socialList';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {
              socials.map(item => {
                return <li className="social__item"><a href={item.link}><img src={item.img.src} alt={item.img.alt} /></a></li>
              })
            }
          </ul>
          <div className="copyright">
            <p>© 2022 arshtnkv@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;