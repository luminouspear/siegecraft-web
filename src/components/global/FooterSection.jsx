import React from 'react'
import SectionWrapper from "../hoc/SectionWrapper";
import { footerContent } from "../../constants";
import { Link } from 'react-router-dom';

const FooterSection = () => {

    function getFooterSection(section) {
        const sectionTitle = section.sectionTitle;
        const sectionLinks = section.sectionLinks;
        return (<div key={section.index}>
            <h3 className='uppercase mt-4 mb-6'>{sectionTitle}</h3>
            <ul>
                {Object.entries(sectionLinks).map(([key, value]) =>
                    (
                    <li key={key} className="mb-4 lg:mb-2 hover:text-sc-gold">
                        <Link
                            to={value.locationUrl}
                            onClick={()=>(window.scrollTo(0,0))}
                        >{value.locationName }</Link>
                    </li>
                ))}
            </ul>
        </div>)
    }

    const footer = footerContent.map((header) => getFooterSection(header))

  return (
		<div className="font-Catamaran font-thin text-sc-off-white flex flex-col lg:flex-row justify-evenly mx-auto w-10/12 lg:w-8/12 py-12 text-xl">
			{footer}
		</div>
  );
}

export default SectionWrapper(FooterSection, "footer", "bg-sc-dark-black");