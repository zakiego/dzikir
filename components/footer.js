export default function Footer() {
	return (
		<div className="text-sm text-center mt-10 opacity-70 tracking-wide space-y-1">
			<div>
				Made with &lt;3 by{" "}
				<a
					href="http://twitter.com/prasastipagi"
					className="px-1 py-0.5 rounded-md font-medium bg-gray-600 text-white hover:bg-gray-500"
				>
					Zakiego
				</a>
			</div>
			<div>
				<a
					href="https://github.com/zakiego/dzikir"
					className="text-blue-900 hover:text-blue-600"
				>
					View repository
				</a>
			</div>
		</div>
	);
}
