import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Header() {
  return (
    <header className="w-full h-24 bg-gradient-to-b from-black/80 to-black/60 border-b-2 border-identity">
      <div className="w-full max-w-min m-auto md:mx-16 flex items-center">
        <Logo />
      </div>
      <div className="w-full absolute hidden md:flex right-0 mt-4 mr-16 max-w-min items-center z-50">
        <SocialMedia />
      </div>
      <div className="w-full absolute md:flex right-0 mt-4 mr-16 max-w-min items-center">
        <Navbar />
      </div>
    </header>
  );
}
