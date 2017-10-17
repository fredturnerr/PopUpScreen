var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('dev', function () {
  nodemon({
    script: 'app.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})