// Variable Declaration
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const concatJs = require("gulp-concat");
const browserSync = require("browser-sync").create();

// Complie SASS files to Stylesheets with Autoprefixer
gulp.task("styles", function () {
  return gulp.src("assets/src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))		// gulp-sass plugin
    .pipe(autoprefixer("last 2 versions"))			// gulp-autoprefixer plugin
    .pipe(gulp.dest("assets/dest/css"))
    .pipe(browserSync.stream());								// browser-sync plugin
});

// Concat JS with Minify JS
gulp.task("concat-minify-js", function () {
  return gulp.src("assets/src/js/*.js")
    .pipe(concatJs("app.js"))										// gulp-concat plugin
    .pipe(uglify()) 														// gulp-uglify plugin
    .pipe(gulp.dest("assets/dest/js"))
    .pipe(browserSync.stream());								// browser-sync plugin
});

// Browser Sync Task with Gulp Watcher
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  // gulp-watch API
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("assets/src/sass/*.scss", gulp.series("styles"));
  gulp.watch("assets/src/js/*.js", gulp.series("concat-minify-js"));
});

// Default Gulp Task
gulp.task("default", gulp.parallel("browser-sync"));