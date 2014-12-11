using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using EFCRUD.DB.Context;

namespace EFCRUD.DB.Initializer
{
    internal class EFCRUDContextInitializer : CreateDatabaseIfNotExists<EFCRUDContext>
    {
        protected override void Seed(EFCRUDContext context)
        {
        }
    }
}

