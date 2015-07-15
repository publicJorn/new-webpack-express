# new-webpack-express
New project with webpack and express backend/dev server

Based on: [http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup]()

## CURRENT STATUS

Still being developed

- Instead of hot module replacement, the page reloads. Probably because we're using express also. Need to investigate this further.

## How to run

- `npm install`
- then:

| command | address | description |
| `npm start` |localhost:3000 | to run the full express server. Use this for mocking calls to a backend, custom routes, etc. |
| `./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.config.js --hot --progress --colors --inline --content-base ./build` | localhost:8080 | to run only the webpack-dev-server for simple frontend projects |
