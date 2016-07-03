var bio = {
    name: "Alex Campos",
    role: "Front End Developer (in training)",
    contacts: {
        "mobile": "720-688-6963",
        "email": "acampos645@gmail.com",
        "github": "http://github.com/acampos645",
        "location": "Dallas, TX, US"
    },
    welcomeMessage: "<br>Welcome to my brand new portfolio site!  Starving developer here looking for a first project.",
    skills: ["Debugging", "Sciencing", "Javascripting", "Teaching", "Technology Integration"],
    biopic: "http://fall11marinecology.providence.wikispaces.net/file/view/sea-otter.jpg/274922548/267x266/sea-otter.jpg",
    display: function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill<bio.skills.length; skill++)	{
	       $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    }
};
var education = {
    schools: [{
        name: "MIT",
        degree: "B.Sc.",
        majors: ["Biology", "Otter Training"],
        dates: "2005-2009",
        url: "web.mit.edu",
        location: "Cambridge, MA"
    }, {
        name: "Columbia University",
        degree: "MA",
        majors: ["Education Technology"],
        dates: "2012-2014",
        url: "www.columbia.edu",
        location: "New York City, NY"
    }],
    onlineCourses: [{
        title: "Intro to Computer Science",
        school: "Udacity",
        dates: "2015-2016",
        url: "https://www.udacity.com/course/intro-to-computer-science--cs101"
    }, {
        title: "Intro to HTML and CSS",
        school: "Udacity",
        dates: "2015-2016",
        url: "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, {
        title: "Inferential & Descriptive Statistics",
        school: "Udacity",
        dates: "2015-2016",
        url: "https://www.udacity.com/course/intro-to-inferential-statistics--ud201"
    }],
    display: function() {
        for (var school = 0; school<education.schools.length; school++) {
            var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(schoolName + schoolDegree);
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
        }
        $("#education").append(HTMLonlineClasses);
        for (var course = 0; course<education.onlineCourses.length; course++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
            formattedTitle = formattedTitle + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Istanbul International School",
        "title": "Biology Teacher",
        "location": "Istanbul, Turkey",
        "dates": "Aug 2014 - current",
        "description": "Taught according to the IBO Science curriculum."
    }, {
        "employer": "UAS Dubai",
        "title": "Technology Integrator",
        "location": "Dubai, United Arab Emirates",
        "dates": "Aug 2012 - Jun 2014",
        "description": "Integrated education technology in secondary curricula."
    }, {
        "employer": "GlaxoSmithKline",
        "title": "Junior Researcher",
        "location": "Philadelphia, PA, US",
        "dates": "Aug 2010 - Jun 2012",
        "description": "Heart stem cell research group. Designed and executed various experiments."
    }],
    display: function() {
        for (var job=0; job<work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        }
    }
};

var projects = {
    "projects": [{
        "title": "Otter Portfolio",
        "dates": "Jan-Jun 2016",
        "description": "Aggregated various picture of cute otters raised at the Otter Farm.",
        "images": ["http://wacoheartoftexas.com/wp-content/uploads/2016/05/Otter-300x200.jpg"]
    }, {
        "title": "Otter Farm",
        "dates": "Jan-Jun 2016",
        "description": "Rescued and raised stray otters from various habitats",
        "images": ["http://pathwaysforhealing.net/wp-content/uploads/2015/08/otter-300x200.jpg"]
    }, {
        "title": "Otter Repository",
        "dates": "Jan-Jun 2016",
        "description": "Collected various picture of otters from the internet",
        "images": ["http://b50ym1n8ryw31pmkr4671ui1c64.wpengine.netdna-cdn.com/wildlifepromise/files/2011/03/CaliforniaSeaOtter-300x200.jpg", "http://www.himalayanotternetwork.org/wp-content/uploads/2014/08/HOM-site-design-3-300x200.jpg"]
    }],
    display: function() {
        for (var project=0; project<projects.projects.length; project++) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
            
            if (projects.projects[project].images.length > 0) {
                for (var image = 0; image<projects.projects[project].images.length; image++) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
                }
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);