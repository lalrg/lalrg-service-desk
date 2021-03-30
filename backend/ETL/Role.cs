using System;
using System.Collections.Generic;

#nullable disable

namespace ETL
{
    public partial class Role
    {
        public Role()
        {
            Appusers = new HashSet<Appuser>();
        }

        public int Id { get; set; }
        public string Rolename { get; set; }

        public virtual ICollection<Appuser> Appusers { get; set; }
    }
}
