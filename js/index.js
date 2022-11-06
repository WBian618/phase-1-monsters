document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'), fetchMonster();
})

const fetchMonster = () => {
    const dataURL = "http://localhost:3000/monsters"


    // step 1: fetch data from url
    fetch(dataURL)
        // step 2: transform/parse response data
        .then(response => response.json())
        // step 3: use for each to loop through data to add image element to the DOM
        .then(data => data.slice(0,50).forEach((monObj) => {
            
            const monContainer =  document.querySelector('#monster-container')
            const monsterName = document.createElement('h2')
            const monCard = document.createElement('div') 
            const monsterAge = document.createElement('h3')
            const monsterDes = document.createElement('h4')
            
            monsterAge.innerText = monObj.age
            monsterDes.innerText = monObj.description
            monsterName.innerText = monObj.name
            

            
            
            monCard.append(monObj)
            monContainer.append(monsterName)
            monContainer.append(monsterAge)
            monContainer.append(monsterDes)
            
            

        

        }
        ))}