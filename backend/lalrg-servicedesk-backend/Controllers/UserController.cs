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
            var userExists = _userBL.GetByEmail(user.Email) == null;
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

    }
}
