<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="login" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Carto3D Login </title>
    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="node_modules/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="css/login.css" rel="stylesheet" />

</head>
<body class="login-body">

    <form runat="server">
        <div class="container">
            <div class="form-topper">
                <div class="form-title"> Carto3D Portal </div>
            </div>
            <div class="login-form">
                <div class="logo-container">
                    <img class="logo" src="images/Carto3DLogo.svg" alt="Logo" width="100%" draggable="false" />
                </div>
                <div class="form-group input-group">
                    <span class="input-group-addon"><span class="fa fa-user"></span></span>
                    <input id="txtUserName" class="form-control" placeholder="Username" runat="server" />
                </div>
                <div class="form-group input-group">
                    <span class="input-group-addon"><span class="fa fa-lock"></span></span>
                    <input class="form-control" id="txtUserPass" type="password" placeholder="Password" runat="server">
                </div>
                <div class="form-group">
                    <asp:Button type="submit" runat="server" CssClass="btn-login" OnClick="btnLogin_Click" Text="Login" />
                </div>
            </div>
            <div class="version-number" style="min-width: max-content;">Version 1.0.0 </div>
        </div>

        <div class="form-footer">
                <img class="footer-logo" src="images/carto-logo.png" alt="CartoConsult Logo" draggable="false" />
                <img class="footer-logo" src="images/dpds-logo.png" alt="DPDS Logo" draggable="false" />
        </div>
    </form>

    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/tether/dist/js/tether.min.js"></script>
</body>
</html>
