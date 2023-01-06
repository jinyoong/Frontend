## SQL

데이터베이스 코딩테스트를 대비하며 SQL 문제를 풀며 공부한 내용 정리

### 특정 패턴을 가진 문자열 찾기
문자열의 패턴을 검색하는데 **LIKE**를 사용한다.

기본적인 사용 방법은 아래와 같다.
```sql
SELECT * FROM 테이블 WHERE 컬럼명 LIKE "PATTERN"
```

패턴에는 `%`와 `_`가 사용되는데, `%`는 **모든 문자**를 의미하며 `_`는 **문자 하나**를 의미한다.

사용 예시를 간단히 살펴보자.

1. "김"으로 시작하는 모든 문자 => "김%"

2. 이름에 첫 글자로 "진"이 들어가는 모든 문자 => "_진"

3. "카"가 중간에 들어가는 모든 문자 => "%카%"

컬럼이 NAME, AGE, ADDRESS, PHONE 으로 구성되어 있는 테이블이 있다고 하자.

이때 거주지가 `경기도`에 속하는 사람의 이름, 나이, 주소를 검색하려면 아래와 같이 작성하면 된다.

```sql
SELECT NAME, AGE, ADDRESS FROM TABLE WHERE ADDRESS LIKE "경기도%"
```

### NULL 확인
특정 컬럼이 `NULL`인지 아닌지 확인할 경우

```sql
SELECT * FROM 테이블 WHERE 컬럼 IS NULL

SELECT * FROM 테이블 WHERE 컬럼 IS NOT NULL
```

### 특정 조건일 때 출력값 변환하기
`SELECT`문을 사용했을 때 `NULL`값이나 특정 값을 다른 값으로 표현해야 할 일이 생길 수 있다. 

`NULL`일 때 대신 0을 출력하거나, 영어 표현을 한글로 바꾸는 경우를 생각할 수 있다.

이 경우, `CASE WHEN THEN END`구문을 사용해서 해결한다.

```sql
SELECT 
  WAREHOUSE_ID, 
  WAREHOUSE_NAME, 
  ADDRESS, 
  CASE 
    WHEN FREEZER_YN IS NULL THEN 'N' 
    ELSE FREEZER_YN
  END AS FREEZER_YN
FROM FOOD_WAREHOUSE 
WHERE ADDRESS LIKE "경기도%"
```

위 코드는 NULL 값인 경우 N으로 처리하는 코드이다.

### JOIN
**두 개의 테이블**을 엮어야 원하는 결과를 이끌어 낼 수 있을 때 사용하는 방법

두 테이블의 조인(JOIN)을 위해선 `기본키(Primary key)`와 `외래키(Foreign key)`관계로 맺어져 있는 **일대다 관계**여야 한다.

JOIN에는 크게 4가지 종류가 있다.

1. `INNER JOIN(내부 조인)`은 두 테이블 모두 지정한 열의 데이터가 있어야 한다.

2. `OUTER JOIN(외부 조인)`은 두 테이블을 조인할 때, 1개의 테이블에만 데이터가 있어도 결과가 나온다.

3. `CROSS JOIN(상호 조인)`은 한쪽 테이블의 모든 행과 다른 쪽 테이블의 모든 행을 조인하는 기능이다. 집합 곱 개념으로 보면 된다.

4. `SELF JOIN(자체 조인)`은 자기 자신과 조인하는 것으로 1개의 테이블만 사용한다.

### INNER JOIN

A 
NUMBER NAME AGE
97 진용 20
96 종현 21

B
NUMBER NAME ADDRESS
97 진용 부발
96 종현 시흥
98 진용 부산

NAME으로 INNER JOIN 했을 때

97 진용 20 97 진용 부발
96 종현 21 96 종현 시흥
97 진용 20 98 진용 부산

NUMBER, NAME으로 INNER JOIN 했을 때

97 진용 20 97 진용 부발
96 종현 21 96 종현 시흥

