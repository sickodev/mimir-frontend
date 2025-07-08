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
        console.log('Text AI Extension initialized');

        // Add a visible test - create a small indicator
        const indicator = document.createElement('div');
        indicator.textContent = 'AI Extension Active';
        indicator.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #3b82f6;
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 9999;
      font-family: Arial, sans-serif;
    `;
        document.body.appendChild(indicator);

        // Remove indicator after 3 seconds
        setTimeout(() => {
            indicator.remove();
        }, 3000);
    }
}

// Initialize the extension
new TextAIExtension();
