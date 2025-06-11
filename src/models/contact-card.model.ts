export interface ContactCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  linkType?: 'email' | 'tel' | 'url';
  additionalInfo?: string;
}
