-- Create some seeded data for testing purposes
use serverEmployees_db;


INSERT INTO department
    (name)

-- Seeded Roles
VALUES
    ('Upper Management'),
    ('Programmers'),
    ('QualityAssurance');
-- Roles Information
INSERT INTO role
    (title, salary, department_id)
-- Seeded Positions
VALUES
    ('Tech Lead', 250000, 2),
    ('Software Engineer', 200000, 2),
    ('Senior Developer', 150000, 2),
    ('Junior Developer', 60000, 2),
    ('Project Manager', 100000, 1),
    ('Coding Advocate', 90000, 1),
    ('Product Tester', 60000, 3),
    ('BackEnd Tester', 75000, 3)
-- Seeded Employee Info
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
-- Seeded employee info
VALUES
    ('Drake', 'Bell', 1, NULL),
    ('Josh', 'Nichols', 2, 1),
    ('Ned', 'Baker', 3, 1),
    ('Bobby', 'Testmaster', 4, NULL),
    ('Jacob', 'Blake', 5, 4),
    ('Johnny', 'Blythe', 6, 4),
    ('Julius', 'Caesar', 7, NULL),
    ('Thomas', 'Alson', 8, 7),
    ('Rob', 'Gronk', 9, 7);
