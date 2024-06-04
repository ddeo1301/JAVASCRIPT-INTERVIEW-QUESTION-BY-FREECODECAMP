1) SELECT :- store data from DB
        - SELECT CustomerName, City FROM Customers;
2) SELECT DISTINCT :- return distinct value 
        - SELECT DISTINCT Country FROM Customers;
3) WHERE :- =  >  <    >=   <=   <>(not equal)
        - SELECT * FROM Customers WHERE Country='Mexico';
        - WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.







Q9) JOINS 
  SELECT COLUMN FROM TABLE A as A ......  JOIN TABLE B as B on......................................
     1) LEFT JOIN
            - on A.key = B.key where B.key is null

     2) RIGHT JOIN
            - on A.key = B.key where A.key is null

    3) INNER JOIN
            - on A.key = B.key 