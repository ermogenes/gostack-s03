# Class notes

## ReactJS

### Create the app with boilerplate

The `create-react-app` must be installed globally (`npm install -g create-react-app`) and acessible in _path_ (in Windows, normally `AppData\Roaming\npm`).

* `create-react-app github-explorer-react --template=typescript` creates a project folder named `github-explorer-react`.

* _Clean up_: you may clean the app folder unused files (css, svg, tests...) and references.

* Run using `yarn start` and browse `http://localhost:3000/`.

💡 The `react-scripts` dependency creates `start`, `build` and others scripts, including Webpack and Babel configuration (and `eject` to take it back to manual).

### Configure project

Rocketseat's tutorial:

* [🌍 Home](https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7) ([2020-07-17 version](Rocketseat-Notion-Padroes.md))
  * [🌍 EditorConfig](https://www.notion.so/EditorConfig-5f494ae4b47248c1b16681ff74d6766c) ([2020-07-17 version](Rocketseat-Notion-Padroes-EditorConfig.md))
  * [🌍 ESLint](https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99) ([2020-07-17 version](Rocketseat-Notion-Padroes-ESLint.md))
  * [🌍 Prettier](https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425) ([2020-07-17 version](Rocketseat-Notion-Padroes-Prettier.md))

Also, [🌍 Figma's design project](https://www.figma.com/file/HOCmxfrElzLpI75LdzFLia/Github-Explorer?node-id=0%3A1).

### Routing

Install [React Router DOM](https://reactrouter.com/web):

```
yarn add react-router-dom
```

And install the typescript support as a dev dependency:

```
yarn add @types/react-router-dom -D
```

Create `src/routes` folder and put your route files, like `index.tsx`.

Routes are components, so all routes must import React. Import your pages (next topic) and export a React FunctionComponent that returns a JSX with a React Router `Switch` with the routes and your paths.

```tsx
// All react components must import React
import React from 'react';
// Switch ensures that only the first occurence of path will be shown
// Route delivers a route component
import { Switch, Route } from 'react-router-dom';

// The pages components
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

// The switch component that returns only one route component
// Define the most specialized components first (aka. "/" in the end)
//  path: the URL regex
//  component: the react component to be shown
//  exact: ensures that the regex must be exact to return the component
const Routes: React.FC = () => (
  <Switch>
    <Route path="/Page2" component={Page2} />
    <Route path="/" component={Page1} />
  </Switch>
);

export default Routes;
```

The App must understand URL routes (using the `BrowserRouter` component):

```tsx
import React from 'react';
// The BrowserRouter uses the URL to identify the route which applies
import { BrowserRouter } from 'react-router-dom';

// The component with the Switch
import Routes from './routes';

// The app is a router in a SPA
const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
```

#### Pages

Pages are also components, so must import React too.

A commom organization is creating your pages in `src/pages/<PageName>/*`.

A page is a exported FunctionComponent (`React.FC`) constant that returns a JSX:

```tsx
import React from 'react';

const Page1: React.FC = () => {
  return <h1>Page One</h1>;
};

export default Page1;
```

---
🚧 _Under construction..._

