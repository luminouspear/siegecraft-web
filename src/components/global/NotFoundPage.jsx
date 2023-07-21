import React from 'react'
import { Link } from 'react-router-dom'
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const NotFoundPage = () => {
  return (
		<section className="flex flex-col w-full h-screen bg-sc-off-white font-Catamaran">
			<div className="h-full">
			    <h1 className="px-16 text-6xl font-bold font-Cinzel mt-[20%]">
    				Page Not Found
    			</h1>
    			<p className="px-16 mt-16 text-3xl mb-[50vh]">
    				But all is not lost.{" "}
    				<Link
    					className=" hover:font-bold hover:text-sc-red-dark text-sc-red"
    					to={"/"}
    				>
    					Return home
    				</Link>{" "}
    				to begin again.
              </p>
			</div>
          <ContactSection />
          <FooterSection />
		</section>
  );
}

export default NotFoundPage