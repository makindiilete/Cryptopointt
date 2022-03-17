const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1b5afd",
              "@font-family": "'Lato' sans-serif",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
