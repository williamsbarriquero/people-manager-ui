# Contribuição e Exwecução do Projeto

### Configurando seu ambiente e executando projeto

1. Se não tiver instalado, realize as seguintes instalações:
   1. [Node e NPM](https://nodejs.org/en/) versão 12.16.xx ou posterior (Para evitar ter risco de incompatibilidade).
   2. [Angular CLI](https://cli.angular.io/) versão 10.0.xx
   3. Recomendável usar o editor Visual Studio Code.
2. Antes de tentar executar, garanta que a __API REST*__ está no ar e execute (dentro da raiz do projeto) o commando `npm install` para baixar todas as dependências do projeto.
3. Depois execute `ng serve`, e sua aplicação estará disponível na URL: http://localhost:4200
4. Este projeto tem compatibilidade com as versões `v1` e `v2` da API REST, para testar esse comportamento abro o arquivo `src/environments/environment.ts` e edite a propriedade `apiVersion` com o valor da versão. `Ex: apiVersion: 'v1'`
> Os Valores de versões conhecidos são __v1__ e __v2__, qualquer valor que não seja nenhum dos dois será ignorado e você terá dificuldades na comunicção com a API REST.

### Contributing

- Faça um fork desse repositório;
- Cria uma branch com sua feature: `git checkout -b minha-feature`;
- Commit suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça o push da branch: `git push origin minha-feature`.
- Solicite um pull request

> Quando seu pull request for aceito, sua branch pode ser deletada.

> A API REST está disponível neste [link](https://github.com/wwwgomes/people-manager)
