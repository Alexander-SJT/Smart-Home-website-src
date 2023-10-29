const pathSrc = './src';
const pathBuild = './build';

const paths = {
	root: pathBuild,

	template: {
		src: `${pathSrc}/template/*.{pug,html}`,
		watch: `${pathSrc}/template/**/*.{pug,html}`,
		dest: pathBuild,
	},

	scss: {
		src: `${pathSrc}/scss/*.{scss,sass}`,
		watch: `${pathSrc}/**/*.{scss,sass}`,
		dest: `${pathBuild}/css`,
	},

	js: {
		src: `${pathSrc}/js/**/*.js`,
		watch: `${pathSrc}/**/*.js`,
		dest: `${pathBuild}/js`,
	},

	img: {
		src: `${pathSrc}/img/**/*.{jpg,png,webp,avif,jpeg,gif,svg}`,
		watch: `${pathSrc}/img/**/*.{jpg,png,webp,avif,jpeg,gif,svg}`,
		dest: `${pathBuild}/img`,
	},

	sprite: {
		src: `${pathSrc}/icons/**/*.svg`,
		watch: `${pathSrc}/icons/**/*.svg`,
		dest: `${pathBuild}/icons`,
	},

	icon: {
		src: `${pathSrc}/icons/**/*`,
		watch: `${pathSrc}/icons/**/*`,
		dest: `${pathBuild}/icons/`,
	},

	font: {
		src: `${pathSrc}/fonts/**/*.{woff,woff2,eot,ttf,otf,otc,ttc,svg}`,
		watch: `${pathSrc}/fonts/**/*.{woff,woff2,eot,ttf,otf,otc,ttc,svg}`,
		dest: `${pathBuild}/fonts`,
	},
};

export default paths;
