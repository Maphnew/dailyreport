const mysql = require('mysql')
const exportExcel = require('./src/sheetjs.js')

const connection = mysql.createConnection({
    host: '192.168.100.225',
    port: 3306,
    user: 'root',
    password: 'its@1234',
    database: 'UYeG_KUMHO'
})

connection.connect()

const query = "SELECT T1.*, \
    T2.`PUMP01 최고`, T2.`PUMP01 최저`, T2.`PUMP01 평균`,\
    T2.`PUMP02 최고`, T2.`PUMP02 최저`, T2.`PUMP02 평균`,\
    T2.`PUMP03 최고`, T2.`PUMP03 최저`, T2.`PUMP03 평균`,\
    T2.`DRYER01 최고`, T2.`DRYER01 최저`, T2.`DRYER01 평균`,\
    T2.`PUMP04 최고`, T2.`PUMP04 최저`, T2.`PUMP04 평균`,\
    T2.`PUMP05 최고`, T2.`PUMP05 최저`, T2.`PUMP05 평균`,\
    T2.`DRYER02 최고`, T2.`DRYER02 최저`, T2.`DRYER02 평균`,\
    T2.`DRYER03 최고`, T2.`DRYER03 최저`, T2.`DRYER03 평균`\
    FROM \
    (SELECT \
    CONCAT(HOUR(DataSavedTime), '-', HOUR(DataSavedTime)+1) AS `시간`,\
    SEC_TO_TIME(COUNT(Item009)) AS `FEED01 동작시간`, \
    IFNULL( ROUND(AVG(Item009), 2), '-' ) AS `FEED01 평균속도`, \
    SEC_TO_TIME(COUNT(Item010)) AS `FEED02 동작시간`, \
    IFNULL( ROUND(AVG(Item010), 2), '-' ) AS `FEED02 평균속도` \
    FROM HisItemFreqSecond\
    WHERE DataSavedTime BETWEEN CONCAT(CONVERT(subdate(current_date, 1), CHAR),' 00:00:00') AND CONCAT(CONVERT(subdate(current_date, 1), CHAR),' 23:59:59')\
    GROUP BY HOUR(DataSavedTime)) AS T1\
    JOIN\
    (\
    SELECT \
    CONCAT(HOUR(DataSavedTime), '-', HOUR(DataSavedTime)+1) AS `시간`,\
    IFNULL(MAX(Item001), '-') AS `PUMP01 최고`,\
    IFNULL(MIN(Item001), '-') AS `PUMP01 최저`,\
    IFNULL(ROUND(AVG(Item001), 2), '-') AS `PUMP01 평균`,\
    IFNULL(MAX(Item002), '-') AS `PUMP02 최고`,\
    IFNULL(MIN(Item002), '-') AS `PUMP02 최저`,\
    IFNULL(ROUND(AVG(Item002), 2), '-') AS `PUMP02 평균`,\
    IFNULL(MAX(Item006), '-') AS `PUMP03 최고`,\
    IFNULL(MIN(Item006), '-') AS `PUMP03 최저`,\
    IFNULL(ROUND(AVG(Item006), 2), '-') AS `PUMP03 평균`,\
    IFNULL(MAX(Item004), '-') AS `DRYER01 최고`,\
    IFNULL(MIN(Item004), '-') AS `DRYER01 최저`,\
    IFNULL(ROUND(AVG(Item004), 2), '-') AS `DRYER01 평균`,\
    IFNULL(MAX(Item005), '-') AS `PUMP04 최고`,\
    IFNULL(MIN(Item005), '-') AS `PUMP04 최저`,\
    IFNULL(ROUND(AVG(Item005), 2), '-') AS `PUMP04 평균`,\
    IFNULL(MAX(Item003), '-') AS `PUMP05 최고`,\
    IFNULL(MIN(Item003), '-') AS `PUMP05 최저`,\
    IFNULL(ROUND(AVG(Item003), 2), '-') AS `PUMP05 평균`,\
    IFNULL(MAX(Item008), '-') AS `DRYER02 최고`,\
    IFNULL(MIN(Item008), '-') AS `DRYER02 최저`,\
    IFNULL(ROUND(AVG(Item008), 2), '-') AS `DRYER02 평균`,\
    IFNULL(MAX(Item007), '-') AS `DRYER03 최고`,\
    IFNULL(MIN(Item007), '-') AS `DRYER03 최저`,\
    IFNULL(ROUND(AVG(Item007), 2), '-') AS `DRYER03 평균`\
    FROM HisItemCurrSecond\
    WHERE DataSavedTime BETWEEN CONCAT(CONVERT(subdate(current_date, 1), CHAR),' 00:00:00') AND CONCAT(CONVERT(subdate(current_date, 1), CHAR),' 23:59:59')\
    GROUP BY HOUR(DataSavedTime)\
    ) AS T2\
    ON T1.`시간`=T2.`시간`; "


connection.query(query, (error, result, fields) => {
    if (error) throw error;

    console.log('HERE: ', result)

    exportExcel(result)
})

connection.end()