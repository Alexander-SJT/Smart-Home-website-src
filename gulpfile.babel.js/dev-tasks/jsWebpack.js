import gulp from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from '../../webpack.config';
import paths from '../paths';
import { bs } from './serverInit';

export default async function jsWebpack() {
	return new Promise((resolve) => {
		gulp.src(paths.js.src)
			.pipe(webpack(webpackConfig))
			.pipe(gulp.dest(paths.js.dest))
			.on('end', resolve)
			.pipe(bs.stream());
	});
}
