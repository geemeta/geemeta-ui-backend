class AppContext {
  constructor () {
    this.url = {
      root: 'http://localhost:8080',
      api: 'http://localhost:8080/api',
      apiMetaList: 'http://localhost:8080/api/meta/list',
      apiMetaSave: 'http://localhost:8080/api/meta/save'
    }
  }
}

let instance = new AppContext()
export default instance
