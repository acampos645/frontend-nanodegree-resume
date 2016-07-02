var bio = {
	"name" : "Alex Campos",
	"role" : "Front End Developer (in training)",
	"contacts": {
		"mobile" : "720-688-6963",
		"email" : "acampos645@gmail.com",
		"github" : "http://github.com/acampos645",
		"location" : "Dallas, TX, US"
	},
	"welcomeMessage" : "Welcome to my brand new portfolio site!  Starving developer here looking for a first project.",
	"skills" : ["Debugging", "Sciencing", "Javascripting", "Teaching", "Technology Integration"],
	"biopic": "http://fall11marinecology.providence.wikispaces.net/file/view/sea-otter.jpg/274922548/267x266/sea-otter.jpg"
}

var education = {
	"schools" : [
	{
		"name" : "MIT",
		"degree" : "B.Sc.",
		"majors" : ["Biology"],
		"dates" : "2005-2009",
		"url" : "web.mit.edu",
		"location" : "Cambridge, MA"
	}, 
	{
		"name" : "Columbia University",
		"degree" : "MA",
		"majors" : ["Education Technology"],
		"dates" : "2012-2014",
		"url" : "www.columbia.edu",
		"location" : "New York City, NY"
	}],
	"onlineCourses" : [
	{
		"title" : "Intro to Computer Science",
		"school" : "Udacity",
		"dates" : "2015-2016",
		"url" : "www.udacity.com",
	}, 
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : "2015-2016",
		"url" : "www.udacity.com",
	}, 
	{
		"title" : "Inferential & Descriptive Statistics",
		"school" : "Udacity",
		"dates" : "2015-2016",
		"url" : "www.udacity.com",
	}]
}

var work = {
	"jobs" : [
	{
		"employer" : "Istanbul International School",
		"title" : "Biology Teacher",
		"location" : "Istanbul, Turkey",
		"dates" : "Aug 2014 - current",
		"description" : "Taught according to the IBO Science curriculum"
	}, 
	{
		"employer" : "UAS Dubai",
		"title" : "Technology Integrator",
		"location" : "Dubai, United Arab Emirates",
		"dates" : "Aug 2012 - Jun 2014",
		"description" : "Integrated education technology in secondary curricula"
	}, 
	{
		"employer" : "GlaxoSmithKline",
		"title" : "Junior Researcher",
		"location" : "Philadelphia, PA, US",
		"dates" : "Aug 2010 - Jun 2012",
		"description" : "Heart stem cell research group"
	}],
}

var projects = {
	"projects" : [
	{
		"title" : "Otter Portfolio",
		"dates" : "Jan-Jun 2016",
		"description" : "Collected and displayed various picture of cute otters",
		"images" : ["http://wacoheartoftexas.com/wp-content/uploads/2016/05/Otter-300x200.jpg"]
	}, 
	{
		"title" : "Otter Farm",
		"dates" : "Jan-Juun 2016",
		"description" : "Collected and displayed various picture of cute cats",
		"images" : ["http://pathwaysforhealing.net/wp-content/uploads/2015/08/otter-300x200.jpg"]
	}, 
	{
		"title" : "Cat Repository",
		"dates" : "Jan-Jun 2016",
		"description" : "Collected and displayed various picture of cute cats",
		"images" : ["http://b50ym1n8ryw31pmkr4671ui1c64.wpengine.netdna-cdn.com/wildlifepromise/files/2011/03/CaliforniaSeaOtter-300x200.jpg", "http://www.himalayanotternetwork.org/wp-content/uploads/2014/08/HOM-site-design-3-300x200.jpg"]
	}]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage))
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic))
$("#header").append(HTMLskillsStart);

if (bio.skills.length >= 1) {
	var i = 0; 
	while (i < bio.skills.length) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#header").append(formattedSkills);
		i = i + 1;
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
			}
		}
	}
}

displayWork();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

// function locationizer(work) {
// 	var locations = [];
// 	for (job in work.jobs) {
// 		locations.push(work.jobs[job].location);
// 	}
// 	return locations;
// }

function inName(name) {
	name = name.trim.split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

