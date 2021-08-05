USE GerenciarPatrimonio;
GO

IF NOT EXISTS(SELECT * FROM information_schema.columns WHERE table_name='Sala' AND column_name = 'idUsuario')
  BEGIN

    ALTER TABLE Sala ADD idUsuario INT FOREIGN KEY REFERENCES Usuario (idUsuario) default 2 NOT NULL;
	END
	GO

IF NOT EXISTS(SELECT * FROM information_schema.columns WHERE table_name='Equipamento' AND column_name = 'idUsuario')
  BEGIN

    ALTER TABLE Equipamento ADD idUsuario INT FOREIGN KEY REFERENCES Usuario (idUsuario) default 2 NOT NULL;
	END
	GO


IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='Sala' AND column_name = 'idUsuario')
  BEGIN

    UPDATE Sala
	SET idUsuario = 3
	WHERE idSala = 2
	END
	GO

IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='Sala' AND column_name = 'idUsuario')
  BEGIN

    UPDATE Equipamento
	SET idUsuario = 3
	WHERE idEquipamento = 3
	END
	GO


SELECT * FROM TipoUsuario;
GO
SELECT * FROM Sala;
GO
SELECT * FROM TipoEquipamento;
GO
SELECT * FROM Ativo;
GO
SELECT * FROM Usuario;
GO
SELECT * FROM Equipamento;
GO