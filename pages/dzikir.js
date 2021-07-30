import Navbar from "../components/navbar";

export default function DzikirDraft() {
	return (
		<div className="min-h-screen bg-gradient-to-bl from-[#E8F0FF] to-[#E5F5FF]">
			<div className="relative  min-h-screen max-w-6xl mx-auto">
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
								fill="#F9F4F4"
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
								color-interpolation-filters="sRGB"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="75"
									result="effect1_foregroundBlur"
								/>
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
								fill="#F9F4F4"
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
								color-interpolation-filters="sRGB"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="75"
									result="effect1_foregroundBlur"
								/>
							</filter>
						</defs>
					</svg>
				</div>
				<main className="relative pt-12 px-8">
					<Navbar />
					<div name="card section" className="pt-14">
						<div
							name="card"
							className="bg-biru-tipis py-12 px-9 md:px-16 rounded-[30px] shadow-tipis"
						>
							<div
								name="arab"
								dir="rtl"
								className="font-taha text-3xl md:text-5xl leading-relaxed md:leading-loose"
							>
								اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ
								نَحْيَا، وَبِكَ نَمُوْتُ وَإِلَيْكَ
							</div>
							<div
								name="arti"
								className="text-xs md:text-lg mt-6 leading-5 md:leading-relaxed font-normal tracking-wide"
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
							<div className="flex flex-row items-center pt-4 space-x-2 text-xs md:text-base">
								<p className="opacity-70">HR. Bukhari no. 6306</p>
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM10.2436 5.86862C10.403 5.7036 10.4912 5.48257 10.4892 5.25315C10.4872 5.02373 10.3952 4.80427 10.233 4.64203C10.0707 4.4798 9.85127 4.38778 9.62185 4.38579C9.39243 4.38379 9.1714 4.47199 9.00637 4.63138L6.125 7.51275L4.99362 6.38138C4.8286 6.22199 4.60757 6.13379 4.37815 6.13579C4.14873 6.13778 3.92927 6.2298 3.76703 6.39203C3.6048 6.55427 3.51278 6.77373 3.51079 7.00315C3.50879 7.23257 3.59699 7.4536 3.75638 7.61862L5.50638 9.36862C5.67046 9.53266 5.89298 9.62481 6.125 9.62481C6.35702 9.62481 6.57954 9.53266 6.74363 9.36862L10.2436 5.86862Z"
										fill="#21ABC2"
									/>
								</svg>
							</div>
							<div className="mt-4 bg-tosca text-white w-24 h-7 flex justify-center items-center text-center rounded-md">
								Dibaca 1x
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
