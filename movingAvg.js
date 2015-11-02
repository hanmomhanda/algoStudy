/*
길이가 N이고, [-100,000 ~ 100,000]의 수를 원소로하는 배열 A가 주어졌을 때,
M(M <= N)개의 요소에 대한 이동평균값을 배열에 담아 반환하는 함수를 작성하라.
*/
function movingAvg(A, M) {
    var result = [], movingSum = 0,
        i, tmp,
        N = A.length;

    for (i = 0 ; i < M ; i++) {
        movingSum += A[i];
    }
    result.push(movingSum / M);
    for (i = 1 ; i < N - M + 1 ; i++) {
        movingSum -= A[i - 1];
        movingSum += A[i - 1 + M];
        result.push(movingSum / M);
    }
    console.log(result);
    return result;
}

movingAvg([0, 100000, 200000, 300000, 400000,
    500000, 600000, 700000, 800000, 900000,
    1000000, 1100000, 1200000, 1300000, 1400000,
    1500000, 1600000, 1700000, 1800000, 1900000,
    2000000, 2100000, 2200000, 2300000, 2400000], 25);