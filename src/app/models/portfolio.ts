export class Portfolio {
    private _id: string;
    private _title: string;
    private _image: string;
    private _description: string;
    private _data: string;

    constructor() {
        this._id = "";
        this._title = "";
        this._image = "";
        this._description = "";
        this._data = "";
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get image(): string {
        return this._image;
    }

    get description(): string {
        return this._description;
    }

    get data(): string {
        return this._data;
    }

    set id(id: string) {
        this._id = id;
    }

    set title(title: string) {
        this._title = title;
    }

    set image(image: string) {
        this._image = image;
    }

    set description(description: string) {
        this._description = description;
    }

    set data(data: string) {
        this._data = data;
    }
}
