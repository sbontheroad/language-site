var instructors = [];

var Instructor = function (picture, name, location, language, fluency, levelsTaught, rate) {
    this.picture = picture;
    this.name = name;
    this.location = location;
    this.language = language;
    this.levelsTaught = levelsTaught || [];
    this.rating: rating;
    this.rate = rate;
    this.print = function() {
        console.log(this.name + ", " + this.location + ", " + this.language + ", " + this.fluency + ", " + this.levelsTaught)
    };
};


var inst0001 = new Instructor ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf62D_LYb7Iult8xYoFDIGCg4T6eDsXmCj1oTrhmy0fkrO_htD", "Emilio Juavez", "Colombia", "Spanish", ["Beginner", "Intermediate", "Advanced"], "$12");
instructors.push(inst0001);

var inst0002 = new Instructor ("<img class='border' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf62D_LYb7Iult8xYoFDIGCg4T6eDsXmCj1oTrhmy0fkrO_htD'/>", "Emilio Juavez", "Colombia", "Spanish", ["Beginner", "Intermediate", "Advanced"], "$12");
instructors.push(inst0002);

var inst0003 = new Instructor ("<img class='border' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf62D_LYb7Iult8xYoFDIGCg4T6eDsXmCj1oTrhmy0fkrO_htD'/>", "Emilio Juavez", "Colombia", "Spanish", ["Beginner", "Intermediate", "Advanced"], "$12");
instructors.push(inst0003);

//var calamari = new MenuItem ("<img class='border' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf62D_LYb7Iult8xYoFDIGCg4T6eDsXmCj1oTrhmy0fkrO_htD'/>", "Calamari", ["Calamari", " Dipping Sauce"], "$14");
//menu.push(calamari);
//
//menu.push(new MenuItem("<img class='border' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf62D_LYb7Iult8xYoFDIGCg4T6eDsXmCj1oTrhmy0fkrO_htD'/>", "Calamari", ["Calamari", " Dipping Sauce"], "$14"));



var addInstructor = function (picture, name, location, language, levelsTaught, rate) {
    var item = document.createElement("div");
    item.setAttribute("class", "row");

    //image
    var foodImage = document.createElement("div");
    foodImage.innerHTML = picture;
    foodImage.setAttribute("class", "col-md-3 insImg");
    foodImage.setAttribute("src", picture);
    foodImage.setAttribute("src", "class='border'");
    item.appendChild(foodImage);

    //title & desc div
    var descTitle = document.createElement("div");
    descTitle.setAttribute("class", "col-md-7 description");

    //title
    var title = document.createElement("h3");
    title.innerHTML = name;
    descTitle.appendChild(title);

    //description
    var description = document.createElement("p");
    description.innerHTML = levelsTaught;
    descTitle.appendChild(description);
    item.appendChild(descTitle);

    //cost
    var costElem = document.createElement("div");
    costElem.innerHTML = rate;
    costElem.setAttribute("class", "col-md-2 cost");
    item.appendChild(costElem);

    
    document.getElementById("instructors").appendChild(item);
}

for(var i = 0; i < instructors.length; i++) {
    addInstructor(instructors[i].picture, instructors[i].name, instructors[i].location, instructors[i].language, instructors[i].levelsTaught, instructors[i].rate);
}

