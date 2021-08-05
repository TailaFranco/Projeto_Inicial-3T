IF EXISTS(SELECT * FROM sys.databases WHERE name = 'GerenciarPatrimonio')
  BEGIN

    DROP DATABASE GerenciarPatrimonio
	END
	GO

IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'GerenciarPatrimonio')
  BEGIN

    CREATE DATABASE GerenciarPatrimonio
	END
	GO

USE GerenciarPatrimonio;
GO

CREATE TABLE TipoUsuario
(
	idTipoUsuario		INT PRIMARY KEY IDENTITY,
	tipoUsuario			VARCHAR(200)UNIQUE NOT NULL,
);
GO

CREATE TABLE Sala
(
	idSala				INT PRIMARY KEY IDENTITY,
	nome				VARCHAR(200)UNIQUE NOT NULL,
	metragem			VARCHAR(200) NOT NULL,
	andar				TINYINT NOT NULL,
);
GO


CREATE TABLE TipoEquipamento
(
	idTipoEquipamento	INT PRIMARY KEY IDENTITY,
	tipoEquipamento		VARCHAR(200)UNIQUE NOT NULL,
);
GO

CREATE TABLE Ativo
(
	idAtivo				INT PRIMARY KEY IDENTITY,
	ativo				VARCHAR(200)UNIQUE NOT NULL,
);
GO

CREATE TABLE Usuario
(
	idUsuario			INT PRIMARY KEY IDENTITY,
	idTipoUsuario		INT FOREIGN KEY REFERENCES tipoUsuario (idTipoUsuario) ON DELETE CASCADE,
	email				VARCHAR(250)UNIQUE NOT NULL,
	senha				VARCHAR(250) NOT NULL,
	nome				VARCHAR(250) NOT NULL,
);
GO

CREATE TABLE Equipamento
(
	idEquipamento		INT PRIMARY KEY IDENTITY,
	idTipoEquipamento	INT FOREIGN KEY REFERENCES TipoEquipamento (idTipoEquipamento) ON DELETE CASCADE,
	idAtivo				INT FOREIGN KEY REFERENCES Ativo (idAtivo) ON DELETE CASCADE,
	idSala				INT FOREIGN KEY REFERENCES sala (idSala) ON DELETE CASCADE,
	marca				VARCHAR(250) NOT NULL,
	numeroSerie			VARCHAR(250) NOT NULL,
	descricao			VARCHAR(300) NOT NULL,
);
GO
