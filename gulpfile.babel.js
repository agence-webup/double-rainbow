"use strict";

import gulp from 'gulp';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import ghPages from 'gulp-gh-pages';

const reload = browserSync.reload;

/* config
---------------------------------------------------- */

gulp.task('css', () => {
    return gulp.src('src/*.css')
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('js', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
    .pipe(ghPages());
});


gulp.task('watch', () => {
    gulp.watch('src/*.css', ['css']);
    gulp.watch('src/*.js', ['js']);
});


gulp.task('default', ['css', 'js']);
