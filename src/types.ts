
export interface Theme {
  title: string;
  description: string;
  icon: string;
}

export interface Event {
  date: string;
  title: string;
  description: string;
}

export interface FAQ  {
  question: string;
  answer: string;
  category: string;
};

export interface Links {
  facebook: string;
  instagram: string;
  discord: string;
}

export interface Info {
  name: string;
  role: string;
  email: string;
  phone: string; 
}

interface TeamMember {
  name: string;
}

export interface Team {
  id: string;
  name: string;
  imageUrl: string;
  members: TeamMember[];
  institution: string;
  ideaDescription: string;
}