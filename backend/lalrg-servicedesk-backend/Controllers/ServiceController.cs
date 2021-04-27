using BusinessLogic;
using ETL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace lalrg_servicedesk_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        ServiceBL _serviceBL;
        public ServiceController(ServiceBL serviceBL)
        {
            _serviceBL = serviceBL;
        }
        [HttpGet]
        public IEnumerable<Service> Get()
        {
            return _serviceBL.GetAll();
        }
    }
}
