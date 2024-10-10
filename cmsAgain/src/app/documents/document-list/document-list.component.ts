import { Component } from '@angular/core';
//import { Document } from './documents/document.model.ts';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  //@Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [];

  onSelectedDocument(document: Document) {
    //this.selectedDocumentEvent.emit(document);
  }

}
