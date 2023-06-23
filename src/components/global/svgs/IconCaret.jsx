export default function IconCaret({ className }) {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 13 22"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={{
				fillRule: "evenodd",
				clipRule: "evenodd",
				strokeLinejoin: "round",
				strokeMiterlimit: "2",
			}}
		>
			<path
				fill="currentColor"
				d="M3.109,0.509L12.453,9.214C12.824,9.559 12.999,10.035 12.975,10.505C13,10.938 12.855,11.381 12.536,11.724C12.509,11.753 12.482,11.78 12.453,11.806L3.109,20.511C2.38,21.19 1.252,21.19 0.524,20.511C-0.141,19.892 -0.178,18.851 0.441,18.186C0.468,18.158 0.495,18.13 0.524,18.104L8.675,10.509L0.524,2.916C-0.141,2.297 -0.178,1.256 0.441,0.591C0.468,0.563 0.495,0.535 0.524,0.509C1.252,-0.17 2.38,-0.17 3.109,0.509Z"
				style={{ fill: "currentColor" }}
			/>
		</svg>
	);
}
