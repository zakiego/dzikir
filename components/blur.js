export default function Blur(props) {
	const { warna } = props;

	return (
		<div>
			<svg
				width="379"
				height="351"
				viewBox="0 0 379 351"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-0 right-0"
			>
				<g filter="url(#filter0_f)">
					<path
						d="M426 240.77C426 307.891 382.938 362.304 329.818 362.304C276.698 362.304 150 405.526 150 338.404C150 271.283 310.796 150 363.916 150C417.036 150 426 173.648 426 240.77Z"
						fill={warna}
					/>
				</g>
				<defs>
					<filter
						id="filter0_f"
						x="0"
						y="0"
						width="576"
						height="526"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur" />
					</filter>
				</defs>
			</svg>
			<svg
				width="325"
				height="452"
				viewBox="0 0 325 452"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-0"
			>
				<g filter="url(#filter0_f)">
					<path
						d="M136.389 68C136.389 206.347 -38.8358 301.5 -123.612 301.5C-208.387 301.5 -170.611 206.347 -170.611 68C-170.611 -70.3473 51.6128 -158 136.389 -158C221.164 -158 136.389 -70.3473 136.389 68Z"
						fill={warna}
					/>
				</g>
				<defs>
					<filter
						id="filter0_f"
						x="-329"
						y="-308"
						width="653.067"
						height="759.5"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur" />
					</filter>
				</defs>
			</svg>
		</div>
	);
}
