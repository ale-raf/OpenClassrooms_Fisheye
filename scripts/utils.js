export async function getJSONData(params) {
  const res = await fetch("../data.json");
  const data = await res.json();
  const dataWithParams = data[params];
  return dataWithParams;
}

export function compareMediaByLikes(a, b) {
  return b.likes - a.likes;
}

export function compareMediaByTitle(a, b) {
  return a.title.localeCompare(b.title);
}

export function compareMediaByDate(a, b) {
  let dateA = new Date(a.date);
  let dateB = new Date(b.date);
  return dateB - dateA;
}
