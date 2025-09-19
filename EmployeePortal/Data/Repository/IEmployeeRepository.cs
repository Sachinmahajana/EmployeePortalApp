using EmployeePortal.Model;

namespace EmployeePortal.Data.Repository
{
    public interface IEmployeeRepository
    {
        Task<List<Employee>> GetAllEmployees();
        Task<Employee> GetEmployeeById(int id);
        Task<Employee> AddEmployee(Employee emp);
        Task<bool> UpdateEmployee(int id, Employee emp);
        Task<bool> DeleteEmployee(int id);
    }
}
