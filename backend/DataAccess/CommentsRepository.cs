using ETL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class CommentsRepository
    {
        SERVICEDESKContext _context;
        public CommentsRepository()
        {
            _context = new SERVICEDESKContext();
        }
        public List<Comment> GetByTicketId(int idTicket) {
            return _context
                .Comments
                .Include(x => x.CreatedbyNavigation)
                .Where(x => x.IdTicket == idTicket)
                .ToList();
        }

        public Comment Add(Comment model)
        {
            _context.Comments.Add(model);
            _context.SaveChanges();
            return model;
        }

        public bool Delete(int idComment)
        {
            var model = _context.Comments.SingleOrDefault(x => x.Id == idComment);
            if (model == null)
                return false;

            _context.Entry(model).State = EntityState.Deleted;
            _context.SaveChanges();
            return true;
        }
    }
}
