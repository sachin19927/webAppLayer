export interface ZomatoData{
  results_found:number;
  restaurants: Restaurant[];
  results_shown:number;
  results_start:string;
}

export interface Restaurant
{
  has_online_delivery: number;
  photos_url: string;
  url: string;
  price_range: number;
  apikey: string;
  user_rating: UserRating;
  R: R;
  name: string;
  cuisines: string;
  is_delivering_now: number;
  deeplink: string;
  menu_url: string;
  average_cost_for_two: number;
  book_url: string;
  switch_to_order_menu: number;
  offers: any[];
  has_table_booking: number;
  location: Location;
  featured_image: string;
  zomato_events: ZomatoEvent[];
  currency: string;
  id: string;
  thumb: string;
  establishment_types: any[];
  events_url: string;
}

export interface UserRating {
  rating_text: string;
  rating_color: string;
  votes: string;
  aggregate_rating: string;
}

export interface R {
  res_id: number;
}


export interface Location {
  latitude: string;
  address: string;
  city: string;
  country_id: number;
  locality_verbose: string;
  city_id: number;
  zipcode: string;
  longitude: string;
  locality: string;
}

export interface Photo {
  photo_id: number;
  order: number;
  type: string;
  url: string;
  md5sum: string;
  uuid: any;
  thumb_url: string;
}

export interface Event {
  display_date: string;
  end_time: string;
  date_added: string;
  start_date: string;
  photos: Photo[];
  share_url: string;
  description: string;
  title: string;
  display_time: string;
  book_link: string;
  restaurants: any[];
  disclaimer: string;
  friendly_start_date: string;
  is_end_time_set: number;
  event_id: number;
  end_date: string;
  event_category: number;
  friendly_end_date: string;
  is_active: number;
  start_time: string;
  is_valid: number;
  event_category_name: string;
}

export interface ZomatoEvent {
  event: Event;
}

