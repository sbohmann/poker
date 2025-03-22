import path from "path"

export function contentTypeForFile(url) {
    const ext = path.extname(url).toLowerCase()
    switch (ext) {
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'application/javascript'
        case '.png':
            return 'image/png'
        case '.jpg':
            return 'image/jpeg'
        case '.svg':
            return 'image/svg+xml'
        default:
            return 'application/octet-stream'
    }
}