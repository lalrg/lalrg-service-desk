using BusinessLogic;
using ETL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lalrg_servicedesk_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        RolesBL _rolesBL;

        public RoleController(RolesBL rolesBL)
        {
            _rolesBL = rolesBL;
        }

        [HttpGet]
        [Authenticate("Administrador")]
        public List<Role> Get()
        {
            return _rolesBL.GetAll();
        }
    }
}
