CREATE TABLE IF NOT EXISTS first_category_values (
    property TEXT PRIMARY KEY,
    id SERIAL NOT NULL,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS second_category_values (
    property TEXT PRIMARY KEY,
    id SERIAL NOT NULL,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS third_category_values (
    property TEXT PRIMARY KEY,
    id SERIAL NOT NULL,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS fourth_category_values (
    property TEXT PRIMARY KEY,
    id SERIAL NOT NULL,
    reference_id INTEGER
);

ALTER TABLE IF EXISTS training_data
DROP COLUMN IF EXISTS fifth_category,
DROP COLUMN IF EXISTS sixth_category;

DROP TABLE IF EXISTS fifth_category_values;
DROP TABLE IF EXISTS sixth_category_values;

CREATE TABLE IF NOT EXISTS training_data (
    id SERIAL PRIMARY KEY,
    outcome TEXT NOT NULL,
    first_category TEXT REFERENCES first_category_values(property),
    reference_id INTEGER
);

ALTER TABLE training_data
ADD COLUMN IF NOT EXISTS second_category TEXT REFERENCES second_category_values(property),
ADD COLUMN IF NOT EXISTS third_category TEXT REFERENCES third_category_values(property);
ADD COLUMN IF NOT EXISTS fourth_category TEXT REFERENCES fourth_category_values(property);

INSERT INTO first_category_values (reference_id, property)
VALUES ($1, $3)
ON CONFLICT DO NOTHING;

INSERT INTO second_category_values (reference_id, property)
VALUES ($1, $4)
ON CONFLICT DO NOTHING;

INSERT INTO third_category_values (reference_id, property)
VALUES ($1, $5)
ON CONFLICT DO NOTHING;

INSERT INTO fourth_category_values (reference_id, property)
VALUES ($1, $6)
ON CONFLICT DO NOTHING;

INSERT INTO training_data (reference_id, outcome)
VALUES ($1, $2);

UPDATE training_data
SET first_category = $3
WHERE reference_id = $1;

UPDATE training_data
SET second_category = $4
WHERE reference_id = $1;

UPDATE training_data
SET third_category = $5
WHERE reference_id = $1;

UPDATE training_data
SET fourth_category = $6
WHERE reference_id = $1;

SELECT *
FROM training_data;


-- Incoming data will look like (reference_id, outcomeValue, firstCategoryValue, secondCategoryValue, thirdCategoryValue, fourthCategoryValue)
-- Ex. (1, Yes, brown, 26, green, 5.0)