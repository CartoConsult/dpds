<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="login" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Carto3D Login </title>
    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="node_modules/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
    <link href="css/login.css" rel="stylesheet" />
    <script src="node_modules/jquery/dist/jquery.js"></script>

</head>
<body class="login-body">
    <nav>
        <img class="logo" src="images/logo.png" alt="Logo" draggable="false" />
        <ul>
            <li><a href="#" onclick="window.location.reload()">Home </a></li>
            <li><a href="http://cartoconsult.co.uk/GIS-Software-Development" target="_blank">Software </a></li>
            <li><a href="http://www.thecartogroup.com/blog/" target="_blank">Blog </a></li>
            <!--    <li><a href="http://cartoconsult.co.uk/about" target="_blank"> Developers </a></li> -->
            <li><a id="show-login" href="#">Login </a></li>
            <li><a class="contact-border btn-contact" href="#">Contact Us </a></li>
        </ul>
    </nav>

    <div class="carto-info">
        <div class="info-middle">
            <h3>3D GIS Technology Services - </h3>
            <p>Opensource platform framework providing consistent project build interface for the </p>
            <p>full range of best-in-breed opensource GIS libraries. </p>
        </div>
        <div class="center-btn">
            <a id="learn" class="contact-border btn-contact" href="#">Become a beta user </a>
        </div>
    </div>

    <div class="login-form">
        <form runat="server">
            <div class="container">

                <div class="login-container">

                    <div class="logo-container">
                        <img class="logo" src="images/logo.png" alt="Logo" width="100%" draggable="false" />
                    </div>

                    <div class="form-group input-group">
                        <input id="txtUserName" class="form-control" placeholder="Username" runat="server" />
                    </div>

                    <div class="form-group input-group">
                        <input class="form-control" id="txtUserPass" type="password" placeholder="Password" runat="server">
                    </div>

                    <div class="form-group">
                        <asp:Button type="submit" runat="server" CssClass="btn-login" OnClick="btnLogin_Click" Text="Login" />
                    </div>

                    <div class="form-group">
                        <p>powered by <a href="http://www.thecartogroup.com" target="_blank">The Carto Group </a></p>
                    </div>

                </div>
            </div>
        </form>
    </div>


    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <!-- <span class="close">&times;</span>  -->

            <div class="mod-head">
                 <h5> Contact Us </h5>
            </div>

            <div class="mod-body">
                  <form name="insightly_web_to_lead" action="https://jua1nxzv.insight.ly/WebToLead/Create" method="post">
                        <div class="form-group">
                            <label for="insightly_title">Title: </label>
                            <input name="Title" class="form-control" id="insightly_Title" type="text" placeholder="Title">
                        </div>
                        <div class="form-group">
                            <input name="ResponsibleUser" id="insightly_ResponsibleUser" type="hidden" value="997843">
                            <input name="LeadSource" class="form-control" id="insightly_LeadSource" type="hidden" value="587682">
                        </div>
                        <div class="form-group">
                            <label for="insightly_firstName">First Name</label>
                            <input name="FirstName" class="form-control" id="insightly_firstName" type="text" placeholder="First Name">
                            <input name="formId" type="hidden" value="5kuA9+8MF5EPc7MQxHSQhQ==">
                        </div>
                        <div class="form-group">
                            <label for="insightly_lastName">Last Name: </label>
                            <input name="LastName" class="form-control" id="insightly_lastName" type="text" placeholder="Last Name">
                        </div>
                        <div class="form-group">
                            <label for="insightly_organization">Organisation</label>
                            <input name="OrganizationName" class="form-control" id="insightly_organization" type="text" placeholder="Organisation">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input name="email" class="form-control" id="insightly_Email" type="text" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input name="phone" class="form-control" id="insightly_Phone" type="text" placeholder="Phone">
                        </div>


                        <p class="text-center"><input class="btn btn-lg btn-default" type="submit" value="Submit"></p>
                    </form> 

            </div>             

        </div>

    </div>

    <script src="scripts/login.js"></script>
</body>
</html>
