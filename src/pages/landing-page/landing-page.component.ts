import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LandingBannerComponent } from '../../components/landing-banner/landing-banner.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FeaturedSolutionsCarouselComponent } from '../../components/featured-solutions-carousel/featured-solutions-carousel.component';
import { ContentImageSplitComponent } from '../../components/content-image-split/content-image-split.component';
import { ExploreBannerComponent } from '../../components/explore-banner/explore-banner.component';
import { GetStartedComponent } from '../../components/get-started/get-started.component';
import { DownloadAppComponent } from '../../components/download-app/download-app.component';
import { SupportContactComponent } from '../../components/support-contact/support-contact.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { SwitchBankComponent } from '../../components/switch-bank/switch-bank.component';
import { TabSliderOneComponent } from '../../components/tab-slider-one/tab-slider-one.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    CommonModule,
    LandingBannerComponent,
    FeaturedSolutionsCarouselComponent,
    ContentImageSplitComponent,
    ExploreBannerComponent,
    GetStartedComponent,
    DownloadAppComponent,
    SupportContactComponent,
    FaqComponent,
    SwitchBankComponent,
    TabSliderOneComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
