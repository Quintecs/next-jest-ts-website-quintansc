import axios, { AxiosResponse } from 'axios';

const userRoute = async (): Promise<AxiosResponse> => {
   return await axios.get('https://api.github.com/users/quintansc').then(res => res)
}

export default userRoute;
