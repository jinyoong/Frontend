## SQL

데이터베이스 코딩테스트를 대비하며 SQL 문제를 풀며 공부한 내용 정리

#### 특정 패턴을 가진 문자열 찾기
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

#### NULL 확인
특정 컬럼이 `NULL`인지 아닌지 확인할 경우

```sql
SELECT * FROM 테이블 WHERE 컬럼 IS NULL

SELECT * FROM 테이블 WHERE 컬럼 IS NOT NULL
```

#### 특정 조건일 때 출력값 변환하기
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

#### JOIN
**두 개의 테이블**을 엮어야 원하는 결과를 이끌어 낼 수 있을 때 사용하는 방법

두 테이블의 조인(JOIN)을 위해선 `기본키(Primary key)`와 `외래키(Foreign key)`관계로 맺어져 있는 **일대다 관계**여야 한다.

JOIN에는 크게 4가지 종류가 있다.

1. `INNER JOIN(내부 조인)`은 두 테이블 모두 지정한 열의 데이터가 있어야 한다.

2. `OUTER JOIN(외부 조인)`은 두 테이블을 조인할 때, 1개의 테이블에만 데이터가 있어도 결과가 나온다.

3. `CROSS JOIN(상호 조인)`은 한쪽 테이블의 모든 행과 다른 쪽 테이블의 모든 행을 조인하는 기능이다. 집합 곱 개념으로 보면 된다.

4. `SELF JOIN(자체 조인)`은 자기 자신과 조인하는 것으로 1개의 테이블만 사용한다.

#### INNER JOIN
https://school.programmers.co.kr/learn/courses/30/lessons/59043
```sql
SELECT OUTS.ANIMAL_ID, OUTS.NAME FROM ANIMAL_OUTS AS OUTS JOIN ANIMAL_INS AS INS ON INS.ANIMAL_ID = OUTS.ANIMAL_ID WHERE OUTS.DATETIME < INS.DATETIME ORDER BY INS.DATETIME
```

#### OUTER JOIN
```sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_OUTS WHERE ANIMAL_ID NOT IN (SELECT ANIMAL_ID FROM ANIMAL_INS) ORDER BY ANIMAL_ID

SELECT OUTS.ANIMAL_ID, OUTS.NAME FROM ANIMAL_OUTS AS OUTS LEFT JOIN ANIMAL_INS AS INS ON OUTS.ANIMAL_ID = INS.ANIMAL_ID WHERE INS.ANIMAL_ID IS NULL ORDER BY OUTS.ANIMAL_ID
```

#### 확인이 필요한 코드
https://school.programmers.co.kr/learn/courses/30/lessons/131535
```sql
SELECT COUNT(*) AS USERS FROM USER_INFO WHERE AGE >= 20 AND AGE <= 29 AND JOINED LIKE "2021%"

SELECT COUNT(*) AS USERS FROM USER_INFO WHERE AGE >= 20 AND AGE <= 29 AND DATE_FORMAT(JOINED, '%Y') = 2021
```

https://school.programmers.co.kr/learn/courses/30/lessons/133025
```sql
SELECT INFO.FLAVOR FROM ICECREAM_INFO AS INFO JOIN FIRST_HALF AS HALF ON INFO.FLAVOR = HALF.FLAVOR WHERE HALF.TOTAL_ORDER > 3000 AND INFO.INGREDIENT_TYPE = 'fruit_based' ORDER BY HALF.TOTAL_ORDER DESC

SELECT FLAVOR FROM FIRST_HALF WHERE FLAVOR IN (SELECT FLAVOR FROM ICECREAM_INFO WHERE INGREDIENT_TYPE LIKE 'fruit%') AND TOTAL_ORDER > 3000 ORDER BY TOTAL_ORDER DESC
```