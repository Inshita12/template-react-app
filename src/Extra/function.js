//this file contains all the functions that are required in multiple phases
//params are the parameters in the dynamic URl
export function getFormBody(params) {
  let formBody = []; //create array
  for (let property in params) {
    //iterate
    let encodedKey = encodeURIComponent(property); //'user name=>user&20name
    //>encoded: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
    // > given:"https://mozilla.org/?x=шеллы"
    let encodedValue=encodeURIComponent(params[property])//inshita 123=>inshita&23465
    formBody.push(encodedKey+'='+encodedValue);//push both in formbody
}

return formBody.join('&');//join together with & like 'username=inshita&password=2345'
}
