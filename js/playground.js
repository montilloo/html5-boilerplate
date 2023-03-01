const promise = new Promise((resolve, reject) => {
  // throw new Error('test');
  resolve(1)
});

/*promise.then(res => {
  throw new Error('hello')
}, err => {
  console.log("这里捕获的", err);
}).catch(err1 => {
  console.log(err1);
});*/

promise.then(res => {
  console.log(res,  '第一个')
  throw new Error('hello')
}, err => {
  console.log(err,  'nikun')
}).catch(err => {
  console.log(err, 'catch 捕获');
})

promise.catch(err => {
  console.log(err,  '嗯哼')
})


