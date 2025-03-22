import {fileURLToPath} from "url"
import path from "path"

export const mainScript = fileURLToPath(import.meta.url)
export const mainScriptDirectory = path.dirname(mainScript)
export const configurationPath = path.join(mainScriptDirectory, 'configuration.json')
