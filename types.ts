import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface Feature {
  id: number;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}