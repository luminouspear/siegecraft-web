import styles from "../../styles";

const SectionWrapper = (Component, idName, bgColor) =>
	function HOC() {
		return (
			<section className={`${styles.fullWidthComponentStyle} ${bgColor ? bgColor : 'bg-sc-off-white'}`}>
				<span className="hash-span hidden" id={idName}>
					&nbsp;
				</span>
				<Component />
			</section>
		);
	};

export default SectionWrapper;
