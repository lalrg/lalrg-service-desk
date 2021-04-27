using ETL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class TicketRepository
    {
        SERVICEDESKContext _context;
        public TicketRepository()
        {
            _context = new SERVICEDESKContext();
        }
        public Ticket GetById(int id)
        {
            return _context.Tickets
                .Include(x => x.CreatedbyNavigation)
                .Include(x => x.IdServiceNavigation)
                .Include(x => x.IdTicketstatusNavigation)
                .SingleOrDefault(x => x.Id == id);
        }
        public List<Ticket> GetAll()
        {
            return _context.Tickets.ToList();
        }
        public List<Ticket> GetActiveTickets()
        {
            return _context.Tickets
                .Include(x => x.CreatedbyNavigation)
                .Include(x => x.IdServiceNavigation)
                .Include(x => x.IdTicketstatusNavigation)
                .Where(x => x.IdTicketstatus == 1 || x.IdTicketstatus == 2)
                .ToList();
        }
        public List<Ticket> GetFinalizedTickets()
        {
            return _context.Tickets
                .Include(x => x.CreatedbyNavigation)
                .Include(x => x.IdServiceNavigation)
                .Include(x => x.IdTicketstatusNavigation)
                .Where(x => x.IdTicketstatus == 3)
                .ToList();
        }

        public List<Ticket> GetByUserId(int userId)
        {
            return _context.Tickets
                .Include(x => x.CreatedbyNavigation)
                .Include(x => x.IdServiceNavigation)
                .Include(x => x.IdTicketstatusNavigation)
                .Where(x => x.Createdby == userId && x.IdTicketstatus != 3)
                .ToList();
        }
        public Ticket Add(Ticket model)
        {
            _context.Tickets.Add(model);
            _context.SaveChanges();
            return model;
        }
        public Ticket Update(Ticket model)
        {
            _context.Entry(model).State = EntityState.Modified;
            _context.SaveChanges();
            return model;
        }

        public bool CloseTicketById(int ticketId)
        {
            var ticket = _context.Tickets.SingleOrDefault(x => x.Id == ticketId);
            if (ticket == null)
                return false;

            ticket.IdTicketstatus = 3;
            _context.SaveChanges();
            return true;
        }

        public bool ProgressTicketById(int ticketId)
        {
            var ticket = _context.Tickets.SingleOrDefault(x => x.Id == ticketId);
            if (ticket == null)
                return false;

            ticket.IdTicketstatus = 2;
            _context.SaveChanges();
            return true;
        }

        public bool OpenTicketById(int ticketId)
        {
            var ticket = _context.Tickets.SingleOrDefault(x => x.Id == ticketId);
            if (ticket == null)
                return false;

            ticket.IdTicketstatus = 1;
            _context.SaveChanges();
            return true;
        }
    }
}
