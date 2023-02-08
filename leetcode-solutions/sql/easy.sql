-- * 595.Big Countries
-- https://leetcode.com/problems/big-countries/
SELECT
  name,
  population,
  area
FROM
  world
WHERE
  area >= 3000000
  OR population >= 25000000;

-- * 1757. Recyclable and Low Fat Products
-- https://leetcode.com/problems/recyclable-and-low-fat-products/
SELECT
  product_id
FROM
  products
WHERE
  low_fats = 'Y'
  AND recyclable = 'Y';

-- * 584.Find Customer Referee
-- https://leetcode.com/problems/find-customer-referee/
SELECT
  name
FROM
  Customer
WHERE
  referee_id <> 2
  OR referee_id IS NULL;

-- * 183.Customers Who Never Order
-- https://leetcode.com/problems/customers-who-never-order/
SELECT
  name as Customers
FROM
  Customers
WHERE
  id NOT IN (
    SELECT
      customerId
    FROM
      Orders
  )

