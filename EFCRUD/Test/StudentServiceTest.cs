using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EFCRUD.DB.Context;
using EFCRUD.Model;
using EFCRUD.Service;
using NUnit.Framework;

namespace EFCRUD.Test
{
    [TestFixture]
    public class StudentServiceTest
    {
        [Test]
        public void Create()
        {

            var db = new EFCRUDContext();
            db.Departments.Add(new Department(){Name = "ENG"});
            db.Departments.Add(new Department() { Name = "CHEM" });
            db.SaveChanges();

            var service = new StudentWebService();
            service.Create(new Student(){Name = "Kamal", Gender = "Male", DepartmentId = 1});
        }

        [Test]
        public void Update ()
        {
            var service = new StudentWebService();
            service.Update(new Student() { Id = 1, Name = "Kamal1", Gender = "Male1", DepartmentId = 2 });
        }

        [Test]
        public void Delete ()
        {
            var service = new StudentWebService();
            service.Delete(1);
        }
    }
}