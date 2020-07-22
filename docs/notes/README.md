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

### Styling

You may create any `.css` files and import them. When you do that, the CSS selectors will apply to _all_ applications globally, because the CSS is always global to the page loaded in the browser.

To scope the styling, you may use styled components.

#### Styled Components

Install the package and the types:

```
yarn add styled-components
yarn add @types/styled-components -D
```

Install VsCode extension `vscode-styled-components` for syntax highlighting and IntelliSense.

Create a `styles.ts` file with the styles for the page only. Import `styled` and export a component from it, equivalent to a HTML tag with the CSS in a tagged template string.

```ts
import styled from 'styled-components';

const size = 48;

export const Title = styled.h1`
  font-size: ${size + 10}px;
  color: #3a3a3a;
`;
```

`Title` is now a styled component `h1`-based, `58px`-sized gray. You may now use it as a JSX tag just importing the styled component.

```tsx
import React from 'react';

import { Title } from './styles';    // <--- here

const Dashboard: React.FC = () => {
  return <Title>Dashboard</Title>;   // <--- and here
};

export default Dashboard;
```

You may export more than one component per file, and import just the need.

You can nest CSS selectors:

```ts
export const Form = styled.form`
  display: flex;

  input {
    flex: 1;
  }
`;
```

You can nest the pseudo-classes using `&` (means _this_):

```css
  button {
    color: #fff;

    &:hover {
      color: #f00;
    }
  }
```

The `polished` package (`yarn add polished`) manipulate colors (and more) easily:

```ts
// ...
import { shade } from 'polished';
// ...
  background-color: ${shade(0.2, '#04d361')}; // 20% darker
// ...
```

#### Global styling

Create `src/styles/global.ts`, import `createGlobalStyle` and export a styled component with the same name and the global style.

```ts
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    background-color: #f0f0f5;
  }
`;
```

Import it in your `App.ts` and put it outside the router.

💡 Use an empty tag called fragment (`<>` and `</>` to create an empty container).

```tsx
// ...
import GlobaStyle from './styles/global';
// ...
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobaStyle />
  </>
);
// ...
```

To import Google Fonts, put the `<link>` on your HTML base template.

To use images, put them on `src/assets` and import on a `.ts` file.

As HTML/JSX:
```tsx
// ...
import logoImg from '../../assets/logo.svg';
// ...
    <>
      <img src={logoImg} alt="My Logo" />
    </>
// ...
```

As CSS:
```ts
// ...
import background from '../assets/background.svg';
// ...
  body {
    background-image: url(${background});
// ...
  }
// ...
```

#### Icons

Install [`react-icons`](https://react-icons.github.io/react-icons/) with `yarn add react-icons`. Import it an use Font Awesome (`react-icons/fa`), Feather (`react-icons/fi`) and others.

```tsx
// ...
import { FiChevronRight } from 'react-icons/fi';
// ...
    <FiChevronRight size={20} />
// ...
```

#### Props

You may create an attribute on a styled component tag using Props. Create an interface and use it as the styled component type. Access the property in an interpolation creating an arrow function with the `props` parameter.

🍌 To write CSS inside the code part of a interpolation, import `css` from `styled-components`.

```tsx
import styled, { css } from 'styled-components';
// ...
interface FormProps {
  hasError: boolean;
}
// ...
export const Form = styled.form<FormProps>`
  // ..
  input {
    border: 2px solid #fff;
    // ..

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
        // ..
      `}
  }
  // ..
`;
// ...
```

Use the prop on your component JSX. In this example, it's `true` if `inputError` has any content.

```tsx
  //..
      <Form hasError={!!inputError} ... >
        // ..
        <input ... />
        // ...
      </Form>
  //..
```

### State

Import `useState` and create state variables on your component code, indicating the state name, the setter function and a default value:

```tsx
import React, { useState } from 'react';
// ...
const MyComponent: React.FC = () => {
  const [myStateVar, setMyStateVar] = useState('default value');
  // ...
  return
    <input
      value={myStateVar}
      onChange={e => setMyStateVar(e.target.value)}
    />;
};
// ...
```

You can set the value using the setter:

```ts
setMyStateVar('new value');
// or clear it
setMyStateVar('');
```

### Event handling

You may write a handler to an component event:

```tsx
import React, { useState, FormEvent } from 'react';
// ...
const MyComponent: React.FC = () => {
  // ...
  function mySubmitEventHandler(event: FormEvent<HTMLFormElement>): void {
    // do something...
    event.preventDefault(); // ... or don't
  }
  // ...
  return
      <Form onSubmit={mySubmitEventHandler}>
        // ...
      </Form>;
};
// ...
```

### Effects and LocalStorage

When a state changes, you may run a code using effects.

Import `useEffects` from `react` and call it from a component passing a handler function and an array of states to monitor.

In this example, the handler puts the `myStateVar` state value on the `myStateVar` key on Local Storage.

* Local Storage are address-based. Use an unique name for your app keys, like `@MyAppName:myStateVar`.
* Use `JSON.stringify(myArrayStateVar)` to store values of arrays.
* Use an arrow function to generate the array with the values parsed from local storage.

Example with string state:

