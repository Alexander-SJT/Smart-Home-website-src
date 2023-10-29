import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import paths from '../paths';
import { bs } from './serverInit';

const configSprite = {
	spriteConf: {
		mode: {
			stack: {
				sprite: '../sprite.svg', // output file name
			},
		},
	},

};

const exceptionFavicon = '!src/icons/favicon/*';

export default async function createSprite() {
	return new Promise((resolve) => {
		gulp.src([paths.sprite.src, exceptionFavicon])
			.pipe(svgSprite(configSprite.spriteConf))
			.pipe(gulp.dest(paths.sprite.dest))
			.on('end', resolve)
			.pipe(bs.stream());
	});
}
