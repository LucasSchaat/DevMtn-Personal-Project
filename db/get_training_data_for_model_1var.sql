SELECT outcome.id as outcome_id, first.id as first_id
FROM training_data td
JOIN outcome_values outcome ON td.outcome = outcome.property
JOIN first_category_values first ON td.first_category = first.property;