const projectA = document.getElementById('list')
const projectB = document.getElementById('list2')
const projectC = document.getElementById('list3')
const projectD = document.getElementById('list4')
const projectE = document.getElementById('list5')
const projectF = document.getElementById('list6')


const getData = async () => {
    const pesponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await pesponse.json()
   const result  = data[0]
      const result2 = data[1]
        const result3 = data[2]
           const result4  = data[3]
                 const result5 = data[4]
              const result6 = data[5]
           const keys = Object.keys(result)
         const poro = keys[1]
      const poro2 = keys[2]

  console.log(result);

            projectA.innerHTML = `<h2>1</h2> <b>${poro}</b>: ${result.name} <br> <b>phone: </b>${result.phone}<b><br>${poro2}:</b>${result.username}<br>
                                            <b>website:</b>${result.website}<br><b>email: </b>${result.email}`

            projectB.innerHTML = `<h2>2</h2> <b>${poro}</b>: ${result2.name} <br><b>phone: </b>${result2.phone}<br><b>
                                               ${poro2}:</b>${result2.username}<br><b>website:</b>${result2.website}<br><b>email:</b>${result2.email}`

            projectC.innerHTML = ` <h2>3</h2><b>${poro}</b>: ${result3.name} <br><b>phone: </b>${result3.phone}<br><b>${poro2}:</b>${result3.username}<br>
                                      <b>website:</b>${result3.website}<br><b>email:</b>${result3.email} `

            projectD.innerHTML = `<h2>4</h2> <b>${poro}</b>: ${result4.name} <br><b>phone: </b>${result4.phone}<br><b>${poro2}:</b>${result4.username}<br>
                                       <b>website:</b>${result4.website}<br><b>email:</b>${result4.email} `

             projectE.innerHTML = `<h2>5</h2> <b>${poro}</b>: ${result5.name} <br><b>phone: </b>${result5.phone}<br><b>${poro2}:</b>${result5.username}<br>
                                             <b>website:</b>${result5.website}<br><b>email:</b>${result5.email} `

            projectF.innerHTML = `<h2>6</h2> <b>${poro}</b>: ${result6.name} <br><b>phone: </b>${result6.phone}<br><b>${poro2}:</b>${result6.username}<br>
                                              <b>website:</b>${result6.website}<br><b>email:</b>${result6.email} `


}
getData()
 