CREATE TABLE IF NOT EXISTS songs (
    id	SERIAL PRIMARY KEY ,
	title TEXT,
	album TEXT,
	preview_link	TEXT,
	artwork	TEXT,
	artist_id	INTEGER
);

CREATE TABLE IF NOT EXISTS artists (
    
	id	SERIAL PRIMARY KEY,
	name TEXT,
	photo_url TEXT,
	nationality	TEXT
);
CREATE TABLE IF NOT EXISTS playlists (
    
	id	SERIAL PRIMARY KEY,
	name TEXT
	
);
CREATE TABLE IF NOT EXISTS playlist_song(
    
	id SERIAL, 
	playlists_id INTEGER,
	songs_id INTEGER PRIMARY KEY
	
);
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS favourites (
    id SERIAL PRIMARY KEY,
    songs_id INTEGER REFERENCES songs,
    users_id INTEGER REFERENCES users
);




