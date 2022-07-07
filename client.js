const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();
const getAppDataPath = require("appdata-path");
const getAppDataPat = require("appdata-path");
const https = require('https');
const fs = require('node:fs');
const setPseudo = require(getAppDataPat(".eronix/userData.json"));
let opts = {
    clientPackage: null,
    authorization: Authenticator.getAuth(setPseudo.pseudo, setPseudo.token.value),
    root: getAppDataPath(".eronix/"),
    version: {
        number: "1.12.2",
        type: "release"
    },
    forge: getAppDataPath(".eronix/forge.jar"),
    memory: {
        max: "6G",
        min: "1G"
    },
    server: {
        host: "play.eronix.fr",
        //port: "25565"
    }
}


async function play() {
    alert("Exécution du jeu, Merci de patienter quelques instants.\nRun the game, Please wait a few moments.")
   const file = fs.createWriteStream(getAppDataPath(".eronix/forge.jar"));
    const request = https.get("https://maven.minecraftforge.net/net/minecraftforge/forge/1.12.2-14.23.5.2859/forge-1.12.2-14.23.5.2859-installer.jar", function(response) {
      response.pipe(file);
       file.on("finish", () => {
           file.close();
           console.log("test")
       });
    });          
    setTimeout(() => {
        launcher.launch(opts) & console.log("test1");
        launcher.on('debug', (e) => console.log(e));
        launcher.on('data', (e) => console.log(e));
    }, 15000); 
    const game = document.getElementById('startGame');
    game.disabled = true;

    setTimeout(() => {
        game.disabled = false;
    }, 30000);
}