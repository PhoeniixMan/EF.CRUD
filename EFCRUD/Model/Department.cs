using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EFCRUD.Model
{
    public class Department
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<Student> Students { get; set; }
    }
}