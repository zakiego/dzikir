export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-bl from-[#E8F0FF] to-[#E5F5FF]">
			<div className="relative pt-20 px-14 max-w-2xl m-auto bg-white/60 min-h-screen">
				<svg
					width="414"
					height="401"
					viewBox="0 0 414 401"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-0 right-0"
				>
					<g filter="url(#filter0_f)">
						<path
							d="M461 290.77C461 357.891 417.938 412.304 364.818 412.304C311.698 412.304 185 455.526 185 388.404C185 321.283 345.796 200 398.916 200C452.036 200 461 223.648 461 290.77Z"
							fill="#F9F4F4"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f"
							x="-15"
							y="0"
							width="676"
							height="626"
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
							<feGaussianBlur
								stdDeviation="100"
								result="effect1_foregroundBlur"
							/>
						</filter>
					</defs>
				</svg>
				<svg
					width="375"
					height="502"
					viewBox="0 0 375 502"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-0"
				>
					<g filter="url(#filter0_f)">
						<path
							d="M136.389 68C136.389 206.347 -38.8358 301.5 -123.612 301.5C-208.387 301.5 -170.611 206.347 -170.611 68C-170.611 -70.3473 51.6128 -158 136.389 -158C221.164 -158 136.389 -70.3473 136.389 68Z"
							fill="#F9F4F4"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f"
							x="-379"
							y="-358"
							width="753.067"
							height="859.5"
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
							<feGaussianBlur
								stdDeviation="100"
								result="effect1_foregroundBlur"
							/>
						</filter>
					</defs>
				</svg>

				<main className="relative">
					<div name="navbar" className="font-bold text-4xl">
						<div className="flex flex-row justify-between items-center">
							<h1 className="text-opacity-90">Dzikir Pagi</h1>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="fill-current text-hitam-33 h-7 w-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={3}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</div>
					</div>

					<div className="card place pt-14">
						<div
							name="card"
							className="bg-biru-tipis py-12 px-8 rounded-[30px] shadow-tipis"
						>
							<div name="arab" dir="rtl" className="font-arab text-3xl">
								اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ
								نَحْيَا، وَبِكَ نَمُوْتُ وَإِلَيْكَ
							</div>
							<div
								name="arti"
								className="font-semibold text-[#333333] text-opacity-80"
							>
								Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak
								disembah kecuali Engkau, Engkaulah yang menciptakanku. Aku
								adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu (yaitu
								aku akan mentauhidkan-Mu) semampuku dan aku yakin akan janji-Mu
								(berupa surga untukku). Aku berlindung kepada-Mu dari kejelekan
								yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui
								dosaku. Oleh karena itu, ampunilah aku. Sesungguhnya tiada yang
								mengampuni dosa kecuali Engkau.
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

// bg-[#F9F4F4]
