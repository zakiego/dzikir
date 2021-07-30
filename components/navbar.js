export default function Navbar() {
	return (
		<nav className="flex flex-row justify-between">
			<h1 className="text-opacity-90 text-3xl font-bold tracking-wide">
				Dzikir Pagi
			</h1>
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
		</nav>
	);
}
