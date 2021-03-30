using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class UserRepository
    {
        SERVICEDESKContext _context;
        public UserRepository()
        {
            _context = new SERVICEDESKContext();
        }
        public Appuser GetByEmail(string email)
        {
            return _context.Appusers.SingleOrDefault(x => x.Email == email);
        }

        public bool CreateUser(Appuser user)
        {
            var emailIsTaken = _context.Appusers.Any(x => x.Email == user.Email);
            if (emailIsTaken) return false;
            _context.Appusers.Add(user);
            _context.SaveChanges();
            return true;
        }
    }
}
