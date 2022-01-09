// fetch("https://api.nationalize.io?name=michael")
// .then(response => response.json())
// .then(jsonData => console.log(jsonData))

async function getNationalizeData(){
    let response = await fetch("https://api.nationalize.io?name=michael")
    return response.json(); 
}
getNationalizeData()
.then(jsonData => console.log(jsonData))


for (let i= 0;i < JsonData.length; i++){
    row.innerHTML += ``
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div class="text-center card">
    <div class="card-header">${data[i].name}</div>
      <img src="https://flagcdn.com/ax.svg" class="img-fluid mx-auto card-image-top" style="width: 50%;
      height: 100px;">
        <div class ="card-body" id="country">
          <h5 id ="country.name" class="card-title">${data[i].country_id</h5>
          <h5 class="card-title">${data[i].probability</h5>
          <button type="button" class="btn btn-primary">${data[i].Search </button>
        </div>
      </div>
      </div>
      </div>
      document.body.append(con);
};
.catch(function(err) {
        console.log(err.message);
    });