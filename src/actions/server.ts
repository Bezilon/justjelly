import { db } from "@/drizzle/db"
import { servers } from "@/drizzle/schema"

export const searchServers = async (query: string) => {
  const jellyfinServers = await db.select().from(servers)

  for (const i in jellyfinServers) {
    const queryParams = new URLSearchParams([
      ["searchTerm", query],
      ["recursive", "true"],
      ["includeItemTypes", "AudioBook,Book,Movie,MusicAlbum,Playlist,Series"]
    ])
    await fetch(new URL(`${jellyfinServers[i].url}/Items?${queryParams}`), {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `MediaBrowser Token="${jellyfinServers[i].apiKey}"`
      }
    }).then((res) => res.json()).then((data) => data.json()).catch(() => null);
  }
}