using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using EFCRUD.Model;

namespace EFCRUD.DB.Context
{
    interface IUmsContext
    {
        DbSet<Student> Students { get; set; }
        DbSet<Department> Departments { get; set; }
        int SaveChanges();
    }
}
