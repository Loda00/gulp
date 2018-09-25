const gulp = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('main', () => {
    return gulp.src('./public/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./views'))
})

gulp.task('html', () => {
    return gulp.src('./public/includ/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./publicAfter/partialsInicio'))
});

gulp.task('css', () => {
    return gulp.src('./public/assets/css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./publicAfter/assets/css'))
})

gulp.task('contacto', () => {
    return gulp.src('./public/contacto/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./views'))
})

gulp.task('servicios', () => {
    return gulp.src('./public/servicios/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./views'))
})

gulp.task('popup', () => {
    return gulp.src('./public/popup/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./publicAfter/partialsInicio'))
})

gulp.task('js', () => {
    return gulp.src('./public/assets/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./publicAfter/assets/js'))
})


gulp.task('watch', () => {
    gulp.watch('./public/*.pug', ['main']);
    gulp.watch('./public/includ/*.pug', ['html']);
    gulp.watch('./public/assets/css/*.styl', ['css']);
    gulp.watch('./public/contacto/*.pug', ['contacto']);
    gulp.watch('./public/servicios/*.pug', ['servicios']);
    gulp.watch('./public/popup/*.pug', ['popup']);
    gulp.watch('./public/assets/js/*.js', ['js']);
})