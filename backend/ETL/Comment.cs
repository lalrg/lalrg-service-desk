using System;
using System.Collections.Generic;

#nullable disable

namespace ETL
{
    public partial class Comment
    {
        public int Id { get; set; }
        public int Createdby { get; set; }
        public int IdTicket { get; set; }
        public string Commenttext { get; set; }
        public DateTime? Createdate { get; set; }

        public virtual Appuser CreatedbyNavigation { get; set; }
        public virtual Ticket IdTicketNavigation { get; set; }
    }
}
