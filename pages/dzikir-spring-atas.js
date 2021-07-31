/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../components/navbar";
import Blur from "../components/blur";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export async function getStaticProps() {
	const res = await fetch(`https://api.zakiego.my.id/api/dzikir/v1/getDzikir`);

	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data }, // will be passed to the page component as props
	};
}

export default function Home(props) {
	const titlePage = "Dzikir Pagi";
	const jenisDzikir = "dzikir pagi";
	const warnaBlur = "#F9F4F4";
	// const warnaBlur = "#000000";

	const {
		data: {
			data: { dzikir, sumber },
		},
	} = props;

	const filteredDzikir = dzikir.filter(function (el) {
		return el.category.includes(jenisDzikir);
	});

	const faidahHandler = (e) => {
		e.preventDefault();
		const att = e.target.getAttribute("name");
		let prx = document.getElementsByName("primary-" + att);
		let scx = document.getElementsByName("secondary-" + att);

		if (prx[0].classList.value === "") {
			prx[0].classList.value = "transition-all hidden";
			scx[0].classList.value = "";
		} else {
			prx[0].classList.value = "";
			scx[0].classList.value = "transition-all hidden";
		}

		// console.log(prx[0].classList.value);
	};

	const renderDzikir = filteredDzikir.map((dzikir) => {
		return (
			<div key={dzikir.id}>
				<div
					name="card"
					className="bg-biru-tipis py-12 px-9 md:px-16 rounded-[30px] shadow-tipis"
				>
					<form name={dzikir.id} onSubmit={faidahHandler}>
						<button className="flex flex-row mt-4 items-center space-x-1 md:space-x-2 outline-none">
							<svg
								width="21"
								height="21"
								viewBox="0 0 21 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="scale-75 md:scale-90"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M21 10.5C21 13.2848 19.8938 15.9555 17.9246 17.9246C15.9555 19.8938 13.2848 21 10.5 21C7.71523 21 5.04451 19.8938 3.07538 17.9246C1.10625 15.9555 0 13.2848 0 10.5C0 7.71523 1.10625 5.04451 3.07538 3.07538C5.04451 1.10625 7.71523 0 10.5 0C13.2848 0 15.9555 1.10625 17.9246 3.07538C19.8938 5.04451 21 7.71523 21 10.5ZM11.8125 5.25C11.8125 5.5981 11.6742 5.93194 11.4281 6.17808C11.1819 6.42422 10.8481 6.5625 10.5 6.5625C10.1519 6.5625 9.81806 6.42422 9.57192 6.17808C9.32578 5.93194 9.1875 5.5981 9.1875 5.25C9.1875 4.9019 9.32578 4.56806 9.57192 4.32192C9.81806 4.07578 10.1519 3.9375 10.5 3.9375C10.8481 3.9375 11.1819 4.07578 11.4281 4.32192C11.6742 4.56806 11.8125 4.9019 11.8125 5.25ZM9.1875 9.1875C8.8394 9.1875 8.50556 9.32578 8.25942 9.57192C8.01328 9.81806 7.875 10.1519 7.875 10.5C7.875 10.8481 8.01328 11.1819 8.25942 11.4281C8.50556 11.6742 8.8394 11.8125 9.1875 11.8125V15.75C9.1875 16.0981 9.32578 16.4319 9.57192 16.6781C9.81806 16.9242 10.1519 17.0625 10.5 17.0625H11.8125C12.1606 17.0625 12.4944 16.9242 12.7406 16.6781C12.9867 16.4319 13.125 16.0981 13.125 15.75C13.125 15.4019 12.9867 15.0681 12.7406 14.8219C12.4944 14.5758 12.1606 14.4375 11.8125 14.4375V10.5C11.8125 10.1519 11.6742 9.81806 11.4281 9.57192C11.1819 9.32578 10.8481 9.1875 10.5 9.1875H9.1875Z"
									fill="#76B0C7"
								/>
							</svg>
							<div className="text-nord-200 text-xs md:text-base font-semibold">
								Faidah
							</div>
						</button>
					</form>

					<div name={"primary-" + dzikir.id} className="">
						<div
							name="arab"
							dir="rtl"
							className="font-taha text-3xl md:text-5xl leading-relaxed md:leading-loose"
						>
							{dzikir.arabic}
						</div>
						<div
							name="arti"
							className="text-xs md:text-lg mt-6 leading-5 md:leading-relaxed font-normal tracking-wide"
						>
							{dzikir.arti}
						</div>
						<div className="flex flex-inline items-center pt-4 space-x-2 text-xs md:text-base">
							<p className="opacity-70">{dzikir.sumber}</p>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="flex-none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM10.2436 5.86862C10.403 5.7036 10.4912 5.48257 10.4892 5.25315C10.4872 5.02373 10.3952 4.80427 10.233 4.64203C10.0707 4.4798 9.85127 4.38778 9.62185 4.38579C9.39243 4.38379 9.1714 4.47199 9.00637 4.63138L6.125 7.51275L4.99362 6.38138C4.8286 6.22199 4.60757 6.13379 4.37815 6.13579C4.14873 6.13778 3.92927 6.2298 3.76703 6.39203C3.6048 6.55427 3.51278 6.77373 3.51079 7.00315C3.50879 7.23257 3.59699 7.4536 3.75638 7.61862L5.50638 9.36862C5.67046 9.53266 5.89298 9.62481 6.125 9.62481C6.35702 9.62481 6.57954 9.53266 6.74363 9.36862L10.2436 5.86862Z"
									fill="#21ABC2"
								/>
							</svg>
						</div>
						<div className="mt-4 w-16 md:w-24 h-5 md:h-7 text-xs md:text-base bg-tosca text-white flex justify-center items-center text-center rounded-md">
							{dzikir.dibaca}
						</div>
					</div>
					{/* <form name={dzikir.id} onSubmit={faidahHandler}>
						<button className="flex flex-row mt-4 items-center space-x-1 md:space-x-2 outline-none hover:scale-110 hover:transition-all duration-500">
							<svg
								width="21"
								height="21"
								viewBox="0 0 21 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="scale-75 md:scale-90"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M21 10.5C21 13.2848 19.8938 15.9555 17.9246 17.9246C15.9555 19.8938 13.2848 21 10.5 21C7.71523 21 5.04451 19.8938 3.07538 17.9246C1.10625 15.9555 0 13.2848 0 10.5C0 7.71523 1.10625 5.04451 3.07538 3.07538C5.04451 1.10625 7.71523 0 10.5 0C13.2848 0 15.9555 1.10625 17.9246 3.07538C19.8938 5.04451 21 7.71523 21 10.5ZM11.8125 5.25C11.8125 5.5981 11.6742 5.93194 11.4281 6.17808C11.1819 6.42422 10.8481 6.5625 10.5 6.5625C10.1519 6.5625 9.81806 6.42422 9.57192 6.17808C9.32578 5.93194 9.1875 5.5981 9.1875 5.25C9.1875 4.9019 9.32578 4.56806 9.57192 4.32192C9.81806 4.07578 10.1519 3.9375 10.5 3.9375C10.8481 3.9375 11.1819 4.07578 11.4281 4.32192C11.6742 4.56806 11.8125 4.9019 11.8125 5.25ZM9.1875 9.1875C8.8394 9.1875 8.50556 9.32578 8.25942 9.57192C8.01328 9.81806 7.875 10.1519 7.875 10.5C7.875 10.8481 8.01328 11.1819 8.25942 11.4281C8.50556 11.6742 8.8394 11.8125 9.1875 11.8125V15.75C9.1875 16.0981 9.32578 16.4319 9.57192 16.6781C9.81806 16.9242 10.1519 17.0625 10.5 17.0625H11.8125C12.1606 17.0625 12.4944 16.9242 12.7406 16.6781C12.9867 16.4319 13.125 16.0981 13.125 15.75C13.125 15.4019 12.9867 15.0681 12.7406 14.8219C12.4944 14.5758 12.1606 14.4375 11.8125 14.4375V10.5C11.8125 10.1519 11.6742 9.81806 11.4281 9.57192C11.1819 9.32578 10.8481 9.1875 10.5 9.1875H9.1875Z"
									fill="#76B0C7"
								/>
							</svg>
							<div className="text-nord-200 text-xs md:text-base font-semibold">
								Faidah
							</div>
						</button>
					</form> */}
					<div name={"secondary-" + dzikir.id} className="hidden">
						<div className="flex flex-inline items-center pt-4 space-x-2 text-xs md:text-base">
							<p className="opacity-70">{dzikir.sumber}</p>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="flex-none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM10.2436 5.86862C10.403 5.7036 10.4912 5.48257 10.4892 5.25315C10.4872 5.02373 10.3952 4.80427 10.233 4.64203C10.0707 4.4798 9.85127 4.38778 9.62185 4.38579C9.39243 4.38379 9.1714 4.47199 9.00637 4.63138L6.125 7.51275L4.99362 6.38138C4.8286 6.22199 4.60757 6.13379 4.37815 6.13579C4.14873 6.13778 3.92927 6.2298 3.76703 6.39203C3.6048 6.55427 3.51278 6.77373 3.51079 7.00315C3.50879 7.23257 3.59699 7.4536 3.75638 7.61862L5.50638 9.36862C5.67046 9.53266 5.89298 9.62481 6.125 9.62481C6.35702 9.62481 6.57954 9.53266 6.74363 9.36862L10.2436 5.86862Z"
									fill="#21ABC2"
								/>
							</svg>
						</div>
						<div
							name="faidah"
							className="text-xs md:text-lg mt-6 leading-5 md:leading-relaxed font-normal tracking-wide"
						>
							{dzikir.faidah}
						</div>
					</div>
				</div>
			</div>
		);
	});

	const buttonFaidah = (
		<button className="flex flex-row mt-4 items-center space-x-1 md:space-x-2 outline-none">
			<svg
				width="21"
				height="21"
				viewBox="0 0 21 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="scale-75 md:scale-90"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21 10.5C21 13.2848 19.8938 15.9555 17.9246 17.9246C15.9555 19.8938 13.2848 21 10.5 21C7.71523 21 5.04451 19.8938 3.07538 17.9246C1.10625 15.9555 0 13.2848 0 10.5C0 7.71523 1.10625 5.04451 3.07538 3.07538C5.04451 1.10625 7.71523 0 10.5 0C13.2848 0 15.9555 1.10625 17.9246 3.07538C19.8938 5.04451 21 7.71523 21 10.5ZM11.8125 5.25C11.8125 5.5981 11.6742 5.93194 11.4281 6.17808C11.1819 6.42422 10.8481 6.5625 10.5 6.5625C10.1519 6.5625 9.81806 6.42422 9.57192 6.17808C9.32578 5.93194 9.1875 5.5981 9.1875 5.25C9.1875 4.9019 9.32578 4.56806 9.57192 4.32192C9.81806 4.07578 10.1519 3.9375 10.5 3.9375C10.8481 3.9375 11.1819 4.07578 11.4281 4.32192C11.6742 4.56806 11.8125 4.9019 11.8125 5.25ZM9.1875 9.1875C8.8394 9.1875 8.50556 9.32578 8.25942 9.57192C8.01328 9.81806 7.875 10.1519 7.875 10.5C7.875 10.8481 8.01328 11.1819 8.25942 11.4281C8.50556 11.6742 8.8394 11.8125 9.1875 11.8125V15.75C9.1875 16.0981 9.32578 16.4319 9.57192 16.6781C9.81806 16.9242 10.1519 17.0625 10.5 17.0625H11.8125C12.1606 17.0625 12.4944 16.9242 12.7406 16.6781C12.9867 16.4319 13.125 16.0981 13.125 15.75C13.125 15.4019 12.9867 15.0681 12.7406 14.8219C12.4944 14.5758 12.1606 14.4375 11.8125 14.4375V10.5C11.8125 10.1519 11.6742 9.81806 11.4281 9.57192C11.1819 9.32578 10.8481 9.1875 10.5 9.1875H9.1875Z"
					fill="#76B0C7"
				/>
			</svg>
			<div className="text-nord-200 text-xs md:text-base font-semibold">
				Faidah
			</div>
		</button>
	);

	const renderDraft = filteredDzikir.map((dzikir) => {
		const [isOpen, setIsOpen] = useState(false);

		const toggleOpen = () => setIsOpen(!isOpen);

		return (
			<motion.li
				name="card"
				className="bg-biru-tipis py-12 px-9 md:px-16 rounded-[30px] shadow-tipis"
				key={dzikir.id}
				layout
				onClick={toggleOpen}
			>
				<div className="avatar" layout>
					{buttonFaidah}

					<AnimatePresence>
						{isOpen && (
							<motion.div
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								name="faidah"
								className="text-xs md:text-lg mt-6 leading-5 md:leading-relaxed font-normal tracking-wide"
							>
								{dzikir.faidah}
							</motion.div>
						)}
					</AnimatePresence>
					<div name={"primary-" + dzikir.id} className="">
						<div
							name="arab"
							dir="rtl"
							className="font-taha text-3xl md:text-5xl leading-relaxed md:leading-loose"
						>
							{dzikir.arabic}
						</div>
						<div
							name="arti"
							className="text-xs md:text-lg mt-6 leading-5 md:leading-relaxed font-normal tracking-wide"
						>
							{dzikir.arti}
						</div>
						<div className="flex flex-inline items-center pt-4 space-x-2 text-xs md:text-base">
							<p className="opacity-70">{dzikir.sumber}</p>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="flex-none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM10.2436 5.86862C10.403 5.7036 10.4912 5.48257 10.4892 5.25315C10.4872 5.02373 10.3952 4.80427 10.233 4.64203C10.0707 4.4798 9.85127 4.38778 9.62185 4.38579C9.39243 4.38379 9.1714 4.47199 9.00637 4.63138L6.125 7.51275L4.99362 6.38138C4.8286 6.22199 4.60757 6.13379 4.37815 6.13579C4.14873 6.13778 3.92927 6.2298 3.76703 6.39203C3.6048 6.55427 3.51278 6.77373 3.51079 7.00315C3.50879 7.23257 3.59699 7.4536 3.75638 7.61862L5.50638 9.36862C5.67046 9.53266 5.89298 9.62481 6.125 9.62481C6.35702 9.62481 6.57954 9.53266 6.74363 9.36862L10.2436 5.86862Z"
									fill="#21ABC2"
								/>
							</svg>
						</div>
						<div className="mt-4 w-16 md:w-24 h-5 md:h-7 text-xs md:text-base bg-tosca text-white flex justify-center items-center text-center rounded-md">
							{dzikir.dibaca}
						</div>
					</div>
				</div>
			</motion.li>
		);
	});

	return (
		<div className="min-h-screen bg-gradient-to-bl from-[#E8F0FF] to-[#E5F5FF]">
			<div className="relative ">
				<Blur warna={warnaBlur} />

				<div className=" min-h-screen max-w-6xl mx-auto">
					<main className="relative pt-12 pb-20  px-8">
						<Navbar title={titlePage} />

						<AnimateSharedLayout>
							<motion.ul
								name="card section"
								className="pt-14 space-y-8"
								layout
								initial={{ borderRadius: 25 }}
							>
								{/* <Item /> */}
								{renderDraft}
							</motion.ul>
						</AnimateSharedLayout>
					</main>
				</div>
			</div>
		</div>
	);
}
