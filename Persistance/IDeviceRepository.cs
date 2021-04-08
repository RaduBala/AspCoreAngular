using System.Collections.Generic;
using AspCoreAngular.Models;

namespace AspCoreAngular.Persistance
{
    public interface IDeviceRepository
    {
        IEnumerable<Device> GetAll();

        Device Get(int id);

         public Device FindByEmployee(int? employeeId);

        void Add(Device laptop);

        void Update(Device laptop);

        void Remove(int id);
    }
}