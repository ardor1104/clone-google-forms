const express = require('express');
const path = require('path');
const compression = require('compression');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const Logger = require('./logger.ts');

const app = express();
const port = process.env.PORT || '3000';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  const publicPath = '/';
  const outputPath = path.resolve(process.cwd(), 'build');

  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (_, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
} else {
  const webpackConfig = require('../private/webpack/webpack.dev');

  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('*', (_, res) => {
    compiler.outputFileSystem.readFile(
      path.join(compiler.outputPath, 'index.html'),
      (err, file) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.send(file.toString());
        }
      },
    );
  });
}

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, () => {
  const prettyHost = process.env.HOST || 'localhost';
  Logger.appStarted(port, prettyHost);
});
