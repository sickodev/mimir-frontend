export interface SelectionData {
    text: string;
    range: Range;
    rect: DOMRect;
}

export interface Position {
    x: number;
    y: number;
}

export interface ModalState {
    isOpen: boolean;
    selectedText: string;
    position: Position
}
