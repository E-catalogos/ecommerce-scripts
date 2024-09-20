// Este script transfer imagens com base nos caminhos contidos no arquivo txt

const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

// Caminho para o arquivo com a lista de imagens que deseja buscar
const pathImageTxtFile = "caminho-do-arquivo.txt";

// Diretório local onde as imagens serão salvas
const dirLocalImages = "caminho-para-salvar-imagens";

// Diretório onde as imagens se encontram
const dirRemoteImages = "caminho-das-imagens";

// DNS do servidor remote
const remoteServer = "ecatalogos@d15.e-catalogos.net";

const imagesToTransfer = fs
  .readFileSync(pathImageTxtFile, "utf-8")
  .split("\n")
  .map((img) => img.trim())
  .filter((img) => img.length > 0);

const synchronizeImages = (imagem) => {
  // Use esse trecho caso precise tranferir imagens de outro servidor
  // const caminhoRemoto = `${remoteServer}:${path.join(
  //   dirRemoteImages,
  //   imagem
  // )}`;

  const caminhoRemoto = `${path.join(dirRemoteImages, imagem)}`;

  const comando = `rsync -avz --progress ${caminhoRemoto} ${dirLocalImages}`;

  exec(comando, (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao sincronizar a imagem ${imagem}: `, err);
      return;
    }
    if (stderr) {
      console.error(stderr);
    }
  });
};

console.log("Transferindo imagens...");

imagesToTransfer.forEach((imagem) => {
  synchronizeImages(imagem);
});
