const dataMusic1 = require("./06-alternative-flavor");
function printSongs() {
  console.log("list of my music");
  dataMusic1.favMusic.forEach((song) => {
    console.log("my favorite song is:", song.title, "by:", song.singer);
  });
}
printSongs();
