let people = [];

function addPerson() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let bloodGroup = document.getElementById("bloodGroup").value;
  let weidht= document.getElementById('weidht').value;
  let hight= document.getElementById('hight').value;
  if(name,age,bloodGroup,weidht,hight.trim()!==''){
  let person = {
    name: name,
    age: age,
    bloodGroup: bloodGroup,
    weidht: weidht,
    hight: hight
    
  };

  people.push(person);
  renderTable();
  clearInputs();
  saveData();
}

}

function editPerson(index) {
  let crntName=people[index].name
  let name = prompt("Enter a new name:",crntName);
  let crntAge=people[index].age
  let age = prompt("Enter a new age:",crntAge);

  let crntBg=people[index].bloodGroup
  let bloodGroup = prompt("Enter a new blood group:",crntBg);
  let crntWei=people[index].weidht
  let weidht= prompt("Enter a new Weidht", crntWei);
  let crntH=people[index].hight
  let hight= prompt("Enter a new Hight",crntH);

  if (name && age && bloodGroup && weidht && hight) {
    people[index].name = name;
    people[index].age = age;
    people[index].bloodGroup = bloodGroup;
    people[index].weidht = weidht;
    people[index].hight = hight;
    renderTable();
    saveData();
  }
}


////  //Removed BTN////////////////

function removePerson(index) {
  people.splice(index, 1);
  renderTable();
}
////////////////////////////////////


//NEW Table

function renderTable() {
  let tableBody = document.querySelector("#personTable tbody");
  tableBody.innerHTML = "";

  people.forEach(function(person, index) {
    let row = document.createElement("tr");

    Object.values(person).forEach(function(value) {
      let cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });




    let Update = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList= "btn btn-success btn-lg m-2"
    editButton.onclick = function() {
      editPerson(index);
    };
    Update.appendChild(editButton);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList= "btn btn-success btn-lg m-2"
    removeButton.onclick = function() {
      removePerson(index);
    };
    Update.appendChild(removeButton);

    row.appendChild(Update);
    tableBody.appendChild(row);
  });
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("bloodGroup").value = "";
  document.getElementById("hight").value="",
  document.getElementById("weidht").value=""
}



function saveData(){
  localStorage.setItem("data", list.innerHTML);
}