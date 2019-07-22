CREATE TABLE employees (
    id SERIAL PRIMARY KEY, 
    first_name TEXT,
    last_name TEXT,
    role TEXT,
    manager_employee_id INTEGER
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    employee_id INTEGER REFERENCES employees(id)
);

CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    rep_id INTEGER REFERENCES employees(id),
    date_created DATE,
    company_name TEXT,
    stage TEXT,
    converted BOOLEAN,
    closed_date DATE
);

