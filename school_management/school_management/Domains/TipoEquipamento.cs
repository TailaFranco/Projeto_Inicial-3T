using System;
using System.Collections.Generic;

#nullable disable

namespace school_management.Domains
{
    public partial class TipoEquipamento
    {
        public TipoEquipamento()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdTipoEquipamento { get; set; }
        public string TipoEquipamento1 { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
