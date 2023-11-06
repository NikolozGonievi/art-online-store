const API_URL = process.env.API_URL;
export async function apiGET(url: string, params?: any) {
  const res = fetch(
    `${API_URL}/api/${url}?` + (params ? `${new URLSearchParams(params)}` : ""),
    {
      method: "GET",
      next: { revalidate: 0 },
    }
  );
  console.log("get", url);

  const response = await responseHandler(res);

  return response;
}

export async function apiPOST(url: string, postDTO: any) {
  const res = await fetch(`${API_URL}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postDTO),
  });

  // console.log("post test", res);

  return res;
}

async function responseHandler(promise: Promise<any>): Promise<any> {
  const resp = await promise;

  if (resp.status === 200 || resp.status === 201) {
    return await successHandler(resp);
  } else {
    return await errorHandler(resp);
  }
}

async function successHandler(resp: Response) {
  return await new Promise((resolve, reject) => {
    // console.log('ress', resp);
    
    // resolve(resp.json());
  });
}

async function errorHandler(resp: Response) {
  return await new Promise((resolve, reject) => {
    reject({ status: resp.status, statusText: resp.statusText });
  });
}
