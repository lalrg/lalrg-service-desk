using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ServiceRepository
    {
        SERVICEDESKContext _context;
        public ServiceRepository()
        {
            _context = new SERVICEDESKContext();
        }

        public List<Service> GetAll()
        {
            return _context.Services.ToList();
        }
    }
}
