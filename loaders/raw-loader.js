module.exports = function(content) {
  // content 为 Buffer 数据流
  console.log(content);
  return content;
}

module.exports.raw = true;