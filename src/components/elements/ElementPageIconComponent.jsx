import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ElementPageIconComponent = ({ element,  isScrolled, currentGlobalElementInView }) => {

    const [isCurrentElementInView, setIsCurrentElementInView] = useState(null)

    const ElementIcon = element.elementIcon
    const elementHover = "group-hover:" + element.elementFill


    useEffect(() => {

          setIsCurrentElementInView(getIsCurrentElementInView(element, currentGlobalElementInView,isScrolled))

    }, [currentGlobalElementInView, isScrolled])


  return (
		<Link
			className={` col-start-${element.id} col-span-1 flex flex-col items-center group`}
			key={element.id}
			to={{
				hash: `#${element.elementName.toLowerCase()}`,
			}}
		>
			<ElementIcon
				className={`${
					!isCurrentElementInView && isScrolled
						? "h-5 md:h-8 scale-85 mb-2 opacity-90 group-hover:scale-100"
						: `h-8 md:h-12 scale-110 text-${element.elementFill}`
				}   group-hover:opacity-100
				 transition-all duration-500 ease-in-out text-sc-off-white ${elementHover}`}
			/>
			<h3
				className={`${
					!isCurrentElementInView && isScrolled
						? "invisible group-hover:visible"
						: "visible"
				} font-Cinzel text-sm sm:text-base text-sc-off-white pt-2 ${elementHover} `}
			>
				{element.elementName}
			</h3>
		</Link>
  );
}

export default ElementPageIconComponent

function getIsCurrentElementInView(element, currentGlobalElementInView, isScrolled) {
    return isScrolled && element.elementName.toLowerCase() === currentGlobalElementInView ? true : false
}
