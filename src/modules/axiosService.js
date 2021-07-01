import axios from 'axios'

class AxiosService {
  constructor() {
    const instance = axios.create()
    this.handleError = this.handleError.bind(this)
    instance.interceptors.response.use(this.handleSuccess, this.handleError)
    this.instance = instance
    // // using Interceptors
    // instance.interceptors.request.use(async (config) => {
    //   console.log(`await getLocal("token")`, await getLocal("token"));
    //   config.headers = {
    //     authorization: "Bearer " + (await getLocal("token")),
    //   };
    //   return config;
    // });

    this.instance.interceptors.request.use((config) => {
      config.headers = this.token
        ? {
            authorization: `Bearer ${this.token}`,
          }
        : {}

      return config
    })
  }

  setToken(token) {
    this.token = token
  }

  async handleSuccess(response) {
    return response.data
  }

  async handleError(error) {
    console.log(error, error.response, 'check in axiosService')

    if (error.response.status === 401) {
      return new Promise((resolve, reject) => {
        resolve({ errors: [{ error: error.response.data.message }] })
      })
    }

    if (error.response) {
      return new Promise((resolve, reject) => {
        resolve(error.response.data)
      })
    }
    if (error.request) {
      return new Promise.reject(error.request)
    }
  }

  get(url) {
    return this.instance.get(url)
  }

  postFormData(url, body) {
    return this.instance.post(url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // authorization: 'Bearer ' + token, //the token is a variable which holds the token
      },
    })
  }

  putFormData(url, body) {
    return this.instance.put(url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  post(url, body) {
    return this.instance.post(url, body)
  }

  put(url, body) {
    return this.instance.put(url, body)
  }

  delete(url, body) {
    console.log('run here')
    return this.instance.delete(url, {
      data: body,
    })
  }
}

export default new AxiosService()
