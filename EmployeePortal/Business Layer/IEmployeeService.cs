using EmployeePortal.Model;

namespace EmployeePortal.Business_Layer
{
    public interface IEmployeeService
    {
        Task<List<Employee>> GetAllEmployees();
        Task<Employee> GetEmployeeById(int id);
        Task<Employee> CreateEmployee(Employee emp);
        Task<bool> UpdateEmployee(int id, Employee emp);
        Task<bool> DeleteEmployee(int id);
    }
}
