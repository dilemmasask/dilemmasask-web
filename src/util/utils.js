export function getQuery (filters) {
  return Object.keys(filters)
    .filter(k => !!filters[k])
    .map(k => `${k}=${filters[k]}`)
    .join('&');
}

export function extractTags (text) {
  return text
    .split(/#/)
    .slice(1)
    .map(t => t.split(/\W/)[0])
    .filter(t => t);
}
