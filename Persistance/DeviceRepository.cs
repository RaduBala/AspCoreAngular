using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AspCoreAngular.Models;

namespace AspCoreAngular.Persistance
{
    public class DeviceRepository : IDeviceRepository
    {
        private readonly CompanyDbContext context;

        public DeviceRepository(CompanyDbContext context)
        {
            this.context = context;
        }

        public void Add(Device device)
        {
            context.Devices.Add(device);
        }

        public Device Get(int id)
        {
            return context.Devices.SingleOrDefault(l => l.Id == id);
        }

        public Device FindByEmployee(int? employeeId)
        {
            return context.Devices.SingleOrDefault(l => l.EmployeeId == employeeId);
        }

        public IEnumerable<Device> GetAll()
        {
            return context.Devices.ToList();
        }

        public void Remove(int id)
        {
            Device device = Get(id);

            context.Devices.Remove(device);
        }

        public void Update(Device device)
        {
            context.Devices.Update(device);
        }
    }
}