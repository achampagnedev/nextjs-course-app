const notes = new Array(15)
  .fill(1)
  .map((e, i) => ({ id: Date.now() + i, title: `This is my note ${i}` }));

module.exports = notes;
