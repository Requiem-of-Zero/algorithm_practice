  --  ! SELECT basics
  --  * SELECT population column FROM world table where the name is Germany
SELECT
  population
FROM
  world
WHERE
  name = 'Germany' 
  
  --  * SELECT the name and population column FROM world table WHERE the name is IN: Sweden, Norway, or Denmark
SELECT
  name,
  population
FROM
  world
WHERE
  name IN ('Sweden', 'Norway', 'Denmark');

  --  * SELECT the name and area FROM the world table WHERE the area is BETWEEN 200,000 AND 250,000
SELECT
  name,
  area
FROM
  world
WHERE
  area BETWEEN 200000
  AND 250000 --  ! SELECT names  
  
  --  * SELECT the name FROM the world table WHERE the name starts with Y
SELECT
  name
FROM
  world
WHERE
  name LIKE 'Y%' 
  
  --  * SELECT the name FROM the world table WHERE the name ends with Y
SELECT
  name
FROM
  world
WHERE
  name LIKE '%Y' 
  
  --  * SELECT the name FROM the world table WHERE the name contains a letter x
SELECT
  name
FROM
  world
WHERE
  name LIKE '%x%' 
  
  --  * SELECT the name FROM the world table WHERE the name ends with land
SELECT
  name
FROM
  world
WHERE
  name LIKE '%land' 
  
  --  * SELECT the name FROM the world table WHERE the name starts with C and ends with ia
SELECT
  name
FROM
  world
WHERE
  name LIKE 'C%ia' 
  
  --  * SELECT the name FROM the world table WHERE the name contains oo
SELECT
  name
FROM
  world
WHERE
  name LIKE '%oo%' 
  
  --  * SELECT the name FROM the world table WHERE the name has 3 or more a's in the name
SELECT
  name
FROM
  world
WHERE
  name LIKE '%a%a%a%';

  --  * SELECT the name FROM the world table WHERE the name has a t as the second character
SELECT
  name
FROM
  world
WHERE
  name LIKE '_t%'
ORDER BY
  name 
  
  --  * SELECT the name FROM the world table WHERE the name has two o characters separated by 2 other characters
SELECT
  name
FROM
  world
WHERE
  name LIKE '%o__o%' 
  
  --  * SELECT the name FROM the world table WHERE the name has exactly 4 characters
SELECT
  name
FROM
  world
WHERE
  name LIKE '____' 
  
  --  * SELECT the name FROM the world table WHERE the name is LIKE the capital city name
SELECT
  name
FROM
  world
WHERE
  name LIKE capital 
  
  --  * SELECT the name FROM the world table WHERE the capital is the name + 'City'
SELECT
  name
FROM
  world
WHERE
  capital = concat(name, ' City');

  --  * SELECT the capital and name FROM the world table WHERE the capital includes the name
SELECT
  capital,
  name
FROM
  world
WHERE
  capital LIKE concat('%', name, '%');

  --  * SELECT the name and extension of the name FROM the world table WHERE the capital is a extension of the name
SELECT
  name,
  REPLACE(capital, name, '')
FROM
  world
WHERE
  capital LIKE concat('%', name, '%')
  AND capital > name;

  --  ! SELECT from WORLD
  -- * SELECT the name continent and population columns FROM the world table
SELECT
  name,
  continent,
  population
FROM
  world 
  
  -- * SELECT the name FROM the world table WHERE the population is at least 200 mill
SELECT
  name
FROM
  world
WHERE
  population >= 200000000 
  
  -- * SELECT the name and per capita GDP FROM the world table WHERE the population is at least 200 mill
SELECT
  name,
  gdp / population
FROM
  world
WHERE
  population >= 200000000 
  
  -- * SELECT the name and population in 1000000 (millions) FROM world WHERE continent is 'South America'
SELECT
  name,
  population / 1000000
FROM
  world
WHERE
  continent = 'South America' 
  
  -- * SELECT the name and population FROM the world table WHERE the name is either France Germany or Italy
SELECT
  name,
  population
FROM
  world
WHERE
  name IN ('France', 'Germany', 'Italy');

-- * SELECT the name FROM the world table WHERE the name contains 'United'
SELECT
  name
FROM
  world
WHERE
  name LIKE '%United%';

  -- * SELECT the name population and area FROM the world table WHERE the area is at least 3 million OR population is at least 250 million
SELECT
  name,
  population,
  area
FROM
  world
WHERE
  area >= 3000000
  OR population >= 250000000;

  -- * SELECT the name, population, area FROM the world table WHERE the area is greater than 3 mill or population greate than 250 mill and not both
SELECT
  name,
  population,
  area
FROM
  world
WHERE
  (
    area > 3000000
    OR population > 250000000
  )
  AND NOT (
    area > 3000000
    AND population > 250000000
  );

  -- * SELECT the name, population in millions rounded to 2 decimal places, and gdp in billions rounded to 2 decimal places FROM the world table WHERE continent is 'North America'
SELECT
  name,
  ROUND(population / 1000000, 2),
  ROUND(gdp / 1000000000, 2)
