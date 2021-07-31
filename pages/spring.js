import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Spring() {
	const variants = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	};

	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="bg-gray-400 min-h-screen">
			<button
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				className="text-red-600 w-16 h-16 bg-red-500"
			/>
			<motion.nav
				initial="hidden"
				animate={isOpen ? "open" : "closed"}
				variants={variants}
			>
				<div>ZAKI</div>
			</motion.nav>
		</div>
	);
}
