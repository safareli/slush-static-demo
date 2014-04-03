var log, tag;

tag = 'bar';

log = function(text) {
  if (text == null) {
    text = 'baz';
  }
  return console.log(tag + '|foo|los|' + text);
};

log();
