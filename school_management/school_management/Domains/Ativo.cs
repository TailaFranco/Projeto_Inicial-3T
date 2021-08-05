using System;
using System.Collections.Generic;

#nullable disable

namespace school_management.Domains
{
    public partial class Ativo
    {
        public Ativo()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdAtivo { get; set; }
        public string Ativo1 { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
