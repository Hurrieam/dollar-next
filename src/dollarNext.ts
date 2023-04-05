export default class DollarNext {
    private ElemArray: NodeListOf<HTMLElement> | never[];

    constructor() {
        this.ElemArray = [];
    }

    on = (selector: string, event: string, fn: EventListenerOrEventListenerObject) => {
        this.ElemArray = document.querySelectorAll(selector);
        for (let idx = 0; idx < this.ElemArray.length; idx++) {
            this.ElemArray[idx].addEventListener(event, fn);
        }
    }
}
