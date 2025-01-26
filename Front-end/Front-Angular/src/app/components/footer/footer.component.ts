import { Component } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  aFacebook = faFacebookF;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faMapMarkerAlt = faMapMarkerAlt;
}
