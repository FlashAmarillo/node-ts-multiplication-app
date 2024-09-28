import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin'

const {b:base, l:limit, s:showTable } = yarg
const header: string = `
==============================
        Tabla del ${base}
==============================
`

// console.log(header)

let table: string = ''

for (let i = 1; i <= limit; i++) {
  const filaTabla = `${base} x ${i} = ${base * i}`
  table += `${filaTabla} \n`
}

if (showTable) {
  console.log(header.concat(table))
}

// verificamos si el directorio de salida existe
const outputPath = 'outputs'

if (!fs.existsSync(outputPath)){
  fs.mkdirSync(outputPath, { recursive: true })
}

// escribimos un nuevo archivo

// forma NO sync
// fs.writeFile(path.join(dir, `tabla-${base}.txt`), header.concat(table), (err) => {
//   if(err) throw err
//   console.log('The file has been saved! :D');
// })


// forma sync
fs.writeFileSync(`${outputPath}/tabla-${base}x${yarg.l}.txt`, header.concat(table))
console.log('The file has been saved! :D')