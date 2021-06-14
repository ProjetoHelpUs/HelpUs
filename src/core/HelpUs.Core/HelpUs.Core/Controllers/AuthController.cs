using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using HelpUs.Core.DTO;
using HelpUs.Core.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using NetDevPack.Identity.Jwt;
using NetDevPack.Identity.Jwt.Model;
using NetDevPack.Identity.Model;

namespace HelpUs.Core.Controllers
{
    public class AuthController : Controller
    {

        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AppJwtSettings _appJwtSettings;
        private readonly HttpClient _httpClient;

        public AuthController(SignInManager<IdentityUser> signInManager,
              UserManager<IdentityUser> userManager,
              IOptions<AppJwtSettings> appJwtSettings)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _appJwtSettings = appJwtSettings.Value;
            _httpClient = new HttpClient();
        }

        [HttpPost("cadastrar")]
        public async Task<ActionResult> Register([FromBody] UsuarioDTO registerUser)
        {
            if (!ModelState.IsValid) return BadRequest(Json(ModelState));

            var user = new IdentityUser
            {
                UserName = registerUser.Email,
                Email = registerUser.Email,
                EmailConfirmed = true

            };

            var result = await _userManager.CreateAsync(user, registerUser.Password);

            if (result.Succeeded)
            {
                Usuario usuario = MapUser(registerUser);
                return await CreateUsuarioAsync(usuario);
            }

            return BadRequest(Json(result.Errors));

        }

        [HttpPost("logar")]
        public async Task<ActionResult> Login([FromBody] LoginUser loginUser)
        {
            if (!ModelState.IsValid) return BadRequest(Json(ModelState));

            var result = await _signInManager.PasswordSignInAsync(loginUser.Email, loginUser.Password, false, true);

            if (result.Succeeded)
            {
                return Ok(Json(GetFullJwt(loginUser.Email)));
            }

            if (result.IsLockedOut)
            {
                return BadRequest(Json("Usuário bloqueado, tente novamente mais tarde"));
            }

            return BadRequest(Json("E-mail ou Senha incorretos"));

        }

        //Um token
        private string GetFullJwt(string email)
        {
            return new JwtBuilder()
                .WithUserManager(_userManager)
                .WithJwtSettings(_appJwtSettings)
                .WithEmail(email)
                .BuildToken();

            /*
             * Mais opções
             return new JwtBuilder()
                .WithUserManager(_userManager)
                .WithJwtSettings(_appJwtSettings)
                .WithEmail(email)
                .WithJwtClaims()
                .WithUserClaims()
                .WithUserRoles()
                .BuildToken();
             */
        }

        //Objeto com tokens
        private UserResponse GetUserResponse(string email)
        {
            return new JwtBuilder()
                .WithUserManager(_userManager)
                .WithJwtSettings(_appJwtSettings)
                .WithEmail(email)
                .WithJwtClaims()
                .WithUserClaims()
                .WithUserRoles()
                .BuildUserResponse() as UserResponse;
        }

        private Usuario MapUser(UsuarioDTO usuarioDTO)
        {
            Usuario usuario = new Usuario();
            usuario.Id = usuarioDTO.Id;
            usuario.Id_Auth = usuarioDTO.Id_Auth;
            usuario.Tipo = usuarioDTO.Tipo;
            usuario.Telefone = usuarioDTO.Telefone;
            usuario.Email = usuarioDTO.Email;
            usuario.Endereco = usuarioDTO.Endereco;
            usuario.Banco = usuarioDTO.Banco;
            usuario.ContaBancaria = usuarioDTO.ContaBancaria;
            usuario.AgenciaBancaria = usuarioDTO.AgenciaBancaria;
            usuario.Pix = usuarioDTO.Pix;
            usuario.DataNascimento = usuarioDTO.DataNascimento;
            usuario.Descricao = usuarioDTO.Descricao;
            usuario.LinkImagem = usuarioDTO.LinkImagem;

            return usuario;
        }

        public async Task<ActionResult> CreateUsuarioAsync(Usuario usuario)
        {
            var usuarioJson = new StringContent(
                JsonSerializer.Serialize(usuario),
                Encoding.UTF8,
                "application/json");

            using var httpResponse =
                await _httpClient.PostAsync("https://localhost:44344/api/Usuarios", usuarioJson);

            return Ok(Json(GetFullJwt(usuario.Email)));
        }

    }
}
