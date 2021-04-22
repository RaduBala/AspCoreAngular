using AspCoreAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspCoreAngular.Persistance
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();

        User Get(int id);
    }
}
