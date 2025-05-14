import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MouseCursorService {
  // BehaviorSubjects to hold mouse position
  private mouseX = new BehaviorSubject<number>(0);
  private mouseY = new BehaviorSubject<number>(0);

  // Observable streams for mouse position
  mouseX$ = this.mouseX.asObservable();
  mouseY$ = this.mouseY.asObservable();

  constructor() {
    // Listen for mouse movement and update positions
    document.addEventListener('mousemove', (event: MouseEvent) => {
      this.mouseX.next(event.clientX);  // Update X coordinate
      this.mouseY.next(event.clientY);  // Update Y coordinate
    });
  }
}
