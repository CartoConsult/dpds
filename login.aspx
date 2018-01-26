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
        <ul>
            <li><a href="#" onClick="window.location.reload()"> Home </a></li>
            <li><a href="http://www.thecartogroup.com/blog/" target="_blank">Blog </a></li>
            <li><a href="http://cartoconsult.co.uk/about" target="_blank"> Team </a></li>
            <li><a id="show-login" href="#">Login </a></li>
            <li><a class="contact-border" href="mailto:info@cartoconsult.co.uk?Subject=Subject">Contact Us </a></li>
        </ul>
    </nav>

    <div class="carto-info">
        <img class="splashlogo" src="images/logo.png" alt="Logo" draggable="false" />
        <p>The #1 3D GIS mapping platform </p>
        <p>for Land & Property Development Professionals </p>

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


    <script src="scripts/login.js"></script>
</body>
</html>
