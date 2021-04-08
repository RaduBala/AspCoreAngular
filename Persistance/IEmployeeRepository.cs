using System.Collections.Generic;
using AspCoreAngular.Models;

namespace AspCoreAngular.Persistance
{
    public interface IEmployeeRepository
    {
        IEnumerable<Employee> GetAll();

        Employee Get(int id);

        void Add(Employee employee);

        void Update(Employee employee);

        void Remove(int id);
    }
}