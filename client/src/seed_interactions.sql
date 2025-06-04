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