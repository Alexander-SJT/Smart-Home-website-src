const burgerMenuInit = () => {
	const menuBtn = document.querySelector('.hamburger--spin');
	const menu = document.querySelector('.header__nav');
	const menuLinks = document.querySelectorAll('.header__link');

	const cssOverlay = 'burger-overlay';
	const cssIsAvctive = 'is-active';
	const cssMenuVisible = 'header__nav--isVisible';

	function toggleClasses() {
		menuBtn.classList.toggle(cssIsAvctive);
		menu.classList.toggle(cssMenuVisible);
		document.body.classList.toggle(cssOverlay);
	}

	function removeClasses() {
		menuBtn.classList.remove(cssIsAvctive);
		menu.classList.remove(cssMenuVisible);
		document.body.classList.remove(cssOverlay);
	}

	menuBtn.addEventListener('click', () => {
		toggleClasses();
	});

	menuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			removeClasses();
		});
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 1024) {
			removeClasses();
		}
	});
};

export default burgerMenuInit;
