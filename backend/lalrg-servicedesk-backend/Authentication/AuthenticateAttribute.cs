using ETL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthenticateAttribute : Attribute, IAuthorizationFilter
{
    string _role;
    public AuthenticateAttribute(string role = null)
    {
        _role = role;
    }
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var unauthorizedResponse = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
        var user = (Appuser)context.HttpContext.Items["User"];
        if (user == null)
            context.Result = unauthorizedResponse;

        if (_role != null)
            if (user.IdRoleNavigation.Rolename != _role)
                context.Result = unauthorizedResponse;

    }
}