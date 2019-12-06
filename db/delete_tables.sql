DO
$$
BEGIN
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'training_data_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'outcome_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'first_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'second_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'third_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'fourth_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'fifth_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'sixth_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'testing_data_' || $1);
END;
$$ LANGUAGE plpgsql;

SELECT *
FROM users;


-- OLD REFACTORED CODE
-- DROP TABLE IF EXISTS fourth_category_values;
-- DROP TABLE IF EXISTS fifth_category_values;
-- DROP TABLE IF EXISTS sixth_category_values;

-- DROP TABLE IF EXISTS training_data;
-- DROP TABLE IF EXISTS outcome_values;
-- DROP TABLE IF EXISTS first_category_values;
-- DROP TABLE IF EXISTS second_category_values;
-- DROP TABLE IF EXISTS third_category_values;
-- DROP TABLE IF EXISTS fourth_category_values;
-- DROP TABLE IF EXISTS fifth_category_values;
-- DROP TABLE IF EXISTS sixth_category_values;
-- DROP TABLE IF EXISTS testing_data;

-- SELECT *
-- FROM users;