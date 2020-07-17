# Class notes

🚧 _Under construction..._

## ReactJS

### Create the app with boilerplate

The `create-react-app` must be installed globally (`npm install -g create-react-app`) and acessible in _path_ (in Windows, normally `AppData\Roaming\npm`).

* `create-react-app github-explorer-react --template=typescript` creates a project folder named `github-explorer-react`.

* _Clean up_: you may clean the app folder unused files (css, svg, tests...) and references.

* Run using `yarn start` and browse `http://localhost:3000/`.

💡 The `react-scripts` dependency creates `start`, `build` and others scripts, including Webpack and Babel configuration (and `eject` to take it back to manual).