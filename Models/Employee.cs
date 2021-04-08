using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace AspCoreAngular.Models
{
    public class Employee
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public ICollection<Device> Devices { get; set; }

        public Employee()
        {
            Devices = new Collection<Device>();
        }
    }
}