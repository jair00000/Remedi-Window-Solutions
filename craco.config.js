module.exports = {
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Suppress deprecation warnings by using the new setupMiddlewares API
      return middlewares;
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Suppress webpack deprecation warnings
      if (!webpackConfig.ignoreWarnings) {
        webpackConfig.ignoreWarnings = [];
      }
      webpackConfig.ignoreWarnings.push(
        /onAfterSetupMiddleware/,
        /onBeforeSetupMiddleware/,
        /DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE/,
        /DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE/
      );
      return webpackConfig;
    },
  },
};
