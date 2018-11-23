# App Mentoria

App desenvolvida para você encontrar facilmente um mentor do **[Training Center](https://github.com/training-center/mentoria)** que vá de acordo com suas necessidades.

Você pode acessar a App **[aqui](http://tc-mentor-search.herokuapp.com/).**

## Projetos relacionados

- Se você nunca ouviu falar do **Training Center**, dê uma olhada na **[página do projeto](https://trainingcenter.io)**
- Esse repositório contém o código do Front-end da App e você pode encontrar o código do Back-end da App **[aqui](https://github.com/MentoriaApp/backend)**

## Tecnologias utilizadas

- **[Yarn](https://yarnpkg.com/pt-BR/)**
- **[Docker](https://www.docker.com/)**
- **[Create React App](https://github.com/facebook/create-react-app)**
- **[React](https://reactjs.org/)**
- **[React Emotion](https://github.com/emotion-js/emotion)**
- **[React Social Icons](https://github.com/jaketrent/react-social-icons)**
- **[Prettier](https://prettier.io/)**
- **[Husky](https://github.com/typicode/husky)**
- **[React Loading](https://github.com/fakiolinho/react-loading)**

## Iniciando a aplicação localmente

- Clone o repo, entre no diretório e instale as dependências:

```
git clone git@github.com:MentoriaApp/frontend.git && cd frontend && yarn
```

- Inicie a aplicação em modo de desenvolvimento, que ficará disponível em [http://localhost:3000](http://localhost:3000)

```
yarn start
```

## Scripts disponíveis

- Para iniciar a aplicação em modo de desenvolvimento:

```
yarn start
```

- Para iniciar os testes:

```
yarn test
```

- Para fazer a build de produção da app que será gerada no diretório `build`:

```
yarn build
```

- Para formatar os arquivos utilizando o **Prettier**:

```
yarn format
```

- Para fazer o `eject` (**[leia mais aqui](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject)**):

```
yarn eject
```

## Git Hooks

O projeto já vem configurado com um hook `pre-commit` para formatar todos os arquivos que foram modificados utilizando o **Prettier** para que você não precise de fazer isso manualmente.

## Contribuindo para o projeto

Se você quer contribuir, **[verifique ou crie uma issue](https://github.com/MentoriaApp/frontend/issues)** e envie um **Pull Request**.

Não se esqueça de ler o nosso **[Código de Conduta](./CODE_OF_CONDUCT.md)**
