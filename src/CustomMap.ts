// import { User } from "./User";
// import { Company } from "./Company";
// instructions to every other class on how they can be an argument to 'addMarker'
// so they have to satisfy the props we list in here
// how you can be mappable
export interface Mappable {
location:{
    lat:number;
    lng:number;
};
// this interface looks in user and company for specifically this method with matching name
markerContent(): string;
}
export class CustomMap {
// an instance of map class
// public is default modifier
// set to private so other engineers cant access it, we cant reference this prop from outside this class.
   private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap =  new google.maps.Map(document.getElementById(divId), {
            // question mark on definition style means its optional
                zoom:1,
                center: {
                    lat:10, lng:19
                },
                backgroundColor:'black',
                
            
            })
    }
    // this only works if both classes have the same props so we can refer to lat/lng cause they both have it
    addMarker(mappable: Mappable): void{
        
const marker =new google.maps.Marker({
map:this.googleMap,
position: {
    lat: mappable.location.lat,
    lng: mappable.location.lng
}

})
marker.addListener('click', ()=>{
    const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
    })
    infoWindow.open(this.googleMap, marker)
})
    }
    // addCompanyMaker(company: Company): void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
            
    //         })
    // }
}