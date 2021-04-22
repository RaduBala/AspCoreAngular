using AspCoreAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspCoreAngular.Persistance
{
    public class UserRepository : IUserRepository
    {
        private readonly CompanyDbContext context;

        public UserRepository(CompanyDbContext context)
        {
            this.context = context;
        }

        public User Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            return context.Users.ToList();
        }
    }
}