FROM
  world
WHERE
  continent = 'South America' 
  
  -- * SELECT the name and per capita GDP rounded to nearest 1000th (3 zeros -3) FROM the world table WHERE the gdp is greater than one trillion (12 zeroes)
SELECT
  name,
  ROUND(gdp / population, -3)
FROM
  world
WHERE
  gdp > 1000000000000 -- * SELECT the name and capital FROM the world table WHERE name and capital have the same number of characters
SELECT
  name,
  capital
FROM
  world
WHERE
  LEN(name) = LEN(capital);

  -- * SELECT the name and capital FROM the world table WHERE name does not equal capital AND the first char of name is equal to the first char of capital
SELECT
  name,
  capital
FROM
  world
WHERE
  name <> capital
  AND LEFT(name, 1) = LEFT(capital, 1);

  -- * SELECT the name FROM world WHERE the name has every vowel in the name and no spaces
SELECT
  name
FROM
  world
WHERE
  name LIKE '%a%'
  AND name LIKE '%e%'
  AND name LIKE '%i%'
  AND name LIKE '%o%'
  AND name LIKE '%u%'
  AND name NOT LIKE '% %';

  -- ! SELECT from Nobel
  -- * SELECT year, subject, and winner FROM the nobel tabel WHERE year is 1950
SELECT
  yr,
  subject,
  winner
FROM
  nobel
WHERE
  yr = 1950

  -- * SELECT the winner FROM the nobel table WHERE the year is 1962 AND the subject is 'literature'
SELECT
  winner
FROM
  nobel
WHERE
  yr = 1962
  AND subject = 'literature'

  -- * SELECT the year and subject FROM the nobel tabel WHERE the winner was 'Albert Einstein'
SELECT
  yr,
  subject
FROM
  nobel
WHERE
  winner = 'Albert Einstein';

  -- * SELECT the year, subject, and winner FROM the nobel table WHERE the year is between 1980 and 1989 and the subject is 'literature'
SELECT
  yr,
  subject,
  winner
FROM
  nobel
WHERE
  (
    yr BETWEEN 1980
    AND 1989
  )
  AND (subject = 'literature')

  -- * SELECT everything FROM the nobel table WHERE the winner is either 'Theodore Roosevelt', 'Woodrow Wilson', 'Jimmy Carter', 'Barack Obama'
SELECT
  *
FROM
  nobel
WHERE
  winner IN (
    'Theodore Roosevelt',
    'Woodrow Wilson',
    'Jimmy Carter',
    'Barack Obama'
  );

  -- * SELECT the winners FROM the nobel table WHERE the winner starts with the first name of John
SELECT
  winner
FROM
  nobel
WHERE
  winner LIKE 'John%';

  -- * SELECT the year, subject, and winner FROM the nobel table WHERE the subject is physics during year 1980 and the subject of chemistry at 1984
SELECT
  yr,
  subject,
  winner
FROM
  nobel
WHERE
  (
    subject = 'physics'
    AND yr = 1980
  )
  OR (
    subject = 'chemistry'
    AND yr = 1984
  )

  -- * SELECT the year, subject, and winner FROM the nobel table WHERE the year is 1980 and the subjects aren't chemistry or medicine
SELECT
  yr,
  subject,
  winner
FROM
  nobel
WHERE
  yr = 1980
  AND NOT (
    subject = 'chemistry'
    OR subject = 'medicine'
  )

  -- * SELECT the year, subject, and winner FROM the nobel table WHERE with medicine subject before 1910 and literature subject after 2003
SELECT
  yr,
  subject,
  winner
FROM
  nobel
WHERE
  (
    subject = 'medicine'
    AND yr < 1910
  )
  OR (
    subject = 'literature'
    AND yr >= 2004
  )

  -- * SELECT everything FROM the nobel table WHERE the winner is PETER GRÜNBERG
SELECT
  *
FROM
  nobel
WHERE
  winner = 'PETER GRÜNBERG'

  -- * SELECT everything FROM the nobel table WHERE the winner is Eugene O'neil
SELECT
  *
FROM
  nobel
WHERE
  winner = 'Eugene o''neil'

  -- * SELECT the winner, year, and subject FROM the nobel table WHERE the name starts with Sir then ORDER BY the most recent first, then by the winner
SELECT
  winner,
  yr,
  subject
FROM
  nobel
WHERE
  winner LIKE 'Sir%'
ORDER BY
  yr DESC,
  winner

  -- ! SELECT within SELECT
  -- * SELECT the name FROM the world table WHERE the population is greater than the population of the name 'Russia'
SELECT
  name
FROM
  world
WHERE
  population > (
    SELECT
      population
    FROM
      world
    WHERE
      name = 'Russia'
  )

  -- * SELECT the name FROM the world table WHERE the continent is Europe with a gdp/capita greater than the gdp/capita for United Kingdom
SELECT
  name
FROM
  world
WHERE
  continent = 'Europe'
  AND gdp / population > (
    SELECT
      gdp / population
    FROM
      world
    WHERE
      name = 'United Kingdom'
  )

  