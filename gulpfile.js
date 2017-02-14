const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const concat = require('gulp-concat');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');

const pathTo = {
    less: "src/assets/less/**/*.less",
    js: "src/js/*.js",
    css: 'src/assets/css/*.css'
}

gulp.task('less', () => {
    gulp.src(pathTo.less)
        .pipe(concat('styles.css'))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('watch', () => {
    gulp.watch(pathTo.less, ['less']);
    gulp.watch(pathTo.js).on('change', browserSync.reload);
    gulp.watch(pathTo.css).on('change', browserSync.reload);
    gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['less', 'serve', 'watch']);
