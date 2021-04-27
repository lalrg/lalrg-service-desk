using BusinessLogic.DTOs;
using DataAccess;
using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class UserBL
    {
        UserRepository _userRepository;
        public UserBL()
        {
            _userRepository = new UserRepository();
        }

        //returns null when the login fails
        public Appuser Login(string email, string password)
        {
            bool hashMatches(string realHash, string salt, string password)
            {
                var currentHash = SecurityHelper.HashPassword(password, salt);
                if (realHash != currentHash) return false;
                return true;
            }


            var user = _userRepository.GetByEmail(email);
            if (user == null) return null;

            var realHash = user.Passwordhash;
            if (!hashMatches(realHash, user.Passwordsalt, password)) return null;

            return user;
        }
        public Appuser Create(Appuser model)
        {
            return _userRepository.Create(model);
        }
        public Appuser GetByEmail(string email)
        {
            return _userRepository.GetByEmail(email);
        }
        public Appuser GetById (int id)
        {
            return _userRepository.GetById(id);
        }
        public Appuser Update(Appuser model)
        {
            return _userRepository.Update(model);
        }
        public List<Appuser> GetAll()
        {
            return _userRepository.GetAll();
        }
    }
}
