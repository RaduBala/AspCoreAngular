using System.Threading.Tasks;

namespace AspCoreAngular.Persistance
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}