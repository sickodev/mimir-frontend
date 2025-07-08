import { SelectionHandler } from './selection-handler';
import { Modal } from './modal';
import './styles.css';

class TextAIExtension {
    private selectionHandler: SelectionHandler;
    private modal: Modal;

    constructor() {
        this.selectionHandler = new SelectionHandler();
        this.modal = new Modal();
    }

}

// Initialize the extension
new TextAIExtension();
