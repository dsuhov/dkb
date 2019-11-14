"use strict";

import gulp from "gulp";

const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
  smartgrid("./src/styles/vendor/import/", {
    outputStyle: "scss",
    filename: "_smart-grid",
    columns: 3,
    offset: "3px",
    mobileFirst: false
  });
  cb();
});
