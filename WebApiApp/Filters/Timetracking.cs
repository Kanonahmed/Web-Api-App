using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace WebApiApp.Filters
{
    public class Timetracking : ActionFilterAttribute
    {
       
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            string messege = "\n"+actionContext.ActionDescriptor.ControllerDescriptor.ControllerName + "--->" +
                             actionContext.ActionDescriptor.ActionName + "--> OnActionExecuting " + DateTime.Now.ToString()+"\n";
            ExecutionTime(messege);
        }

        private void ExecutionTime(string data)
        {
            File.AppendAllText(HttpContext.Current.Server.MapPath("~/Logs/data.txt"),data);
        }

        
        
    }
}