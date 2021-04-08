using System.Threading.Tasks;

namespace AspCoreAngular.Persistance
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly CompanyDbContext context;

        public UnitOfWork(CompanyDbContext context)
        {
            this.context = context;
        }

        public void Commit()
        {
            context.SaveChanges();
        }
    }
}