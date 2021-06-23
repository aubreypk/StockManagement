export class StockItem {
    // tslint:disable-next-line:variable-name
    _id: string;
    regNumber: string;
    make: string;
    model: string;
    modelYear: number;
    kms: number;
    colour: string;
    vin: string;
    retailPrice: number;
    costPrice: number;
    accessories: {name: string, description: string }[];
    images: { name: string, data?: File, contentType: string }[];
    dtUpdated: Date;

    constructor(
    ) {
        this.make = '';
        this.regNumber = '';
        this.model = '';
        this.modelYear = 1990;
        this.kms = 0;
        this.colour = '';
        this.vin = '';
        this.retailPrice = 0;
        this.costPrice = 0;
    }
}
