const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

function style() {
    return gulp
        .src('./scss/**/*.scss')
        .pipe(sourcemaps.init({}))
        .pipe(
            sass({
                outputStyle: 'compressed',
                errLogToConsole: false
            })
        )
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions']
            })
        )
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.watch = watch