module.exports = function(content, map, meta) {
  const callback = this.async();

  // 模拟异步操作
  setTimeout(() => {
    console.log('异步loader内部');
    callback(null, content, map, meta)
  }, 1000);
}