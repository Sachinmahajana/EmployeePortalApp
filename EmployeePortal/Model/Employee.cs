using System.ComponentModel.DataAnnotations;

namespace EmployeePortal.Model
{
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        public int Age { get; set; }
        public int Salary { get; set; }
        public bool Status { get; set; }
    }
}
