import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (



    <div className="grid grid-rows-[20px_1fr_20px]   min-h-screen p-4 sm:p-1  font-[family-name:var(--font-geist-sans)]">
      <body className="   sm:items-start">
      
      <header className="bg-slate-500">
        <h1 className="text-black  px-20 font-extrabold">Techstart</h1>
        <nav className="flex flex-row justify-end">
          <ul className="flex flex-wrap gap-20  border-x-2 text-white pt-10">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      {/* this is the hero section */}
      <section className="bg-lime-400 pt-20 pr-0 pl-20 gap-10 pb-20">
        <div>
          <h1 className="font-extrabold text-black px-40 items-center justify-center align-center">Welcome to Techstart!</h1>
          <div>
            <div>
              <h2>We help you build your tech dreams</h2>
            </div>
            <div>
              <p>Web Development is the work involved in developing a website for the internet</p>
            </div>
          </div>
          <button>View More</button>
        </div>
      </section>

      </body>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>
          <ul>

          </ul>
        </div>
      </footer>
    </div>
  );
}
