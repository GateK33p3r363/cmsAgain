import { Component } from '@angular/core';
//import { Document } from './documents/document.model.ts';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  //selectedDocument: Document;

  onselectedDocument(document: Document){
    //this.selectedDocument = document;
  }
}
