import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { homePageSectionTitles, mainPointsContent, playIconsContent } from '../../constants'
import { Reveal } from '../global/utils/Reveal'

const MainPoints = () => {
  return (
      <div className="w-10/12 py-24 mx-auto md:w-full">
            <h2 className="pb-16 mx-auto text-4xl text-center font-Cinzel lg:w-1/2" dangerouslySetInnerHTML={{ __html: homePageSectionTitles[0].title }} />

		    <ul className="w-11/12 mx-auto md:grid md:grid-cols-9 lg:w-11/12 xl:w-9/12 font-Catamaran ">
				{mainPointsContent.map((content) => (
					<li key={content.index} className="col-span-3 ">
						<Reveal className="flex flex-col items-center justify-center space-y-2 " delay={0.3 + (content.index / 5 ) }>
							<img src={content.icon} alt={content.alt} className="h-24" />
							<h3 className="text-xl font-bold text-center">
								{content.title}
							</h3>
							<p className="px-0 pb-12 text-xl text-center sm:px-2 md:px-3 md:pb-0">
								{content.text}
							</p>
						</Reveal>
					</li>
				))}
          </ul>
          <Reveal width={"90%"} initY={0} className="flex items-center justify-center w-full mx-auto md:mt-12 lg:w-10/12 xl:w-8/12">
              <ul className="grid w-11/12 gap-4 mx-auto md:w-9/12 md:grid-flow-col xl:w-7/12 md:grid-cols-9 md:gap-4">
                  {playIconsContent.map((content) => (
                      <li key={content.index} className="w-3/4 mx-auto border-2 rounded-lg sm:w-1/2 md:w-full md:col-span-3 border-sc-dark-black">
                          <div className="flex flex-row items-center justify-start gap-4 text-lg font-Catamaran ">
                              <img src={content.icon} alt={content.alt} className="h-12 p-2" />
                              <p className="font-bold">{content.title}</p>
                          </div>
                      </li>
                  ))}
              </ul>
          </Reveal>
		</div>
  );
}

export default SectionWrapper(MainPoints, "mainpoints", "bg-sc-off-white");