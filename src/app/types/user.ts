export interface  User {
    page: number;
    per_page: number;
    total: number;
total_pages: number;
data: [Info];
}

export interface Info {
 id: number;
'first_name': string;
'last_name': string;
avatar: string; }

export interface AddUser {
name: string;
job: string;
id?: string;
createdAt?: string;

}

export interface  List {
    page: number;
    per_page: number;
    total: number;
total_pages: number;
data: [ListData];
}

export interface  ListData {
    id: number;
    name: string;
    year: number;
    color: string;
   'pantone_value': string;

}