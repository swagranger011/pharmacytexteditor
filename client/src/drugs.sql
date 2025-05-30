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

-- Interaction Evidence Table (Optional)
CREATE TABLE InteractionEvidence (
    EvidenceID INT IDENTITY(1,1) PRIMARY KEY,
    InteractionID INT NOT NULL,
    Source NVARCHAR(100),
    SourceType NVARCHAR(50) CHECK(SourceType IN ('Clinical Study', 'Case Report', 'Theoretical')),
    ConfidenceRating INT CHECK(ConfidenceRating BETWEEN 1 AND 5),
    
    CONSTRAINT FK_Interaction FOREIGN KEY (InteractionID) REFERENCES DrugInteractions(InteractionID)
);

-- Insert Drugs
INSERT INTO Drugs (Name, GenericName, DrugClass) VALUES
('Warfarin', 'Warfarin Sodium', 'Anticoagulant'),
('Aspirin', 'Acetylsalicylic Acid', 'NSAID'),
('Ciprofloxacin', 'Ciprofloxacin', 'Antibiotic'),
('Atorvastatin', 'Atorvastatin', 'Statin'),
('Rosuvastatin', 'Rosuvastatin', 'Statin'),
('Citalopram', 'Citalopram', 'Antidepressant'),
('Metformin', 'Metformin', 'Antidiabetic'),
('Lisinopril', 'Lisinopril', 'ACE Inhibitor'),
('Omeprazole', 'Omeprazole', 'Proton Pump Inhibitor'),
('Levothyroxine', 'Levothyroxine Sodium', 'Thyroid Hormone'),
('Metoprolol', 'Metoprolol Tartrate', 'Beta Blocker'),
('Amlodipine', 'Amlodipine Besylate', 'Calcium Channel Blocker'),
('Simvastatin', 'Simvastatin', 'Statin'),
('Clopidogrel', 'Clopidogrel Bisulfate', 'Antiplatelet'),
('Gabapentin', 'Gabapentin', 'Anticonvulsant'),
('Hydrochlorothiazide', 'Hydrochlorothiazide', 'Diuretic'),
('Furosemide', 'Furosemide', 'Loop Diuretic'),
('Albuterol', 'Albuterol Sulfate', 'Bronchodilator'),
('Prednisone', 'Prednisone', 'Corticosteroid'),
('Zoloft', 'Sertraline Hydrochloride', 'Antidepressant'),
('Fluoxetine', 'Fluoxetine Hydrochloride', 'Antidepressant'),
('Duloxetine', 'Duloxetine Hydrochloride', 'Antidepressant'),
('Ranitidine', 'Ranitidine Hydrochloride', 'H2 Antagonist'),
('Montelukast', 'Montelukast Sodium', 'Leukotriene Receptor Antagonist'),
('Simvastatin', 'Simvastatin', 'Statin');


-- Insert Interactions
INSERT INTO DrugInteractions (Drug1ID, Drug2ID, Severity, Description, Mechanism, Management) VALUES
((SELECT DrugID FROM Drugs WHERE Name = 'Warfarin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Aspirin'),
 'High',
 'Increased bleeding risk',
 'Platelet inhibition + anticoagulation',
 'Avoid combination or monitor bleeding time'),
 
((SELECT DrugID FROM Drugs WHERE Name = 'Simvastatin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Ciprofloxacin'),
 'Moderate',
 'Increased statin levels',
 'CYP3A4 inhibition',
 'Use lower statin dose or alternative antibiotic');

 -- Find interactions for a specific drug
DECLARE @DrugName NVARCHAR(100) = 'Warfarin';

SELECT 
    d1.Name AS Drug1,
    d2.Name AS Drug2,
    di.Severity,
    di.Description
FROM DrugInteractions di
JOIN Drugs d1 ON di.Drug1ID = d1.DrugID
JOIN Drugs d2 ON di.Drug2ID = d2.DrugID
WHERE d1.Name = @DrugName OR d2.Name = @DrugName;

-- Check interaction between two specific drugs
DECLARE @DrugA NVARCHAR(100) = 'Simvastatin';
DECLARE @DrugB NVARCHAR(100) = 'Ciprofloxacin';

SELECT 
    di.Severity,
    di.Description,
    di.Management
FROM DrugInteractions di
JOIN Drugs da ON di.Drug1ID = da.DrugID
JOIN Drugs db ON di.Drug2ID = db.DrugID
WHERE (da.Name = @DrugA AND db.Name = @DrugB)
   OR (da.Name = @DrugB AND db.Name = @DrugA);