# Scripts para Ecommerce

### Script para apagar imagens 
O intuito desse script é remover as imagens duplicadas no servidor por causa do integrador do bling.
<br />
É necessário adicionar em um arquivo de texto as imagens que estão sendo usadas para ser excluídas do script de remoção.
<br />
<br />
Obs: Para encontar os produtos utilizados eu peguei da query de images não excluidas pertencentes aos produtos da marca (capaloka).
<br />
Como a aplicação não faz verificação dos produtos excluídos, peguei as imagens dos produtos utilizados no app pelo arquivo de `link_criação` 
<br />
`console.log(products.map((prd) =>prd.variantes["56710"].imagens.map((img) => img.img_caminho)).flat());`
    
