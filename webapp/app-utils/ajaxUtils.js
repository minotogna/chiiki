import axios from 'axios'
import * as R from 'ramda'

const applyFunction = async (fn, args) => {
  try {
    const resp = await R.apply(fn, args)
    return resp.data
  } catch (err) {
    alert('An error occurred ' + err)
  }
}

export const get = async (...args) => await applyFunction(axios.get, args)

export const post = async (...args) => await applyFunction(axios.post, args)

export const delete_ = async (...args) => await applyFunction(axios.delete, args)

export const put = async (...args) => await applyFunction(axios.put, args)