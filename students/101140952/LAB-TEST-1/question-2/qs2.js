  const resolvedPromise = () => {
    const p = new Promise(function (resolve, reject) {
      setTimeout(() => {
        let success={'message': "delayed success"};
        console.log(success);
          resolve( );
      }, 500)
  })
    return p;
  }
  const rejectedPromise = () => {
    const q = new Promise(function (resolve, reject) {
      setTimeout(() => {
          let error= { 'error': "delayed exception!"}
        try{
          reject(error);
        }catch(e){
          console.error(e);
        }
      }, 500)
  })
    return q;
  }
  resolvedPromise()
  rejectedPromise().then(result=>console.log(result)).
  catch((result) => console.log(result));