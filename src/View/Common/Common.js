import axios from "axios";

/* window 전역 변수에 sStorage 값을 설정 */
window.sStorage =
  window.sessionStorage ||
  (() => {
    // window.sStorage = (function() {
    let winObj = opener || window; //opener가 있으면 팝업창으로 열렸으므로 부모 창을 사용
    let data = JSON.parse(winObj.top.name || "{}");
    let fn = {
      length: Object.keys(data).length /* 요거 ie8 에서 안된다고 함 */,
      setItem: function (key, value) {
        data[key] = value + "";
        winObj.top.name = JSON.stringify(data);
        fn.length++;
      },
      getItem: function (key) {
        return data[key] || null;
      },
      key: function (idx) {
        return Object.keys(data)[idx] || null; //Object.keys() 는 IE9 이상을 지원하므로 IE8 이하 브라우저 환경에선 수정되어야함
      },
      removeItem: function (key) {
        delete data[key];
        winObj.top.name = JSON.stringify(data);
        fn.length--;
      },
      clear: function () {
        winObj.top.name = "{}";
        fn.length = 0;
      },
    };
    return fn;
  })();

/* 예외처리 */
export class UnexpectedApiResultError {
  constructor(resultCode) {
    this.resultCode = resultCode;
  }
}

/* async 처리를 위해 추가 */
export const asyncAPI = async (request, addParams) => {
  const session_id = sStorage.getItem("session_id");
  let params = {
    // default params
  };

  if (addParams) {
    params = { ...params, ...addParams };
  }
  const { data } = await axios({
    method: "POST",
    url: "https://api.koreasmartvoting.com/" + request,
    data: params /* request body로 전달 할때는 data 를 사용해야함 */,
    //params: {},
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `${session_id}`,
    },
  });

  if (!data) throw new UnexpectedApiResultError(null);
  if (data.resultCode != 1) throw new UnexpectedApiResultError(data.resultCode);

  return data.resultData;
};

export const APIRequest = (request, addParams) => {
  return new Promise((resolve, reject) => {
    const session_id = sStorage.getItem("session_id");

    ////console.log(params);
    axios({
      method: "post",
      url: "https://api.koreasmartvoting.com/" + request,
      //url: "http://localhost:8081/" + request,
      // params: params,
      data: addParams,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${session_id}`,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
