create table if not exists users (
    id serial primary key, 
    username VARCHAR(10) unique, 
    password VARCHAR(50));

create table if not exists posts(
    id serial primary key, 
    title text not null, 
    content text not null, 
    created_at date not null default now(), 
    banner text not null,
    author VARCHAR(10) references users(username));
