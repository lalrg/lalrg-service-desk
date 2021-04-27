using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class RolesRepository
    {
        SERVICEDESKContext _context;
        public RolesRepository()
        {
            _context = new SERVICEDESKContext();
        }

        public List<Role> GetAll()
        {
            return _context.Roles.ToList();
        }
    }
}
