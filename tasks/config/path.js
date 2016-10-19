const app = {
	baseSrc: 'web/src/',
	baseDest: 'web/dist/'
};

const vendorsPath = {
	baseSrc: 'node_modules/',//base path for node_modules by default
	baseDest: app.baseDest + 'vendors/'//base path for node_modules in web directory
};

module.exports = {
	src: {//path for files for build
		html: app.baseSrc + '**/*.html',
		ts: app.baseSrc + '**/*.ts',
		scss: app.baseSrc + '/**/main.scss',
		img: 'app_api/**/*.{png,jpg}'
	},
	build: {//path for files after build
		html: app.baseDest + 'app/',
		js: app.baseDest + 'app/',
		css: app.baseDest + 'app/',
		img: app.baseDest + 'app/'
	},
	watch: {
		scss: app.baseSrc + '/**/*.scss'
	},
	vendor: {
		src: {//path of module in node_modules by default
			angular2: vendorsPath.baseSrc + '@angular/**',
			corejs: vendorsPath.baseSrc + 'core-js/**',
			reflect: vendorsPath.baseSrc + 'reflect-metadata/**',
			rxjs: vendorsPath.baseSrc + 'rxjs/**',
			systemjs: vendorsPath.baseSrc + 'systemjs/**',
			zonejs: vendorsPath.baseSrc + 'zone.js/**',
			jquery: vendorsPath.baseSrc + 'jquery/**',
			bootstrap: vendorsPath.baseSrc + 'bootstrap/**'
		},
		dest: {//path of module in node_modules in root directory
			angular2: vendorsPath.baseDest + '@angular',
			corejs: vendorsPath.baseDest + 'core-js',
			reflect: vendorsPath.baseDest + 'reflect-metadata',
			rxjs: vendorsPath.baseDest + 'rxjs',
			systemjs: vendorsPath.baseDest + 'systemjs',
			zonejs: vendorsPath.baseDest + 'zone.js',
			jquery: vendorsPath.baseDest + 'jquery',
			bootstrap: vendorsPath.baseDest + 'bootstrap'
		}
	},
	server: {
		proxy: 'localhost:3000',
		watch: app.baseDest + 'app/**/*.*'//path for watching
	},
	clean: app.baseDest + 'app/'//path for task clean,
};
