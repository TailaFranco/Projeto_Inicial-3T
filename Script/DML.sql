USE GerenciarPatrimonio;
GO

IF EXISTS (SELECT * FROM TipoUsuario)
  BEGIN

    DELETE TipoUsuario
	END
	GO

INSERT INTO TipoUsuario		(tipoUsuario)
VALUES						('adm'),
							('user');
GO

IF EXISTS (SELECT * FROM Sala)
  BEGIN

    DELETE Sala
	END
	GO

INSERT INTO Sala			(nome, metragem, andar)
VALUES						('Laboratório', '10,00m x 6,00m', 3),
							('Sala dos Funcionários', '6,00m x 4,00m', 1);
GO

IF EXISTS (SELECT * FROM TipoEquipamento)
  BEGIN

    DELETE TipoEquipamento
	END
	GO

INSERT INTO TipoEquipamento (tipoEquipamento)
VALUES						('Mobiliário'),
							('Informática'),
							('Eletroeletrônico');
GO

IF EXISTS (SELECT * FROM Ativo)
  BEGIN

    DELETE Ativo
	END
	GO

INSERT INTO Ativo			(ativo)
VALUES						('Ativo'),
							('Inativo');
GO

IF EXISTS (SELECT * FROM Usuario)
  BEGIN

    DELETE Usuario
	END
	GO

INSERT INTO Usuario			(idTipoUsuario, email, senha, nome)
VALUES						(1, 'adm@gmail.com', 'adm123', 'adm'),
							(2, 'beatriz@gmail.com', 'Bea124', 'Beatriz'),
							(2, 'joaoP@gmail.com', 'Jp124', 'joão Pedro');
GO

IF EXISTS (SELECT * FROM Equipamento)
  BEGIN

    DELETE Equipamento
	END
	GO

INSERT INTO Equipamento		(idTipoEquipamento, idAtivo, idSala, marca, numeroSerie, descricao)
VALUES						(2, 1, 1, 'Acer', '12321456', 'Notebook Acer Aspire 3'),
							(2, 1, 1, 'Logitech', '654321123', 'Mouse Logitech M90'),
							(3, 2, 2, 'Samsung', '12345567', 'Smart TV samsung 32 polegadas');
GO