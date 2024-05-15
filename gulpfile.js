const gulp = require("gulp");
const   uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass") (require("sass"));


function compressaoImagem(){
    return gulp.src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/img"))
}

function CompressaoJS() {
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/script"))
}

function CompressaoSass() {
    return gulp.src("./source/styles/*.scss")
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(gulp.dest("./build/styles"))
}

 exports.default = function(){
     gulp.watch("./source/images/*", {ignoreInitial: false}, gulp.series(compressaoImagem));
     gulp.watch("./source/scripts/*.js", {ignoreInitial: false},gulp.series(CompressaoJS));
     gulp.watch("./source/styles/style.scss", {ignoreInitial: false},gulp.series(CompressaoSass));

 }

