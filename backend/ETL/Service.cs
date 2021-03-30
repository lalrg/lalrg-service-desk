using System;
using System.Collections.Generic;

#nullable disable

namespace ETL
{
    public partial class Service
    {
        public Service()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int Id { get; set; }
        public string Servicename { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
