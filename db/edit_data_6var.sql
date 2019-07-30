UPDATE first_category_values
SET property = $4
WHERE reference_id = $2;

UPDATE second_category_values
SET property = $5
WHERE reference_id = $2;

UPDATE third_category_values
SET property = $6
WHERE reference_id = $2;

UPDATE fourth_category_values
SET property = $7
WHERE reference_id = $2;

UPDATE fifth_category_values
SET property = $8
WHERE reference_id = $2;

UPDATE sixth_category_values
SET property = $9
WHERE reference_id = $2;

UPDATE training_data
SET outcome = $3,
    first_category = $4,
    second_category = $5,
    third_category = $6,
    fourth_category = $7,
    fifth_category = $8,
    sixth_category = $9
WHERE id = $1;

SELECT *
FROM training_data;


-- Incoming data will look like (id, reference_id, newOutcomeValue, newFirstCategoryValue, newSecondCategoryValue, newThirdCategoryValue, newFourthCategoryValue, newFifthCategoryValue, newsixthCategoryValue)
-- Ex. (1, 1, Yes, brown, blue, 29, Medium, basketball, meh)