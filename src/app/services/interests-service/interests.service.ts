import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Interests } from '../../models/interests/interests.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  constructor(private firestore: AngularFirestore) {}

  getInterests(): Observable<Interests[]> {
    return this.firestore.collection<Interests>('interests').valueChanges();
  }
}
