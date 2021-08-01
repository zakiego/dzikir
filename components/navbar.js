export default function Navbar(props) {
	const { title } = props;
	return (
		<nav className="flex flex-row justify-between">
			<h1 className="opacity-70 text-3xl md:text-5xl font-bold tracking-wide">
				{title}
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
