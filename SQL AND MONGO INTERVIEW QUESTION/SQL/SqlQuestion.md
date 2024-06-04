FROM    JOIN    WHERE    GROUP BY    HAVING    SELECT    DISTINCT    ORDER BY     LIMIT

Q1) LAST 3 CHARACTER
      - SELECT name from students FROM students WHERE marks > 75 ORDER BY substr(name, -3)

Q2) Nth highest salary
      - SELECT * from employees GROUP BY salary ORDER BY salary DESC LIMIT N-1, 1
      - SELECT * from employees ORDER BY salary DESC LIMIT 1 OFFSET N-1
      - SELECT SALARY FROM EMPLOYEE E1 WHERE N-1 = (
                       SELECT COUNT(DISTINCT (E2 SALARY)) FROM EMPLOYEE E2
                       WHERE E2.SALARY > E1.SALARY
                 )

Q3) SUM(SALARY) OVER (ORDER BY emp id)
Q4) MALE RATIO :- 
        -  COUNT(*) FILTER(WHERE gender = "M" * 100.0 / COUNT(*));

Q5) Total amount of amount an employee earns over a period of time
        - SELECT months * salary as cash, count(*) FROM employee GROUP BY cash ORDER BY cash DESC

