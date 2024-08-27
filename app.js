
const apiUrl='https://jsonplaceholder.typicode.com/posts';

async function fetchPosts() {
    
    try{
        const response= await fetch(apiUrl);
        // document.write("hi");
        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const posts= await response.json();
        console.log(posts);
    
     
        //call a function to create and fill the table
        createTable(posts);
    }catch(error)
    {
     console.error('Error fetching posts :',error);
    }
    
}

function createTable(posts){
    const tableBody=document.querySelector("#postTable tbody");

    posts.forEach((post) => {
        //create a new row for each post
        const  newRow=document.createElement('tr');

        //Fill the row with the data from the post object
        newRow.innerHTML=`
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
        `;
     
        //Add the new row to the table body
        tableBody.appendChild(newRow);
       
    });
}

fetchPosts();
