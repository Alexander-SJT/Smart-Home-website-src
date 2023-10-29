import gulp from 'gulp';
import webp from 'gulp-webp';
import responsiveImg from 'gulp-responsive-images';
import cached from 'gulp-cached';
import paths from '../paths';
import { bs } from './serverInit';

const configImg = {
	responsiveOptions: {
		'**/*': [
			{
				width: '100%',
			},
			{
				width: '200%',
				rename: { suffix: '@2x' },
			},
			{
				width: '300%',
				rename: { suffix: '@3x' },
			},
		],
	},
};

const pathForRetinaImg = './src/img/_retina-optimize/';

export default async function imgOptimize() {
	gulp.src([paths.img.src, `!${pathForRetinaImg}**/*`])
		.pipe(cached('responsiveImg'))
		.pipe(responsiveImg(configImg.responsiveOptions))
		.pipe(webp())
		.pipe(gulp.dest(pathForRetinaImg))
		.pipe(bs.stream())
		.pipe(gulp.src(`${pathForRetinaImg}**/*`))
		.pipe(gulp.dest(paths.img.dest));
}

// sudo apt install graphicsmagick
