-- CreateTable
CREATE TABLE `TipoVeiculo` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Descricao` VARCHAR(191) NOT NULL,
    `QtdeLugares` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoa` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `Apelido` VARCHAR(191) NOT NULL,
    `Celular` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `IdTipoVeiculo` INTEGER NOT NULL,
    `IdMotorista` INTEGER NOT NULL,
    `Apelido` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserva` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `IdVeiculo` INTEGER NOT NULL,
    `QtdeLugaresOcupados` INTEGER NOT NULL,
    `DataHoraSaida` DATETIME(3) NOT NULL,
    `DataReserva` DATETIME(3) NOT NULL,
    `DataHoraChegadaPrevista` DATETIME(3) NOT NULL,
    `Tolerancia` DOUBLE NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PessoaReserva` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `IdPessoa` INTEGER NOT NULL,
    `IdReserva` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_IdTipoVeiculo_fkey` FOREIGN KEY (`IdTipoVeiculo`) REFERENCES `TipoVeiculo`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_IdMotorista_fkey` FOREIGN KEY (`IdMotorista`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_IdVeiculo_fkey` FOREIGN KEY (`IdVeiculo`) REFERENCES `Veiculo`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PessoaReserva` ADD CONSTRAINT `PessoaReserva_IdPessoa_fkey` FOREIGN KEY (`IdPessoa`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PessoaReserva` ADD CONSTRAINT `PessoaReserva_IdReserva_fkey` FOREIGN KEY (`IdReserva`) REFERENCES `Reserva`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
