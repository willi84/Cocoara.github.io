export class Practiques {
    [x: string]: any;
    private _id: string;
    private _title: string;
    private _send: string;
    private _description: string;
    private _data: string;
    private _content: string;
    private _document: string;

    constructor() {
        this._id = "";
        this._title = "";
        this._send = "";
        this._description = "";
        this._data = "";
        this._content = "";
        this._document = "";
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get send(): string {
        return this._send;
    }

    get description(): string {
        return this._description;
    }

    get data(): string {
        return this._data;
    }


    get content(): string {
        return this._content;
    }


    get document(): string {
        return this._document;
    }

    set content(content: string) {
        this._content = content;
    }

    set document(document: string) {
        this._document = document;
    }

    set id(id: string) {
        this._id = id;
    }

    set title(title: string) {
        this._title = title;
    }

    set send(send: string) {
        this._send = send;
    }

    set description(description: string) {
        this._description = description;
    }

    set data(data: string) {
        this._data = data;
    }
}
