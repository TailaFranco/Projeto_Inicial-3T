using System;
using System.Collections.Generic;

#nullable disable

namespace school_management.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Equipamentos = new HashSet<Equipamento>();
            Salas = new HashSet<Sala>();
        }

        public int IdUsuario { get; set; }
        public int? IdTipoUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Equipamento> Equipamentos { get; set; }
        public virtual ICollection<Sala> Salas { get; set; }
    }
}
