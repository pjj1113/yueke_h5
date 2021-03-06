import axios from 'axios'
import qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = '/api'
export function fetchPost(url, params, config, fail = false) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(
        (response) => {
          axios.defaults.baseURL = '/api'
          resolve(response.data)
        },
        (err) => {
          if (fail) {
            reject(err.response.data)
          } else {
            Toast(err.message)
            reject(err)
          }
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}
export function fetchGet(url, param, config, fail = false) {
	return new Promise((resolve, reject) => {
		axios
			.get(url, {
				params: param
			})
			.then(
				response => {
					resolve(response.data);
				},
				err => {
					if (!fail) {
						Message({
							message: err || '请求出错，请重试',
							type: 'error',
							duration: 3 * 1000
						});
					}
					reject(err);
				}
			)
			.catch(error => {
				reject(error);
			});
	});
}

export function getStopUser() {
  return fetchGet('/stop/user/select')
}
export function addUser(data) {
  return fetchPost('/users/add', data, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
export function getSmsCode(data) {
  return fetchPost('/wy/sms', data, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
export function updateStopName(data) {
  return fetchPost('/stop/user/update', data, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}