//function that will display data from the API on the DOM

function displayFunction(response){
     
    //gives the data needed
    let data = response.hints
   
    //loop through the array and grab food data
    for (let item of data){
        console.log(item.food)
        let newData = item.food

       
   

       //To prevent broken images from showing on the DOM 
        if(newData.image == null){
            remove(item)
        }
        
        //selects the location on the DOM where the items should be added
        const location = document.querySelector("#data")

        //creates a card for each incoming item 
        let divi = document.createElement("div")
        divi.innerHTML = `
        <img src = ${newData.image}>  
        <p>Name: ${newData.label}</p>
        <p>Brand: ${newData.category}</p>
        `
        //appends the card to location as a child
        const newDiv = location.appendChild(divi)
    }
    
       

}

//Fetch data from a public API
//first create a configuration object to define the headers with the API key
const configurationObject = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc955dbe92msh6bb60cb0dbbbb5bp1007fdjsn6cf8e77ccff3',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', configurationObject)
	.then(response => response.json())
    //response.data to get the specific data required
	.then(response => displayFunction(response))
    //catch any error that may arise
	.catch(err => console.error(err));