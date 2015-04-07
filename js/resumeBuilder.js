/*! * will be used to fill in HTML the sections */

var bio = {
    "name" : "Kristen Machen",
    "role" : "IT Program Manager / FEWD Ninja",
    "contacts": {
            "mobile" : "513-476-7490",
            "email" : "kristen.machen@ge.com",
            "github" : "kris10m",
            "twitter" : "@rtrgirl07",
            "location" :  "Scottsboro, AL"
        },
    "welcomeMessage" : "Welcome to my resume!",
    "skills" : ["awesomeness","delivering things","leading teams","money"],
    "biopic" :  "images/Kmachen.jpg",
    "display" : function() { //sets display method; adds another "display" property to the bio object 
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName); 
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole); 
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedContactLocation);   
        $("#footerContacts").append(formattedContactLocation);
        var formattedBioMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBioMsg); 
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic); 
        if (bio.skills.length > 0) {
    
            $("#header").append(HTMLskillsStart);

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkill);    
        };
    }
}

var work = {
    "jobs" : [
    {
        "employer": "General Electric Aviation",
        "title" : "IT Program Management Lead",
        "location" : "Cincinnati, OH", 
        "dates" : "2013-current",
        "description" : "Lead program operations for DSS Product Delivery"
    },
    {
        "employer": "General Electric Aviation",
        "title" : "IT Controller / Access Manager",
        "location" : "Blue Ash, OH", 
        "dates" : "2010-2013",
        "description" : "Lead Aviation IT compliance and risk programs"
    }
    ],
    "display" : function() { //sets display method as an additional property
        for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedJobLocation);
        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedJobDates);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedJobDescription);
        }        
    }
}

var projects = {
    "projects" : [
    {
    "title" : "Udacity Orange Mug",
    "dates" : "Dec 2014-Jan 2015",
    "description" : "Project 1 of FEWD Nanodegree",
    "images" : ["images/page-mock.png","images/mug.png"]
    },
    {
    "title" : "Resume",
    "dates" : "Mar 2015-Apr 2015",
    "description" : "Project 2 of FEWD Nanodegree",
    "images" : ["images/GE.png","images/RTR.jpg"]
    }
    ],
    "display" : function() { //sets display method; adds another "display" property to the projects object
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart); //projects is an array, HTML project start creates an element class project-entry that must continue until it's at the end or last

            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
}

var education = {
    "schools" : [
        {
        "name": "UA Huntsville", //displayed in SchoolTitle
        "location" : "Huntsville, AL", // not displayed, should show on map
        "degree" : "BSBA",  //displayed in SchoolTitle
        "majors" : ["Management Information Systems","Wine Sommelier"], //displayed in major
        "dates" : 2002, //displayed in SchoolTitle
        "url" : "http://www.uah.edu" //not displayed, no variable in helper.js
        },
        {
        "name" : "Udacity",
        "location" : "Cincinnati, OH",
        "degree" : "Nanodegree",
        "majors" : ["Front End Web Developer"],
        "dates" : 2015,
        "url" : "http://www.udacity.com/nd001"
        }
    ],
    "onlineCourses" : [
        {
        "title" : "Intro to HTML",
        "school" : "Udacity",
        "date" : 2014,
        "url" : "http://www.udacity.com"
        },
        {
        "title" : "JavaScript Basics",
        "school" : "Udacity",
        "date" : 2015,
        "url" : "http://www.udacity.com"
        }
    ],
    "display" : function() { //sets display method as an additional property
            for (school in education.schools) {
                $("#education").append(HTMLschoolStart);

                var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                var formattedSchoolTitle = formattedSchool + formattedDegree;
                $(".education-entry:last").append(formattedSchoolTitle);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedSchoolDates);

                if (education.schools[school].majors.length > 0) {
                    for (major in education.schools[school].majors) {
                        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
                        $(".education-entry:last").append(formattedMajor);
                    }
                }
            };
            $("#education").append(HTMLonlineClasses);
                education.onlineCourses.forEach(function (course) {
                    $("#education").append(HTMLschoolStart);
                    var eduEntry =  $("#education .education-entry:last");
                    eduEntry.append(HTMLonlineTitle.replace("%data%", course.title) +
                                    HTMLonlineSchool.replace("%data%", course.school));
                    eduEntry.append(HTMLonlineDates.replace("%data%", course.date));
                    eduEntry.append(HTMLonlineURL.replace("%data%", course.url));
                }
                );
    } //close for displaySchools object
} //close for var education object

//Lesson 2 Capturing user clicks
    $(document).click(function(loc) {
        var x = loc.pageX; //loc is from the jQuery.js
        var y = loc.pageY;
        
        logClicks(x,y);
    });

//Lesson 2 Internationalize button
function inName() {
    var splitName = bio.name.split(" ");
    splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase(); // first name
    splitName[1] = splitName[1].toUpperCase(); // lastname
    finalName = splitName.join(" ");
    return finalName;
}

//Envokes all functions that display content on the resume
displayContent = function() {
    bio.display();
    work.display();
    projects.display();
    education.display(); 

    $("#mapDiv").append(googleMap);
    $("#main").append(internationalizeButton);
};

displayContent();