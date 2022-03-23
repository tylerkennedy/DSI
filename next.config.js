module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.node = {
        fs: 'empty'
      }
      return config
    },
  }
}