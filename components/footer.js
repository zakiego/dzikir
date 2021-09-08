export default function Footer() {
	return (
		<div className="text-[12px] text-center mt-10 opacity-70 tracking-wide space-y-1">
			<div>
				Made with &lt;3 by{" "}
				<a
					href="https://zakiego.my.id"
					className="px-1 py-0.5 rounded-md font-medium bg-gray-600 text-white hover:bg-gray-500"
				>
					Zakiego
				</a>
			</div>
			<div>
				<a
					href="https://github.com/zakiego/dzikir"
					className="text-blue-900 hover:text-blue-600 hover:border-b-2 pb-1 hover:border-blue-600 transition-all duration-300"
				>
					View repository
				</a>
			</div>
		</div>
	);
}
