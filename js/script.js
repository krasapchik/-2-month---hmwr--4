const projectA = document.getElementById('list')

const getData = async () => {
    const pesponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await pesponse.json()
   const keys = data.map((el) =>{
      return `<div class ="heder"><h2>${el.id}</h2><b>name: </b>${el.name}<br>
      <b>phone:</b>${el.phone}<br><b>username:</b>${el.username}<br><b>website:</b>${el.website}<br><b>email:</b>${el.email}</div>`
   })
   
    projectA.innerHTML = keys.join("");


}
getData()


 
