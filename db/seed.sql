INSERT INTO employees (first_name, last_name, role, manager_employee_id)
VALUES ('The', 'Boss', 'executive', null),
    ('First', 'Manager', 'manager', 1),
    ('Sales', 'Rep1', 'rep', 2),
    ('Sales', 'Rep2', 'rep', 2),
    ('Sales', 'Rep3', 'rep', 2),
    ('Sales', 'Rep4', 'rep', 2),
    ('Sales', 'Rep5', 'rep', 2),
    ('Sales', 'Rep6', 'rep', 2),
    ('Sales', 'Rep7', 'rep', 2),
    ('Sales', 'Rep8', 'rep', 2),
    ('Sales', 'Rep9', 'rep', 2);

INSERT INTO leads (rep_id, date_created, company_name, stage, converted, closed_date)
VALUES (3, '2019-01-01', 'Microsoft', 'closed', true, '2019-03-01'),
    (3, '2019-01-01', 'Oracle', 'closed', true, '2019-04-01'),
    (3, '2019-02-01', 'Adobe', 'closed', false, '2019-05-01'),
    (3, '2019-02-01', 'Lendio', 'closed', false, '2019-06-01'),
    (4, '2019-01-01', 'Canopy', 'closed', true, '2019-03-01'),
    (4, '2019-01-01', 'Instructure', 'closed', true, '2019-03-01'),
    (4, '2019-05-01', 'Cabelas', 'closed', false, '2019-07-01'),
    (4, '2019-05-01', 'Nike', 'closed', true, '2019-07-01');
