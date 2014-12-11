using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using EFCRUD.Model;

namespace EFCRUD.DB.Configuration
{
    public class DepartmentConfig : EntityTypeConfiguration<Department>
    {
        public DepartmentConfig()
        {
            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.Name).IsRequired().HasMaxLength(20);
        }
    }
}