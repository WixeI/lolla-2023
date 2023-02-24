import Head from "next/head";
import { RxHamburgerMenu, RxCrossCircled } from "react-icons/rx";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import { TfiWorld } from "react-icons/tfi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="no-flow-x-center fixed z-10 flex w-full items-center justify-between bg-white py-2 px-4 drop-shadow-lg md:container md:mx-auto md:mt-2">
        {/* Information */}
        <div className="flex items-center gap-3">
          <img className="h-[min(2.5rem,_10vw)]" src="/logo-lolla.png" alt="Lollapalooza 10ª Edição Brasil" />
          <div className="text-xs font-semibold sm:text-sm">
            <p>24, 25 e 26 de março de 2023</p>
            <p className="hidden sm:block">São Paulo</p>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <Dialog.Root>
          <Dialog.Trigger className="flex lg:hidden">
            <RxHamburgerMenu size="1.5rem" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-md" />
            <Dialog.Content className="fixed top-0 bottom-0 right-0 bg-white px-4 py-2">
              <Dialog.Title className="DialogTitle">Navigation Menu</Dialog.Title>
              <ul>
                <li>
                  <Dialog.Close>
                    <a href="#">Merchan</a>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close>
                    <a href="#">Lockers</a>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close>
                    <a href="#">Pacotes de Viagem</a>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close>
                    <a href="#">Transfer</a>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close>
                    <a href="#">Slideshows</a>
                  </Dialog.Close>
                </li>
              </ul>
              <Dialog.Close>
                <button className="absolute top-2 right-2" aria-label="Close">
                  <RxCrossCircled />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        {/* Desktop Navigation Menu */}
        <NavigationMenu.Root className="hidden lg:inline">
          <NavigationMenu.List className="flex space-x-4">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Produtos</NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute">
                <ul>
                  <li>
                    <NavigationMenu.Link href="#">Merchan</NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link href="#">Lockers</NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link href="#">Pacotes de Viagem</NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link href="#">Transfer</NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link href="#">Slideshows</NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Informações</NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute">
                <ul>
                  <li>
                    <NavigationMenu.Link href="https://github.com/radix-ui">FAQ</NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link href="https://github.com/radix-ui">Entrada Social</NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Experiência</NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute">
                <ul>
                  <li>
                    <NavigationMenu.Link href="https://github.com/radix-ui">O Festival</NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>{" "}
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link href="https://github.com/radix-ui">Contato</NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link href="https://github.com/radix-ui">Ingressos</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>

      <main>
        {/* Lineup Section */}
        <section className="bg-[url('/background-blue-sun.jpg')] bg-fixed bg-center pt-[clamp(5rem,15vw,8rem)]">
          {/* Announcement & Lineup */}
          <div className="container mx-auto mb-8 xl:px-[10vw]">
            <img src="header-content-1080p.png" className="mx-auto mb-[clamp(2rem,8vw,4rem)]" />
            <div className="mx-auto grid grid-cols-7 content-center px-4 pb-4">
              <img src="lineup-style-left.png" className="hidden sm:block" />
              <img src="lineup-content.png" className="col-span-full justify-self-center sm:col-span-5" />
              <img src="lineup-style-right.png" className="hidden sm:block" />
            </div>
          </div>
          {/* City BG & Section Divider */}
          <div className="h-36 bg-[url('/background-row-city.png')] bg-top bg-repeat-x" />
          <div className="relative flex h-1 items-center justify-center gap-[30%] bg-[#00A5D9] bg-[url('/bg-line-divider.png')] bg-cover bg-repeat-x md:h-2">
            <img src="icon-rollerskates.png" className="mb-8 h-[min(25vw,7rem)]" />
            <img src="icon-old-player.png" className="hidden h-[min(20vw,4.5rem)] sm:block" />
          </div>
        </section>

        <div className="bg-[#03af99] pt-[min(20vw,8rem)]">
          {/* Our Products Section */}
          <section className="container mx-auto mb-[min(10vw,8rem)]">
            <h1 className="font-outline-1 mb-16 text-center font-lalezar text-[clamp(2rem,6vw,3.5rem)] uppercase leading-none text-white drop-shadow-[3px_3px_0px_black]">
              Conheça nossos produtos
            </h1>
            <ul className="mx-[12.5%] grid justify-center gap-[clamp(1rem,5vw,3rem)] sm:grid-cols-3 xl:mx-[18%]">
              <li>
                <a href="#" className="flex flex-col items-center gap-1">
                  <img src="merch-style.png" className="w-[clamp(50%,30vw,200px)]" />
                  <span className="text-center text-2xl font-semibold">Merch</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex flex-col items-center gap-1">
                  <img src="lolla-lockers-style.png" className="w-[clamp(50%,30vw,200px)]" />
                  <span className="text-center text-2xl font-semibold">Lolla Lockers</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex flex-col items-center gap-1">
                  <img src="pacotes-de-viagem-style.png" className="w-[clamp(50%,30vw,200px)]" />
                  <span className="text-center text-2xl font-semibold">Pacotes de Viagem</span>
                </a>
              </li>
            </ul>
          </section>
          {/* Check Everything that Happened */}
          <section className="center container mx-auto">
            <h1 className="font-outline-1 mb-8 text-center font-lalezar text-[clamp(2rem,6vw,3.5rem)] uppercase leading-none text-white drop-shadow-[3px_3px_0px_black]">
              Confira tudo que rolou
              <br />
              no #Lollabr 2022
            </h1>
            <div className="relative mx-auto w-full sm:w-3/4 xl:w-3/5 ">
              <img
                src="icon-peace.png"
                className="absolute left-0 top-1/2 hidden w-[clamp(96px,10vw,140px)] -translate-x-2/3 -translate-y-1/2 sm:inline"
              />
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/-j6pmPwlCkg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              ></iframe>
              <img
                src="icon-rock-hand.png"
                className="absolute right-0 top-1/2 hidden w-[clamp(96px,10vw,140px)] translate-x-2/3 -translate-y-1/2 sm:inline"
              />
            </div>
          </section>
        </div>
        {/* Lolla is Global */}
        <section className="flex justify-between bg-neutral-800 p-4 text-white md:justify-center md:gap-12">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <TfiWorld /> <h1>Lolla é Global</h1>
          </div>
          <button className="w-[min(50%,20rem)] rounded-lg bg-violet-500 py-2 px-6">Faça o Tour</button>
        </section>
        {/* Footer */}
      </main>
    </>
  );
}
