import gulp from 'gulp';
import gulpPug from 'gulp-pug';
import paths from '../paths';
import { bs } from './serverInit';

function pugErrorsHandler() {
	return this.emit('end');
}

export default async function pugCompile() {
	gulp.src(paths.template.src)
		.pipe(gulpPug().on('error', pugErrorsHandler))
		.pipe(gulp.dest(paths.template.dest))
		.pipe(bs.stream());
}
