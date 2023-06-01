import styles from "../../styles";

const FullWidthWrapper = (Component, idName) =>
	function HOC() {
		return (
			<section className={styles.fullWidthComponentStyle}>
				<span className="hash-span hidden" id={idName}>
					&nbsp;
				</span>
				<Component />
			</section>
		);
	};

export default FullWidthWrapper;
