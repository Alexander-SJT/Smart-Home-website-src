import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollAnimInit = () => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.from('.about__title', {
		scrollTrigger: {
			trigger: '.about',
			start: '-18% center',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		transform: 'rotateX(-100deg)',
	});

	gsap.from('.about__descr', {
		scrollTrigger: {
			trigger: '.about',
			start: '-18% center',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		y: 30,
	});

	gsap.from('.about__notes', {
		scrollTrigger: {
			trigger: '.about',
			start: '-18% center',
			end: '180px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.4,
		y: 30,
	});

	gsap.from('.control__title', {
		scrollTrigger: {
			trigger: '.control',
			start: '-18% center',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		transform: 'rotateX(-100deg)',
	});

	gsap.from('.control__descr', {
		scrollTrigger: {
			trigger: '.control',
			start: '-18% center',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		y: 30,
	});

	gsap.from('.control__notes', {
		scrollTrigger: {
			trigger: '.control',
			start: '-18% center',
			end: '180px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.4,
		y: 30,
	});

	gsap.from('.sensors__title', {
		scrollTrigger: {
			trigger: '.sensors',
			start: '-18% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		transform: 'rotateX(-100deg)',
	});

	gsap.from('.app__title', {
		scrollTrigger: {
			trigger: '.app',
			start: '-10% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		transform: 'rotateX(-100deg)',
	});

	gsap.from('.company__title', {
		scrollTrigger: {
			trigger: '.company',
			start: '-10% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		transform: 'rotateX(-100deg)',
	});

	gsap.from('.company__descr', {
		scrollTrigger: {
			trigger: '.company',
			start: '0% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		y: 30,
	});

	gsap.from('.showroom__title', {
		scrollTrigger: {
			trigger: '.showroom',
			start: '-10% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.9,
		delay: 0.2,
		transform: 'rotateX(-100deg)',
	});

	gsap.from('.showroom__descr', {
		scrollTrigger: {
			trigger: '.showroom',
			start: '0% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.9,
		delay: 0.2,
		y: 30,
	});

	gsap.from('.demo__title', {
		scrollTrigger: {
			trigger: '.demo',
			start: '-10% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		transform: 'rotateX(-100deg)',
	});

	gsap.from('.company__value', {
		scrollTrigger: {
			trigger: '.company',
			start: '-10% 90%',
			end: '200px',
		},
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		'font-size': '1px',
	});
};

export default scrollAnimInit;
