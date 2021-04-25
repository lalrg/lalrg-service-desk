using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lalrg_servicedesk_backend.ViewModels.UserVM
{
    public class LoginViewModel
    {
        public string email { get; set; }
        public string password { get; set; }
    }
    public class LoginResponseViewModel
    {
        public Appuser user { get; set; }
        public string token { get; set; }
    }
}
