const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    return gulp.src('./src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/'));
});

gulp.task('clean', () => {
    return del([
        './app/global.css',
    ]);
});

gulp.task('watch', () => {
  gulp.watch('./src/style/**/*.scss', (done) => {
      gulp.series(['clean', 'styles'])(done);
  });
});

gulp.task('build', gulp.series(['clean', 'styles']));

gulp.task('dev', gulp.series(['build']));