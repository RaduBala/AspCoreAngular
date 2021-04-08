using System.ComponentModel.DataAnnotations;

namespace AspCoreAngular.Models
{
    public class Device
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public int? EmployeeId { get; set; }

        public Employee Employee { get; set; }
    }
}