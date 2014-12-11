using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EFCRUD.DB.Context;
using EFCRUD.DB.Initializer;
using NUnit.Framework;

namespace EFCRUD.Test
{
    [TestFixture]
    internal class DbTest
    {
        [Test]
        public void Create ()
        {
            try
            {
                var db = new EFCRUDContext();
                var students = db.Students.ToList();
                var departments = db.Departments.ToList();
            }
            catch(Exception exception)
            {
                throw new Exception(exception.Message, exception);
            }
        }
    }
}