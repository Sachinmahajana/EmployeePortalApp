using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeePortal.Model
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string Useremail { get; set; }
        [Required]
        public string Password { get; set; }
        public DateTime Createddate { get; set; }
        [Required]
        public string fullname { get; set; }
        [Required]
        public string mobileno { get; set; }
    }
    [NotMapped]
    public class UserLogin
    {
        [Required]
        public string Useremail { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
