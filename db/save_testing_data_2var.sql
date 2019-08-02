ALTER TABLE IF EXISTS testing_data
DROP COLUMN IF EXISTS third_category,
DROP COLUMN IF EXISTS fourth_category,
DROP COLUMN IF EXISTS fifth_category,
DROP COLUMN IF EXISTS sixth_category;

CREATE TABLE IF NOT EXISTS testing_data (
    id SERIAL PRIMARY KEY,
    first_category TEXT
);

ALTER TABLE testing_data
ADD COLUMN IF NOT EXISTS second_category TEXT;

INSERT INTO testing_data (first_category, second_category)
VALUES ($1, $2);

DELETE FROM testing_data
WHERE id > 1;

UPDATE testing_data
SET first_category = $1,
    second_category = $2
WHERE id = 1;

SELECT *
FROM testing_data;