const gulp = require('gulp');

//Paths for files
const path = require('./tasks/config/path');

//Sets gulp tasks
function lazyRequireTask(taskName, path, options){
    options = options || {};

    gulp.task(taskName, function(callback) {
        var task = require(path).call(this, options);//returns task with defined options

        return task(callback);//calls task
    });
}

//Copies html files
lazyRequireTask('build:html', './tasks/build-html.js', {
    src: path.src.html,
    dest: path.build.html
});

//Builds ts to js files
lazyRequireTask('build:js', './tasks/build-javascript.js', {
    src: path.src.ts,
    dest: path.build.js
});

//Builds less to css
lazyRequireTask('build:css', './tasks/build-css.js', {
    src: path.src.scss,
    dest: path.build.css
});

//Copies images
lazyRequireTask('build:img', './tasks/build-img.js', {
    src: path.src.img,
    dest: path.build.img
});

//Deletes app directory
lazyRequireTask('clean', './tasks/clean.js', {
    dest: path.clean
});

//Copies node_modules to root directory
lazyRequireTask('vendor', './tasks/vendor.js', {
    src: path.vendor.src,
    dest: path.vendor.dest
});

//Starts browser-sync server
lazyRequireTask('serve', './tasks/serve.js', {
    proxy: path.server.proxy,
    watch: path.server.watch
});

//Observes of change in files
gulp.task('watch', function() {
    gulp.watch(path.src.html, gulp.series('build:html'));
    gulp.watch(path.src.ts, gulp.series('build:js'));
    gulp.watch(path.src.scss, gulp.series('build:css'));
    gulp.watch(path.src.img, gulp.series('build:img'));
});

//Makes build of all tasks
gulp.task('build', gulp.parallel('build:html', 'build:js', 'build:css', 'build:img'));

//Makes development build, starts server and watches
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));

//Makes production build
gulp.task('prod', gulp.series('clean', 'build'));

//Creates default task
gulp.task('default', gulp.series('dev'));