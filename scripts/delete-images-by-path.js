// Esse script remove imagens do diretório que não estiver no arquivo .txt (imagens não excluídas do banco)

const fs = require("fs");
const path = require("path");

// Caminho do diretório com as imagens
const dirImages = "caminho-das-imagens";

// Caminho para o arquivo com a lista de imagens que deseja manter
const pathImageTxtFile = "caminho-do-arquivo.txt";

const currentImages = new Set(
  fs
    .readFileSync(pathImageTxtFile, "utf-8")
    .split("\n")
    .map((img) => img.trim())
);

fs.readdir(dirImages, (err, arquivos) => {
  if (err) {
    console.error("Erro ao ler o diretório: ", err);
    return;
  }

  console.log("Removendo imagens não listadas...");

  arquivos.forEach((arquivo) => {
    if (!currentImages.has(arquivo)) {
      const imagePath = path.join(dirImages, arquivo);

      fs.stat(imagePath, (err, stats) => {
        if (err) {
          console.error("Erro ao obter informações do arquivo: ", err);
          return;
        }

        if (stats.isFile()) {
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.log(`Arquivo não excluido ${arquivo}`);
              console.error("Erro ao excluir o arquivo: ", err);
              return;
            }
          });
        }
      });
    }
  });
});
