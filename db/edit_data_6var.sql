UPDATE training_data
SET outcome = $2,
    first_category = $3,
    second_category = $4,
    third_category = $5,
    fourth_category = $6,
    fifth_category = $7,
    sixth_category = $8
WHERE id = $1;

SELECT *
FROM training_data
ORDER BY id ASC;


-- Incoming data will look like (id, newOutcomeValue, newFirstCategoryValue, newSecondCategoryValue, newThirdCategoryValue, newFourthCategoryValue, newFifthCategoryValue, newsixthCategoryValue)
-- Ex. (1, Yes, brown, blue, 29, Medium, basketball, meh)