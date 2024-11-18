export interface User {
    userForAuth: UserForAuth;
    likedSites: string[]; 
    visitedSites: string[]; 
  }

export interface UserForAuth {
    id: string;
    username: string;
    email: string;
    password: string;
}