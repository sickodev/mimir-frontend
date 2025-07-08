import type { SelectionData } from "./types";

export class SelectionHandler {
    private currentSelection: SelectionData | null = null;

    constructor() {
        this.init();
    }

    private init() {
        document.addEventListener('mouseup', this.handleMouseUp.bind(this))
    }

    private handleMouseUp() {
        setTimeout(() => {
            this.checkSelection()
        }, 10);
    }

    private checkSelection() {
        const selection = window.getSelection();

        if (!selection || selection.isCollapsed) {
            console.log('No text selected');
            return;
        }

        const selectedText = selection.toString().trim();

        if (selectedText.length === 0) {
            console.log('Empty Selection')
            return;
        }

        console.log('Text selected: ', selectedText);

    }
}
