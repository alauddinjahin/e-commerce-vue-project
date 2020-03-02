import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://e-commerce-view-project.test/'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance