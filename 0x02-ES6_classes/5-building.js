export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage(){
        if (Building.prototype instanceof this.constructor){
            // check if it's the property of
        }
    }
}