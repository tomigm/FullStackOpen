import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';
import { Ipersons } from '../../types/types';

const getAll = (): Promise<Ipersons[]> => {
  const request = axios.get(baseUrl);

  return request
  .then(response => {return response.data})
  .catch(error => {
    console.error("Error getting data ", error)
  }
  )
}

const create = (newObject: Ipersons): Promise<Ipersons[]> => {
  const request = axios.post(baseUrl, newObject);
  return request
  .then(response => response.data)
  .catch(error => {
    console.error("Error posting data ", error)
  })
}

const update = (id: string, newObject: Ipersons): Promise<Ipersons> => {
  const request =  axios.put(`${baseUrl}/${id}`, newObject)
  return request
  .then(response => response.data)
  .catch(error => {
    console.error("Error updating data ", error)
  })
}
const deleteSingle = (id: string): Promise<Ipersons[]>  => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
  .then(response => response.data)
  .catch(error => {
    console.error("Error deleting data ", error)
  })
}
export default { 
  getAll, 
  create, 
  update,
  deleteSingle
}