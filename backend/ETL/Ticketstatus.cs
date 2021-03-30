using System;
using System.Collections.Generic;

#nullable disable

namespace ETL
{
    public partial class Ticketstatus
    {
        public Ticketstatus()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int Id { get; set; }
        public string Statusname { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
