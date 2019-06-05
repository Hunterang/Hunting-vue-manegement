import fetch from '@/uilt/fetch'
import qs from 'qs'
export  function apiLogin(form) {
   return  fetch.post('/login',qs.stringify(form))

}

// let moveZero = (arr) => {
//   let point = 0
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]!=0) {
//       if (i>point) {
//         arr[point] = arr[i]
//         arr[i] = 0
//       }
//       point++
//     }
//   }
//   return arr
// }
//
// moveZero([0,1,2,0,1,5,4,0,0,2,1,4,0,1])