https://school.programmers.co.kr/learn/courses/30/lessons/59043
```sql
SELECT OUTS.ANIMAL_ID, OUTS.NAME FROM ANIMAL_OUTS AS OUTS JOIN ANIMAL_INS AS INS ON INS.ANIMAL_ID = OUTS.ANIMAL_ID WHERE OUTS.DATETIME < INS.DATETIME ORDER BY INS.DATETIME
```

근데 요즘은 아래처럼 한다.

```sql
SELECT
  OUTS.ANIMAL_ID,
  OUTS.NAME
FROM
  ANIMAL_OUT OUTS,
  ANIMAL_INS INS
WHERE INS.ANIMAL_ID = OUTS.ANIMAL_ID
  AND OUTS.DATETIME < INS.DATETIME
ORDER BY
  INS.DATETIME
```

### OUTER JOIN
```sql
SELECT OUTS.ANIMAL_ID, OUTS.NAME FROM ANIMAL_OUTS AS OUTS LEFT JOIN ANIMAL_INS AS INS ON OUTS.ANIMAL_ID = INS.ANIMAL_ID WHERE INS.ANIMAL_ID IS NULL ORDER BY OUTS.ANIMAL_ID

--Oracle
SELECT 
    OUTS.ANIMAL_ID,
    OUTS.NAME
FROM 
    ANIMAL_OUTS OUTS,
    ANIMAL_INS INS
WHERE OUTS.ANIMAL_ID = INS.ANIMAL_ID(+)
    AND INS.ANIMAL_ID IS NULL
ORDER BY OUTS.ANIMAL_ID
```

예를 들어 STUDENT 테이블이랑 APPLY 테이블이 있다고 하면

STUDENT는 전체 학생의 학번, APPLY는 신청한 학생의 학번이 있을 때, INNER JOIN을 쓰면 신청한 학생들만 나오게 되는데

OUTER JOIN을 쓰면 신청한 학생들은 학번이 나오고, 신청하지 않은 학생들은 NULL로 나온다.

### 확인이 필요한 코드
https://school.programmers.co.kr/learn/courses/30/lessons/131535
```sql
SELECT COUNT(*) AS USERS FROM USER_INFO WHERE AGE >= 20 AND AGE <= 29 AND JOINED LIKE "2021%"

--이게 더 나은 코드
SELECT COUNT(*) AS USERS FROM USER_INFO WHERE AGE >= 20 AND AGE <= 29 AND DATE_FORMAT(JOINED, '%Y') = 2021
```

https://school.programmers.co.kr/learn/courses/30/lessons/133025
```sql
--이게 더 나은 코드
SELECT INFO.FLAVOR FROM ICECREAM_INFO AS INFO JOIN FIRST_HALF AS HALF ON INFO.FLAVOR = HALF.FLAVOR WHERE HALF.TOTAL_ORDER > 3000 AND INFO.INGREDIENT_TYPE = 'fruit_based' ORDER BY HALF.TOTAL_ORDER DESC

SELECT FLAVOR FROM FIRST_HALF WHERE FLAVOR IN (SELECT FLAVOR FROM ICECREAM_INFO WHERE INGREDIENT_TYPE LIKE 'fruit%') AND TOTAL_ORDER > 3000 ORDER BY TOTAL_ORDER DESC
```

### 추가사항
절이 끝나기 전에는 `,`가 들어가면 안됨(SELECT, FROM).

`AS`는 생략해도 되지만 그냥 쓰는 걸로 하자.

FROM 절 먼저 읽고, WHERE 절 보고, SELECT 보는 순서로 진행된다.

NVL(컬럼명, 대체값) : 값이 NULL인 경우 대체값을 사용하고, NULL이 아니면 그대로 사용한다.(Oracle 에서)

IN은 비효율적, Sub Query보다는 JOIN을 쓰는게 속도가 더 빠르다.