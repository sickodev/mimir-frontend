import { Modal } from "./modal";
import { SelectionHandler } from "./selection-handler";

class MimirExtension {
    private selectionHandler: SelectionHandler;
    private modal: Modal;

    constructor() {
        this.selectionHandler = new SelectionHandler();
        this.modal = new Modal();
        this.init();
    }

    private init() {
        //TODO: Initialise Extension
        console.log("Mimir Extension Initialized");

    }
}
