export default (text) => {
  const matches = text.match(/^(.{0,200})\s/);
  if (matches) {
    return matches[1];
  }
  return text;
}
