const menuInit = () => {
	const btnMenu = document.querySelector(".smart__btn");
	const modalMenu = document.querySelector(".modal");
	const modalCloseBtn = document.querySelector(".modal__close");
	const allFocusableElements = document.querySelectorAll("a, input, button");

	const menuIsActive = "modal--isVisible";
	const globalOverlay = "menu-overlay";

	const openMenu = () => {
		window.scrollTo({ top: 0 });
		modalMenu.classList.toggle(menuIsActive);
		document.body.classList.add(globalOverlay);
		allFocusableElements.forEach((element) => {
			if (!element.closest(".modal")) {
				element.setAttribute("tabindex", -1);
			}
		});
	};

	const closeMenu = () => {
		modalMenu.classList.remove(menuIsActive);
		document.body.classList.remove(globalOverlay);
		allFocusableElements.forEach((element) => {
			element.removeAttribute("tabindex");
		});
	};

	btnMenu.addEventListener("click", openMenu);
	modalCloseBtn.addEventListener("click", closeMenu);
};

export default menuInit;
