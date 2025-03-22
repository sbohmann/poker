import fs from "fs"

export function FileCache() {
    const cachedFiles = new Map()
    return {
        get(path) {
            const result = cachedFiles.get(path)
            if (result === undefined || fileMayHaveChanged(path, result.mtime)) {
                return readAndCache(path)
            }
            return result.data
        }
    }

    function fileMayHaveChanged(filePath, mtime) {
        const stats = fs.statSync(filePath)
        return stats.mtime > mtime
    }

    function readAndCache(filePath) {
        const data = fs.readFileSync(filePath)
        const stats = fs.statSync(filePath)
        cachedFiles.set(filePath, {data, mtime: stats.mtime})
        return data
    }
}
