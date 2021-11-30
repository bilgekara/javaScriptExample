import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    constructor(loggerService){
        // servis acildigi zaman userlar yuklensin
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService =loggerService
    }

    load(){
        // gelen datayı employyeler eve customerlara ayırcak
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    // if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    // }
                    break;
                case "employee":
                    // if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    // }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
        
    }
    add(user){
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        //return this.users
    }

    getById(id){
        //return this.users.find(u=>u.id ===id)
    }

}