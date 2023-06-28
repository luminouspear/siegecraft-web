import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { homePageSectionTitles } from '../../constants'

const StoreCTASection = () => {
  return (
		<div className=" py-24 w-full md:w-full mx-auto flex flex-col items-center">
			<h2
				className="text-4xl font-Cinzel text-center lg:w-1/2 mx-auto pb-8"
				dangerouslySetInnerHTML={{
					__html: homePageSectionTitles[3].title,
				}}
			/>
			<img
				src={homePageSectionTitles[3].image}
				alt={homePageSectionTitles[3].alt}
				className="lg:w-10/12 mx-auto lg:rounded-xl pb-8 object-cover"
			/>
			<p
				className="lg:w-1/2 mx-auto  text-xl px-6"
				dangerouslySetInnerHTML={{
					__html: homePageSectionTitles[3].subTitle,
				}}
          />
          <a className='bg-sc-red hover:bg-sc-red-dark text-sc-off-white hover:text-sc-gold font-Cinzel font-bold text-2xl w-11/12 mt-8 rounded text-center lg:w-auto lg:px-12 py-4 cursor-pointer' >{homePageSectionTitles[3].CTA }</a>
		</div>
  );
}

export default SectionWrapper(StoreCTASection, "store", "bg-sc-off-white")