/**
 * Next.js Configuration
 * @param [plugin: function, configuration?: object, phases?: array]
 * @see: https://github.com/cyrilwanner/next-compose-plugins
 */
const withPlugins = require('next-compose-plugins')

const nextConfiguration = {
  webpack: (config, _options) => {
    // modify the `config` here

    return config
  }
}

const plugins = []

module.exports = withPlugins([...plugins], nextConfiguration)
