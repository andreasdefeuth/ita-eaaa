import express from "express";
import { pool } from "../db/connect.js";

const db = pool();

const port = 3002;
const server = express();
server.use(express.static("frontend"));
server.use(onEachRequest);
server.get("/api/artist/:id", onGetArtistById);
server.get("/api/albumsRelease", onGetAlbumsByRelease)
server.get("/api/albumsArtist/:artist", onGetAlbumsByArtist);
server.get("/api/albumsCount", onGetAlbumsByCount);
server.listen(port, onServerReady);

async function onGetArtistById(request, response) {
  const id = request.params.id;
  const dbResult = await db.query(
    `
        select stage_name, nationality
        from   artists
        where  artist_id = $1`,
    [id]
  );
  const rows = dbResult.rows;
  if (rows.length === 0) {
    response.sendStatus(404);
  } else {
    response.json(rows[0]);
  }
}

async function onGetAlbumsByRelease(request, response) {
  const limit = request.query.limit
  const dbResult = await db.query(
    `
        select stage_name, title, release_date
        from        artists
        join        albums using (artist_id)
        order by    release_date desc
        limit       $1
    `,
    [limit]
  );
  const rows = dbResult.rows;
  if (rows.length === 0) {
    response.sendStatus(404);
  } else {
    response.json(rows);
  }
}

async function onGetAlbumsByArtist(request, response) {
  const artist = request.params.artist
  const limit = request.query.limit;
  const dbResult = await db.query(
    `
        select stage_name, title, release_date
        from                artists
        join                albums using (artist_id)
        where stage_name =  $1
        order by            release_date desc
        limit               $2
    `,
    [artist,limit]
  );
  const rows = dbResult.rows;
  if (rows.length === 0) {
    response.sendStatus(404);
  } else {
    response.json(rows);
  }
}

async function onGetAlbumsByCount(request, response) {
  const limit = request.query.limit;
  const dbResult = await db.query(
    `
        select stage_name, count (title) as album_count
        from                artists
        left join           albums using (artist_id)
        group by            stage_name
        order by            album_count desc
        limit               $1
    `,
    [limit]
  );
  const rows = dbResult.rows;
  if (rows.length === 0) {
    response.sendStatus(404);
  } else {
    response.json(rows);
  }
}

function onServerReady() {
  console.log("Webserver running on port", port);
}

function onEachRequest(request, response, next) {
  console.log(new Date(), request.method, request.url);
  next();
}
