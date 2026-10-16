import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Languages } from '../../models/languages/languages.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  constructor(private firestore: AngularFirestore) {}

  getLanguages(): Observable<Languages[]> {
    return this.firestore.collection<Languages>('languages').valueChanges();
  }
}
