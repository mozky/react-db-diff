# React Database Diff

Simple webapp that helps diffing DBs

## Architecture

The app is composed or a react application bootstraped with `create-react-app`
and a simple `express` server that does the connection to the DB

## How to use

### Install
```bash
npm install
```

### Development
First we start the API server
```bash
npm run dev
```

Now we start `create-react-app` on watch mode
```bash
npm start
```

### Production
On production, we build the React app and serve it as a static file
```bash
npm run deploy
```

## Test
NYI, runs a dumb test
```bash
npm test
```
