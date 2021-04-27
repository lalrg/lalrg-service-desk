using DataAccess;
using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class RolesBL
    {
        RolesRepository _rolesRepository;
        public RolesBL()
        {
            _rolesRepository = new RolesRepository();
        }

        public List<Role> GetAll()
        {
            return _rolesRepository.GetAll();
        }
    }
}
