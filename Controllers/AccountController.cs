using AspCoreAngular.Authentication;
using AspCoreAngular.Models;
using AspCoreAngular.Persistance;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspCoreAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IJwtAuth jwtAuth;

        private readonly IUserRepository userRepository;

        public AccountController(IJwtAuth jwtAuth, IUserRepository userRepository)
        {
            this.jwtAuth = jwtAuth;
            this.userRepository = userRepository;
        }

        [HttpPost("login")]
        public IActionResult LogIn([FromBody] User user)
        {
            var users = userRepository.GetAll();

            if( !users.Any(u => (u.Name == user.Name) && (u.Password == user.Password)) )
            {
                return Unauthorized();
            }

            Token token = new Token();

            token.Value = jwtAuth.Authenticate(user);

            return Ok(token);
        }
    }
}
