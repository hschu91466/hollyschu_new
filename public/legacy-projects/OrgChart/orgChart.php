<!DOCTYPE html>
<html lang="en">
<meta http-equiv="x-ua-compatible" content="IE=10,9" />

<head>
    <title>ITS Organizational Chart</title>
    <link rel="stylesheet" href="css/orgchart.css" />
    <meta charset="utf-8" />
</head>

<body>
    <div id="main">
        <div id="ocheader">
            <a href="https://hollyschu.com">
                <h5>Back to Portfolio ></h5>
            </a>
            <h2>ITS Organization Chart</h2>
        </div>
        <div id="sidebar">
            <div id="toolbar">
                <a href="#" class="sidebarbtn" id="ocShowAll">Expand All</a>
                <a href="#" class="sidebarbtn" id="ocCollapseAll">Collapse All</a><br />
                <a href="#" class="sidebarbtn" id="ocZoomIn">Zoom In</a><br />
                <a href="#" class="sidebarbtn" id="ocZoomOut">Zoom Out</a><br />
                <a href="#" class="sidebarbtn" id="ocReset">Reset Page</a>
                <a href="#" class="sidebarbtn" id="ocPrint">Print</a>
                <a href="#" class="sidebarbtn" id="ocSearch">Search Employees</a>
                <input type="text" id="searchEmployee" />
                <input type="button" id="searchbtn" value="Search" />
            </div>
            <p>
                Click on the triangles to expand individual branches.<br /><br />
                Click and drag to reposition the chart.<br />
            </p>
            <div id="employee-count"></div>
            <!--            <div id="coordinates">a</div>-->
        </div>
        <div id="content">
            <div id="draggable" class="ui-widget-content">
                <div id="orgchart" class="octree"></div>
            </div>
        </div>
        <div id="footer"></div>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="js/orgchart.js"></script>
</body>

</html>