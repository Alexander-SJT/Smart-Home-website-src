import gulp from 'gulp';
import removeSourcemaps from 'gulp-remove-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import paths from '../paths';

const configMinify = {
	cleanCss: {
		level: 2, 			 // max level compression
		restructuring: true, // optimization compression
	},
};

export default async function cssProdTasks() {
	return new Promise((resolve) => {
		gulp.src('./build/css/style.min.css')
			.pipe(removeSourcemaps())
			.pipe(cleanCSS(configMinify.cleanCss))
			.pipe(gulp.dest(paths.scss.dest))
			.on('end', resolve);
	});
}
