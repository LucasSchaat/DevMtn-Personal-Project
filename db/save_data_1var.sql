DROP TABLE IF EXISTS training_data;
DROP TABLE IF EXISTS first_category_values;
-- DROP TABLE IF EXISTS second_category_values;
-- DROP TABLE IF EXISTS third_category_values;
-- DROP TABLE IF EXISTS fourth_category_values;
-- DROP TABLE IF EXISTS fifth_category_values;
-- DROP TABLE IF EXISTS sixth_category_values;
DROP TABLE IF EXISTS test_data;

CREATE TABLE first_category_values (
    property TEXT PRIMARY KEY,
    id SERIAL NOT NULL
);

CREATE TABLE training_data (
    id SERIAL PRIMARY KEY,
    first_category TEXT REFERENCES first_category_values(property) NOT NULL,
    outcome TEXT NOT NULL
);

INSERT INTO first_category_values (property)
VALUES ($1);

INSERT INTO training_data (first_category, outcome)
VALUES ($1, $2);


-- Incoming data will look like (first_category_value, outcome_value)
-- Ex. (brown, Yes)
