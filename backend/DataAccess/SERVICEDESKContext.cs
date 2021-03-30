using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using ETL;
#nullable disable

namespace DataAccess
{
    public partial class SERVICEDESKContext : DbContext
    {
        public SERVICEDESKContext()
        {
        }

        public SERVICEDESKContext(DbContextOptions<SERVICEDESKContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Appuser> Appusers { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Commenttype> Commenttypes { get; set; }
        public virtual DbSet<Levelofsatisfaction> Levelofsatisfactions { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Service> Services { get; set; }
        public virtual DbSet<Ticket> Tickets { get; set; }
        public virtual DbSet<Ticketstatus> Ticketstatuses { get; set; }
        public virtual DbSet<Userstatus> Userstatuses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-LQTK9RL1;Database=SERVICEDESK;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Appuser>(entity =>
            {
                entity.ToTable("APPUSER");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("FULLNAME");

                entity.Property(e => e.IdRole).HasColumnName("ID_ROLE");

                entity.Property(e => e.IdStatus).HasColumnName("ID_STATUS");

                entity.Property(e => e.Passwordhash)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasColumnName("PASSWORDHASH");

                entity.Property(e => e.Passwordsalt)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasColumnName("PASSWORDSALT");

                entity.Property(e => e.Phone)
                    .HasMaxLength(60)
                    .HasColumnName("PHONE");

                entity.HasOne(d => d.IdRoleNavigation)
                    .WithMany(p => p.Appusers)
                    .HasForeignKey(d => d.IdRole)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__APPUSER__ID_ROLE__29572725");

                entity.HasOne(d => d.IdStatusNavigation)
                    .WithMany(p => p.Appusers)
                    .HasForeignKey(d => d.IdStatus)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__APPUSER__ID_STAT__286302EC");
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("COMMENT");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Commenttext)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("COMMENTTEXT");

                entity.Property(e => e.Createdate)
                    .HasColumnType("datetime")
                    .HasColumnName("CREATEDATE")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Createdby).HasColumnName("CREATEDBY");

                entity.Property(e => e.IdTicket).HasColumnName("ID_TICKET");

                entity.HasOne(d => d.CreatedbyNavigation)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.Createdby)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__COMMENT__CREATED__3C69FB99");

                entity.HasOne(d => d.IdTicketNavigation)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.IdTicket)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__COMMENT__ID_TICK__3D5E1FD2");
            });

            modelBuilder.Entity<Commenttype>(entity =>
            {
                entity.ToTable("COMMENTTYPE");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Commenttypename)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("COMMENTTYPENAME");
            });

            modelBuilder.Entity<Levelofsatisfaction>(entity =>
            {
                entity.ToTable("LEVELOFSATISFACTION");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Levelofsatisfaction1).HasColumnName("LEVELOFSATISFACTION");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("ROLE");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Rolename)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("ROLENAME");
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.ToTable("SERVICES");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Servicename)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("SERVICENAME");
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.ToTable("TICKET");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Attachments).HasColumnName("ATTACHMENTS");

                entity.Property(e => e.Createdate)
                    .HasColumnType("datetime")
                    .HasColumnName("CREATEDATE")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Createdby).HasColumnName("CREATEDBY");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("DESCRIPTION");

                entity.Property(e => e.IdService).HasColumnName("ID_SERVICE");

                entity.Property(e => e.IdTicketstatus).HasColumnName("ID_TICKETSTATUS");

                entity.Property(e => e.Lastmodifieddate)
                    .HasColumnType("datetime")
                    .HasColumnName("LASTMODIFIEDDATE")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Subject)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("SUBJECT");

                entity.HasOne(d => d.CreatedbyNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.Createdby)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TICKET__CREATEDB__31EC6D26");

                entity.HasOne(d => d.IdServiceNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.IdService)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TICKET__ID_SERVI__30F848ED");

                entity.HasOne(d => d.IdTicketstatusNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.IdTicketstatus)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TICKET__ID_TICKE__300424B4");
            });

            modelBuilder.Entity<Ticketstatus>(entity =>
            {
                entity.ToTable("TICKETSTATUS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Statusname)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("STATUSNAME");
            });

            modelBuilder.Entity<Userstatus>(entity =>
            {
                entity.ToTable("USERSTATUS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Statusname)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("STATUSNAME");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
