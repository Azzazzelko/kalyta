var gulp = require("gulp"),
plumber = require("gulp-plumber"),
browserSync = require("browser-sync");


gulp.task("server", function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: "app"
		}
	});

	gulp.watch([
		"app/*.html",
		"app/css/**/*.css",
		"app/js/**/*.js"
		], ['watch']);
});

gulp.task('watch', function (done){
	browserSync.reload();
	done();
});

gulp.task("default", ["server"]);

	