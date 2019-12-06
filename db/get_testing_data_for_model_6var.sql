DROP FUNCTION IF EXISTS get_testing_data_for_model();

CREATE OR REPLACE FUNCTION get_testing_data_for_model()
    RETURNS TABLE (first_id INTEGER, second_id INTEGER, third_id INTEGER, fourth_id INTEGER, fifth_id INTEGER, sixth_id INTEGER) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT first.id as first_id, second.id as second_id, third.id as third_id, fourth.id as fourth_id, fifth.id as fifth_id, sixth.id as sixth_id FROM %I td JOIN %I first ON td.first_category = first.property JOIN %I second ON td.second_category = second.property JOIN %I third ON td.third_category = third.property JOIN %I fourth ON td.fourth_category = fourth.property JOIN %I fifth ON td.fifth_category = fifth.property JOIN %I sixth ON td.sixth_category = sixth.property', 'testing_data_' || $1, 'first_category_values_' || $1, 'second_category_values_' || $1, 'third_category_values_' || $1, 'fourth_category_values_' || $1, 'fifth_category_values_' || $1, 'sixth_category_values_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_testing_data_for_model();


-- OLD REFACTORED CODE
-- SELECT first.id as first_id, second.id as second_id, third.id as third_id, fourth.id as fourth_id, fifth.id as fifth_id, sixth.id as sixth_id
-- FROM testing_data td
-- JOIN first_category_values first ON td.first_category = first.property
-- JOIN second_category_values second ON td.second_category = second.property
-- JOIN third_category_values third ON td.third_category = third.property
-- JOIN fourth_category_values fourth ON td.fourth_category = fourth.property
-- JOIN fifth_category_values fifth ON td.fifth_category = fifth.property
-- JOIN sixth_category_values sixth ON td.sixth_category = sixth.property;