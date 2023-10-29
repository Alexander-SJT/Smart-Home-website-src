import gulp from 'gulp';
import autoPrefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import dartSass from 'sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import paths from '../paths';
import { bs } from './serverInit';

const sass = gulpSass(dartSass);

const configScss = {
	rename: {
		suffix: '.min',
	},
};

export default async function scssCompile() {
	gulp.src(paths.scss.src, { sourcemaps: true })
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer())
		.pipe(rename(configScss.rename))
		.pipe(groupCssMediaQueries())
		.pipe(gulp.dest(paths.scss.dest, { sourcemaps: true }))
		.pipe(bs.stream());
}
