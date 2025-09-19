using EmployeePortal.Data;
using EmployeePortal.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeePortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _db;
        public UserController(AppDbContext db)
        {
            _db = db;
        }
        [HttpPost("Register")]
        public IActionResult Register(User obj)
        {
            var existUser = _db.Users.SingleOrDefault(b => b.Useremail == obj.Useremail);
            if (existUser == null)
            {
                _db.Users.Add(obj);
                _db.SaveChanges();
                return Ok(new { message = "User created successfully" });
            }
            else
            {
                return BadRequest("Email id already exists");
            }
        }
        [HttpPost("Login")]
        public IActionResult Login(UserLogin log)
        {
            var user = _db.Users.SingleOrDefault(b => b.Useremail == log.Useremail && b.Password == log.Password);
            if (user == null)
            {
                return BadRequest("Invalid credentials");
            }
            else
            {
                return Ok(new { message = "Login Success", userId=user.UserId,email=user.Useremail,name=user.fullname});
            }
        }
        [HttpGet]
        public IActionResult GetALLUsers()
        {
            var lst = _db.Users.ToList();
            return Ok(lst);
        }

    }
}
