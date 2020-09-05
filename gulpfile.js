const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const copyTask = (callback) => {
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.*',
        './node_modules/easymde/dist/easymde.min.css',
        './node_modules/highlight.js/styles/atom-one-dark.css',
    ]).pipe(gulp.dest('./public/css'));
    gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.*',
        './node_modules/jquery/dist/jquery.min.*',
        './node_modules/easymde/dist/easymde.min.js',
    ]).pipe(gulp.dest('./public/js'));
    callback();
};

const sassTask = (callback) => {
    gulp.src('./resources/sass/**/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'));
    callback();
};

const jsTask = (callback) => {
    gulp.src('./resources/js/**/*')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'));
    callback();
};

const watchTask = () => {
    gulp.watch('./resources/sass/**/*', sassTask);
    gulp.watch('./resources/js/**/*', jsTask);
};

exports.watch = gulp.series(copyTask, sassTask, jsTask, watchTask);
exports.default = gulp.parallel(copyTask, sassTask, jsTask);
