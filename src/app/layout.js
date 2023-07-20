import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          	<div className="flex justify-between py-1 px-6">
			      <div className=" flex gap-x-4">
				        <a href="Promo"  className="border border-black hover:duration-700 hover:border-red-500 hover:bg-red-100/50 py-1 rounded flex gap-x-2 px-2 text-xs text-center">
						      <img src="./asset/icons/etudiant.png" class=""/>
						      <p className='self-center'>Promo</p>
				        </a>
				        <button  className="border border-black py-1 hover:duration-700 rounded hover:border-red-500 hover:bg-red-100/50 flex gap-x-2 px-2 text-xs text-center">
						      <img src="./asset/icons/video.png" class=""/>
						      <p className='self-center'>Participer au reunion d'information en ligne</p>
				        </button>      
			      </div>
		        <div  className="flex gap-x-8">
				        <a  href="#" class="self-center">
					          <img src="./asset/icons/facebook.png" className="hover:rounded-full hover:bg-blue-500"/>	
				        </a>
				        <a  href="#" class="self-center">
					          <img src="./asset/icons/twitter.png" className="hover:rounded-full hover:bg-blue-500"/>
				        </a>
				        <a  href="#" class="self-center">
					        <img src="./asset/icons/linkedin.png" className="hover:bg-blue-500"/>
				        </a>
			      </div>
			</div>
		    <div className="bg-black flex justify-between py-4 gap-x-8 px-6">
			      <div class="">
			          <img src="./asset/icons/image.png" class=""/>
			      </div>
			      <div className="flex">	
				      <ul className="flex text-white gap-x-9 list-none">
					      <li>
						      <a href="#" className="text-white hover:text-red-500 hover:duration-700 text-xs">
								   Accueil
						      </a>
					      </li>
					      <li>
						      <a href="#" className="hover:text-red-500 hover:duration-700 text-xs">
								    Nos Formations
						      </a>
					      </li>
					      <li>
						      <a href="#" className="hover:text-red-500 hover:duration-700 text-xs">
								    Nos Campus
						      </a>
					      </li>
					      <li>
						      <a href="#" className="hover:text-red-500 hover:duration-700 text-xs">
								    A propos de nous
						      </a>
					      </li>
					      <li>
						      <a href="#" className="hover:text-red-500 hover:duration-700 text-xs">	
								    Blog
						      </a>
					      </li>
					      <li>
						      <a href="Contact"  className="text-white border hover:bg-red-500/50 hover:text-white hover:border-red-500 hover:duration-700 border-white py-3 px-9 rounded text-xs">
							  		Contact
						      </a>
					      </li>	
				      </ul>
			      </div>
          	</div>
        </nav>

        {children}
        
          <footer>
            <div className="flex justify-between px-6 bg-black py-4">
			        <div>
 				        <img src="./asset/icons/image.png" className="h-[60px]"/>
				        <p className="text-white mt-3 text-xs text-center">
					        Plus qu’une formation , un metier
				        </p>
			        </div>
			        <div className="text-white flex flex-col gap-y-3 text-xs">
 				        <a href='#'>
					        A propos de nous
				        </a>
				        <a href='#' className="">
					        Contact
				        </a>
				        <a href='#' className="">
					        Notre impact
				        </a>
			        </div>
			        <div className="text-white flex flex-col gap-y-3 text-xs">
 				        <a href='#'>
					        Formation référent Digital
				        </a>
				        <a href='#' className="">
					        Formation Developpeur web 
				        </a>
			        </div>
			        <div className="text-white flex flex-col gap-y-3 text-xs">
 				        <a href='#'>
					        Campus de Libreville
				        </a>
				        <a href='#' className="">
					        Campus de Port Gentil
				        </a>
				        <a href='#' className="">
					        Campus de Moanda
				        </a>
			        </div>
		        </div>
          </footer>
        </body>
    </html>
  )
}