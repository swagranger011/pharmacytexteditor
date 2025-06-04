-- Drugs Table
CREATE TABLE Drugs (
    DrugID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    GenericName NVARCHAR(100),
    DrugClass NVARCHAR(50),
    UNIQUE (Name)
);

-- Interactions Table
CREATE TABLE DrugInteractions (
    InteractionID INT IDENTITY(1,1) PRIMARY KEY,
    Drug1ID INT NOT NULL,
    Drug2ID INT NOT NULL,
    Severity NVARCHAR(20) CHECK(Severity IN ('High', 'Moderate', 'Low')),
    Description NVARCHAR(1000) NOT NULL,
    Mechanism NVARCHAR(500),
    Management NVARCHAR(500),
    
    CONSTRAINT FK_Drug1 FOREIGN KEY (Drug1ID) REFERENCES Drugs(DrugID),
    CONSTRAINT FK_Drug2 FOREIGN KEY (Drug2ID) REFERENCES Drugs(DrugID),
    CONSTRAINT CHK_DrugOrder CHECK (Drug1ID < Drug2ID) -- Prevents duplicate pairs
);