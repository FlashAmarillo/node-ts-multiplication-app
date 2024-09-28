
# Node-ts-multiplication-app

Instrucciones para correr y ejecutar nuestro programa

Instalar dependencias

```
npm install
```

correr

```
npm run dev
```

Banderas necesarias 

-b: base para crear la multiplicación (obligatoria)

-l: limite para crear la multiplicación 

-s: mostrar la tabla en la consola

-n: nombre del archivo que contendra la tabla de multiplicacion (por defecto es multiplication_table.txt)

-d: destino o path de salida para el archivo (por defecto es la carpeta outputs en la raiz del proyecto)

ejemplo:

```
npx ts-node src/app -b 7 -s -l 30 -n "newfile" -d "table-outputs"
```