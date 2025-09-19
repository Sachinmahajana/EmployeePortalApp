//using EmployeePortal.Data;
//using EmployeePortal.Model;
//using Microsoft.EntityFrameworkCore;

//namespace EmployeePortal.Repository
//{
//    public class EmployeeRepository
//    {
//        private readonly AppDbContext _db;
//        public EmployeeRepository(AppDbContext db)
//        {
//            _db = db;
//        }
//        public async Task<List<Employee>> GetAllEmployees()
//        {
//            return await _db.Employees.ToListAsync();
//        }
//        public async Task SaveEmployee(Employee emp)
//        {
//            await _db.Employees.AddAsync(emp);
//            await _db.SaveChangesAsync();
//        }
//        public async Task UpdateEmployee(int id,Employee obj)
//        {
//            var employee = await _db.Employees.FindAsync(id);
//            if(employee == null)
//            {
//                throw new Exception("Employee not found");
//            }
//            employee.Name=obj.Name;
//            employee.Email = obj.Email;
//            employee.Phone=obj.Phone;
//            employee.Age = obj.Age;
//            employee.Salary=obj.Salary;
//            employee.Status = obj.Status;

//            await _db.SaveChangesAsync();
//        }
//        public async Task DeleteEmployee(int id)
//        {
//            var employee = await _db.Employees.FindAsync(id);
//            if(employee == null)
//            {
//                throw new Exception("Employee not found");
//            }
//            _db.Employees.Remove(employee);
//            await _db.SaveChangesAsync();
//        }
//    }
//}
