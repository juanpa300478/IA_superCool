import { ENUMS } from "./enums.js"

/*
esta funcion recibe tes parametros el primero es el input que recibimos del usuario que prigunta
luego es una bandera para el mensaje de bienvenida
y el name es el nombre del usuario esto nos permite llamarlo por su nombre

*/
export const answer = (question,found,name)=>{
    if(found){
        return `Un gusto ${name}. ¿En que puedo ayudar el día de hoy?.`
    }
    let questionLo = question.toLowerCase()
    //usamos las funciones creadas, que nos dan como resultado la posicion en las base de datos
    //con mas palabra iguales a la progunta realizada
    let indexResult = numQuestion(showResult(validateQuestion(questionLo)))
    return ENUMS[indexResult] //retornamos la pasicion de el array(que tenemos como base de datos )   
}
//guarda las palabras de una frase en un array de palabras y retorna un array
//para comprarlas con la base de datos de una forma mas facil
const validateQuestion =(question)=>{
    let questionArr = []
    let word = ''
    for(let i = 0 ; i < question.length; i++){
        if(question.charAt(i) != ' ') word+= question.charAt(i)
        if(question.charAt(i) == ' ' || i == question.length -1 ){
            questionArr.push(word)
            word = ''
            continue
        }
    }
    return questionArr
}
//esta funcion compara las palabrras con las respuesta he identifica con cual tiene mas afinidad
/*
para hacer esto primero busca la primer posicion en la base datos (array)
en esa posicion pasa cada una de las pabras de la pregunta hecha si encuenta una 
palabra que conincida la guarda en la varible count cuando ya ha terminado de verificar todas
las palabras las guarda en el array points[]
*/
const showResult =(words)=>{
    const points = []
    ENUMS.forEach((prayer)=>{
        let count = 0
        words.forEach((word)=>{
            if(prayer.indexOf(word) != -1){
                count++
            }
        })
        points.push(count)
    })
    return points
}

/*
esta funcion recibe el array poits he identifica cual ha sido la posicion con el
puntaje mas alto y retorna esa posicion con lo que tenemos la posicion en la base de datod
que tiene mas palabras iguales a la pregunta
*/
const numQuestion =(nums)=>{
   let numCopy = [...nums]
   let numsOrder = nums.sort((a,b)=>b-a)
   for(let i = 0 ; i < numCopy.length; i++){
        if(numCopy[i] == numsOrder[0]){
            return i
        }
   }
}
