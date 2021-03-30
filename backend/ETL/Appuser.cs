using System;
using System.Collections.Generic;

#nullable disable

namespace ETL
{
    public partial class Appuser
    {
        public Appuser()
        {
            Comments = new HashSet<Comment>();
            Tickets = new HashSet<Ticket>();
        }

        public int Id { get; set; }
        public int IdStatus { get; set; }
        public int IdRole { get; set; }
        public string Fullname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Passwordhash { get; set; }
        public string Passwordsalt { get; set; }

        public virtual Role IdRoleNavigation { get; set; }
        public virtual Userstatus IdStatusNavigation { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
