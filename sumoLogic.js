/*

Suppose we have a utility function getAPI() which fetches data.

const getAPI = (path, config) => { ... }
const list1 = await getAPI('/list', { keyword: 'bfe'})
const list2 = await getAPI('/list', { keyword: 'dev'})

It works great. Until the UI becomes so complicated that the same API might be called for multiple times within a relatively short period of time.

You want to avoid the unnecessary API calls, based on following assumption:

GET API call response hardly changes within 1000ms.

So identical GET API calls should return the same response within 1000ms. By identical, it means path and config are deeply equal.

You need to create getAPIWithMerging(getAPI)

const fetchData = getAPIWithMerging(getAPI)
fetchData('/list', { keyword: 'abc'}).then(console.log) 


fetchData('/list', { keyword: 'abc'}).then(console.log)
// 2nd call is identical to 1st call,
// so getAPI is not called,


fetchData('/list', { keyword: 'dev'}).then(console.log)
// 3rd call is not identical, so getAPI is called


// after 1000ms
fetchData('/list', {keyword: 'abc'}).then(console.log)
// 4th call is identical to 1st call,
// but since after 1000ms, getAPI is called.

*/


const getAPIWithMerging = (getAPI) => {
    let map = new Map();

    return (path,config) => {
      const cacheKey = JSON.stringify({path , config});
      
      const cachced = map.get(cacheKey);
      const currentTime = Date.now(); 
      if(cachced && currentTime-cachced.time < 1000){
        return Promise.resolve(cachced.data)
      }

      const promise = getAPI(path, config);
      promise.then(data => {
        map.put(cacheKey, {time: Date.now(), data})
      })
      return promise;
    }
 }

const getAPI = (path , config) => {
  console.log('Api called');
  let pr = new Promise(function(resolve,reject) {
    if(path && config){
      resolve(config)
    }else{
      reject("API CALL FAILED")
    }
  })

  return pr
}


const fetchData = getAPIWithMerging(getAPI)
fetchData('/list', { keyword: 'abc'}).then(console.log);
fetchData('/list', { keyword: 'abc'}).then(console.log); 