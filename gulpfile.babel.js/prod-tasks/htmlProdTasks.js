import gulp from 'gulp';
import htmlMin from 'gulp-htmlmin';
import siteMap from 'gulp-sitemap';
import { exec } from 'child_process';
import paths from '../paths';

const config = {
	htmlMin: {
		collapseWhitespace: true, 			 // delete spaces
		removeComments: true, 				 // delete comments
		removeRedundantAttributes: true, 	 // delete redundant attributes
		removeEmptyAttributes: true, 		 // delete empty attributes
		removeScriptTypeAttributes: true, 	 // delete 'type' attributes
		removeStyleLinkTypeAttributes: true, // delete 'type' attributes
		removeOptionalTags: true, 			 // delete optional closing tags
		removeAttributeQuotes: true, 		 // delete attribute quotes
		collapseBooleanAttributes: true, 	 // collapse boolean attributes
	},

	siteMap: {
		siteUrl: 'http://localhost:3000',
	},
};

export default async function htmlProdTasks(cb) {
	gulp.src(`${paths.template.dest}/index.html`)
		.pipe(htmlMin(config.htmlMin))
		.pipe(gulp.dest(paths.template.dest))
		.pipe(siteMap(config.siteMap))
		.pipe(gulp.dest(paths.template.dest))
		.on('end', () => {
			exec('npm run validate', (error, stdout) => {
				console.log(stdout); // eslint-disable-line no-console
				cb();
			});
		});
}
