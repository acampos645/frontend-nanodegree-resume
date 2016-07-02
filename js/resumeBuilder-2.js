


// [string].replace([old], [new])

// var email = "cameron@udacity.com";
// var newEmail = email.replace("udacity", "gmail");

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "I am Alex and I am awesome!"

// var funThoughts = awesomeThoughts.replace("awesome", "fun")

// console.log(funThoughts)

// $("#main").append(funThoughts)

var formattedName = HTMLheaderName.replace("%data%", "Alex Alford");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)

var skills = ["awesomeness", "programming", "teaching", "JS"]

// $("#header").append(skills.length)

var bio = {
	"name" : "Alex",
	"age" : 29,
	"skills" : skills,
	"contact" : {
		"email" : "acampos645@gmail.com",
		"github" : "acampos645",
		"mobile" : "720-688-6966"
	},
	"picURL" : "http://github.com/acampos645.jpg",
	"welcome" : "Welcome to my resume!!!"
};

bio.city = "Dallas";
bio.email = "acampos646@gmail.com";

// $("#main").append(bio.city);

var work = {
	"position" : "Teacher",
	"employer" : "IICS",
	"yearsWorked" : "2",
	"cityWorked" : "Istanbul"
}

education.name = "MIT";
education.year = "2009";

$("#main").append(work["position"] + "<br>");
$("#main").append(education.name + "<br>");
$("#main").append(education.year + "<br>");

var education = {
	"schools" : 
	{
		"name" : "MIT",
		"city" : "Cambridge, MA, US",
		"degree" : "BSc",
		"major" : "Biology"

	}
}