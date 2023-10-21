const N = Number(window.prompt("自然数を入力してください"));
//一つ目の方法
let result1 = 0
for (let i = 1; i < N+1 ; i += 1){
  result1 += i
}
const result2 = N*(N+1)/2
if (result1 == result2) {
  document.write(result1)
}


