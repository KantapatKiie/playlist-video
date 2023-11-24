import Stripe from 'stripe';

export interface Song {
  id: string;
  author: string;
  title: string;
  video_path: string;
  image_path: string;
}