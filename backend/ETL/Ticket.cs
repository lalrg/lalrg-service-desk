using System;
using System.Collections.Generic;

#nullable disable

namespace ETL
{
    public partial class Ticket
    {
        public Ticket()
        {
            Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }
        public int IdTicketstatus { get; set; }
        public int IdService { get; set; }
        public int Createdby { get; set; }
        public DateTime? Createdate { get; set; }
        public DateTime? Lastmodifieddate { get; set; }
        public string Attachments { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }

        public virtual Appuser CreatedbyNavigation { get; set; }
        public virtual Service IdServiceNavigation { get; set; }
        public virtual Ticketstatus IdTicketstatusNavigation { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
