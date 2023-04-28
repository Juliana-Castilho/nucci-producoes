import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 lg:max-w-7x1 md:absolute md:right-0 md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:py-5 md:block">
              {/* HAMBURGER BUTTON MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close.svg"
                      width={30}
                      height={30}
                      alt="menu-toggle"
                    />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="menu-toggle"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 mt-14 justify-self-center pb-3 pt-20 md:pt-0 md:block md:pb-0 md:mt-4 bg-black/80 md:bg-transparent rounded ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-max items-baseline justify-center md:flex">
                  <li
                    className="pb-6 text-orange-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-primary border-primary md:hover:text-primary md:hover:bg-transparent"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className="pb-6 text-orange-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-primary border-primary md:hover:text-primary md:hover:bg-transparent"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Link href="/sobre">Sobre</Link>
                  </li>
                  <li
                    className="pb-6 text-orange-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-primary border-primary md:hover:text-primary md:hover:bg-transparent"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Link href="/portfolio">Portfólio</Link>
                  </li>
                  {/* DROPDOWN */}
                  <li
                    className="pb-6 text-orange-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-primary border-primary md:hover:text-primary md:hover:bg-transparent"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <Link href="#">Serviços</Link>
                    <div
                      className={`md:absolute w-full md:w-auto md:max-w-7x1 md:right-8 md:text-end ${
                        dropdown ? 'block' : 'hidden'
                      }`}
                    >
                      <ul className="bg-gradient-to-b from-black/80 to-black/60 mt-3 md:rounded-md">
                        <li
                          className="py-3 px-6 border-b-2 hover:bg-primary border-primary/50 md:hover:text-primary md:hover:bg-transparent"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <Link href="/servicos/gravacao">Gravação</Link>
                        </li>
                        <li
                          className="py-3 px-6 border-b-2 hover:bg-primary border-primary/50 md:hover:text-primary md:hover:bg-transparent"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <Link href="/servicos/mixagem">Mixagem</Link>
                        </li>
                        <li
                          className="py-3 px-6 border-b-2 hover:bg-primary border-primary/50 md:hover:text-primary md:hover:bg-transparent"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <Link href="/servicos/masterizacao">
                            Masterização
                          </Link>
                        </li>
                        <li
                          className="py-3 px-6 border-b-2 hover:bg-primary border-primary/50 md:hover:text-primary md:hover:bg-transparent"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <Link href="/servicos/producao-musical">
                            Produção Musical
                          </Link>
                        </li>
                        <li
                          className="py-3 px-6"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <Link href="/servicos/aulas">Aulas</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
