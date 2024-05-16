# frontend-challenge
Repositório da minha solução para o teste da B2bit.

## Scripts
- Executar em Ambiente de Desenvolvimento
```
npm run dev
```
Este comando inicia o servidor de desenvolvimento usando Vite, permitindo que você visualize e trabalhe no seu aplicativo durante o desenvolvimento. O servidor é iniciado em http://localhost:5173 por padrão.

- Compilar o Projeto
```
npm run build
```
Este comando compila o projeto usando TypeScript (tsc) e Vite, preparando-o para implantação em produção. Os arquivos compilados serão gerados na pasta dist.

- Visualizar a compilação de produção
```
npm run preview
```
Este comando inicia um servidor local para visualizar a compilação de produção do projeto. É útil para testar o aplicativo antes de implantá-lo em produção.

- Executar testes
```
npm run tests
```
Este comando executa os testes usando Cypress. Certifique-se de que o servidor de desenvolvimento esteja em execução (npm run dev) antes de executar os testes.

- Linting do Código
```
npm run lint
```
Este comando executa o ESLint no código TypeScript, procurando por problemas de formatação e erros de código.

- Formatação do Código
```
npm run pretty
```
Este comando utiliza o Prettier para formatar automaticamente todos os arquivos de código no projeto.

