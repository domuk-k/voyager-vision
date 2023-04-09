import axios from 'axios';

function fetcher<T>(url: string): Promise<T> {
  return axios<T>(url).then((res) => res.data);
}

export default fetcher;
