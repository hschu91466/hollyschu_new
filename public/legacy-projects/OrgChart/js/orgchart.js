$(document).ready(function () {
	
	//Creates a JQuery contains function that is case insensitive	
	$.expr[':'].icontains = function(a, i, m) {
  			return jQuery(a).text().toUpperCase()
      		.indexOf(m[3].toUpperCase()) >= 0;
			};
	
	//Creates a JQuery function that matches exact text.
	$.expr[':'].textEquals = $.expr.createPseudo(function(arg) {
    	return function( elem ) {
        return $(elem).text().match("^" + arg + "$");
    	};
	});


	
    $.getJSON('js/employees.json', function (data) {

		//Creates un-ordered lists for each level        
		
		function createVP() {

        //create VP parent div
            var output = "<ul id='employee-list'>";

            for (var i in data.employee) {
                if (data.employee[i].level == "1")
                { output += "<li><a href='#' class='vp1'><div class='ocname'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a><ul id='" + data.employee[i].self + "'></ul></li>"; }

                //add self to parent div

                document.getElementById("orgchart").innerHTML = output;

            }
        };		
		
        function createAVP() {
            var output = "";			
				
            for (var i in data.employee) {
				//create AVP parent container for divs with children
                if (data.employee[i].level == "2" && data.employee[i].reports != "0") {
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "<br>" + data.employee[i].dept + "</a><ul id='" + data.employee[i].self + "'></ul></li>";
                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;
                    }

                }
				
				//create AVP parent container for divs without children and not Direct Reports
                if (data.employee[i].level == "2" && data.employee[i].reports == "0" && data.employee[i].name != "DIRECT REPORTS") {
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a></li>";

                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;

                    }
                }

            }
        };

        function createDIR() {
            var output = "";
			
			for (var i in data.employee) {
				//create Director parent container for divs with children
                if (data.employee[i].level == "3" && data.employee[i].reports != "0") {
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a><ul id='" + data.employee[i].self + "'></ul></li>";
                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;

                    }

                }
				
				//create Director parent container for divs without children and not Direct Reports
                if (data.employee[i].level == "3" && data.employee[i].reports == "0" && data.employee[i].name != "DIRECT REPORTS") {
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a></li>";

                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;

                    }
                }

            }
        };

        function createADIR() {
            var output = "";

            for (var i in data.employee) {
				//create Assistant Director parent container for divs with children
                if (data.employee[i].level == "4" && data.employee[i].reports != "0") {
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a><ul id='" + data.employee[i].self + "'></ul></li>";
                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;

                    }

                }
				
				//create Assistant Director parent container for divs without children and not Direct Reports
                if (data.employee[i].level == "4" && data.employee[i].reports == "0" && data.employee[i].name != "DIRECT REPORTS") {
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a></li>";

                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;

                    }
                }

            }
        };

        function createMAN() {

            var output = "";

            for (var i in data.employee) {

                if (data.employee[i].level == "5" && data.employee[i].reports != "0") {
					//create Manager parent container for divs with children
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a><ul id='" + data.employee[i].self + "'></ul></li>";

                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;

                    }
                }

                if (data.employee[i].level == "5" && data.employee[i].reports == "0" && data.employee[i].name != "DIRECT REPORTS") {
					//create Manager parent container for divs without children and not Direct Reports
                    output = "<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a></li>";

                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;

                    }
                }

            }
        };

        function createSTAFF() {

            var output = "";

            for (var i in data.employee) {
				//Create stack of Staff without children
                if (data.employee[i].level == "6") {
                    output = "<div class='ocstaff'<li><a href='#' class='nonvp1'><div class='ocname' id='" + data.employee[i].self + "a'>" + data.employee[i].name + "</div>" + data.employee[i].title + "</a><br/></li></div>";

                    var myElement = data.employee[i].parent;

                    if (document.getElementById(myElement) != null) {
                        document.getElementById(myElement).innerHTML += output;
                    }
                }

            }
        };

        createVP();
        createAVP();
        createDIR();
        createADIR();
        createMAN();
        createSTAFF();
		
		//Count Employees
		$(function() {
			var countEmployees = $(".octree a:not(:contains('DIRECT REPORTS'))").children();
			var count = countEmployees.length;
			$("#employee-count").html(count + " Employees");
		});
		
		//Opens search input field and button (toggle)
		$("#ocSearch").click(function() {
			if($("#searchEmployee").is(':visible')) {
				$("#searchEmployee").css("display", "none");
				$("#searchbtn").css("display", "none");
				$("#searchEmployee").val("");
			} else {
				$("#searchEmployee").css({
					"display": "inline-block",
					"margin": "12px 0"
				}).focus();
				$("#searchbtn").css("display", "inline-block");
                $("#orgchart").animate({ left: "0" },1);
			}
			
		});
		
		//Find Employee by clicking Enter
		$(document).keypress(function(e) {
			if(e.which ==13) {
			searchEmployee();
			}			
		});
		
		//Finds employees by clicking Search button
		$("#searchbtn").click(function() {			
			searchEmployee();									
		});
		
		//Moves to and highlights employees typed into Input field
		function searchEmployee() {
            
            //If the input field is not blank
            var inputValue = $.trim($("#searchEmployee").val());
			if(inputValue.length > 0) {
                
			//Input field for search
            var employeeName = $("#searchEmployee").val();
            
            //Find the ID of the div that contains (case insensitive) the employee name
//			var employeeID = $("div.ocname:icontains(" + employeeName + ")").attr('id');
					
			$("div.ocname").css("background-color","");            
            $(".octree ul li ul li ul").css("display", "block"); 
            
            $("div.ocname:icontains(" + employeeName + ")").css("background-color", "Yellow");                           
            
            //Find the position of the element
            var offsetEmployeeDiv = $("div.ocname:icontains(" + employeeName + ")").offset();
        
//            var offsetOrgChart = $("#orgchart").offset();
            
            var moveTo = offsetEmployeeDiv.left - 500;
            
        
            $("#orgchart").animate({ left: "-" + moveTo },200);
            
            $("#searchEmployee").css("display", "none");
            $("#searchbtn").css("display", "none");
            $("#searchEmployee").val("");
			
		}};
		
		// Print Chart Only
        $('#ocPrint').click(function () {
            $('#ocheader').css('display', 'none');
            $('#sidebar').css('display', 'none');
            $('#footer').css('display', 'none');
            $(".octree ul li ul li ul").css("display", "block");
            $('#ocCollapseAll').css('display', 'inline-block');
            $('#ocShowAll').css('display', 'none');
            $('#content').css({
                'left' : '0',
                'top' : '0',
                'right' : '0',
                'font-size': '-=5px',
                'overflow' : 'visible'
                              });
            window.print();
	location.reload();
        });
		
		//Drag Org Chart

        $(function () {
            $("#draggable").draggable({
                cursor: "pointer"
            });
        });

        //Zoom In/Out

        $('#ocZoomIn').click(function () {
            $('.octree a').css({ 'font-size': '+=3px' });

        })
        $('#ocZoomOut').click(function () {
            $('.octree a').css({ 'font-size': '-=3px' });
        })

        //Expand/Collapse Chart
        $('#ocShowAll').click(function () {
            $(".octree ul li ul li ul").css("display", "block");
            $('#ocCollapseAll').css('display', 'inline-block');
            $('#ocShowAll').css('display', 'none');
        })
        $('#ocCollapseAll').click(function () {
            location.reload()
            $('#ocCollapseAll').css('display', 'none');
            $('#ocShowAll').css('display', 'inline-block');
        })

        //Reload Page by click on button
        $("#ocReset").click(function () {
            location.reload()
        });

        //On click, hide/view children

        $(".octree ul li ul li ul").css("display", "none");
        $(".octree a.nonvp1").click(function (e) {
            e.preventDefault();
            $(this).closest('li').children('ul').toggle();
			});

        //Adds arrow to each list item that has children	
		$('a + ul').prev('a').append('<span class="ocparent"><br/>&#x25BC;</span>');

        //Reload Page by clicking on VP        

        $('.octree a.vp1').click(function () {
            location.reload();
        });
		
    });
});


