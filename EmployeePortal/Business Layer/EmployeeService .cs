using EmployeePortal.Data.Repository;
using EmployeePortal.Model;

namespace EmployeePortal.Business_Layer
{
    public class EmployeeService:IEmployeeService
    {
        private readonly IEmployeeRepository _repo;

        public EmployeeService(IEmployeeRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _repo.GetAllEmployees();
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            return await _repo.GetEmployeeById(id);
        }

        public async Task<Employee> CreateEmployee(Employee emp)
        {
            return await _repo.AddEmployee(emp);
        }

        public async Task<bool> UpdateEmployee(int id, Employee emp)
        {
            return await _repo.UpdateEmployee(id, emp);
        }

        public async Task<bool> DeleteEmployee(int id)
        {
            return await _repo.DeleteEmployee(id);
        }
    }
}


