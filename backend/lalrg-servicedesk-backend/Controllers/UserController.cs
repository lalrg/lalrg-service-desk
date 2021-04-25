using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using BusinessLogic.DTOs;
using BusinessLogic;
using ETL;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace lalrg_servicedesk_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserBL _userBL;

        public UserController(UserBL userBL)
        {
            _userBL = userBL;
        }
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserController>
        [HttpPost("Create")]
        public Appuser CreateUser([FromBody] CreateUserDTO user)
        {
            var salt = SecurityHelper.GenerateSalt();
            var passwordHash = SecurityHelper.HashPassword(user.Password, salt);

            var userToCreate = new Appuser
            {
                Email = user.Email,
                Fullname = user.FullName,
                IdRole = user.IdRole,
                IdStatus = 1,
                Passwordhash = passwordHash,
                Passwordsalt = salt,
                Phone = user.Phone
            };

            return _userBL.Create(userToCreate);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
