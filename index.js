module.exports = (url) => {

    const parsedQuery = {}
    const startQueryIndex = url.indexOf('?')
    if (startQueryIndex === -1)
        return parsedQuery

    const numberSignIndex = url.indexOf('#')
    const endQueryIndex = numberSignIndex != -1 ? numberSignIndex : url.length

    const querystring = url.substring(startQueryIndex + 1, endQueryIndex)
    const queryPairs = querystring.split('&')

    for (queryPair of queryPairs) {
        const [key, value] = queryPair.split('=')
        if (key == undefined || value == undefined)
            continue
        const invalidPattern = /[^;&a-z0-9\\d%_.~+=-]/
        if (key.search(invalidPattern) == -1 && value.search(invalidPattern) == -1)
            parsedQuery[key] = value
    }

    return parsedQuery
}