{

const myBytton: HTMLButtonElement | null = document.querySelector("button")

// myBytton?.addEventListener("click", (e: MouseEvent) => {})

// myBytton?.addEventListener("keyup", (e: KeyboardEvent) => {})

// myBytton?.addEventListener("touchstart", (e: TouchEvent) => {})

myBytton?.addEventListener("dragstart", (e: DragEvent) => {})


}