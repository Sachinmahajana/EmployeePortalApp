using EmployeePortal.Business_Layer;
using EmployeePortal.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeePortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _service;

        public EmployeeController(IEmployeeService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var employees = await _service.GetAllEmployees();
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var emp = await _service.GetEmployeeById(id);
            if (emp == null) return NotFound();
            return Ok(emp);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Employee emp)
        {
            var created = await _service.CreateEmployee(emp);
            return CreatedAtAction(nameof(GetById), new { id = created.EmpId }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Employee emp)
        {
            var updated = await _service.UpdateEmployee(id, emp);
            if (!updated) return NotFound();
            return Ok(emp);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _service.DeleteEmployee(id);
            if (!deleted) return NotFound();
            return NoContent();
        }
    }
}
