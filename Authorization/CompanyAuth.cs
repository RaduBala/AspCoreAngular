using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace AspCoreAngular.Authorization
{
    public class CompanyAuthAttribute : TypeFilterAttribute
    {
        public CompanyAuthAttribute() : base(typeof(CompanyAuthFilter))
        {
        }
    }

    public class CompanyAuthFilter : IAuthorizationFilter
    {
        public CompanyAuthFilter()
        {

        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
 
        }
    }
}