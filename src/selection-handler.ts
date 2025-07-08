import type { SelectionData } from "./types";

export class SelectionHandler {
    private currentSelection: SelectionData | null = null;
    private selectionButton: HTMLElement | null = null;

    constructor() {
        this.init();
    }

    private init() {
        document.addEventListener("mouseup", this.handleMouseUp.bind(this));
    }

    private handleMouseUp() {
        setTimeout(() => {
            this.checkSelection();
        }, 10);
    }

    private checkSelection() {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
            console.log("No text selected");
            this.hideButton();
            this.currentSelection = null;
            return;
        }

        const selectedText = selection.toString().trim();
        if (selectedText.length === 0) {
            console.log("Empty Selection");
            this.hideButton();
            this.currentSelection = null;
            return;
        }

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        this.currentSelection = {
            text: selectedText,
            range,
            rect,
        };

        console.log("Text selected: ", selectedText);
        this.showButton();
    }

    private showButton() {
        if (!this.currentSelection) return;

        this.hideButton();

        // Create a simple div with inline styles
        this.selectionButton = document.createElement("div");
        this.selectionButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>`;

        // Position directly above the selected text (Grammarly style)
        const rect = this.currentSelection.rect;
        const buttonSize = 28; // Circle diameter

        // Center the button above the selection
        let buttonX = rect.left + (rect.width / 2) - (buttonSize / 2);
        let buttonY = rect.top - buttonSize - 8; // 8px gap above selection

        // Keep button within viewport bounds
        if (buttonX < 5) buttonX = 5;
        if (buttonX + buttonSize > window.innerWidth - 5) {
            buttonX = window.innerWidth - buttonSize - 5;
        }
        if (buttonY < 5) {
            // If no space above, place below the selection
            buttonY = rect.bottom + 8;
        }

        // Apply inline styles for circular white button
        Object.assign(this.selectionButton.style, {
            position: "fixed",
            left: `${buttonX}px`,
            top: `${buttonY}px`,
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
            backgroundColor: "white",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: "9999",
            boxShadow: "0 2px 8px rgba(255, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 0, 0, 0.1)",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease"
        });

        // Add hover effect
        this.selectionButton.addEventListener("mouseenter", () => {
            this.selectionButton!.style.transform = "translateY(-2px) scale(1.05)";
            this.selectionButton!.style.boxShadow = "0 4px 12px rgba(255, 0, 0, 0.3), 0 2px 6px rgba(0, 0, 0, 0.15)";
        });

        this.selectionButton.addEventListener("mouseleave", () => {
            this.selectionButton!.style.transform = "translateY(0) scale(1)";
            this.selectionButton!.style.boxShadow = "0 2px 8px rgba(255, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)";
        });

        // Add click handler for testing
        this.selectionButton.addEventListener("click", () => {
            console.log('Processing selected text:', this.currentSelection?.text);
            // This is where you'd add your actual processing logic
            alert(`Processing: "${this.currentSelection?.text}"`);
        });

        // Add to page
        document.body.appendChild(this.selectionButton);
        console.log('Button shown for text:', this.currentSelection.text);
    }

    private hideButton() {
        if (this.selectionButton) {
            this.selectionButton.remove();
            this.selectionButton = null;
            console.log("Button Hidden");
        }
    }

    public getCurrentSelection(): SelectionData | null {
        return this.currentSelection;
    }
}
