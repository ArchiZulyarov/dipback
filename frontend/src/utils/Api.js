class Api {
  constructor(BASE_URL, LOCAL_URL) {
    this._baseUrl = BASE_URL;
    this._localUrl = LOCAL_URL;
  }

  //* Проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Что-то пошло не так: Ошибка ${res.status}${res.statusText && `- ${res.statusText}`}`)
    }
  }

  getDishes(limit = 100, offset = 0) {
    return fetch(`/api/dishes?limit=${limit}&offset=${offset}`)
      .then(res => this._requestResult(res))
  }

  getIngredients(limit, offset) {
    return fetch(`/api/ingredients?limit=${limit}&offset=${offset}`)
      .then(res => this._requestResult(res))
  }
}
