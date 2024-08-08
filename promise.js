const promise = new Promise((resolve, reject) => {
  // time consuming code

  // when it is done and it is successful
  resolve();

  // when error happens

  reject();
});

function func1() {
  console.log("func1");
}

function func2() {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 10000000000) {
      i++;
    }

    resolve();
  });
}

function func3() {
  console.log("func3");
}

func1();

// func2().then(() => {
//   console.log("func2");
// });

const func2Holder = async () => {
  await func2();

  console.log("func2");
};
func2Holder();

func3();
