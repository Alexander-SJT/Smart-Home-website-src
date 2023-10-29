import { gsap } from "gsap";

const anumationInit = () => {
	const tl = gsap.timeline();

	function listAnimation() {
		const listItems = document.querySelectorAll('.header__item');

		gsap.set(listItems, { opacity: 0, y: 20 });

		listItems.forEach((item) => {
			tl.to(item, {
				opacity: 1,
				y: 0,
				duration: 0.2,
			});
			return tl;
		});
	}

	function textAnimation() {
		tl.from('.smart__title', {
			y: 50, opacity: 0, duration: 0.8, delay: 0.2,
		})
			.from('.smart__text', { opacity: 0 }, '-=.3')
			.from('.smart__btn', { opacity: 0, y: 100 }, '-=.3');

		return tl;
	}

	tl.add(textAnimation());
	tl.add(listAnimation());
};

export default anumationInit;
