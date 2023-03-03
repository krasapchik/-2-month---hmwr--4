const projectA = document.getElementById('border1')

const texts = async () =>{
    const object = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsobject = await object.json()
  const data = jsobject.map((el) =>{
projectA.innerHTML += `<div class ="bo"><p>User id:${el.userId}</p><p>Id:${el.id} </p>${el.title}${el.body}</div>`
  })

}

texts()