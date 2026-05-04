export interface Scooter {
  id: number;
  name: string;
  price: string;
  image: string;
  location: string;
  available: boolean;
  tag?: string;
}

export const FLEET_DATA: Scooter[] = [
  {
    id: 1,
    name: "Rental Roadies",
    price: "$0.15/min",
    image: "/images/rental-roadies.jpg",
    location: "Bidholi",
    available: true
  },
  {
    id: 2,
    name: "Roamers Hub",
    price: "$0.20/min",
    image: "/images/roamers-hub.jpg",
    location: "Pondha",
    available: false
  },
  {
    id: 3,
    name: "Singh Rental",
    price: "$0.10/min",
    image: "/images/singh-rental.avif",
    location: "Kandoli",
    available: true
  },
  {
    id: 4,
    name: "Rent and Ride",
    price: "$0.18/min",
    image: "/images/rent-and-ride.jpg",
    location: "Bidholi",
    available: true
  }
];
