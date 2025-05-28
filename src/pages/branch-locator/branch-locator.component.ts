import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChildren,
  QueryList,
  ElementRef
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
      const { default: L } = await import('leaflet');
      this.leaflet = L;

      // Ensure DOM is ready
      setTimeout(() => {
        const mapElement = document.getElementById('map');
        if (!mapElement) {
          console.error('Map element with ID "map" not found.');
          return;
        }

        this.map = L.map(mapElement).setView([-26.27, 28.07], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);

        // Define custom marker icon
        const customIcon = L.icon({
          iconUrl: 'assets/images/icons/icn_location_outline.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });

        // Clear previous markers
        this.markers = [];

        this.branches.forEach((branch, index) => {
          const marker = L.marker([branch.lat, branch.lng], { icon: customIcon })
            .addTo(this.map)
            .bindPopup(`<strong>${branch.name}</strong><br>${branch.address}`);          marker.on('click', () => {
            this.selectedBranch = branch;
            this.cdr.detectChanges();
            // Don't use scrollIntoView to prevent page jumping
          });

          this.markers.push(marker);
        });
          // Set The Glen Branch as selected but without scrolling
        const glenBranchIndex = this.branches.findIndex(branch => branch.name === 'The Glen Branch');
        if (glenBranchIndex !== -1) {
          this.selectedBranch = this.branches[glenBranchIndex];
          this.cdr.detectChanges();
        }
      }, 0);
    }
  }  onBranchClick(branch: any, index: number) {
    if (this.map) {
      this.selectedBranch = branch;
      this.map.setView([branch.lat, branch.lng], 15);
      
      // Close all popups first
      this.markers.forEach(marker => {
        if (marker && marker.closePopup) {
          marker.closePopup();
        }
      });
      
      // Then open the selected one
      if (this.markers[index] && this.markers[index].openPopup) {
        this.markers[index].openPopup();
      }
      
      // Don't use scrollIntoView as it causes unwanted page scrolling
      // Just ensure that the selected branch is visible if needed through other means
      this.cdr.detectChanges();
    }
  }
    // Helper method to programmatically select The Glen Branch
  selectGlenBranch() {
    const glenBranchIndex = this.branches.findIndex(branch => branch.name === 'The Glen Branch');
    if (glenBranchIndex !== -1 && this.map) {
      const branch = this.branches[glenBranchIndex];
      this.selectedBranch = branch;
      this.map.setView([branch.lat, branch.lng], 15);
      
      if (this.markers[glenBranchIndex] && this.markers[glenBranchIndex].openPopup) {
        this.markers[glenBranchIndex].openPopup();
      }
      
      this.cdr.detectChanges();
    }
  }

  search() {
    // Filtering logic goes here
  }
}
