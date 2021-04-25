using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace lalrg_servicedesk_backend.Authentication
{
    public class CustomAuthorizeAttribute: AuthorizationFilterAttribute
    {
        string _role;
        public CustomAuthorizeAttribute(string role)
        {
            _role = role;
        }
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            var user = actionContext.RequestContext.Principal.Identity;
            base.OnAuthorization(actionContext);
        }
    }
}
