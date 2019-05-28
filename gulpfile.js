const { src, dest, watch, series, parallel } = require('gulp');
var sass = require('gulp-sass');

const files = {
    scssPath: 'src/sass/*.scss'
}

function scssTask() {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(dest('dist')); // put final CSS in  dist folder
}

function watchTask() {
    watch([files.scssPath], 
        parallel(scssTask)); 
}

exports.default = series(
    parallel(scssTask),
    watchTask
)