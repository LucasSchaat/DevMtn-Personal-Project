DROP FUNCTION IF EXISTS get_testing_data_for_model();

CREATE OR REPLACE FUNCTION get_testing_data_for_model()
    RETURNS TABLE (first_id INTEGER) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT first.id as first_id FROM %I td JOIN %I first ON td.first_category = first.property', 'testing_data_' || $1, 'first_category_values_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_testing_data_for_model();


-- OLD REFACTORED CODE
-- SELECT first.id as first_id
-- FROM testing_data td
-- JOIN first_category_values first ON td.first_category = first.property;