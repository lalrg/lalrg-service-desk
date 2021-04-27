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
    public class CommentController : ControllerBase
    {
        CommentBL _commentBL;
        public CommentController(CommentBL commentBL)
        {
            _commentBL = commentBL;
        }

        [HttpPost]
        public Comment Post([FromBody] Comment value)
        {
            return _commentBL.Add(value);
        }

        // DELETE api/<CommentController>/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return _commentBL.Delete(id);
        }
    }
}
