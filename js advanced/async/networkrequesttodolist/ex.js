async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   /*  console.log(response); */

    const processedResponse = await response.json()
   /*  console.log(processedResponse) */

    const filteredData = processedResponse.filter((item) => {
        return item.completed
    })
    console.log(filteredData)
}

getData()