using DataAccess;
using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class TicketBL
    {
        TicketRepository _ticketRepository;
        CommentsRepository _commentsRepository;
        public TicketBL(TicketRepository ticketRepository, CommentsRepository commentsRepository)
        {
            _ticketRepository = ticketRepository;
            _commentsRepository = commentsRepository;
        }
        public List<Ticket> GetAll()
        {
            return _ticketRepository.GetAll();
        }
        public List<Ticket> GetActiveTickets()
        {
            return _ticketRepository.GetActiveTickets();
        }
        public List<Ticket> GetFinalizedTickets()
        {
            return _ticketRepository.GetFinalizedTickets();
        }
        public List<Ticket> GetByUserId(int userId)
        {
            return _ticketRepository.GetByUserId(userId);
        }
        public Ticket GetByTicketId(int ticketId)
        {
            var comments = _commentsRepository.GetByTicketId(ticketId);

            var ticket = _ticketRepository.GetById(ticketId);
            ticket.Comments = comments;

            return ticket;
        }
        public Ticket Add(Ticket ticket)
        {
            ticket.IdTicketstatus = 1;
            _ticketRepository.Add(ticket);
            return ticket;
        }
        public bool CloseByTicketId(int ticketId)
        {
            return _ticketRepository.CloseTicketById(ticketId);
        }
        public bool ProgressByTicketId(int ticketId)
        {
            return _ticketRepository.ProgressTicketById(ticketId);
        }
        public bool OpenByTicketId(int ticketId)
        {
            return _ticketRepository.OpenTicketById(ticketId);
        }
    }
}
