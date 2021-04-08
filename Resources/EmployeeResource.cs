using System.Collections.Generic;
using System.Collections.ObjectModel;
using AspCoreAngular.Models;

namespace AspCoreAngular.Resources
{
    public class EmployeeResource
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<int> Devices { get; set; }

        public EmployeeResource()
        {
            Devices = new Collection<int>();
        }
    }
}