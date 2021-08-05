﻿using System;
using System.Collections.Generic;

#nullable disable

namespace school_management.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamento { get; set; }
        public int? IdTipoEquipamento { get; set; }
        public int? IdAtivo { get; set; }
        public int? IdSala { get; set; }
        public string Marca { get; set; }
        public string NumeroSerie { get; set; }
        public string Descricao { get; set; }
        public int? IdUsuario { get; set; }

        public virtual Ativo IdAtivoNavigation { get; set; }
        public virtual Sala IdSalaNavigation { get; set; }
        public virtual TipoEquipamento IdTipoEquipamentoNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
