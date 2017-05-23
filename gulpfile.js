const gulp = require('gulp');
const less = require('gulp-less');
const useref = require('gulp-useref');
const concat = require('gulp-concat');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');

const pathTo = {
    less: "src/assets/less/**/*.less",
    js: "src/js/*.js",
    css: 'src/assets/css/*.css',
    root: './'
}

gulp.task('server', () => {
    connect.server({
        root: pathTo.root,
        port: 3000,
        livereload: true
    });
});

gulp.task('less', () => {
    gulp.src(pathTo.less)
        .pipe(concat('styles.css'))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('watch', () => {
    gulp.watch(pathTo.less, ['less']);
    gulp.watch(pathTo.js).on('change', connect.reload);
    gulp.watch(pathTo.css).on('change', connect.reload);
    gulp.watch('index.html').on('change', connect.reload);
});

gulp.task('default', ['less', 'server', 'watch']);