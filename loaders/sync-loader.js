// 方式 1
module.exports = function(content) {
  return content
}

// 方式 2
module.exports = function(content, map, meta) {
  /**
   * 参数1: err 代表错误信息
   * 参数2: 文件内容
   * 参数3: source-map相关
   * 参数4: 其他 loader 传递过来的参数
   */
  console.log('同步loader内部');
  return this.callback(null, content, map, meta)
}