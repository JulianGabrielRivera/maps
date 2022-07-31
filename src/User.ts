import faker from 'faker';
// reaches into node modules and goes into faker module and gives us access to all code inside there.
// through a variable called faker
import {Mappable} from './CustomMap';
// implements mappable, this sets up a direct dependency
// this helps us make sure that user has everything mappable requires
// this is not required though, but if we fail to implement an interface, typescript can point us to the true source of error
export class User implements Mappable {
    name:string;

    location: {
        lat:number;
        lng:number;
    }

    constructor(){
this.name = faker.name.firstName();
this.location = {
    lat:parseFloat(faker.address.latitude()),
    lng:parseFloat(faker.address.longitude())
}
    }
    markerContent(): string{
        return `User Name: ${this.name}`
    }
}

