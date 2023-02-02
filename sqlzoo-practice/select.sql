-- ! SELECT basics
-- * SELECT population column FROM world table where the name is Germany
SELECT population FROM world
  WHERE name = 'Germany'

-- * SELECT the name and population column FROM world table WHERE the name is IN: Sweden, Norway, or Denmark
SELECT name, population FROM world
  WHERE name IN ('Sweden', 'Norway', 'Denmark');

-- * SELECT the name and area FROM the world table WHERE the area is BETWEEN 200,000 AND 250,000
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000

-- ! SELECT names
-- * SELECT the name FROM the world table WHERE the name starts with Y
SELECT name FROM world
  WHERE name LIKE 'Y%'

-- * SELECT the name FROM the world table WHERE the name ends with Y
SELECT name FROM world
  WHERE name LIKE '%Y'

-- * SELECT the name FROM the world table WHERE the name contains a letter x
SELECT name FROM world
  WHERE name LIKE '%x%'

-- * SELECT the name FROM the world table WHERE the name ends with land
SELECT name FROM world
  WHERE name LIKE '%land'

-- * SELECT the name FROM the world table WHERE the name starts with C and ends with ia
SELECT name FROM world
  WHERE name LIKE 'C%ia'

-- * SELECT the name FROM the world table WHERE the name contains oo
SELECT name FROM world
  WHERE name LIKE '%oo%'

-- * SELECT the name FROM the world table WHERE the name has 3 or more a's in the name
SELECT name FROM world
  WHERE name LIKE '%a%a%a%';

-- * SELECT the name FROM the world table WHERE the name has a t as the second character
SELECT name FROM world
 WHERE name LIKE '_t%'
ORDER BY name

-- * SELECT the name FROM the world table WHERE the name has two o characters separated by 2 other characters
SELECT name FROM world
 WHERE name LIKE '%o__o%'

-- * SELECT the name FROM the world table WHERE the name has exactly 4 characters
SELECT name FROM world
 WHERE name LIKE '____'

-- * SELECT the name FROM the world table WHERE the name is LIKE the capital city name
SELECT name
  FROM world
 WHERE name LIKE capital

-- * SELECT the name FROM the world table WHERE the capital is the name + 'City'
SELECT name
  FROM world
 WHERE capital = concat(name, ' City');

-- * SELECT the capital and name FROM the world table WHERE the capital includes the name
SELECT capital, name
FROM world
WHERE capital LIKE concat('%', name, '%');

-- * SELECT the name and extension of the name FROM the world table WHERE the capital is a extension of the name
SELECT name, REPLACE(capital, name, '') 
FROM world WHERE capital 
LIKE concat('%', name, '%') AND capital > name;