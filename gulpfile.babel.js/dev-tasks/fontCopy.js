import gulp from 'gulp';
import newer from 'gulp-newer';
import paths from '../paths';
import { bs } from './serverInit';

export default async function fontCopy() {
	gulp.src(paths.font.src)
		.pipe(newer(paths.font.dest))
		.pipe(gulp.dest(paths.font.dest))
		.pipe(bs.stream());
}
