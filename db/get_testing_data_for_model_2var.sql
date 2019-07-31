SELECT outcome.id as outcome_id, first.id as first_id, second.id as second_id
FROM testing_data td
JOIN outcome_values outcome ON td.outcome = outcome.property
JOIN first_category_values first ON td.first_category = first.property
JOIN second_category_values second ON td.second_category = second.property;