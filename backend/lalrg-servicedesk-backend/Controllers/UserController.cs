using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using BusinessLogic.DTOs;
using BusinessLogic;
using ETL;
using Microsoft.AspNetCore.Authorization;
using lalrg_servicedesk_backend.Authentication;
using lalrg_servicedesk_backend.ViewModels.UserVM;

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

        [HttpPost("Create")]
        [Authenticate("Administrador")]
        public ActionResult<Appuser> CreateUser([FromBody] CreateUserDTO user)
        {
            var userExists = _userBL.GetByEmail(user.Email) != null;
            if (userExists) return BadRequest("El correo ya ha sido registrado");

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

        [HttpPost("Update")]
        [Authenticate]
        public ActionResult<Appuser> UpdateUser([FromBody] CreateUserDTO user)
        {
            var existingUser = _userBL.GetByEmail(user.Email);
            if (existingUser == null) return BadRequest("El usuario no existe.");

            existingUser.Email = user.Email;
            existingUser.Fullname = user.FullName;
            existingUser.IdRole = user.IdRole;
            existingUser.Phone = user.Phone;
            

            if (user.Password != null)
            {
                if (_userBL.Login(user.Email, user.Password) == null)
                {
                    var salt = SecurityHelper.GenerateSalt();
                    var passwordHash = SecurityHelper.HashPassword(user.Password, salt);
                    existingUser.Passwordhash = passwordHash;
                    existingUser.Passwordsalt = salt;
                }
            }
            return _userBL.Update(existingUser);
        }

        [HttpPost("login")]
        public ActionResult<LoginResponseViewModel> Login([FromBody] LoginViewModel model) {
            var user = _userBL.Login(model.email, model.password);
            if (user == null) return Unauthorized("Datos erróneos");

            user.Passwordhash = "";
            user.Passwordsalt = "";
            return new LoginResponseViewModel {
                user = user,
                token = TokenService.CreateToken(user)
            };
        }

        [HttpGet]
        [Authenticate]
        public ActionResult<List<Appuser>> Get()
        {
            return _userBL.GetAll();
        }

        [HttpGet("{id}")]
        [Authenticate]
        public ActionResult<Appuser> Get(int id)
        {
            return _userBL.GetById(id);
        }
    }
}
