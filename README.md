# HelpUs

<h1 align="center">
  <img alt="donate" title="#donate" src="./assets/donate.png" />
</h1>


# Sobre o Projeto

  Com a iniciativa da ONU e seus parceiros brasileiros trabalhando para alcançar os
Objetivos de Desenvolvimento Sustentável no Brasil, o projeto HelpUs deseja contribuir
com um dos principais pilares necessários para o desenvolvimento nacional, a erradicação
da pobreza. 

  O HelpUs consiste em uma iniciativa para conectar as pessoas que têm o interesse
de auxiliar com aquelas que mais precisam. A ideia é que os doadores e os donatários se
cadastrem no aplicativo e os doadores escolham o projeto/pessoa que desejam colaborar. 

# Status

<h4 align="center"> 🚧 Work in progress . . . 🚧 </h4> 

# Sumário

<!--ts-->
   * [Sobre o projeto](#sobre-o-projeto)
   * [Status](#status)
   * [Sumário](#sumário)
   * [Requisitos Funcionais](#requisitos-funcionais)
   * [Tecnologias Utilizadas](#tecnologias-utilizadas)
   * [Como testar a API](#como-testar-a-api)
   * [Contribuição](#contribuição)
   * [Autores](#autores)
   * [Licença](#licença)
   * [Agradecimentos](#agradecimentos)
<!--te-->

# Requisitos Funcionais

- [x] Cadastrar Usuário
- [x] Fazer Login
- [X] Cadastrar postagens
- [X] Visualizar postagens
- [X] Visualizar perfil
- [ ] Atualizar perfil
- [ ] Editar postagens

# Como testar a API

- Instale a versão mais recente do Visual Studio 2019 ou superior
- Tenha o Sql Server instalado;
- Crie o banco de dados: create database helpusdb;
- Na pasta \HelpUs\src\core\HelpUs.Core\HelpUs.Core adicionar o appssettings.json que deve ser preenchido conforme o tópico abaixo.
- Execute as Migrations no console do gerenciador de pacotes Nuget, na seguinte ordem:

```
- dotnet ef database update --context NetDevPackAppDbContext --project HelpUs.Core/HelpUs.Core.csproj
```

```
- dotnet ef database update Usuario --project HelpUs.Core/HelpUs.Core.csproj --context HelpUsContext
```

```
- dotnet ef database update usuario2 --project HelpUs.Core/HelpUs.Core.csproj --context HelpUsContext
```

- Executar o projeto.
- Caso queira testar a integração do app com a API aqui tem um ótimo tutorial de como configurar o ngrock para não conflitar com o IIS https://www.youtube.com/watch?v=1J-5r5at5fE

# appsettings.json

- Em HelpUsContext está a minha string de conexão com o sql server, substitua de acordo com seu ambiente


```
{
	"Logging": {
		"LogLevel": {
			"Default": "Information",
			"Microsoft": "Warning",
			"Microsoft.Hosting.Lifetime": "Information"
		}
	},
	"AllowedHosts": "*",
	"ConnectionStrings": {
		"HelpUsContext": "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=helpusdb;Integrated Security=True"
	},
	"AppSettings": {
		"SecretKey": "COLOQUEAQUISUACHAVEDECRIPTOGRAFIAPARAAUTENTICACAO",
		"Expiration": 2,
		"Issuer": "SampleApp",
		"Audience": "https://localhost"
	}
}
```
 
 # Executando a aplicação

- tenha o nodejs instalado (https://nodejs.org/en/)
- localize a pasta "App", onde se encontram os arquivos referentes ao Front End e, utilizando o prompt de comando, execute o comando 'npm install'
- substitua os links das requisições HTTP pelo link gerado pelo NGROCK nos seguintes arquivos:
- 	 cadastro/cadastro.js (linha 24); dasboard/dashboard.js (linha 13); dasboard/lista.js (linha 27); donatario/donatario.js (linha 36); login/login.js (linhas 19, 28 e 38); 
 

# Tecnologias Utilizadas

- C#
- .NET Framework
- JavaScript
- React Native

# Contribuição

Leia o arquivo CONTRIBUTING.md para saber detalhes sobre o nosso código de conduta e o processo de envio de solicitações pull (Pull Request) para nós.

# Autores

<table>
    <tbody>
      <tr>
 
  <td align="center"> 
<sub><a href="https://github.com/Arthur-Alv"><b>Arthur Alves</b></a></sub> </td>
 
  <td align="center">
 <sub><a href="https://github.com/fernandes35felipe"><b>Felipe Fernandes</b></a></sub> </td>
        
  <td align="center"> 
<sub><a href="https://github.com/DinelliFernanda"><b>Maria Fernanda</b></a></sub> </td>

      
  <td align="center">
 <sub><a href="https://github.com/PedroHRamos"><b>Pedro Ramos</b></a></sub> </td>

 
 <td align="center"> 
<sub><a href="https://github.com/petroniosantos"><b>Petrônio Oliveira</b></a></sub> </td>
 
  <td align="center">
  <sub><a href="https://github.com/stellanicoli"><b>Stella Assunção</b></a></sub> </td>
 
 
 <td align="center">
 <sub><a href="https://github.com/wasouzaf"><b>Waldeir Franklin</b></a></sub> </td>
 </tr>


 </tbody></table>

# Licença

Este projeto está licenciado sob a Licença MIT, consulte o arquivo LICENSE.md para mais detalhes.

# Agradecimentos

<h4 align="center"> Nós, da equipe HelpUs, prestamos nossos agradecimentos aos professores e orientadores do projeto Montanha, Diego, Wesley e Israel. </h4> 
