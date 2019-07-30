UPDATE training_data
SET outcome = $2,
    first_category = $3
WHERE id = $1;

SELECT *
FROM training_data
ORDER BY id ASC;


-- Incoming data will look like (id, newOutcomeValue, newFirstCategoryValue)
-- Ex. (1, Yes, brown)