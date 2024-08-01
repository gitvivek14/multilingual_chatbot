import { EventHandler } from "react";

declare global {
	interface Navigator {
		virtualKeyboard?: VirtualKeyboard;
	}
	 
	interface VirtualKeyboard extends EventTarget {
		hide(): void
		show(): void;
		boundingRect: DOMRect;
		overlaysContent: boolean;
		ongeometrychange: EventHandler;
	}
}
