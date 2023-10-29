import gulp from 'gulp';
import paths from './paths';

import cleanDir from './dev-tasks/cleanDir';
import fontCopy from './dev-tasks/fontCopy';
import iconCopy from './dev-tasks/iconCopy';
import jsWebpack from './dev-tasks/jsWebpack';
import imgOptimize from './dev-tasks/imgOptimize';
import pugCompile from './dev-tasks/pugCompile';
import scssCompile from './dev-tasks/scssCompile';
import cssProdTasks from './prod-tasks/cssProdTasks';
import serverInit from './dev-tasks/serverInit';
import createSprite from './dev-tasks/createSprite';
import svgOptimize from './prod-tasks/svgOptimize';
import htmlProdTasks from './prod-tasks/htmlProdTasks';

const watcher = () => {
	gulp.watch(paths.font.watch, fontCopy);
	gulp.watch(paths.icon.watch, iconCopy);
	gulp.watch(paths.img.watch, imgOptimize);
	gulp.watch(paths.js.watch, jsWebpack);
	gulp.watch(paths.template.watch, pugCompile);
	gulp.watch(paths.scss.watch, scssCompile);
	gulp.watch(paths.sprite.watch, createSprite);
};

const developmentTasks = [
	pugCompile,
	scssCompile,
	jsWebpack,
	fontCopy,
	iconCopy,
	imgOptimize,
	createSprite,
];

const preProductionTasks = [
	htmlProdTasks,
	cssProdTasks,
	svgOptimize,
];

// need webpack mode change
export const build = gulp.series(
	cleanDir,
	gulp.series(developmentTasks),
	gulp.series(preProductionTasks),
);

export const dev = gulp.series(
	cleanDir,
	developmentTasks,
	gulp.parallel(watcher, serverInit),
);

export { cleanDir };
export { fontCopy };
export { iconCopy };
export { imgOptimize };
export { jsWebpack };
export { pugCompile };
export { scssCompile };
export { cssProdTasks };
export { createSprite };
export { svgOptimize };
export { htmlProdTasks };
export { watcher };
export { serverInit };
