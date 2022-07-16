require("node:fs/promises")
  .mkdir("./build")
  .catch((err) => {
    if (err.code == "EEXIST") {
      require("node:fs/promises")
        .rmdir("./build", { recursive: true, force: true })
        .then(() => {
          pack();
        })
        .catch((err) => {
          console.error(err);
          process.exitCode = 1;
        });
    } else {
      console.error(err);
      process.exitCode = 1;
    }
  })
  .finally(() => {
    pack();
  });

function pack() {
  require("electron-packager")({
    dir: ".",
    out: "./build",
  })
    .then(() => {
      console.log("Successfully packed the app.");
    })
    .catch((err) => {
      console.error(err);
      process.exitCode = 1;
    });
}
