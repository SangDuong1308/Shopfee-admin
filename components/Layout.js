import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import {useState} from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Layout({children}) {
  const [showNav,setShowNav] = useState(false);
  const { data: session } = useSession();

  //test button hamburger
  const inactiveLink =
    "flex gap-1 p-2 hover:bg-dk-dark-bg rounded-l-lg hover:text-dk-gray-100 ease-linear duration-300";

  const activeLink =
    inactiveLink +
    " text-dk-gray-100 bg-dk-dark-bg trans rounded-md";

  if (!session) {
    return (
      // <div>
        //  <title>US Coffee</title>
        // <meta name="description" content="USCoffee"/> 
        // <div className="bg-gray-300 rounded-xl p-8 dark:bg-slate-800 h-screen w-screen grid justify-items-center items-center  ">
        <div className="bg-dk-gray-200 w-screen h-screen flex items-center">
          <div className="text-center p-6 px-4 rounded-lg bg-blue w-full">
            <p className="p-2">Hi, we are trying to build a web project</p>
            {/* <button onClick={() => signIn("google")} className="bg-white-400 p-2 px-4 rounded-lg"> */}
            <button onClick={() => signIn("google")} className="bg-dk-gray-500 p-2 px-4 rounded-lg">
              Login with Google
            </button>
          </div>
        </div>
      // </div>
    );
  }

  return (
    <div className="bg-dk-gray-800 min-h-screen">
      <div className="block md:hidden flex items-center p-4">
        <div className={activeLink}>
          <button onClick={() => setShowNav(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

          <div className="flex grow justify-center mr-6">
            <div className={activeLink}>
              <Logo />
            </div>
          </div>

      </div>

      <div className="flex text-base">
        <Nav show={showNav} />
        <div className="bg-dk-dark-bg p-4 flex-grow">{children}</div>
      </div>
    </div>
  );
}