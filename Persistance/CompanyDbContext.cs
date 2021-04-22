using AspCoreAngular.Models;
using Microsoft.EntityFrameworkCore;

namespace AspCoreAngular.Persistance
{
    public class CompanyDbContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; } 

        public DbSet<Device> Devices { get; set; } 

        public DbSet<User> Users { get; set; }
 
        public CompanyDbContext(DbContextOptions<CompanyDbContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Employee>()
                .HasMany(e => e.Devices)
                .WithOne(d => d.Employee)
                .HasForeignKey(d => d.EmployeeId);
          
        }
    }
}