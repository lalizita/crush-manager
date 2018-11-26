import axios from 'axios'

const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const getCrushs = () => axios.get(`https://crush-management.herokuapp.com/api/crushs`)

export const newCrush = crush =>{ 
    console.log(crush)
    return axios.post(`https://crush-management.herokuapp.com/api/crushs`, {crush}, config)
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

export const deleteCrush = crushId =>{
    console.log(crushId)
    return axios.delete(`https://crush-management.herokuapp.com/api/crushs/${crushId}`)
    .then(() => console.log("crush deletado"))
    .then(err => console.log(err))
}