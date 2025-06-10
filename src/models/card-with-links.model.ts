
export interface CardLink {
  label: string;
  url: string;
}

export interface CardButton {
  show: boolean;
  label: string;
  url: string;
  target: '_blank' | '_self';
  class: string;
  isExternal: boolean;
}

export interface CardWithLinksData {
  title: string;
  description: string;
  links: CardLink[];
  button?: CardButton;
}
