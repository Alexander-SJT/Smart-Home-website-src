import browserSync from 'browser-sync';
import paths from '../paths';

export const bs = browserSync.create();

const configServer = {
	server: {
		baseDir: paths.root,
	},
};

export default function server() {
	bs.init(configServer);
}
