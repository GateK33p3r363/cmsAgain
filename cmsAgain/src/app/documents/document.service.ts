import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();

  constructor() { }

  //getDocuments(): Document[] {
    //return this.getDocuments.slice();
  //}

  getDocument(id: string): Document | null {
    for (const document of this.documents) {
      if (document.id.toString() === id) {
        return document;
      }
    }
    return null;
  }

}
