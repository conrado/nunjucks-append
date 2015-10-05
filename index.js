var addtoblock   = require('./lib/nunjucks-tags/addtoblock');
var render_block = require('./lib/nunjucks-tags/render_block');

module.exports = {

  /**
   * Add the nunjucks extensions to the given nunjucks environment
   *
   * @param {Object} nunjucksEnvironment The nunjucks environment to extend.
   */
  install: function(nunjucksEnvironment) {
    nunjucksEnvironment.addExtension('addtoblock', addtoblock);
    nunjucksEnvironment.addExtension('render_block', render_block);
  }
}
