export const parseQuery = queryStr => {
  let rawQueries = queryStr.replace('?', '').split('&');
  const queries = {};
  for (const query of rawQueries) {
    let q = query.split('=');
    queries[q[0]] = q[1];
  }
  return queries;
};
