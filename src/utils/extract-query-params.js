export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, vale] = param.split('=')

    queryParams[key] = vale

    return queryParams
  }, {})
}