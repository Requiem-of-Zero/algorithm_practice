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

-- * 1484.Group Sold Products By The Date
-- https://leetcode.com/problems/group-sold-products-by-the-date/
SELECT
  sell_date,
  COUNT(DISTINCT product) AS num_sold,
  GROUP_CONCAT(
    DISTINCT product
    ORDER BY
      product ASC
  ) AS products
FROM
  Activities
GROUP BY
  sell_date

-- * 1890.The Latest Login in 2020
-- https://leetcode.com/problems/the-latest-login-in-2020/
select
  user_id,
  max(time_stamp) last_stamp
from
  logins
where
  date_format(time_stamp, '%Y') = 2020
group by
  user_id

-- * 1965.Employees With Missing Information
-- https://leetcode.com/problems/employees-with-missing-information/
select
  employee_id
from
  (
    SELECT
      e1.employee_id
    FROM
      employees e1
      LEFT JOIN salaries s1 ON e1.employee_id = s1.employee_id
    where
      s1.employee_id is null
    UNION
    SELECT
      s2.employee_id
    FROM
      employees e2
      RIGHT JOIN salaries s2 ON e2.employee_id = s2.employee_id
    where
      e2.employee_id is null
  ) as full_joined
order by
  employee_id asc

-- * 511.Game Play Analysis I
-- https://leetcode.com/problems/game-play-analysis-i/
select
  player_id,
  min(event_date) first_login
from
  activity
group by
  player_id

-- * 1148.Article Views I
-- https://leetcode.com/problems/article-views-i/
select
  DISTINCT author_id id
from
  views
where
  author_id = viewer_id
order by
  id asc

-- * 1729.Find Followers Count
-- https://leetcode.com/problems/find-followers-count/
select
  user_id,
  count(follower_id) followers_count
from
  followers
group by
  user_id
order by
  user_id asc

-- * 1050. Actors and Directors Who Cooperated At Least Three Times
-- https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/
select
  actor_id,
  director_id
from
  actordirector
group by
  actor_id,
  director_id
having
  count(timestamp) >= 3

-- * 181.Employees Earning More Than Their Managers
-- https://leetcode.com/problems/employees-earning-more-than-their-managers/
SELECT
  a.name Employee
FROM
  Employee a
  JOIN Employee b ON a.managerId = b.id
where
  a.salary > b.salary

-- * 596.Classes More Than 5 Students
-- https://leetcode.com/problems/classes-more-than-5-students/
select
  class
from
  courses
group by
  class
having
  count(class) >= 5

-- * 607.Sales Person
-- https://leetcode.com/problems/sales-person/
select
  s.name
from
  salesperson s
where
  s.name not in (
    select
      salesperson.name
    from
      salesperson
      join orders on orders.sales_id = salesperson.sales_id
      join company on company.com_id = orders.com_id
    where
      company.name = 'RED'
  )

-- * 620.Not Boring Movies
-- https://leetcode.com/problems/not-boring-movies/
select
  *
from
  cinema
where
  mod(id, 2) = 1
  and description <> 'boring'
order by
  rating desc

-- * 1084.Sales Analysis III
-- https://leetcode.com/problems/sales-analysis-iii/
select
  product.product_id,
  product.product_name
from
  product
  join sales on sales.product_id = product.product_id
group by
  sales.product_id
having
  min(sales.sale_date) >= cast('2019-01-01' as date)
  and max(sales.sale_date) <= cast('2019-03-31' as date)

-- * 1667.Fix Names in a Table
-- https://leetcode.com/problems/fix-names-in-a-table/
select
  user_id,
  concat(
    UPPER(LEFT(name, 1)),
    LOWER(SUBSTRING(name, 2, length(name)))
  ) name
from
  users
order by
  user_id

-- * 1407.Top Travellers
-- https://leetcode.com/problems/top-travellers/
select
  users.name name,
  coalesce(sum(rides.distance), 0) travelled_distance
from
  users
  left join rides on users.id = rides.user_id
group by
  rides.user_id
order by
  travelled_distance desc,
  name asc