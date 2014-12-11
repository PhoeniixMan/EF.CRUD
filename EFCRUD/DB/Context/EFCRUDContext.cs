using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using EFCRUD.DB.Configuration;
using EFCRUD.DB.Initializer;
using EFCRUD.Model;

namespace EFCRUD.DB.Context
{
    public class EFCRUDContext : DbContext, IUmsContext
    {
        static EFCRUDContext ()
        {
            Database.SetInitializer(new EFCRUDContextInitializer());
        }

        public EFCRUDContext (): base("DbEFCRUD")
        {
        }
        public DbSet<Student> Students { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new DepartmentConfig());
            modelBuilder.Configurations.Add(new StudentConfig());
        }
    }
}