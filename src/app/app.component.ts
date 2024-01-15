import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

/*

1. Create a 'ring' component with a button labeled 'Ring', a button labeled 'Lock', and text that shows either 'Locked' or 'Unlocked'.  When the 'Lock' button is pressed, the text should show 'Locked'.

2. We want to listen for sequences of 'ring' button presses, compare this against a saved sequence, and then switch from 'Locked' to 'Unlocked' if there's a match.

*/
