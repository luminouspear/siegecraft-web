import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ElementPageIconComponent = ({ element,  isScrolled, currentGlobalElementInView, setCurrentElementInView }) => {

    const [isCurrentElementInView, setIsCurrentElementInView] = useState(null)

    const ElementIcon = element.elementIcon
    const elementHover = "group-hover:" + element.elementFill


    useEffect(() => {

          setIsCurrentElementInView(isScrolled && currentGlobalElementInView === element.elementName.toLowerCase())

	}, [currentGlobalElementInView, isScrolled])


	const handleClick = () => {
		setCurrentElementInView(element.elementName.toLowerCase())
	}



  return (
		<Link
			className={` col-start-${element.id} col-span-1 flex flex-col items-center group`}
			key={element.id}
			to={{
				hash: `#${element.elementName.toLowerCase()}`,
			}}
		  onClick={handleClick}
		>
		  <ElementIcon
			  className={`${!isCurrentElementInView
					  ? "h-5 md:h-8 scale-85 mb-2 opacity-90 group-hover:scale-100 text-sc-off-white"
					  : `h-8 md:h-12 scale-110 ${!isScrolled ? "text-sc-off-white" : `${element.elementFill} `}`
				}  group-hover:opacity-100
				 transition-all duration-500 ease-in-out ${elementHover}`}

			/>
			<h3
				className={`${
					!isCurrentElementInView && isScrolled
						? "invisible group-hover:visible group-hover:font-medium"
						: `visible  font-bold`
				} font-Cinzel text-sm sm:text-base text-sc-off-white pt-2 ${elementHover} `}
			>
				{element.elementName}
			</h3>
		</Link>
  );
}

export default ElementPageIconComponent
