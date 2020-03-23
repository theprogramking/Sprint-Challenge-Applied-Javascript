// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic){
    let div = document.createElement("div");
    div.setAttribute("class", "tab");
    div.textContent = topic;

    return div;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        let parent = document.querySelector(".topics");
        response.data.topics.forEach(i => {
            parent.append(Tab(i));
        });
    })
    .catch(err => {
        console.log("Error: " + err);
    })