UPDATE training_data
SET outcome = $2,
    first_category = $3,
    second_category = $4,
    third_category = $5,
    fourth_category = $6
WHERE id = $1;

SELECT *
FROM training_data
ORDER BY id ASC;


-- Incoming data will look like (id, newOutcomeValue, newFirstCategoryValue, newSecondCategoryValue, newThirdCategoryValue, newFourthCategoryValue)
-- Ex. (1, Yes, brown, blue, 29, Medium)