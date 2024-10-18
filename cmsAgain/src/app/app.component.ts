import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'cmsAgain';
  onFeatureSelected(event: any) {
    // Handle the event here
    console.log(event);
  }
  toggleDropdown() {
    // Your logic here...
  }
  dropdownOpen = false; // or true, depending on your initial state
  selectedFeature = 'someFeature'; // replace 'someFeature' with your initial feature
}
