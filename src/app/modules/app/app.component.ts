import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { CompanyInfo } from '../../shared/models/CompanyInfo';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  deploy = false;

  companies: CompanyInfo[] = [];

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  /**
   * Get Companies
   * 
   * @public
   * @void
   */
  getCompanies() {
    this.http.fetch<CompanyInfo>('/info')
    .subscribe(
      (company: CompanyInfo) => {
        this.companies.push(company)
      }
    )
  }

  /**
   * Sidebar On Click
   * 
   * @public
   */
  sidebarOnClick() {
    this.deploy = !this.deploy;
  }
}