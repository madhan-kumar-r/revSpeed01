// about-us.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  ottBenefits = [
    { title: 'Unlimited Streaming', description: 'Stream your favorite shows and movies without any limits.', url: 'https://jep-asset.akamaized.net/cms/assets/home/airfiber-home-desk.webp' },
    { title: 'Multiple Devices', description: 'Watch on your TV, laptop, tablet, or phone with a single subscription.', url: 'https://jep-asset.akamaized.net/cms/assets/home/airfiber-home-desk.webp' },
    { title: 'Exclusive Content', description: 'Access exclusive movies, series, and documentaries.', url: 'https://jep-asset.akamaized.net/cms/assets/home/airfiber-home-desk.webp' },
    { title: 'Offline Viewing', description: 'Download content and watch offline whenever and wherever you want.', url: 'https://jep-asset.akamaized.net/cms/assets/home/airfiber-home-desk.webp' },
  ];

  constructor() { }
}
