// ## Array Cardio Day 2

const pessoas = [
    { nome: 'Wes', ano: 1988 },
    { nome: 'Kait', ano: 1986 },
    { nome: 'Irv', ano: 1970 },
    { nome: 'Lux', ano: 2015 }
]

const comentarios = [
    { texto: 'Love this!', id: 523423 },
    { texto: 'Super good', id: 823423 },
    { texto: 'You are the best', id: 2039842 },
    { texto: 'Ramen is my fav food ever', id: 123523 },
    { texto: 'Nice Nice Nice!', id: 542328 }
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const eAdulto = pessoas.some((cada) => {
    const anoAtual = (new Date()).getFullYear()
    if (anoAtual - cada.ano >= 19) {
       return true
    }
})
 
console.log({eAdulto})

// Array.prototype.every() // is everyone 19 or older?
const todosAdultos = pessoas.every((cada) => {
    const anoAtual = (new Date()).getFullYear()
    if (anoAtual - cada.ano >= 19) {
       return true
    }
})
 
console.log({todosAdultos})

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comentario = comentarios.find(cada => {
    if (cada.id === 823423) {
       return true
    }
})

console.log(comentario)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const indice = comentarios.findIndex(cada => cada.id === 823423)

console.log(indice)

comentarios.splice(indice, 1)

// digitar console.table(comentarios) no console do browser

const novosComentarios = [
    ...comentarios.slice(0, indice),
    ...comentarios.slice(indice + 1)
]

// digitar console.table(novosComentarios) no console do browser





