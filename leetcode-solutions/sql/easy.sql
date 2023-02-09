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

-- * 175.Combine Two Tables
-- https://leetcode.com/problems/combine-two-tables/
SELECT
  Person.firstName,
  Person.lastName,
  Address.city,
  Address.state
FROM
  Person
  LEFT JOIN Address ON Address.personId = Person.personId;

-- * 182.Duplicate Emails
-- https://leetcode.com/problems/duplicate-emails/
select
  Email
from
  (
    select
      Email,
      count(Email) as num
    from
      Person
    group by
      Email
  ) as statistic
where
  num > 1;

-- * 196.Delete Duplicate Emails
-- https://leetcode.com/problems/delete-duplicate-emails/
DELETE p1
FROM
  Person p1,
  Person p2
WHERE
  p1.Email = p2.Email
  AND p1.Id > p2.Id

-- * 197.Rising Temperature
-- https://leetcode.com/problems/rising-temperature/
SELECT
  weather.id AS 'Id'
FROM
  weather
  JOIN weather w ON DATEDIFF(weather.recordDate, w.recordDate) = 1
  AND weather.Temperature > w.Temperature;

-- * 586.Customer Placing the Largest Number of Orders
-- https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/
SELECT
  customer_number
FROM
  Orders
GROUP BY
  customer_number
ORDER BY
  COUNT(customer_number) DESC
LIMIT
  1

-- * 1741.Find Total Time Spent by Each Employee
-- https://leetcode.com/problems/find-total-time-spent-by-each-employee/
SELECT
  event_day day,
  emp_id,
  SUM(out_time) - SUM(in_time) total_time
FROM
  Employees
GROUP BY
  event_day,
  emp_id

-- * 1693. Daily Leads and Partners
-- https://leetcode.com/problems/daily-leads-and-partners/
SELECT
  date_id,
  make_name,
  COUNT(DISTINCT lead_id) unique_leads,
  COUNT(DISTINCT partner_id) unique_partners
FROM
  DailySales
GROUP BY
  date_id,
  make_name

-- * 1795.Rearrange Products Table
-- https://leetcode.com/problems/rearrange-products-table/
SELECT
  product_id,
  'store1' as store,
  store1 as price
FROM
  Products
WHERE
  store1 IS NOT NULL
union
select
  product_id,
  'store2' as store,
  store2 as price
from
  Products
where
  store2 is not null
union
select
  product_id,
  'store3' as store,
  store3 as price
from
  products
where
  store3 is not null

-- * 1587.Bank Account Summary II
-- https://leetcode.com/problems/bank-account-summary-ii/
select
  users.name name,
  SUM(transactions.amount) balance
from
  transactions
  join users on transactions.account = users.account
group by
  transactions.account
having
  SUM(transactions.amount) > 10000

-- * 1581.Customer Who Visited but Did Not Make Any Transactions
-- https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/
select
  customer_id,
  count(visit_id) as count_no_trans
from
  Visits
where
  visit_id not in (
    select
      visit_id
    from
      Transactions
  )
group by
  customer_id

-- * 627.Swap Salary
-- https://leetcode.com/problems/swap-salary/
UPDATE
  salary
SET
  sex = IF(sex = 'm', 'f', 'm');

-- * 1179.Reformat Department Table
-- https://leetcode.com/problems/reformat-department-table/
SELECT
  id,
  sum(if(month = 'Jan', revenue, null)) AS Jan_Revenue,
  sum(if(month = 'Feb', revenue, null)) AS Feb_Revenue,
  sum(if(month = 'Mar', revenue, null)) AS Mar_Revenue,
  sum(if(month = 'Apr', revenue, null)) AS Apr_Revenue,
  sum(if(month = 'May', revenue, null)) AS May_Revenue,
  sum(if(month = 'Jun', revenue, null)) AS Jun_Revenue,
  sum(if(month = 'Jul', revenue, null)) AS Jul_Revenue,
  sum(if(month = 'Aug', revenue, null)) AS Aug_Revenue,
  sum(if(month = 'Sep', revenue, null)) AS Sep_Revenue,
  sum(if(month = 'Oct', revenue, null)) AS Oct_Revenue,
  sum(if(month = 'Nov', revenue, null)) AS Nov_Revenue,
  sum(if(month = 'Dec', revenue, null)) AS Dec_Revenue
FROM
  Department
GROUP BY
  id;