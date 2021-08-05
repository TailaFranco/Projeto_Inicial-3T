using System;
using System.Collections.Generic;

#nullable disable

namespace school_management.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdSala { get; set; }
        public string Nome { get; set; }
        public string Metragem { get; set; }
        public byte Andar { get; set; }
        public int? IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
