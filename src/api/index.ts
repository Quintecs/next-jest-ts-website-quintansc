import axios, { AxiosResponse } from 'axios';

const headers = {
   "Accept": 'application/vnd.github.v3+json',
   "User-Agent": process.env.GITHUB_TOKEN? "QuintansC": "",
   "Authorization": process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : "",
}

const userRoute = async (): Promise<AxiosResponse> => {
   try {
      let data = await axios.get('https://api.github.com/users/quintansc', {
         headers
      }).then(res => res)
      return data.data
   } catch {
      return null as any
   }
}

const getRepository = async (project: string): Promise<AxiosResponse> => {
   try {
      let data = await axios.get(`https://api.github.com/repos/quintansc/${project}`, {
         headers
      }).then(res => res)
      return data.data
   } catch {
      return null as any
   }
}


const getRepositories = async (): Promise<AxiosResponse> => {
   try {
      let data = await axios.get(`https://api.github.com/users/quintansc/repos`, {
         headers
      }).then(res => res)
      return data.data
   } catch {
      return null as any
   }
}
export {
   getRepository,
   userRoute,
   getRepositories
};
