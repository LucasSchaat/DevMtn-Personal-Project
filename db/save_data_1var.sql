CREATE TABLE IF NOT EXISTS first_category_values (
    id SERIAL PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS outcome_values (
    id INTEGER PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

ALTER TABLE IF EXISTS training_data
DROP COLUMN IF EXISTS second_category,
DROP COLUMN IF EXISTS third_category,
DROP COLUMN IF EXISTS fourth_category,
DROP COLUMN IF EXISTS fifth_category,
DROP COLUMN IF EXISTS sixth_category;

DROP TABLE IF EXISTS second_category_values;
DROP TABLE IF EXISTS third_category_values;
DROP TABLE IF EXISTS fourth_category_values;
DROP TABLE IF EXISTS fifth_category_values;
DROP TABLE IF EXISTS sixth_category_values;

CREATE TABLE IF NOT EXISTS training_data (
    id SERIAL PRIMARY KEY,
    outcome TEXT,
    first_category TEXT,
    reference_id INTEGER
);

INSERT INTO outcome_values (reference_id, property, id)
VALUES ($1, $2, 1)
ON CONFLICT DO NOTHING;

INSERT INTO outcome_values (reference_id, property, id)
VALUES ($1, $3, 0)
ON CONFLICT DO NOTHING;

INSERT INTO first_category_values (reference_id, property)
VALUES ($1, $5)
ON CONFLICT DO NOTHING;

INSERT INTO training_data (reference_id, outcome)
VALUES ($1, $4);

UPDATE training_data
SET first_category = $5
WHERE reference_id = $1;

SELECT *
FROM training_data
ORDER BY id ASC;


-- Incoming data will look like (reference_id, firstOutcome, secondOutcome, outcomeValue, firstCategoryValue)
-- Ex. (1, good, bad, Yes, brown)