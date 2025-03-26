import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [ RouterModule,CommonModule, SidebarComponent, ContentComponent, BreadcrumbComponent, NavbarComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent implements OnInit {
  sidebarVisible = true;
  isLoginPage = false;

  ngOnInit() {
   if (typeof window !== 'undefined' && window.localStorage) {
    const savedState = localStorage.getItem('sidebarVisible');
    this.sidebarVisible = savedState ? savedState === 'true' : true;

    window.addEventListener('sidebar-toggle', () => {
      const newState = localStorage.getItem('sidebarVisible') === 'true';
      this.sidebarVisible = newState;
    });
  }
    
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    localStorage.setItem('sidebarVisible', String(this.sidebarVisible));
  }
}
