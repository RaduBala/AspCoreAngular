using AspCoreAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspCoreAngular.Authentication
{
    public interface IJwtAuth
    {
        string Authenticate(User user);
    }
}
