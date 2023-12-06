// Load file
import * as fileSystem from 'node:fs/promises'

export async function readInputFromFile(path) {
  try {
    const data = await fileSystem.readFile(path, { encoding: 'utf8' })
    return data.split('\r\n')
  } catch (error) {
    console.error(`Something went wrong reading the file: ${error}`)
  }
}