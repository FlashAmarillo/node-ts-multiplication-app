import fs from 'fs'

export interface SaveFileUseCase {
  execute: (options: Options) => boolean
}

export interface Options {
  fileContent: string
  destination?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor(){}

  execute({ 
    fileContent,
    destination = 'outputs',
    fileName = 'table'
  }: Options): boolean {

    try {
      if (!fs.existsSync(destination)){
        fs.mkdirSync(destination, { recursive: true })
      }
  
      // escribimos un nuevo archivo
  
      // forma NO sync
      // fs.writeFile(path.join(dir, `tabla-${base}.txt`), header.concat(table), (err) => {
      //   if(err) throw err
      //   console.log('The file has been saved! :D');
      // })
  
  
      // forma sync
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
