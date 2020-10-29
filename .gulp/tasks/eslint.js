'use strict';

var eslint = require('gulp-eslint');

module.exports = function (gulp, config) {
    return function () {
        return gulp.src(config.src)
            .pipe(eslint({configFile: config.eslint}))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
    };
}
