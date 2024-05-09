# Simulador de Camada Superficial do Bulbo Úmido

Este é o frontend de uma aplicação que interage com uma API para fornecer aos usuários os dados e informações necessários para configurar simulações da camada superficial do bulbo úmido. A API simplifica o processo de obtenção e integração de dados essenciais para a execução de simulações hidrológicas.

## Tecnologias Utilizadas

- React: Utilizado para construir a interface de usuário.
- React Router: Utilizado para a navegação entre diferentes páginas da aplicação.
- Materialize CSS: Framework CSS utilizado para estilizar a aplicação.
- Axios (ou outro cliente HTTP): Pode ser utilizado para realizar requisições à API.

## Configuração

Antes de executar a aplicação, é necessário configurar o ambiente. Certifique-se de que Node.js e npm estão instalados em sua máquina. Em seguida, siga estes passos:

1. Clone o repositório para o seu ambiente local.
2. Navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Após a instalação, execute o comando `npm start` para iniciar o servidor de desenvolvimento.
5. Acesse a aplicação através do navegador no endereço `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `src/`: Contém o código-fonte da aplicação.
  - `assets/`: Contém arquivos estáticos, como imagens e estilos CSS.
  - `components/`: Contém os componentes reutilizáveis da aplicação, como cabeçalho, rodapé e visualizações de carregamento.
  - `pages/`: Contém as páginas principais da aplicação, como a página inicial e a página de simulações.
  - `App.js`: Arquivo principal que define a estrutura da aplicação e as rotas.

## API

A API utilizada por este frontend está disponível em [API de simulação do Bulbo em camada superficial](https://github.com/geanderson-062/API-de-simulacao-do-Bulbo-em-camada-superficial). Certifique-se de configurar e executar a API para que o frontend possa interagir corretamente com ela.

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estes passos:

1. Fork este repositório.
2. Crie uma branch com uma descrição clara da sua alteração (`git checkout -b feature/sua-feature`).
3. Faça suas alterações e comite-as (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/sua-feature`).
5. Abra um pull request explicando suas alterações.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Agora o README inclui um link direto para o repositório da API, permitindo fácil acesso para quem estiver interessado em explorar ou contribuir com ela.