```ts
import React, { useState, useEffect } from 'react';
// ...
const MyComponent: React.FC = () => {
  // ...
  const [myStateVar, setMyStateVar] = useState(
    localStorage.getItem('@MyAppName:myStateVar') || '',
  );
  // ...
  useEffect(() => {
    localStorage.setItem('@MyAppName:myStateVar', myStateVar);
  }, [myStateVar]);
  // ...
};
// ...
```

Example with array state:

```ts
import React, { useState, useEffect } from 'react';
// ...
const MyComponent: React.FC = () => {
  // ...
  const [myArrayStateVar, setMyArrayStateVar] = useState<MyInterface[]>(() => {
    const storedArray = localStorage.getItem('@MyAppName:myArrayStateVar');
    return storedArray ? JSON.parse(storedArray) : [];
  });
  // ...
  useEffect(() => {
    localStorage.setItem('@MyAppName:myArrayStateVar', myArrayStateVar);
  }, [myArrayStateVar]);
  // ...
};
// ...
```

❗ `localStorage.getItem` and `localStorage.setItem` get/sets the key/value on local storage.

💡 Pro tip: use `useEffect` without any state (`[]`) to run the effect once and never more.

```ts
  useEffect(() => {
    // Your code
  }, []);
```

### API consumption

Install `axios`:

```
yarn add axios
```

Create `api.ts` on `src/services`, import `axios` and export an API reference (GitHub API example):

``` ts
import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
});

export default githubApi;
```

Import and consume anywhere needed:

```ts
async function GetDataFromApi(): Promise<void> {
  const response = await githubApi.get('repos/ermogenes/gostack-s03');
  const data = response.data;
  // do something with the data
}
```

#### Keep result list on a state

Import `useState` and create a interface to type the response structure. Create the state as a typed array. Call `axios.get` also typed. Update the state.

```tsx
import React, { useState } from 'react';
// ...
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
// ...
const MyComponent: React.FC = () => {
  // ...
  const [repositories, setRepositories] = useState<Repository[]>([]);
  // ...
  async function populateRepositoriesState(): Promise<void> {
    const response = await githubApi.get<Repository>(`/repos/ermogenes/gostack-s03`);
    const repositoryFound = response.data;
    setRepositories([...repositories, repositoryFound]);
  }
  // ...
};
```

😖 Use `// eslint-disable-next-line camelcase` on the prior line to prevent the eslint error if the API do not use camelcase, but you do (like GitHub and me).

To iterate a list and creating elements with it, use `map`.

```tsx
// ...
      <Repositories>
        {repositories.map(repo => (
          <a key={repo.full_name} href="whateverYouWant">
            <img
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
            />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
          </a>
        ))}
      </Repositories>
// ...
```

#### Catching errors

A commom strategy is using validation and exception handling to manage error conditions.

Create a state with the message, and show it condittionally on a styled component (or somewhere else).

```tsx
// ...
  const [inputError, setInputError] = useState('');
    // ...
    // Validation
    if (!valid) {
      setInputError('Validation message');
      return;
    }
    // ...
    // Exception handling
    try {
      const response = await api.get //...
      // ...
      setInputError(''); // <--- Clean the error in case of success
    } catch (Err) {
      setInputError('Error message');
    }
    //
    return (
      // ...
      {inputError && <Error>{inputError}</Error>}
      // ...
    );
// ...
```

### Navigation

Anchors will cause page reloading. To navigate without reload, use the `Link` component from `react-router-dom`.

```tsx
// ..
import { Link } from 'react-router-dom';
// ..
  <Link to="/my-route">Link to my route</Link>
  <Link to={ `/my-route/${myParameter}` }>Link to my route with variable URL parameter</Link>
// ..
```

In the router, define one or more route parameter:

```tsx
    <Route path="/myRoute/:paramName/:restOfParams+" component={MyComponent} />
```

In the component, import `useRouteMatch` from `react-router-dom` and call it typed with an interface created for your parameters.

```tsx
// ..
import { useRouteMatch } from 'react-router-dom';
// ..
interface MyComponentParams {
  parmName: string;
  restOfParms: string;
}
// ..
const MyComponent: React.FC = () => {
  // ..
  const { params } = useRouteMatch<MyComponentParams>();
  return <h1>Called wit parameter {params.parmName}</h1>;
  // ..
};
// ..
```

🍌 The `return` line above presents an error on EsLint: `react/jsx-one-expression-per-line`. You may disable that on `eslintrc.json` rules: `"react/jsx-one-expression-per-line": "off",`.

---

## Misc

On `eslintrc.json` rules, you may disable errors for missing explicit return types on expressions:

```json
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true
          }
        ],
```

## Javascript general tips

*Serializing and parallelizing async calls*

```ts
// Serial, with async/await
async function serialLoadData(): Promise<void> {
  const responseA = await myAsyncCallA();
  const responseB = await myAsyncCallB();
  doSomethingWith(responseA);
  doSomethingWith(responseB);
}
serialLoadData();

// Parallel, with async/await
async function parallelLoadData(): Promise<void> {
  const [responseA, responseB] = await Promise.all([
    myAsyncCallA(),
    myAsyncCallB(),
  ]);
  doSomethingWith(responseA);
  doSomethingWith(responseB);
}
parallelLoadData();

// Parallel, with .then
myAsyncCallA().then((responseA) => { doSomethingWith(responseA) });
myAsyncCallB().then((responseB) => { doSomethingWith(responseB) });
```
