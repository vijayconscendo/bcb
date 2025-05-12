import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-branch-locator',
  standalone: true,
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './branch-locator.component.html',
  styleUrl: './branch-locator.component.scss'
})
export class BranchLocatorComponent implements AfterViewInit {
  private leaflet: any;
  private map: any;
  markers: any[] = [];

  selectedBranch: any = null;

  @ViewChildren('branchCard') branchCards!: QueryList<ElementRef>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  typeOptions = ['Branch', 'ATM'];
  location = '';
  filterOptions = ['All', 'Open Now', 'With Parking'];
  selectedType = 'Branch';
  selectedFilter = 'All';

  branches = [
    {
      name: 'The Glen Branch',
      address: 'Corner Letaba and Orpen Street, Gleneagles, Ext 2, 2190',
      lat: -26.274,
      lng: 28.069
    },
    {
      name: 'Branch 2',
      address: 'Another Location, Johannesburg',
      lat: -26.28,
      lng: 28.05
    },
    {
      name: 'Branch 3',
      address: 'Yet Another Location, Johannesburg',
      lat: -26.26,
      lng: 28.08
    }
  ];

  trackBranch(index: number, branch: any) {
    return `${branch.name}-${index}`;
  }

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      await import('leaflet').then(L => {
        this.leaflet = L;
  
        setTimeout(() => {
          const mapContainer = document.getElementById('map');
          if (!mapContainer) return;
  
          this.map = L.map(mapContainer).setView([-26.27, 28.07], 13);
  
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(this.map);
  
          this.branches.forEach((branch, index) => {
            const marker = L.marker([branch.lat, branch.lng])
              .addTo(this.map)
              .bindPopup(`<strong>${branch.name}</strong><br>${branch.address}`);
  
            marker.on('click', () => {
              this.selectedBranch = branch;
              this.cdr.detectChanges();
              setTimeout(() => {
                const card = this.branchCards?.get(index);
                card?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 0);
            });
  
            this.markers.push(marker);
          });
        }, 0);
      });
    }
  }
  

  onBranchClick(branch: any, index: number) {
    this.selectedBranch = branch;
    this.map.setView([branch.lat, branch.lng], 15);

    this.markers[index]?.openPopup();
  }

  search() {
    // Filtering logic goes here (not implemented)
  }
}
