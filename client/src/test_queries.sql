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