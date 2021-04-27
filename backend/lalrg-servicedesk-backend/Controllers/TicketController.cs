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
    public class TicketController : ControllerBase
    {
        TicketBL _ticketBL;
        public TicketController(TicketBL ticketBL)
        {
            _ticketBL = ticketBL;
        }

        [HttpGet]
        [Authenticate("Administrador")]
        public IEnumerable<Ticket> Get()
        {
            return _ticketBL.GetActiveTickets();
        }

        [HttpGet("user")]
        [Authenticate]
        public IEnumerable<Ticket> GetByUser()
        {
            var user = (Appuser)HttpContext.Items["User"];
            return _ticketBL.GetByUserId(user.Id);
        }

        [HttpPost]
        [Authenticate]
        public bool Post([FromBody] Ticket value)
        {
            var user = (Appuser)HttpContext.Items["User"];
            value.Createdby = user.Id;
            value.IdTicketstatus = 1;
            value.Lastmodifieddate = DateTime.Now;
            value.Createdate = DateTime.Now;

            var result = _ticketBL.Add(value);
            if (result != null)
                return true;
            return false;
        }

        [HttpGet("close/{id}")]
        [Authenticate]
        public bool Close(int id)
        {
            return _ticketBL.CloseByTicketId(id);
        }
    }
}
