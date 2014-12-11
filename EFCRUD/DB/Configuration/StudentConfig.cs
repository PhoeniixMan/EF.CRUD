using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using EFCRUD.Model;

namespace EFCRUD.DB.Configuration
{
    public class StudentConfig:EntityTypeConfiguration<Student>
    {
        public StudentConfig()
        {
            HasKey(x => x.Id);
            Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.Name).IsRequired().HasMaxLength(20);

            Property(x => x.Gender).IsRequired().HasMaxLength(10);

            Property(x => x.DepartmentId).IsRequired();

            HasRequired(x=>x.Department)
                .WithMany(x=>x.Students)
                .HasForeignKey(x=>x.DepartmentId)
                .WillCascadeOnDelete(false);
        }


    }
}