import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificates } from '../models/certificates/certificates.model';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificatesList: Certificates[] = [];

  constructor(private certificatesService: CertificatesService) {}

  ngOnInit(): void {
    this.certificatesService.getCertificates().subscribe(data => {
      this.certificatesList = data;
    });
  }
}
