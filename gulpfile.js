let gulp = require('gulp');
let browserify = require('browserify');
let reactify = require('reactify');
let source = require('vinyl-source-stream');

gulp.task('browserify', function(){
    browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['browserify', 'copy']);

gulp.task('default', ['browserify', 'copy'], function(){
    return gulp.watch('src/**/*.*', ['browserify', 'copy']);
})
