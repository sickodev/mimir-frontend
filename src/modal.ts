import type { ModalState } from "./types";

export class Modal {
    private state: ModalState;
    private modalElement: HTMLElement | null = null;

    constructor() {
        this.state = {
            isOpen: false,
            selectedText: '',
            position: {
                x: 0,
                y: 0
            }
        }
    }

    //TODO: Create modal DOM structure
    //TODO: Show/Hide modal
    //TODO: Handle close events
}
