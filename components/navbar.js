import Link from "next/link";
import { useState } from "react";

export default function Navbar(props) {
	const [menu, setMenu] = useState(false);

	const { title } = props;
	return (
		<div className="px-7 md:px-[60px] ">
			<nav className="flex flex-row justify-between items-center">
				<h1 className="opacity-70 text-3xl md:text-5xl font-bold tracking-wide">
					{title}
				</h1>
				<button
					name="menu"
					onClick={() => (menu ? setMenu(false) : setMenu(true))}
					className={`${
						menu ? "bg-gray-600/80 rounded-md text-white opacity-100" : ""
					} hover:bg-gray-600/80 hover:text-white hover:opacity-100 rounded-md  opacity-70 outline-none p-2 transition-all`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={3}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</nav>
			<div
				className={`${
					menu ? "visible -mb-7" : "hidden"
				} mt-2 flex justify-end `}
			>
				<div className=" flex flex-col justify-center bg-white max-w-max px-2 py-2 rounded-xl text-black/75 space-y-2 text-right">
					<Link href="/dzikir-pagi">
						<a className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-500 hover:text-white active:bg-gray-500 active:text-white transition-all duration-[400ms] outline-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Dzikir Pagi</span>
						</a>
					</Link>
					<Link href="/dzikir-sore">
						<a className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-500 hover:text-white active:bg-gray-500 active:text-white transition-all duration-[400ms] outline-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							</svg>
							<span>Dzikir Sore</span>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
