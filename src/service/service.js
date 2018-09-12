import axios from 'axios'
// export const getCrushs = () => {
//     return [{
//         nome:'Alisson Becker',
//         apelido: 'Goleiro Lindo',
//         matchs: 4,
//         foto: 'https://cdn.mpasho.co.ke/wp-content/uploads/2018/07/alisson-becker.jpg'
//     }, {
//         nome:'Tom Cruise',
//         apelido: 'Top gun',
//         matchs: 2,
//         foto: 'https://cdn.mpasho.co.ke/wp-content/uploads/2018/07/alisson-becker.jpg'
//     }]
// }

export const getCrushs = () => axios.get(`https://crush-management.herokuapp.com/api/crushs`)

export const newCrush = () => axios.post(`https://crush-management.herokuapp.com/api/crushs`)