import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Education } from '../../models/education/education.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private firestore: AngularFirestore) {}

  getEducation(): Observable<Education[]> {
    return this.firestore.collection<Education>('education').valueChanges();
  }
}
