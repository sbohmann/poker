import http from 'http'
import path from 'path'
import {contentTypeForFile} from "./contenttype.js"
import {configuration} from "./configuration.js"
import {mainScriptDirectory} from "./paths.js"
import {FileCache} from "./filecache.js"

const cache = FileCache()

const server = http.createServer(handleRequest)

function handleRequest(request, response) {
    const requestUrl = request.url === '/' ? '/index.html' : request.url
    const filePath = path.join(mainScriptDirectory, 'public', requestUrl)
    try {
        const data = cache.get(filePath)
        response.statusCode = 200
        response.setHeader('Content-Type', contentTypeForFile(requestUrl))
        response.end(data)
    } catch (error) {
        console.log(error)
        if (error.code === 'ENOENT') {
            response.statusCode = 404
            response.setHeader('Content-Type', 'text/plain')
            response.end('404 Not Found\n')
        } else {
            response.statusCode = 500
            response.setHeader('Content-Type', 'text/plain')
            response.end('500 Server Error\n')
        }
    }
}

server.listen(configuration.port, () => {
    console.log(`Server running at http://localhost:${configuration.port}/`)
})
