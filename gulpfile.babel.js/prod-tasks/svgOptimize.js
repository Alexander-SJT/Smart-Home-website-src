import gulp from 'gulp';
import svgMin from 'gulp-svgmin';
import paths from '../paths';

const configOptimize = {
	cleanupAttrs: true, 		 // delete useless attrd
	removeDoctype: true, 		 // delete <!DOCTYPE>
	removeComments: true, 		 // delete comments
	removeXMLProcInst: true, 	 // delete XML instructions
	removeUselessDefs: true, 	 // delete empty <defs>
	removeEmptyAttrs: true, 	 //	delete empty attrs
	removeHiddenElems: true, 	 // delete hidden elems
	removeEmptyText: true, 		 // delete empty text
	removeEmptyContainers: true, // delete empty tags

};

export default async function svgOptimize() {
	return new Promise((resolve) => {
		gulp.src(`${paths.icon.dest}*.svg`)
			.pipe(svgMin(configOptimize))
			.pipe(gulp.dest(paths.icon.dest))
			.on('end', resolve);
	});
}
