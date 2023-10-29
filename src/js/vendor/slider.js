import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
	spaceBetween: 16,
	breakpoints: {
		320: {
			slidesPerView: 1.1,
		},
		490: {
			slidesPerView: 1.3,
		},
	},
});

swiper.on('slideChange', () => {
	const { activeIndex } = swiper;
	const boxShadowElem = document.querySelector('.smart__shadow-box');

	function removeActiveClass() {
		boxShadowElem.classList.forEach((className) => {
			if (className.indexOf('position') !== -1) {
				boxShadowElem.classList.remove(className);
			}
		});
	}

	removeActiveClass();

	switch (true) {
	case activeIndex === 0:
		boxShadowElem.classList.add('smart__shadow-box--light-position');
		break;
	case activeIndex === 1:
		boxShadowElem.classList.add('smart__shadow-box--camera-position');
		break;
	case activeIndex === 2:
		boxShadowElem.classList.add('smart__shadow-box--wall-position');
		break;
	case activeIndex === 3:
		boxShadowElem.classList.add('smart__shadow-box--climate-position');
		break;
	case activeIndex === 4:
		boxShadowElem.classList.add('smart__shadow-box--music-position');
		break;
	case activeIndex === 5:
		boxShadowElem.classList.add('smart__shadow-box--clog-position');
		break;
	case activeIndex === 6:
		boxShadowElem.classList.add('smart__shadow-box--drapes-position');
		break;
	}
});
export default swiper;
