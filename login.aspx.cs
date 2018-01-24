using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    public void btnLogin_Click(object sender, EventArgs args)
    {
        if (FormsAuthentication.Authenticate(this.txtUserName.Value, this.txtUserPass.Value))
        {
            FormsAuthentication.SetAuthCookie(this.txtUserName.Value, false);
            FormsAuthentication.RedirectFromLoginPage(this.txtUserName.Value, false);
        }
    }
}