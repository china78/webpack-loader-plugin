const schema = require('./schema.json');

module.exports = function(content) {
  // 获取 配置文件中 options 中的选项
  // schema 是对 options 的验证规则
  // schema 要复合 json-schema 的规则

  const opts = this.getOptions(schema);

  const prefix = `
  /**
   * Auth: ${opts.author}
  */
  `;

  return prefix + content.replace(/console\.log\(.*\);?/g, '')
}