# new-webpack-express
New project with webpack and express backend/dev server

Based on: [http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup]()

## CURRENT STATUS

Still being developed

### TODO

- Add proper production/dist flow
- Make pretty

## How to run

- `npm install`
- then:

| command | address | description |
| `npm start` |localhost:3000 | to run the full express server. Use this for mocking calls to a backend, custom routes, etc. |
| `./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.config.js --hot --progress --colors --inline --content-base ./build` | localhost:8080 | to run only the webpack-dev-server for simple frontend projects |

## Note on sourcemaps and hot module replacement

Sourcemaps should show the actual source _less_ file in the developer console. However, according to the [less-loader documentation](https://github.com/webpack/less-loader#source-maps) you need to extract the css with the [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) due to browser limitations.

When you use this plugin however, the css files need to be included separately in your html file. This means that _hot module replacement_ **will not work**.

### Choose

So, you have to choose between proper sourcemaps (including the original file name), or sourcemaps that will display "<style>..</style>" as source file.

This can be initialised in `webpack.config.js`.
