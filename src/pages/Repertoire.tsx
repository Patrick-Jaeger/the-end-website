import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Music, Filter } from "lucide-react";

const Repertoire = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Alle");

  const songs = [
    {
      artist: "System Of A Down",
      title: "Aerials",
      genre: "Alternative Metal",
      links: {
        spotify: "https://open.spotify.com/track/4e9eGQYsOiBcftrWXwsVco",
        appleMusic: "https://music.apple.com/az/song/aerials/273714765",
        amazonMusic: "https://music.amazon.de/tracks/B07BCLK212?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_zZkF4lSoMoGDjbQbmqIy4DZ3P",
        youtube: "https://www.youtube.com/watch?v=L-iepu3EtyE&list=RDL-iepu3EtyE&start_radio=1"
      }
    },

    { artist: "AC/DC", title: "The Jack", genre: "Rock" },
    { artist: "Green Day", title: "Basket Case", genre: "Punk Rock" },
    { artist: "Foo Fighters", title: "The Pretender", genre: "Alternative Rock" },
    { artist: "Die Ärzte", title: "½ Lovesong", genre: "Punk Rock" },
    { artist: "Blink-182", title: "Don’t Leave Me", genre: "Punk Rock" },
    { artist: "Böhse Onkelz", title: "Leere Worte", genre: "Hard Rock" },
    { artist: "The White Stripes", title: "Seven Nation Army", genre: "Garage Rock" },
    { artist: "Volbeat", title: "Thanks", genre: "Metal" },
    { artist: "Peter Schilling/Die Ärzte/The McCoys", title: "Medley: Major Tom/Westerland/Hang on Sloopy", genre: "Mix" },
    { artist: "Rammstein", title: "Deutschland", genre: "Industrial Metal" },
    { artist: "Sum 41", title: "The Hell Song", genre: "Punk Rock" },
    { artist: "Bloodhound Gang", title: "Fire Water Burn", genre: "Alternative Rock" },
    { artist: "Die Toten Hosen", title: "Kein Alkohol ist auch keine Lösung", genre: "Punk Rock" },
    { artist: "Red Hot Chili Peppers", title: "Dani California", genre: "Alternative Rock" },
    { artist: "Farin Urlaub", title: "Das schöne Mädchen", genre: "Rock" },
    { artist: "Böhse Onkelz", title: "Erinnerungen", genre: "Hard Rock" },
    { artist: "Korn", title: "Word up!", genre: "Nu Metal" },
    { artist: "Rage Against The Machine", title: "Killing In The Name", genre: "Metal" },
    { artist: "Avril Lavigne", title: "Sk8ter Boi", genre: "Pop Punk" },
    { artist: "Royal Republic", title: "Everybody Wants to Be an Astronaut", genre: "Garage Rock" },
    { artist: "Beartooth", title: "King of Anything", genre: "Metalcore" },
    { artist: "Papa Roach", title: "Last Resort", genre: "Nu Metal" },
    { artist: "Die Ärzte", title: "Junge", genre: "Punk Rock" },
    { artist: "Joan Jett", title: "I Love Rock'N Roll", genre: "Rock" },
    { artist: "System Of A Down", title: "Lonely Day", genre: "Alternative Metal" },
    { artist: "Blink-182", title: "All The Small Things", genre: "Punk Rock" },
    { artist: "Billy Talent", title: "Fallen Leaves", genre: "Punk Rock" },
    { artist: "Lenny Kravitz", title: "Fly Away", genre: "Rock" },
    { artist: "Sportfreunde Stiller", title: "Ein Kompliment", genre: "Indie Rock" },
    { artist: "Böhse Onkelz", title: "Stunde des Siegers", genre: "Hard Rock" },
    { artist: "Nirvana", title: "Rape Me", genre: "Grunge" },
    { artist: "Nickelback", title: "How You Remind Me", genre: "Post-Grunge" },
    { artist: "Sum 41", title: "In Too Deep", genre: "Punk Rock" },
    { artist: "Ramones", title: "Blitzkrieg Bop", genre: "Punk Rock" },
    { artist: "Böhse Onkelz", title: "Kirche", genre: "Hard Rock" },
    { artist: "The Hives", title: "Tick Tick Boom", genre: "Garage Rock" },
    { artist: "Die Ärzte", title: "Himmelblau", genre: "Punk Rock" },
    { artist: "Green Day", title: "Brain Stew", genre: "Punk Rock" },
    { artist: "Volbeat", title: "Fallen", genre: "Metal" },
    { artist: "The Offspring", title: "Pretty Fly", genre: "Punk Rock" },
    { artist: "Puddle Of Mudd", title: "She Hates Me", genre: "Post-Grunge" },
    { artist: "Manowar", title: "Warriors of the World", genre: "Heavy Metal" },
    { artist: "Metallica", title: "For Whom The Bell Tolls", genre: "Metal" },
    { artist: "Böhse Onkelz", title: "Wir ham noch lange nicht genug", genre: "Hard Rock" },
    { artist: "Böhse Onkelz", title: "Mexico", genre: "Hard Rock" },
    { artist: "Die Ärzte", title: "Deine Schuld", genre: "Punk Rock" },
    { artist: "Farin Urlaub", title: "OK", genre: "Rock" },
    { artist: "Green Day", title: "When I Come Around", genre: "Punk Rock" },
    { artist: "Böhse Onkelz", title: "Ich bin in Dir", genre: "Hard Rock" },
    { artist: "Rammstein", title: "Rammstein", genre: "Industrial Metal" },
    { artist: "The White Stripes", title: "The Hardest Button to Button", genre: "Garage Rock" },
    { artist: "Blur", title: "Song 2", genre: "Alternative Rock" },
    { artist: "Nirvana", title: "Come As You Are", genre: "Grunge" },
    { artist: "The Subways", title: "Rock & Roll Queen", genre: "Indie Rock" },
    { artist: "Die Ärzte", title: "Hurra", genre: "Punk Rock" },
    { artist: "Judas Priest", title: "Living After Midnight", genre: "Heavy Metal" },
    { artist: "Sleipnir", title: "Alkoholiker", genre: "Rock" },
    { artist: "AC/DC", title: "Highway to Hell", genre: "Rock" },
    { artist: "Metallica", title: "Die, Die My Darling", genre: "Metal" },
    { artist: "Böhse Onkelz", title: "Bin ich nur glücklich wenn es schmerzt", genre: "Hard Rock" },
    { artist: "Green Day", title: "Holiday", genre: "Punk Rock" },
    { artist: "Die Ärzte", title: "Schrei nach Liebe", genre: "Punk Rock" },
    { artist: "The Hives", title: "Hate To Say I Told You So", genre: "Garage Rock" },
    { artist: "Danzig", title: "Mother", genre: "Heavy Metal" },
    { artist: "Lynyrd Skynyrd", title: "Simple Man", genre: "Southern Rock" },
    { artist: "Nirvana", title: "Smells Like Teen Spirit", genre: "Grunge" },
    { artist: "Böhse Onkelz", title: "Nur die besten sterben jung", genre: "Hard Rock" },
    { artist: "Böhse Onkelz", title: "Auf gute Freunde", genre: "Hard Rock" },
    { artist: "Wolfmother", title: "Joker And The Thief", genre: "Rock" },
    { artist: "Green Day", title: "American Idiot", genre: "Punk Rock" },
    { artist: "Böhse Onkelz", title: "Für immer", genre: "Hard Rock" },
    { artist: "Böhse Onkelz", title: "Die Firma", genre: "Hard Rock" },
    { artist: "Böhse Onkelz", title: "Terpentin", genre: "Hard Rock" },
    { artist: "Red Hot Chili Peppers", title: "Californication", genre: "Alternative Rock" },
    { artist: "Böhse Onkelz", title: "Du kannst alles haben", genre: "Hard Rock" }
  ];

  const genres = ["Alle", ...Array.from(new Set(songs.map(song => song.genre)))];

  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "Alle" || song.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const genreColors = {
    Rock: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Metal: "bg-red-500/20 text-red-400 border-red-500/30",
    "Punk Rock": "bg-green-500/20 text-green-400 border-green-500/30",
    "Pop Punk": "bg-pink-500/20 text-pink-400 border-pink-500/30",
    "Alternative Rock": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Hard Rock": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Garage Rock": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Rockabilly Metal": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "Industrial Metal": "bg-gray-500/20 text-gray-400 border-gray-500/30",
    "Nu Metal": "bg-teal-500/20 text-teal-400 border-teal-500/30",
    "Rap Metal": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    "Metalcore": "bg-lime-500/20 text-lime-400 border-lime-500/30",
    "Post-Grunge": "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
    Grunge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    "Alternative Metal": "bg-rose-500/20 text-rose-400 border-rose-500/30",
    "Indie Rock": "bg-sky-500/20 text-sky-400 border-sky-500/30",
  };

  const roundedSongsCount = Math.floor(filteredSongs.length / 10) * 10;

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background/50 to-rock-lighter w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-rock text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6 leading-tight">
              Repertoire
            </h1>

            <div className="space-y-2">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Willkommen zur Rock Library!
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Über {roundedSongsCount} Songs für jeden Geschmack.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Entdecke Songs nach Genre, Künstler oder Titel.
              </p>
              
            </div>
          </motion.div>
        </div>
      </section>


      {/* Search and Filter */}
      <section className="py-12 bg-rock-lighter w-full">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="flex flex-col gap-6 mb-8 w-full">
              {/* Genre Filter */}
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground font-medium">Genre:</span>
                </div>
                <div className="flex flex-wrap gap-2 w-full">
                  {genres.map((genre) => (
                    <Button
                      key={genre}
                      variant={selectedGenre === genre ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedGenre(genre)}
                      className={selectedGenre === genre ? "btn-rock" : "btn-outline-rock"}
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Searchbar */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Song oder Interpret suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-border text-base py-5 w-full"
                />
              </div>

            </div>

            {/* Results Counter */}
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              {filteredSongs.length} Song{filteredSongs.length !== 1 ? "s" : ""} gefunden
            </p>
          </motion.div>
        </div>
      </section>


      {/* Song List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {filteredSongs.map((song, index) => (
                <motion.div
                  key={`${song.artist}-${song.title}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="bg-card border-border shadow-rock transition-rock hover-rock">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <Music className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-rock text-lg font-bold">{song.title}</h3>
                            <p className="text-muted-foreground">{song.artist}</p>
                          </div>
                        </div>

                        <div className={`px-3 py-1 rounded-full border text-sm font-semibold w-fit ${genreColors[song.genre]}`}>
                          {song.genre}
                        </div>
                      </div>



                      {/* Musik-Links */}
                      {/*
                            {song.links && (

                              <div className="mt-2 flex gap-4 text-sm">
                                {song.links.youtube && (
                                  <a
                                    href={song.links.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-700 hover:underline"
                                  >
                                    YouTube
                                  </a>
                                )}
                                <a
                                  href={song.links.spotify}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-green-600 hover:underline"
                                >
                                  Spotify
                                </a>

                                <a
                                  href={song.links.amazonMusic}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-yellow-600 hover:underline"
                                >
                                  Amazon Music
                                </a>
                                <a
                                  href={song.links.appleMusic}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-red-600 hover:underline"
                                >
                                  Apple Music
                                </a>
                              </div>
                            )}
                      */}

                      {/* Responsive Spotify Music Embed */}

                      {(song.artist === "System Of A Down" && song.title === "Aerials") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/4e9eGQYsOiBcftrWXwsVco?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Aerials by System of a Down"
                          ></iframe>
                        </div>
                      )}


                      {(song.artist === "AC/DC" && song.title === "The Jack") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3k1WwLG1OXCm6iQ13VrJEL?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – The Jack by AC/DC"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Green Day" && song.title === "Basket Case") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/6L89mwZXSOwYl76YXfX13s?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Basket Case by Green Day"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Foo Fighters" && song.title === "The Pretender") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/7x8dCjCr0x6x2lXKujYD34?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – The Pretender by Foo Fighters"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Die Ärzte" && song.title === "½ Lovesong") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2WuvYQSuDtcCtdIjA87GJc?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – ½ Lovesong by Die Ärzte"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Blink-182" && song.title === "Don’t Leave Me") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1IAeSajljaXAkLZKXBZnE8?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Don't Leave Me by Blink-182"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Leere Worte") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/71TxMg6HW4CilC1mMinFQ3?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Leere Worte by Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "The White Stripes" && song.title === "Seven Nation Army") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3dPQuX8Gs42Y7b454ybpMR?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Seven Nation Army by The White Stripes"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Volbeat" && song.title === "Thanks") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/4y4kqfSO4Qjd5h2RyyqBpz?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Thanks by Volbeat"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Peter Schilling/Die Ärzte/The McCoys" && song.title === "Medley: Major Tom/Westerland/Hang on Sloopy") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/6lXKNdOsnaLv9LwulZbxNl?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Major Tom/Westerland/Hang on Sloopy by Medley"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Peter Schilling/Die Ärzte/The McCoys" && song.title === "Medley: Major Tom/Westerland/Hang on Sloopy") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/5aWpvFnByyWodgqYlC9kha?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Major Tom/Westerland/Hang on Sloopy by Medley"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Peter Schilling/Die Ärzte/The McCoys" && song.title === "Medley: Major Tom/Westerland/Hang on Sloopy") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/36NX19wOQQEYyULfnuLnWc?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Major Tom/Westerland/Hang on Sloopy by Medley"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Rammstein" && song.title === "Deutschland") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2bPGTMB5sFfFYQ2YvSmup0?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Deutschland by Rammstein"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Sum 41" && song.title === "The Hell Song") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/6hqt1z34Oz0OZtSfy62OFD?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Hellsong by Sum 41"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Bloodhound Gang" && song.title === "Fire Water Burn") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/7FkyQsWH9mmxoYLCNj4f8y?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Fire Water Burn by Bloodhound Gang"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Die Toten Hosen" && song.title === "Kein Alkohol ist auch keine Lösung") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3Rr1CJW6dW9MYNOsOruhby?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Kein Alkohol ist auch keine Lösung by Die Toten Hosen"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Red Hot Chili Peppers" && song.title === "Dani California") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/10Nmj3JCNoMeBQ87uw5j8k?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Dani California by Red Hot Chili Peppers"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Farin Urlaub" && song.title === "Das schöne Mädchen") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/60YrmyQdkjuSIDfgVqhg96?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Das schöne Mädchen by Farin Urlaub"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Erinnerungen") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/5F8NN7jdQljiBmmSRRj2ka?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Erinnerungen von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}


                      {(song.artist === "Korn" && song.title === "Word up!") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1pHPpLVH2XEN0xYRoQs4wq?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Word Up! by Korn"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Rage Against The Machine" && song.title === "Killing In The Name") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/59WN2psjkt1tyaxjspN8fp?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Killing in the Name by Rage Against The Machine"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Avril Lavigne" && song.title === "Sk8ter Boi") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/00Mb3DuaIH1kjrwOku9CGU?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Sk8ter Boi by Avril Lavigne"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Royal Republic" && song.title === "Everybody Wants to Be an Astronaut") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/7yyXv7BBX6Ud0r2OGYxvRb?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Everybody Wants to Be an Astronaut by Royal Republic"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Beartooth" && song.title === "King of Anything") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/61Aqcrs2bQeL6bsM8LOemK?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – King of Anything by Beartooth"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Papa Roach" && song.title === "Last Resort") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/5W8YXBz9MTIDyrpYaCg2Ky?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Last Resort by Papa Roach"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Die Ärzte" && song.title === "Junge") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/10waMsh44ojvTwXAIy213n?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Junge by Die Ärzte"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Joan Jett" && song.title === "I Love Rock'N Roll") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2Cdvbe2G4hZsnhNMKyGrie?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – I Love Rock N Roll by Joan Jett"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "System Of A Down" && song.title === "Lonely Day") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1VNWaY3uNfoeWqb5U8x2QX?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Lonely Day by System Of A Down"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Blink-182" && song.title === "All The Small Things") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2m1hi0nfMR9vdGC8UcrnwU?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – All The Small Things by Blink 182"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Billy Talent" && song.title === "Fallen Leaves") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3jUTjCISntIUFL8jnAjzgc?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Fallen Leaves by Billy Talent"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Lenny Kravitz" && song.title === "Fly Away") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1OxcIUqVmVYxT6427tbhDW?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Fly Away by Lenny Kravitz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Sportfreunde Stiller" && song.title === "Ein Kompliment") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/5QRkWkMabF6HJmQQm2HBVX?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Ein Kompliment von Sportfreunde Stiller"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Stunde des Siegers") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2WatMna4dkHY25Xo4y260V?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Stunde des Siegers von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Nirvana" && song.title === "Rape Me") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/5Rizj5FLb2AyNKu9esjYY6?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Rape Me von Nirvana"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Nickelback" && song.title === "How You Remind Me") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0gmbgwZ8iqyMPmXefof8Yf?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – How You Remind Me von Nickelback"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Sum 41" && song.title === "In Too Deep") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1HNE2PX70ztbEl6MLxrpNL?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – In Too Deep von Sum 41"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Ramones" && song.title === "Blitzkrieg Bop") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3dzG1BbbQrE8n3zuxHoR6b?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Blitzkrieg Bop von Ramones"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Kirche") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0xgfbP3ryZPZC0sK4PGChR?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Kirche von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "The Hives" && song.title === "Tick Tick Boom") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/7xl2ZaOnKAxJyrkIQe2S43?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Tick Tick Boom von The Hives"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Die Ärzte" && song.title === "Himmelblau") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/7fq710Wt4xdERqce0uAhNw?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Himmelblau von Die Ärzte"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Green Day" && song.title === "Brain Stew") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1nLnpLXvl68RZCSjfkyiaa?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Brain Stew von Green Day"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Volbeat" && song.title === "Fallen") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3gXxpp7y7EAOg4PVqqGCAb?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Fallen von Volbeat"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "The Offspring" && song.title === "Pretty Fly") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3SFXsFpeGmBTtQvKiwYMDA?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Pretty Fly von The Offspring"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Puddle Of Mudd" && song.title === "She Hates Me") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/16DhvbuyvJob4Q9GHNYu2n?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – She hates Me von Puddle Of Mudd"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Manowar" && song.title === "Warriors of the World") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/02zclmxRto3GAUBdtV7D8i?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Warriors of the World von Manowar"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Metallica" && song.title === "For Whom The Bell Tolls") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2dXsILW8gzkosqleHAvl0v?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – For Whom The Bell Tolls von Metallica"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Wir ham noch lange nicht genug") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/4gxYRhp7DeB11eC5VQOJ7w?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Wir Ham Noch Lange Nicht Genug von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Mexico") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3DcNqSXDgd6ILMuWSnrEvI?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Mexico von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Die Ärzte" && song.title === "Deine Schuld") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0GT9OI4Fot0TKzsUsO7SVA?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Deine Schuld von Die Ärzte"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Farin Urlaub" && song.title === "OK") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1JsGJJOdB2OZGxms8V97bf?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Ok von Farin Urlaub"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Green Day" && song.title === "When I Come Around") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1Dr1fXbc2IxaK1Mu8P8Khz?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – When I Come Around von Green Day"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Ich bin in Dir") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0wpfxeNyk9BSfQcCzfj61M?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Ich Bin In Dir von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Rammstein" && song.title === "Rammstein") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0Zfh4uDmJz3D44Qy9nYMqu?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Rammstein von Rammstein"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "The White Stripes" && song.title === "The Hardest Button to Button") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/3RdQfyk7BBxxIx0zSnCBIw?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – The Hardest Button to Button von The White Stripes"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Blur" && song.title === "Song 2") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1FTSo4v6BOZH9QxKc3MbVM?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Song 2 von Blur"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Nirvana" && song.title === "Come As You Are") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2RsAajgo0g7bMCHxwH3Sk0?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Come As You Are von Nirvana"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "The Subways" && song.title === "Rock & Roll Queen") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1uNKzxSXBkPTngkASu10pl?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Rock N Roll Queen von The Subways"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Die Ärzte" && song.title === "Hurra") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/5FxSMT9Yib2jObrvAKgtVE?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Hurra von Ärzte"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Judas Priest" && song.title === "Living After Midnight") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0IXpUl1fn2QZcBavfuq0H4?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Living After Midnight von Judas Priest"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Sleipnir" && song.title === "Alkoholiker") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1a5AHyGmachsiBjR7ZXexy?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Alkoholiker von Slipnir"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "AC/DC" && song.title === "Highway to Hell") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/2zYzyRzz6pRmhPzyfMEC8s?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Highway to Hell von AC/DC"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Metallica" && song.title === "Die, Die My Darling") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0t7LcUic4qolMCysPrKeAd?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Die Die My Darling von Metallica"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Bin ich nur glücklich wenn es schmerzt") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/74NBrEJMp3gVFfeWiOIzJi?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Bin Ich Nur glücklich wenn es schmerzt von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Green Day" && song.title === "Holiday") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/5vfjUAhefN7IjHbTvVCT4Z?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Holiday von Green Day"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Die Ärzte" && song.title === "Schrei nach Liebe") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/4P4PHxZQ1FcwQKKnfEPsAZ?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Schrei Nach Liebe von Ärzte"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "The Hives" && song.title === "Hate To Say I Told You So") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/20j7B6mL9gnNvG3ic6Vwh5?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Hate To Say I Told You So von The Hives"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Danzig" && song.title === "Mother") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/7txxAtOMwLLnQTpKeBL6bp?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Mother von Danzig"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Lynyrd Skynyrd" && song.title === "Simple Man") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1ju7EsSGvRybSNEsRvc7qY?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Simple Man von Lynyrd Skynyrd"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Nirvana" && song.title === "Smells Like Teen Spirit") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/4CeeEOM32jQcH3eN9Q2dGj?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Smells Like Teen Spirit von Nirvana"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Nur die besten sterben jung") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/6RMhSqv2gPXOrSH4e4zGkO?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Nur die Besten Sterben Jung von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Auf gute Freunde") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/0oIVNEkOgvOU9yG9oW13xC?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Auf Gute Freunde von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Wolfmother" && song.title === "Joker And The Thief") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/6dNJ3lasVLPd0078T9yqlm?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Joker and the Thief von Wolfmother"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Green Day" && song.title === "American Idiot") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/6nTiIhLmQ3FWhvrGafw2zj?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – American Idiot von Green Day"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Für immer") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/61NghtTREVsZXDxAEod6dY?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Für Immer von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Die Firma") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/4zsz7RcDf6w8zvM8rwnBVQ?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Die Firma von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Terpentin") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/1QZ2EDvjCPJNv5n9ZVMNuC?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Terpentin von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Red Hot Chili Peppers" && song.title === "Californication") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/48UPSzbZjgc449aqz8bxox?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Californication von Red Hot Chili Peppers"
                          ></iframe>
                        </div>
                      )}

                      {(song.artist === "Böhse Onkelz" && song.title === "Du kannst alles haben") && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                          <iframe
                            src="https://open.spotify.com/embed/track/61ptBy8V67BxjVj6yqCaLB?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl w-full"
                            title="Spotify Player – Du Kannst Alles Haben von Böhse Onkelz"
                          ></iframe>
                        </div>
                      )}

                    </CardContent>
                  </Card>
                </motion.div>
              ))}

            </div>

            {filteredSongs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Music className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground">
                  Keine Songs gefunden für "{searchTerm}"
                </p>
                <p className="text-muted-foreground mt-2">
                  Versucht es mit einem anderen Suchbegriff oder wählt ein anderes Genre.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Genre Stats */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-rock text-2xl font-bold text-center text-glow mb-8">
              Unser Sound-Spektrum
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {genres.slice(1).map((genre, index) => {
                const count = songs.filter(song => song.genre === genre).length;
                return (
                  <motion.div
                    key={genre}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-card border-border shadow-rock text-center">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${genreColors[genre]}`}>
                          <Music className="h-8 w-8" />
                        </div>
                        <h3 className="font-rock text-xl font-bold mb-2">{genre}</h3>
                        <p className="text-2xl font-bold text-primary mb-2">{count}</p>
                        <p className="text-sm text-muted-foreground">Songs</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Repertoire;
