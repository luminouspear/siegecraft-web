import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { homePageSectionTitles, mainPointsContent, playIconsContent } from '../../constants'

const MainPoints = () => {
  return (
      <div className=" py-24 w-10/12 md:w-full mx-auto">
          <h2 className="text-4xl font-Cinzel text-center md:w-1/2 mx-auto pb-16" dangerouslySetInnerHTML={{ __html: homePageSectionTitles[0].title }} />
			<ul className="md:grid md:grid-cols-9 w-10/12 lg:w-8/12 mx-auto font-Catamaran">
				{mainPointsContent.map((content) => (
					<li key={content.index} className="col-span-3">
						<div className="flex flex-col justif-center items-center gap-4">
							<img src={content.icon} alt={content.alt} className="h-24" />
							<h3 className="text-xl font-bold ">
								{content.title}
							</h3>
							<p className="px-6 text-xl text-center">
								{content.text}
							</p>
						</div>
					</li>
				))}
          </ul>
          <div className="py-12 flex justify-center items-center mx-auto w-full lg:w-10/12 xl:w-8/12">
              <ul className="flex flex-wrap md:grid md:w-7/12 mx-auto grid-flow-col grid-cols-8 md:grid-cols-9 gap-8">
                  {playIconsContent.map((content) => (
                      <li key={content.index} className="w-1/2 md:w-full md:col-span-3 border-sc-dark-black border-2 rounded-lg mx-auto">
                          <div className="flex flex-row justify-start items-center text-lg font-Catamaran gap-4">
                              <img src={content.icon} alt={content.alt} className="h-12 p-2" />
                              <p className="font-bold">{content.title}</p>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
		</div>
  );
}

export default SectionWrapper(MainPoints, "mainpoints", "bg-sc-off-white");