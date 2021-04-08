using System.Collections.Generic;
using System.Linq;
using AspCoreAngular.Models;
using Microsoft.EntityFrameworkCore;

namespace AspCoreAngular.Persistance
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly CompanyDbContext context;

        public EmployeeRepository(CompanyDbContext context)
        {
            this.context = context;
        }

        public void Add(Employee employee)
        {
            context.Employees.Add(employee);
        }

        public Employee Get(int id)
        {
            return context.Employees.Include(e => e.Devices).SingleOrDefault(e => e.Id == id);
        }

        public IEnumerable<Employee> GetAll()
        {
            return context.Employees.Include(e => e.Devices).ToList();
        }

        public void Remove(int id)
        {
            Employee employee = Get(id);

            context.Employees.Remove(employee);
        }

        public void Update(Employee employee)
        {
            context.Employees.Update(employee);
        }
    }
}