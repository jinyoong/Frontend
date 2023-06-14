new Promise((resolve) => {
  console.log('시작');

  setTimeout(() => {
    resolve('프로미스 실행 완료');
  }, 1000)
})