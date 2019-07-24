DROP TABLE IF EXISTS training_data;
DROP TABLE IF EXISTS first_category_values;
-- DROP TABLE IF EXISTS second_category_values;
-- DROP TABLE IF EXISTS third_category_values;
-- DROP TABLE IF EXISTS fourth_category_values;
-- DROP TABLE IF EXISTS fifth_category_values;
-- DROP TABLE IF EXISTS sixth_category_values;
DROP TABLE IF EXISTS test_data;

CREATE TABLE first_category_values (
    id SERIAL PRIMARY KEY
    value $2 NOT NULL
);

CREATE TABLE training_data (
    id SERIAL PRIMARY KEY
    $1 $2 REFERENCES first_category_values(value) NOT NULL
    outcome $4 NOT NULL
);

INSERT INTO first_category_values (value)
VALUES ($3);

INSERT INTO training_data ($1, outcome)
VALUES ($3, $5);


-- Incoming data will look like (first_category_name, first_category_type, first_category_value, outcome_type, outcome_value)
-- Ex. (hair, text, brown, text, Yes)
