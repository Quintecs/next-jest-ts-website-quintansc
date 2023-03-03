import axios, { AxiosResponse } from 'axios';

const userRoute = async (): Promise<AxiosResponse> => {
   let data = await axios.get('https://api.github.com/users/quintansc').then(res => res)
   return data.data
}

const getRepository = async (project: string): Promise<AxiosResponse> => {
   let data = await axios.get(`https://api.github.com/repos/quintansc/${project}`).then(res => res)
   return data.data
}

export {
   getRepository,
   userRoute
};
