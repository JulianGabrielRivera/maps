import {User} from './User';

import {Company} from './Company'
import {CustomMap} from './CustomMap'

 

const user = new User();
const company = new Company();
const customMap =new CustomMap('map');

customMap.addMarker(user)
customMap.addMarker(company)

// this wont work cause its private modifier
// customMap.googleMap
// const user = new User();

// console.log(user)

// const company = new Company();
// console.log(company)

// const map = new google.maps.Map(document.getElementById('map'), {
//     // question mark on definition style means its optional
//         zoom:10,
//         center: {
//             lat:10, lng:19
//         },
//         backgroundColor:'black',
        
    
//     })
    
// new google.maps.Circle({center: {
//     lat:10,
//     lng:19
// },
// map:map,
// visible:true,
// clickable:true,
// zIndex:2,
// strokeColor:'blue',
// radius:500,
// strokeWeight:1000

// }
//     )
    