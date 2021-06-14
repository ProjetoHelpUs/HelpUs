using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HelpUs.Core.Migrations.Helpus
{
    public partial class Usuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id_Auth = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Tipo = table.Column<int>(type: "int", nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Endereco = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Banco = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContaBancaria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AgenciaBancaria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pix = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataNascimento = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LinkImagem = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                    table.ForeignKey(
                          name: "FK_UserAuth",
                          column: x => x.Id_Auth,
                          principalTable: "AspNetUsers",
                          principalColumn: "Id",
                          onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
