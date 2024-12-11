const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
      resolve("Promise is fulfilled!");
    } else {
      reject("Promise failed!");
    }
  });
  
  function handleResolve(value) {
    console.log(value);
  }
  
  function handleReject(reason) {
    console.error(reason);
  }
  
  promise.then(handleResolve, handleReject);




  fetchResource(
    url,
    function (result) {
      // Do something with the result
      fetchResource(
        newUrl,
        function (result) {
          // Do something with the new result
          fetchResource(
            anotherUrl,
            function (result) {
              // Do something with the new result
            },
            failureCallback
          );
        },
        failureCallback
      );
    },
    failureCallback
  );
  