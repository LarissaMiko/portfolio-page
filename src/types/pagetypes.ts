export interface menuLink {
  id: number;
  path: string;
}

export interface projectType {
  id: number;
  title: string;
  description: string;
  github?: string;
  stack: string[];
  url?: string;
  featured: boolean;
}

export interface socialLinkType {
  id: number;
  icon: JSX.Element;
  url: string;
}
