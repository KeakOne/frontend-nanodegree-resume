/*
This is empty on purpose! Your code to build the resume will go here.
 */


var formattedName = HTMLheaderName.replace("%data%", "keanu carnevale");
var formattedJob = HTMLheaderRole.replace("%data%", "Web Developer");

	$("#header").prepend(formattedName);
	$("#header").prepend(formattedJob);


var projects = {
	"projects": [
	{
		"title": "spacesuit website",
		"date": "2016",
		"description": "responsive website for a clothing company on cuba st",
		"images":{
			"url":"http://keakone.github.io/img/code/spacesuit.png"
		},
	},
	{
		"title": "notemaster 9000",
		"date": "2015",
		"description": "simple notetaker & drawing webapp",
		"images":{
			"url":"http://keakone.github.io/img/code/notemaster.png"
		},
	}
]
}



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


//below is dot notation
// var work = {};
// 	work.position = "student ";
// 	work.employer = "EDA ";
// 	work.years = ".3 ";

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
	// $("#main").append(education["schools"][1]["name"]);
}

//below is bracket notation
// var education = {};
// 	education["name"] = "Ensiral Dev Academy";
// 	education["years"] = "2016";
// 	education["city"] = "Wellington, New Zealand";


//creating json object

var education = {
	"schools": [
	{
		"name": "Design & Arts college",
		"location": "Christchurch, NZ",
		"degree": "Bachelor",
		"dates": 2012,
		"url": "http://www.dac.ac.nz/"
	},
	{
		"name": "Yoobee school of design",
		"location": "Wellington, NZ",
		"degree": "Bachelor",
		"dates": 2014,
		"url": "http://www.yoobee.ac.nz/student-life/wellington-campus/"
	}
]
	// $("#main").append(education["schools"][1]["name"]);
}


    if (bio.skills.length > 0) {

      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
    };


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



