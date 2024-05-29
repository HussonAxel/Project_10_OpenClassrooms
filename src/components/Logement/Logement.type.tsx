export interface LogementProps {
    id: string;
    cover: string;
    title: string;
    description: string;
    location: string;
    price: number;
    rating: number;
    maxTravelers: number;
    equipment: string[];
    pictures: string[];
    comments: Comment[];
}