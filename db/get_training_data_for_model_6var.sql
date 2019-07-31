SELECT outcome.id as outcome_id, first.id as first_id, second.id as second_id, third.id as third_id, fourth.id as fourth_id, fifth.id as fifth_id, sixth.id as sixth_id
FROM training_data td
JOIN outcome_values outcome ON td.outcome = outcome.property
JOIN first_category_values first ON td.first_category = first.property
JOIN second_category_values second ON td.second_category = second.property
JOIN third_category_values third ON td.third_category = third.property
JOIN fourth_category_values fourth ON td.fourth_category = fourth.property
JOIN fifth_category_values fifth ON td.fifth_category = fifth.property
JOIN sixth_category_values sixth ON td.sixth_category = sixth.property;