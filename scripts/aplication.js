import {user} from "../scripts/components.js";
import { answer } from "./logic.js";

const message = document.getElementById('messages')
let found = true
const form = document.getElementById('formUser')
const fragment = document.createDocumentFragment()
let userTwoName = 'user'
const userTwoAvatar = '../assets/user.png'
const userOneName = 'Angel'
const userOneAvatar = '../assets/angel.png'
fragment.append(user(userOneName,'Hola, me llamo angel, Soy tu asesor el día de hoy. ¿Cual es tu nombre?.',userOneAvatar))
message.append(fragment)

/** 
 * con esta evento hacemos que recibamos el mensaje utlizamos un setimeaut para la asincronidad 
 * y no tener probrmas aqui usamos todas las funciones y componentes creados
 * ademas usamos un fragment para mejorar el rendimiento de la app
*/
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const messageUser = e.target.menssageUser.value
    if(found){ 
        userTwoName = messageUser
    }
    fragment.append(user(userTwoName,messageUser,userTwoAvatar,'aling-end'))
    setTimeout(() => {
        fragment.append(user(userOneName,answer(messageUser,found,userTwoName),userOneAvatar))
        found = false
        message.append(fragment)
    },500);
    message.append(fragment)
})