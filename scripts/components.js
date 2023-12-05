/*
    este es el componente de el usuario que envia el mensaje esta parametrizado
    recibe el nombre, el mensage que va amostrar, la ruta de la imagen de avatar 
    y el ultimo parametro es para escribirle otra clase esto me permite alinearlo como yo quiera 
    en la grid
*/ 

export const user =(name, text, image,otherClass)=>{
    const content =  document.createElement('div')
    const avatar = document.createElement('img')
    const userName = document.createElement('strong')
    const userMessage = document.createElement('div')
    if(otherClass) content.classList.add(otherClass)
    content.classList.add('content-user')
    avatar.classList.add('avatar')
    userName.classList.add('user-name')
    userMessage.classList.add('user-message')
    userName.textContent = name
    userMessage.textContent = text
    avatar.setAttribute('src',image)
    content.append(avatar)
    content.append(userName)
    content.append(userMessage)
    return content
}