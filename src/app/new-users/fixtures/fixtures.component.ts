import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../../myservice.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-fixtures',
    templateUrl: './fixtures.component.html',
    styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

    constructor(private service: MyserviceService) {
    }

    data: any;
address:any;
firstName:any;
lastName:any;
email:any;
country:any;
state:any;
phone:any;
subscribe:any;
tags:any;
    error;
image:any;
age:any;

    ngOnInit() {
this.address =this.service.gettingvalueForDetail().address;
this.firstName=this.service.gettingvalueForDetail().firstName;
this.lastName=this.service.gettingvalueForDetail().lastName;
this.phone=this.service.gettingvalueForDetail().phone;
this.image=this.service.gettingvalueForDetail().image;
this.tags=this.service.gettingvalueForDetail().tags;
this.country=this.service.gettingvalueForDetail().country;
this.state=this.service.gettingvalueForDetail().state;
this.subscribe=this.service.gettingvalueForDetail().subscribe;
this.age=this.service.gettingvalueForDetail().age;
this.email=this.service.gettingvalueForDetail().email;

    }

    // ----Handling error swal pop up for displaying error or message-----------//
    errorHandling(value, Error) {
        Swal.fire({
            title: value,
            text: Error,
            allowEscapeKey : false,
            allowOutsideClick: false,
            // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
        }).then(function(value) {
        location.reload();
        });
    }

}
