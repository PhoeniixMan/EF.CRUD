using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EFCRUD.Model
{
    public class Student
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public long DepartmentId { get; set; }

        public virtual Department Department { get; set; }
    }
}