using ETL;
using Microsoft.EntityFrameworkCore;
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
            return _context.Appusers.Include(u => u.IdRoleNavigation).SingleOrDefault(x => x.Email == email);
        }

        public Appuser CreateUser(Appuser user)
        {
            var emailIsTaken = _context.Appusers.Any(x => x.Email == user.Email);
            if (emailIsTaken) return null;
            _context.Appusers.Add(user);
            _context.SaveChanges();
            return user;
        }
    }
}
