const projectA = document.getElementById('border1')
const projectB = document.getElementById('border2')
const projectC = document.getElementById('border3')
const projectD = document.getElementById('border4')
const projectE = document.getElementById('border5')
const projectF = document.getElementById('border6')
const projectG = document.getElementById('border7')
const projectH = document.getElementById('border8')
const projectI = document.getElementById('border9')
const projectJ = document.getElementById('border10')
const projectK = document.getElementById('border11')
const projectL = document.getElementById('border12')


const texts = async () =>{
    const object = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsobject = await object.json()
    const result1 = jsobject[8]
    const result2 = jsobject[9]
    const result3 = jsobject[10]
    const result4 = jsobject[11]
    const result5 = jsobject[12]
    const result6 = jsobject[13]
    const result7 = jsobject[14]
    const result8 = jsobject[15]
    const result9 = jsobject[16]
    const result10 = jsobject[17]
    const result11 = jsobject[18]
    const result12 = jsobject[19]
 
    console.log(jsobject);
    projectA.innerHTML = `<p>User id: 1</p><p>Id:9</p>${result1.title}<br>${result1.body}`
    projectB.innerHTML = `<p>User id: 1</p><p>Id:10</p>${result2.title}<br>${result2.body}`
    projectC.innerHTML = `<p>User id: 2</p><p>Id:11</p>${result3.title}<br>${result3.body}`
    projectD.innerHTML = `<p>User id: 2</p><p>Id:12</p>${result4.title}<br>${result4.body}`
    projectE.innerHTML = `<p>User id: 2</p><p>Id:13</p>${result5.title}<br>${result6.body}`
    projectF.innerHTML = `<p>User id: 2</p><p>Id:14</p>${result6.title}<br>${result6.body}`
    projectG.innerHTML = `<p>User id: 2</p><p>Id:15</p>${result7.title}<br>${result7.body}`
    projectH.innerHTML = `<p>User id: 2</p><p>Id:16</p>${result8.title}<br>${result8.body}`
    projectI.innerHTML = `<p>User id: 2</p><p>Id:17</p>${result9.title}<br>${result9.body}`
    projectJ.innerHTML = `<p>User id: 2</p><p>Id:18</p>${result10.title}<br>${result10.body}`
    projectK.innerHTML = `<p>User id: 2</p><p>Id:19</p>${result11.title}<br>${result11.body}`
    projectL.innerHTML = `<p>User id: 2</p><p>Id:20</p>${result12.title}<br>${result12.body}`

}

texts()