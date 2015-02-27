/**
 * Created by Stephan on 27.02.2015.
 */

"use strict";

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("update-local-fluss", function() {
    gulp.src(["../fluss/build/**/*.*", "../fluss/build/**/*"])
        .pipe(gulp.dest("./node_modules/fluss"));
});


var getBundleName = function () {
    var version = require('./package.json').version;
    var name = require('./package.json').name;
    return version + '.' + name + '.' + 'min';
};

gulp.task('javascript', function() {

    var bundler = browserify({
        entries: ['./main.js'],
        debug: true
    });

    var bundle = function() {
        return bundler
            .bundle()
            .pipe(source(getBundleName() + '.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            // Add transformation tasks to the pipeline here.
            .pipe(uglify())
            .pipe(sourcemaps.write('./', { sourceRoot: "../../"}))
            .pipe(gulp.dest('./build/js/'));
    };

    return bundle();
});