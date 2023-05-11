// Promise
const actionA = () =>
  new Promise((resolve, reject) => {
    let minhSeTra = false;
    if (minhSeTra) {
      resolve("bingoo !!"); // kq dung ==> resolve ==> bản chất là then(): luôn đúng
    } else {
      reject("noob :D"); // kq sai ==> reject ==> bản chất là catch(): lỗi
    }
  });
const actionB = () => {
  actionA()
    .then((res) => {
      return console.log('res func B: ', res);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
// console.log(actionB());
// Promise.all ([ functionA(), functionB() ]) ==> cho functionA() và functionB() chạy song song sau đó trả về 1 array [return A, return B]

// then => catch: then, catch ddi chung với nhau

// Async Await
const actionC = async() => {
    const a = await actionA().catch();
    const b = await actionB(a).catch();
    console.log(b);
}

// bất đồng bộ chỉ xảy ra khi tương tác với database

// ajax => {fetch, axios}: fetch, axios là phương thức của ajax