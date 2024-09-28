
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string
}

export interface CreateTableOptions {
  base: number
  limit?: number
}

export class CreateTable implements CreateTableUseCase {

  constructor(
    /*
      Dependency Inyection DI
    */
  ) {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    // Aquí ejecutamos nuestro caso de uso

    // const header: string = `
    // ==============================
    //         Tabla del ${base}
    // ==============================\n
    // `

    const newHeader: string = `
==================================
      Tabla del ${base} x ${limit}
==================================\n
`
    let autputMessage: string = ''

    for (let i = 1; i <= limit; i++) {
      const filaTabla = `${base} x ${i} = ${base * i}`
      autputMessage += `${filaTabla} \n`
    }
    
    return newHeader.concat(autputMessage)
  }

}