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
};

export default faidahHandler;
