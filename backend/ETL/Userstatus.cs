using System;
using System.Collections.Generic;

#nullable disable

namespace ETL
{
    public partial class Userstatus
    {
        public Userstatus()
        {
            Appusers = new HashSet<Appuser>();
        }

        public int Id { get; set; }
        public string Statusname { get; set; }

        public virtual ICollection<Appuser> Appusers { get; set; }
    }
}
