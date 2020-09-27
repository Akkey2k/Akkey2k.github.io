const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

gulp.task('sass-compile', function(){
    return gulp.src('./assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('js-compile', function(){
    return pipeline(
        gulp.src('./assets/js/*.js'),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest('./dist/js/'),
    );
});

gulp.task('watch', function(){
    gulp.watch('./assets/scss/*.scss', gulp.parallel('sass-compile'));
});