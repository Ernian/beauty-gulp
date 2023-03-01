const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

function style() {
  gulp.src('./src/style/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/style/css'))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./src/style/scss/**/*.scss', style)
}

exports.style = style
exports.watch = watch