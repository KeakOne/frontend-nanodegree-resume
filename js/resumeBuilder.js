/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ['CSS ','design ','Smash Bros '];

var bio = {
	"name": "Keanu",
	"age": 23,
	"role":"student",
	"contact":{
		"email":"keanucarnevale@gmail.com",
		"github":"Keakone",
		"location":"Wellington"
	},
	"welcomeMessage":"Keanu says Hi!",
	"skills": skills,
	"bioPic": "images/fry.jpg"
};


	var formattedName = HTMLheaderName.replace("%data%", "keanu carnevale");
	var formattedJob = HTMLheaderRole.replace("%data%", "Web Developer");
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedJob);
    $("#topContacts").append(formattedEmail + formattedGitHub + formattedLocation);
    $("#footerContacts").append(formattedEmail + formattedGitHub + formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for (var e in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
      $("#skills").append(formattedSkill);
    }


var projects = {
	"projects": [{
		"title": "spacesuit website",
		"dates": "2016",
		"description": "responsive website for a clothing company on cuba st",
		"image":[
		"http://placehold.it/350x150",
		"http://placehold.it/350x150"
		]
	},{
		"title": "notemaster 9000",
		"dates": "2015",
		"description": "simple notetaker & drawing webapp",
		"image": [
		"http://placehold.it/350x150",
		"http://placehold.it/350x150"


		]
	}
]}

  projects.display = function() {
    for(project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if(projects.projects[project].image.length > 0) {
        for(image in projects.projects[project].image) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image); 
          $(".project-entry:last").append(formattedImage);
        }     
      } 
    }  
  }
 projects.display();


var work = {
	"jobs": [
	{
		"employer": "Cosmic corner",
		"title": "Barista",
		"location": "Wellington, NZ",
		"dates": 2015,
		"description": "made coffee and sales."
	},
	{
		"employer": "Spacesuit clothing",
		"title": "Graphic designer",
		"location": "Wellington, NZ",
		"dates": 2016,
		"description": "designed and created website"
	}
]
}
    function displayWork() {
	    for (job in work.jobs) {
	    	$("#workExperience").append(HTMLworkStart);

	    	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	    	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	    	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	    	$(".work-entry:last").append(
	    		formattedEmployerTitle);

	    	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	    	$(".work-entry:last").append(
	    		formattedDates);

	    	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	    	$(".work-entry:last").append(
	    		formattedDescription);
	    }
	}
	displayWork();

//creating json object

var education = {
	"schools": [
	{
		"name": "design & art college",
		"location": "Christchurch",
		"degree": "Bachelor",
		"dates": "2012",
		"url": "http://www.dac.ac.nz/"
	},
	{
		"name": "yoobee school of design",
		"location": "Wellington",
		"degree": "Bachelor",
		"dates": "2015",
		"url": "http://www.yoobee.ac.nz/student-life/wellington-campus/"
	}
]}

  	function displaySchools() {
    for (schools in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
    }
  }
  displaySchools();

	// function displayOnlinCourses() {
 //    if (education.onlineCourses.length > 0) {
 //      $("#education").append(HTMLonlineClasses);
 //      for (var e in education.onlineCourses) {
 //        $("#education").append(HTMLschoolStart);
 //        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[e].title);
 //        formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[e].url);
 //        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[e].school);
 //        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[e].dates);
 //        //var formattedURL = HTMLonlineURL.replace("%url%", education.onlineCourses[e].url);
 //        $(".education-entry:last").append(formattedTitle + formattedSchool);
 //        $(".education-entry:last").append(formattedDates);
 //        $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
 //      }
 //    }
  







