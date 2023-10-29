import gulp from 'gulp';
import newer from 'gulp-newer';
import paths from '../paths';
import { bs } from './serverInit';

export default async function iconCopy() {
	gulp.src('./src/icons/favicon/*')
		.pipe(newer(paths.icon.dest))
		.pipe(gulp.dest(`${paths.icon.dest}favicon`))
		.pipe(bs.stream());
}
