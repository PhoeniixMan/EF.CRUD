using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI.WebControls;
using EFCRUD.DB.Context;
using EFCRUD.Model;

namespace EFCRUD.Service
{
    /// <summary>
    /// Summary description for StudentWebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class StudentWebService : System.Web.Services.WebService
    {

        private EFCRUDContext context;

        public StudentWebService()
        {
            context = new EFCRUDContext();
            context.Configuration.ProxyCreationEnabled = false;
            context.Configuration.LazyLoadingEnabled = true;
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Student Get (long id)
        {
            var student = context.Students.Include(p => p.Department).Single(x => x.Id == id);
            return student;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void Create(Student entity)
        {
            context.Students.Add(entity);
            context.SaveChanges();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void Update ( Student entity )
        {
            var student = context.Students.Single(x => x.Id == entity.Id);
            student.Name = entity.Name;
            student.Gender = entity.Gender;
            student.DepartmentId = entity.DepartmentId;
            context.SaveChanges();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void Delete ( long id )
        {
            var student = context.Students.Single(x => x.Id == id);
            context.Students.Remove(student);
            context.SaveChanges();
        }
    }
}
