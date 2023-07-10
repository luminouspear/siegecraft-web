import React, { useEffect, useState } from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { homePageSectionTitles } from '../../constants'

const StoreCTASection = () => {

	const [sectionImage, setSectionImage] = useState(null)


	useEffect(() => {
		homePageSectionTitles[3].image().then((module) => {
			setSectionImage(module.default)
		})
	}, [])

  return (
		<div className="flex flex-col items-center w-full py-24 mx-auto md:w-full">
			<h2
				className="pb-8 mx-auto text-4xl text-center font-Cinzel lg:w-1/2"
				dangerouslySetInnerHTML={{
					__html: homePageSectionTitles[3].title,
				}}
			/>
			<img
				src={sectionImage}
				alt={homePageSectionTitles[3].alt}
				className="object-cover pb-8 mx-auto lg:w-10/12 lg:rounded-xl"
			/>
			<p
				className="px-6 mx-auto text-xl lg:w-1/2"
				dangerouslySetInnerHTML={{
					__html: homePageSectionTitles[3].subTitle,
				}}
          />
          {/* <button className='w-11/12 py-4 mt-8 text-2xl font-bold text-center rounded cursor-pointer bg-sc-red hover:bg-sc-red-dark text-sc-off-white hover:text-sc-gold font-Cinzel lg:w-auto lg:px-12' >{homePageSectionTitles[3].CTA }</button> */}
		</div>
  );
}

export default SectionWrapper(StoreCTASection, "store", "bg-sc-off-white")