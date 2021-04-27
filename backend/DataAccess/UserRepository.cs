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
            return _context.Appusers.Where(x => x.IdStatus == 1).Include(u => u.IdRoleNavigation).SingleOrDefault(x => x.Email == email);
        }
        public Appuser GetById(int id)
        {
            return _context.Appusers.Where(x => x.IdStatus == 1).Include(u => u.IdRoleNavigation).SingleOrDefault(x => x.Id == id);
        }

        public Appuser Create(Appuser user)
        {
            var emailIsTaken = _context.Appusers.Any(x => x.Email == user.Email);
            if (emailIsTaken)
                return null;

            user.IdStatus = 1;
            _context.Appusers.Add(user);
            _context.SaveChanges();
            return user;
        }

        public Appuser Update(Appuser user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
            return user;
        }

        public bool Delete(int userId)
        {
            var user = _context.Appusers.SingleOrDefault(x => x.Id == userId);
            if (user == null)
                return false;

            user.IdStatus = 2;
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
            return true;
        }
        public List<Appuser> GetAll()
        {
            return _context.Appusers.Include(x => x.IdRoleNavigation).Where(x => x.IdStatus == 1).ToList();
        }
    }
}
