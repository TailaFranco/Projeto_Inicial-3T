using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using school_management.Domains;

#nullable disable

namespace school_management.Contexts
{
    public partial class GerenciarPatrimonioContext : DbContext
    {
        public GerenciarPatrimonioContext()
        {
        }

        public GerenciarPatrimonioContext(DbContextOptions<GerenciarPatrimonioContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Ativo> Ativos { get; set; }
        public virtual DbSet<Equipamento> Equipamentos { get; set; }
        public virtual DbSet<Sala> Salas { get; set; }
        public virtual DbSet<TipoEquipamento> TipoEquipamentos { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-4MFDOSC\\SQLEXPRESS; initial catalog=GerenciarPatrimonio; user Id=sa; pwd=1297;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Ativo>(entity =>
            {
                entity.HasKey(e => e.IdAtivo)
                    .HasName("PK__Ativo__4020760DEBBB497C");

                entity.ToTable("Ativo");

                entity.HasIndex(e => e.Ativo1, "UQ__Ativo__6778139A8A17F72C")
                    .IsUnique();

                entity.Property(e => e.IdAtivo).HasColumnName("idAtivo");

                entity.Property(e => e.Ativo1)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("ativo");
            });

            modelBuilder.Entity<Equipamento>(entity =>
            {
                entity.HasKey(e => e.IdEquipamento)
                    .HasName("PK__Equipame__75940D3404933780");

                entity.ToTable("Equipamento");

                entity.Property(e => e.IdEquipamento).HasColumnName("idEquipamento");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.IdAtivo).HasColumnName("idAtivo");

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.IdTipoEquipamento).HasColumnName("idTipoEquipamento");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Marca)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("marca");

                entity.Property(e => e.NumeroSerie)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("numeroSerie");

                entity.HasOne(d => d.IdAtivoNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdAtivo)
                    .HasConstraintName("FK__Equipamen__idAti__46E78A0C");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__Equipamen__idSal__47DBAE45");

                entity.HasOne(d => d.IdTipoEquipamentoNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdTipoEquipamento)
                    .HasConstraintName("FK__Equipamen__idTip__45F365D3");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Equipamen__idUsu__5BE2A6F2");
            });

            modelBuilder.Entity<Sala>(entity =>
            {
                entity.HasKey(e => e.IdSala)
                    .HasName("PK__Sala__C4AEB19CA50C6E5B");

                entity.ToTable("Sala");

                entity.HasIndex(e => e.Nome, "UQ__Sala__6F71C0DCFBBDBA63")
                    .IsUnique();

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.Andar).HasColumnName("andar");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Metragem)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("metragem");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Salas)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Sala__idUsuario__5AEE82B9");
            });

            modelBuilder.Entity<TipoEquipamento>(entity =>
            {
                entity.HasKey(e => e.IdTipoEquipamento)
                    .HasName("PK__TipoEqui__38B9B7E38F66B149");

                entity.ToTable("TipoEquipamento");

                entity.HasIndex(e => e.TipoEquipamento1, "UQ__TipoEqui__BD52474DBB59D36B")
                    .IsUnique();

                entity.Property(e => e.IdTipoEquipamento).HasColumnName("idTipoEquipamento");

                entity.Property(e => e.TipoEquipamento1)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("tipoEquipamento");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__03006BFFE5453F2B");

                entity.ToTable("TipoUsuario");

                entity.HasIndex(e => e.TipoUsuario1, "UQ__TipoUsua__A9585C05F77BC190")
                    .IsUnique();

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.TipoUsuario1)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("tipoUsuario");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__645723A69D11DC8E");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Email, "UQ__Usuario__AB6E6164DEB271FF")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__idTipoU__4316F928");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
