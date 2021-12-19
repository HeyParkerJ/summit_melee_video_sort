const fs = require("fs-extra");
const path = require("path");
const childProcess = require("child_process");

// options is optional
fs.readdirSync("./Summit").forEach(function (fileName) {
  console.log("Starting");

  const tmp = fileName.split(" (")[0].split(" vs ");
  const trim1 = tmp[0].trim();
  const trim2 = tmp[1].trim();
  const result = [trim1, trim2];

  const location1 = path.resolve(__dirname, `results/${trim1}`);
  const location2 = path.resolve(__dirname, `results/${trim2}`);

  try {
    fs.ensureDirSync(location1);
    fs.ensureDirSync(location2);
  } catch (err) {
    console.error(err);
  }

  try {
    const fileNameToCopy = path.resolve(__dirname, `./Summit/${fileName}`);

    console.log(`file ${fileNameToCopy} exists`, fs.existsSync(fileNameToCopy));
    console.log(
      `file ${fileNameToCopy} isFile`,
      fs.lstatSync(fileNameToCopy).isFile()
    );

    console.log(`dir ${location1} exists`, fs.existsSync(location1));
    console.log(
      `dir ${location1} isDir`,
      fs.lstatSync(location1).isDirectory()
    );

    console.log(`dir exists`, fs.existsSync(location2));
    console.log(`dir isDir`, fs.lstatSync(location2).isDirectory());

    // These commands would potentially be 'better' for running on windows, but
    // copyFileSync was not happy trying to do things to the .slp files which
    // I believe it considered to be a "socket" and not a file (ERR: ENOTSUP)
    // fs.copyFileSync(fileNameToCopy, location1);
    // fs.copyFileSync(fileNameToCopy, location2);

    childProcess.spawnSync("/bin/cp", [fileNameToCopy, location1]);
    childProcess.spawnSync("/bin/cp", [fileNameToCopy, location2]);

    console.log(`Finished moving ${fileName}`);
  } catch (err) {
    console.log("Super unknown error. Send the author the below error.");
    console.error(err);
  }
});

// fs.ensureDirSync(dir);
