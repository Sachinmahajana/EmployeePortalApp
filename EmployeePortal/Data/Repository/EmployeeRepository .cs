using EmployeePortal.Model;
using Microsoft.EntityFrameworkCore;
namespace EmployeePortal.Data.Repository
{
    public class EmployeeRepository:IEmployeeRepository
    {
        private readonly AppDbContext _db;

        public EmployeeRepository(AppDbContext db)
        {
            _db = db;
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _db.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            return await _db.Employees.FindAsync(id);
        }

        public async Task<Employee> AddEmployee(Employee emp)
        {
            await _db.Employees.AddAsync(emp);
            await _db.SaveChangesAsync();
            return emp;
        }

        public async Task<bool> UpdateEmployee(int id, Employee obj)
        {
            var employee = await _db.Employees.FindAsync(id);
            if (employee == null) return false;

            employee.Name = obj.Name;
            employee.Email = obj.Email;
            employee.Phone = obj.Phone;
            employee.Age = obj.Age;
            employee.Salary = obj.Salary;
            employee.Status = obj.Status;

            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteEmployee(int id)
        {
            var employee = await _db.Employees.FindAsync(id);
            if (employee == null) return false;

            _db.Employees.Remove(employee);
            await _db.SaveChangesAsync();
            return true;
        }
    }
}
