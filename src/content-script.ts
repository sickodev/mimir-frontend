import { SelectionHandler } from './selection-handler';
import { Modal } from './modal';
import './styles.css';

class TextAIExtension {
    private selectionHandler: SelectionHandler;
    private modal: Modal;

    constructor() {
        this.selectionHandler = new SelectionHandler();
        this.modal = new Modal();
        this.init();
    }

    private init() {
        console.log('Mimir is watching');

    }
}

// Initialize the extension
new TextAIExtension();
