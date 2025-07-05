-- Insert Interactions
INSERT INTO DrugInteractions (Drug1ID, Drug2ID, Severity, Description, Mechanism, Management) VALUES
((SELECT DrugID FROM Drugs WHERE Name = 'Warfarin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Aspirin'),
 'High',
 'Increased bleeding risk',
 'Platelet inhibition + anticoagulation',
 'Avoid combination or monitor bleeding time'),
 
((SELECT DrugID FROM Drugs WHERE Name = 'Simvastatin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Cipro'),
 'Moderate',
 'Increased statin levels',
 'CYP3A4 inhibition',
 'Use lower statin dose or alternative antibiotic');

 (SELECT DrugID FROM Drugs WHERE Name = 'Metformin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Cipro'),
 'Moderate',
 'Increased risk of lactic acidosis',
 'Cipro may impair renal function',
 'Monitor renal function and consider alternative antibiotic');

((SELECT DrugID FROM Drugs WHERE Name = 'Warfarin'),
(SELECT DrugID FROM Drugs WHERE Name = 'Cipro'),
 'Major',
 'Increased bleeding risk',
 'Cipro may displace warfarin from protein binding sites',
 'Monitor INR closely and adjust warfarin dose as needed'),

((SELECT DrugID FROM Drugs WHERE Name = 'Warfarin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Metformin'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required'),

((SELECT DrugID FROM Drugs WHERE Name = 'Aspirin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Metformin'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required');

((SELECT DrugID FROM Drugs WHERE Name = 'Aspirin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Cipro'),
 'Moderate',
 'Increased risk of gastrointestinal bleeding',
 'Both drugs can cause GI irritation',
 'Monitor for signs of GI bleeding and consider alternatives if necessary'),

((SELECT DrugID FROM Drugs WHERE Name = 'Aspirin'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Simvastatin'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required'),

((SELECT DrugID FROM Drugs WHERE Name = 'Prozac'),
(SELECT DrugID FROM Drugs WHERE Name = 'Abilify'),
 'Moderate',
 'Increased risk of serotonin syndrome',
 'Both drugs increase serotonin levels',
 'Monitor for symptoms of serotonin syndrome and consider dose adjustments'),

((SELECT DrugID FROM Drugs WHERE Name = 'Prozac'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Cipro'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required'),

((SELECT DrugID FROM Drugs WHERE Name = 'Prozac'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Metformin'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required'),

((SELECT DrugID FROM Drugs WHERE Name = 'Prozac'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Simvastatin'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required'),

((SELECT DrugID FROM Drugs WHERE Name = 'Zoloft'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Abilify'),
 'Moderate',
 'Increased risk of serotonin syndrome',
 'Both drugs increase serotonin levels',
 'Monitor for symptoms of serotonin syndrome and consider dose adjustments'),

((SELECT DrugID FROM Drugs WHERE Name = 'Zoloft'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Cipro'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required'),

((SELECT DrugID FROM Drugs WHERE Name = 'Zoloft'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Metformin'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required'),

((SELECT DrugID FROM Drugs WHERE Name = 'Zoloft'),
 (SELECT DrugID FROM Drugs WHERE Name = 'Simvastatin'),
 'Low',
 'No significant interaction',
 NULL,
 'No special management required');
 