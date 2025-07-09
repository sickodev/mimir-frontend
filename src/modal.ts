import type { ModalState } from "./types";

export class Modal {
    private state: ModalState;
    private modalElement: HTMLElement | null = null;
    private outsideClickHandler: (event: MouseEvent) => void;
    constructor() {
        this.state = {
            isOpen: false,
            selectedText: '',
            position: {
                x: 0,
                y: 0
            }
        }
        this.outsideClickHandler = this.handleOutsideClick.bind(this);
    }

    private handleOutsideClick(event: MouseEvent) {
        if (!this.modalElement) return;
        if (!this.modalElement.contains(event.target as Node)) this.hide();
    }

    public create() {
        if (this.modalElement) return;

        this.modalElement = document.createElement('div');
        Object.assign(this.modalElement.style, {
            position: 'fixed',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -30%)',
            backgroundColor: 'white',
            padding: '16px',
            width: '300px',
            boxShadow: '0 4px 12px rgba(255, 0, 0, 0.3), 0 2px 6px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
            zIndex: '10000',
            display: 'none'
        });

        this.modalElement.textContent = 'this is your modal';
        document.body.appendChild(this.modalElement);
    }

    public show() {
        if (!this.modalElement) return;

        this.modalElement.style.display = 'block';
        this.state.isOpen = true;
        document.addEventListener("mousedown", this.outsideClickHandler);
    }

    public hide() {
        if (!this.modalElement) return;

        this.modalElement.style.display = 'none';
        this.state.isOpen = false;
        document.removeEventListener('mousedown', this.outsideClickHandler);
    }
}
