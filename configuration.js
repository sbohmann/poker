import fs from "fs"
import {configurationPath} from "./paths.js"

const defaultConfiguration = {
    port: 3607
}

export const configuration = (() => {
    try {
        const configurationFromFile =
            JSON.parse(fs.readFileSync(configurationPath, 'utf8'))
        return Object.assign(
            defaultConfiguration,
            configurationFromFile)
    } catch (error) {
        throw RangeError(`Error reading configuration.json: ${error.message}`)
    }
})()
