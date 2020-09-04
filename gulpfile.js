const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// const copyTask = (callback) => {
//     gulp.src([])
//         .pipe(gulp.dest('./public/css'));
//     gulp.src([])
//         .pipe(gulp.dest('./public/js'));
//     callback();
// };

const sassTask = (callback) => {
    gulp.src('./resources/sass/**/*')
        .pipe(sass())
        .pipe(gulp.dest('./public/sass'));
    callback();
};

const jsTask = (callback) => {
    gulp.src('./resources/js/**/*')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
    callback();
};

const watchTask = () => {
    gulp.watch('./resources/sass/**/*', sassTask);
    gulp.watch('./resources/js/**/*', jsTask);
};

exports.watch = gulp.series(/** copyTask, */sassTask, jsTask, watchTask);
exports.default = gulp.parallel(/** copyTask, */sassTask, jsTask);
