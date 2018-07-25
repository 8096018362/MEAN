import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AppService]
})
export class AppComponent {
    title = 'app';
    commonUrl = 'http://localhost:3000/';

    constructor(public _appService: AppService) {
        this.getAllStates();
        this.getAllDists();
        this.getAllTowns();
        this.getAllUsers();
    }
    newUser() {
        let userObj = {
            name: 'ramu',
            surname: 'vishwanatham',
            gotram: 'chandhakula',
            occupation: 'Employee',
            mobile_number: 8096018361,
            password: 'dfgdfgdf453',
            father_name: 'Bhaskar',
            state_id: 1,
            dist_id: 1,
            town_id: 1,
        };
        this._appService.genericPostMethod(this.commonUrl + 'user-registration', userObj).subscribe((data) => {
            console.log(data)
        })
    }


    public getUsersList: any;
    getAllUsers() {
        this._appService.genericGetMethod(this.commonUrl + 'getAllUsers').subscribe((data) => {
            this.getUsersList = data.data;
        })
    }


    updateUser() {
        let userObj = {
            mobile_number: 8096018361,
            hno: '4-51',
            street: 'main-road',
            pincode: 509120
        };
        this._appService.updateUser(userObj).subscribe((data) => {
            console.log(data)
        })
    }


    addState() {
        var obj = {
            state_name: 'TS'
        }
        this._appService.genericPostMethod(this.commonUrl + 'addState', obj).subscribe((data) => {
            console.log(data)
        })
    }

    public stateList: any;
    getAllStates() {
        this._appService.genericGetMethod(this.commonUrl + 'getAllStates').subscribe((data) => {
            console.log(data)
            this.stateList = data;
        })
    }

    setLocalStorageValue(obj) {
        localStorage.setItem('STATEID', obj._id)
    }

    addDist() {
        var obj = {
            dist_name: 'MBNR',
            state_id: localStorage.getItem('STATEID')
        }
        this._appService.genericPostMethod(this.commonUrl + 'addDist', obj).subscribe((data) => {
            console.log(data)
        })
    }

    public distList;
    getAllDists() {
        this._appService.genericGetMethod(this.commonUrl + 'getAllDists').subscribe((data) => {
            console.log(data)
            this.distList = data;
        })
    }

    setDistLocalStorageValue(obj) {
        localStorage.setItem('DISTID', obj._id)
        console.log(localStorage.getItem('DISTID'));
    }

    addTown() {
        var obj = {
            dist_id: localStorage.getItem('DISTID'),
            state_id: localStorage.getItem('STATEID'),
            town_name: 'MAKTHAL'
        }
        this._appService.genericPostMethod(this.commonUrl + 'addTown', obj).subscribe((data) => {
            console.log(data)
        })
    }
    townsData: any;
    getAllTowns() {
        this._appService.genericGetMethod(this.commonUrl + 'getAllTowns').subscribe((data) => {
            console.log(data)
            this.townsData = data;
        })
    }
    DistrictsBasedOnStateId = [];
    getDistrictsBasedOnStateId(id) {
        for (let i = 0; i < this.distList.length; i++) {
            if (id == this.distList[i].state_id) {
                var obj = this.distList[i];
                this.DistrictsBasedOnStateId.push(obj)
            }
        }
    }
    getTownsBaseOnSD = [];
    getTownsBasedOnSD(std, did) {
        for (let i = 0; i < this.townsData.length; i++) {
            if (std == this.townsData[i].state_id && did == this.townsData[i].dist_id) {
                var obj = this.townsData[i];
                this.getTownsBaseOnSD.push(obj)
            }
        }
    }

    sendMail() {
        this._appService.genericPostMethod(this.commonUrl + 'sendMail', { number: 8096018362 }).subscribe((data) => {
            console.log(JSON.stringify(data))
        })
    }

    userVerified(obj) {
        this._appService.genericPostMethod(this.commonUrl + 'userVerified', { mobile_number: obj.mobile_number }).subscribe((data) => {
            console.log(JSON.stringify(data))
        })
    }

}
