import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SocialMedia from '../SocialMedia/SocialMedia';
import style from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div
        className={`${style.headerbar} w-full h-16 bg-gradient-to-b from-black/80 to-black/60 border-b-2 border-identity`}
      >
        <div className="w-full max-w-min m-auto md:mx-16 flex items-center">
          <Logo />
        </div>
        <div>
          <div className="w-full absolute flex right-0 mt-4 mr-6 md:mr-16 max-w-min items-center z-50">
            <SocialMedia />
          </div>
          <div className="w-full absolute md:flex right-0 mt-4 mr-16 max-w-min items-center">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
