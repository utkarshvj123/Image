import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MyserviceService} from '../../myservice.service';
import Swal from 'sweetalert2';
import {Options} from 'ng5-slider';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


    constructor(private fb: FormBuilder, private route: Router, private modalService: BsModalService, private service: MyserviceService) {
    }
    selectedCountry: any;
    myForm: FormGroup;
    submitted = false;
    notMatched: boolean;
    countryArray: any;
    modalRef: BsModalRef;
    error;
    selectedFile: File = null;
    imgURL: any;

    state: any;
    addTaskValue = '';
newTagAfterPush = [];


    value = 20;
    options: Options = {
        floor: 20,
        ceil: 60
    };

    ngOnInit() {
        this.selectedCountry = 'Country';
        this.service.getCountry().subscribe(res => {
                this.countryArray = res;
                console.log(this.countryArray);
            }, error => {
                this.error = error;
                console.log(this.error);
                if (this.error.Message) {
                    this.errorHandling('Message', this.error.Message);
                } else {
                    this.errorHandling('Error', this.error.Error);
                }
            }// -----------Error Handling
        );


        this.notMatched = false;
        this.myForm = this.fb.group({
            firstname: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            lastname: ['', Validators.required],
            phone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
            age: ['', Validators.required],
            address: ['', Validators.required],

            // password: ['', [Validators.required, Validators.minLength(6)]],
            // confirm_password: ['', [Validators.required, Validators.minLength(6)]],
            country: ['', [Validators.required, ]],
            state: ['', [Validators.required, ]],
            tags: [''],
            subscriberValue: ['', [Validators.required, ]],
        });
    }

    gettingCountryName(event) {
        console.log(event);
        console.log(this.myForm.value.country);
        this.service.getState(this.myForm.value.country.code).subscribe(res => {
            this.state = res;
        });

    }
    gettingTags(ele) {
        console.log(ele.target.value);
        const valueet = ele.target.value;
        this.newTagAfterPush.push(valueet);
        console.log(this.newTagAfterPush);
        // ele.myForm.value.tags=null;
        this.addTaskValue = ' ';
        console.log(this.addTaskValue);
    }



    removeValue(valueGet) {
        console.log(valueGet);
        const index = this.newTagAfterPush.indexOf(valueGet);
        if (index > -1) {
            this.newTagAfterPush.splice(index, 1);
        }
        console.log(this.newTagAfterPush);

    }

    onSubmit() {
        console.log();
        console.log(this.myForm.value);
        console.log(this.newTagAfterPush);

        const jsonTOSend = {
            firstName : this.myForm.value.firstname,
           lastName: this.myForm.value.lastname,
           email: this.myForm.value.email,
           phone: this.myForm.value.phone,
           age: this.myForm.value.age,
           state: this.myForm.value.state,
           country: this.myForm.value.country.name,
           address: this.myForm.value.address,
           tags: this.newTagAfterPush,
           subscribe: this.myForm.value.subscriberValue,
            image:this.selectedFile
        };
        console.log(jsonTOSend);
        this.service.savingData(jsonTOSend);
      this.route.navigate(['/fixtures']);
    }


    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,
            Object.assign({}, {class: 'modal-lg'}));
    }

    closeModal() {
        this.modalRef.hide();
    }

    errorHandling(value, Error) {
        Swal.fire({
            title: value,
            text: Error,
            allowEscapeKey: false,
            allowOutsideClick: false,
            // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
        }).then(function(value) {
            location.reload();
        });
    }

    onFileSelected(event) {
        // console.log(event.target.files.name);
        this.selectedFile = event.target.files[0] as File;
        console.log(this.selectedFile);
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            this.imgURL = reader.result;
        };

    }
}
