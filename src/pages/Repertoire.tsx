import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Music, Filter } from "lucide-react";
import { useTextSplit } from "@/hooks/useGSAP";
import GroundFog from "@/components/ui/ground-fog";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";

interface Song {
  artist: string;
  title: string;
  genre: string[];
  spotifyTrackId?: string;
  links?: {
    spotify?: string;
    appleMusic?: string;
    amazonMusic?: string;
    youtube?: string;
  };
}

const Repertoire = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Alle");
  
  // GSAP Animation
  useTextSplit('.text-split-repertoire', 0.3);

  const songs: Song[] = [
    {
      artist: "System Of A Down",
      title: "Aerials",
      genre: ["Alternative Metal", "Nu Metal"],
      spotifyTrackId: "4e9eGQYsOiBcftrWXwsVco",
      links: {
        spotify: "https://open.spotify.com/track/4e9eGQYsOiBcftrWXwsVco",
        appleMusic: "https://music.apple.com/az/song/aerials/273714765",
        amazonMusic: "https://music.amazon.de/tracks/B07BCLK212?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_zZkF4lSoMoGDjbQbmqIy4DZ3P",
        youtube: "https://www.youtube.com/watch?v=L-iepu3EtyE&list=RDL-iepu3EtyE&start_radio=1"
      }
    },
    { artist: "Linkin Park", title: "Given Up", genre: ["Alternative Metal", "Nu Metal"], spotifyTrackId: "400lQTCx3wYGgqAIHSZbNA" },
    { artist: 'Red Hot Chili Peppers', title: "Can't Stop", genre: ['Indie', 'Funk', 'Alternative'], spotifyTrackId: '3ZOEytgrvLwQaqXreDs2Jx' },
    { artist: "Oasis", title: "Don't Look Back in Anger", genre: ["Rock"], spotifyTrackId: "7ppPZa3TRUSGKaks9wH7VT" },
    { artist: "Kraftklub", title: "Ich will nicht nach Berlin", genre: ["Indie", "Rock"], spotifyTrackId: "0XcC71H8QAjrW0NUqXHX1A" }, 
    { artist: "AC/DC", title: "The Jack", genre: ["Rock", "Hard Rock", "Blues Rock"], spotifyTrackId: "3k1WwLG1OXCm6iQ13VrJEL" },
    { artist: "Green Day", title: "Basket Case", genre: ["Punk Rock", "Alternative", "Pop-Punk", "Skate Punk"], spotifyTrackId: "6L89mwZXSOwYl76YXfX13s" },
    { artist: "Foo Fighters", title: "The Pretender", genre: ["Alternative", "Hard Rock", "Post-Grunge", "Indie"], spotifyTrackId: "7x8dCjCr0x6x2lXKujYD34" },
    { artist: "Die Ärzte", title: "½ Lovesong", genre: ["Punk Rock"], spotifyTrackId: "2WuvYQSuDtcCtdIjA87GJc" },
    { artist: "Blink-182", title: "Don't Leave Me", genre: ["Punk Rock", "Pop-Punk", "Skate Punk"], spotifyTrackId: "1IAeSajljaXAkLZKXBZnE8" },
    { artist: "Böhse Onkelz", title: "Leere Worte", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "71TxMg6HW4CilC1mMinFQ3" },
    { artist: "The White Stripes", title: "Seven Nation Army", genre: ["Garage Rock", "Alternative", "Indie", "Blues Rock", "Rock"], spotifyTrackId: "3dPQuX8Gs42Y7b454ybpMR" },
    { artist: "Volbeat", title: "Thanks", genre: ["Metal", "Heavy Metal", "Hard Rock", "Rockabilly"], spotifyTrackId: "4y4kqfSO4Qjd5h2RyyqBpz" },
    { artist: "Peter Schilling/Die Ärzte/The McCoys", title: "Medley: Major Tom/Westerland/Hang on Sloopy", genre: ["Mix"], spotifyTrackId: "6lXKNdOsnaLv9LwulZbxNl" },
    { artist: "Rammstein", title: "Deutschland", genre: ["Industrial Metal", "Metal"], spotifyTrackId: "2bPGTMB5sFfFYQ2YvSmup0" },
    { artist: "Sum 41", title: "The Hell Song", genre: ["Punk Rock", "Alternative", "Indie"], spotifyTrackId: "6hqt1z34Oz0OZtSfy62OFD" },
    { artist: "Bloodhound Gang", title: "Fire Water Burn", genre: ["Alternative", "Rock", "Funk", "Indie"], spotifyTrackId: "7FkyQsWH9mmxoYLCNj4f8y" },
    { artist: "Die Toten Hosen", title: "Kein Alkohol ist auch keine Lösung", genre: ["Punk Rock", "Rock"], spotifyTrackId: "3Rr1CJW6dW9MYNOsOruhby" },
    { artist: "Red Hot Chili Peppers", title: "Dani California", genre: ["Funk", "Alternative", "Indie"], spotifyTrackId: "10Nmj3JCNoMeBQ87uw5j8k" },
    { artist: "Farin Urlaub", title: "Das schöne Mädchen", genre: ["Rock", "Punk"], spotifyTrackId: "60YrmyQdkjuSIDfgVqhg96" },
    { artist: "Böhse Onkelz", title: "Erinnerungen", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "5F8NN7jdQljiBmmSRRj2ka" },
    { artist: "Korn", title: "Word up!", genre: ["Nu Metal", "Alternative"], spotifyTrackId: "1pHPpLVH2XEN0xYRoQs4wq" },
    { artist: "Rage Against The Machine", title: "Killing In The Name", genre: ["Alternative", "Metal", "Funk"], spotifyTrackId: "59WN2psjkt1tyaxjspN8fp" },
    { artist: "Avril Lavigne", title: "Sk8ter Boi", genre: ["Pop-Punk", "Skate Punk"], spotifyTrackId: "7fwuc4qnqUkrqJwhogeTOE" },
    { artist: "Royal Republic", title: "Everybody Wants to Be an Astronaut", genre: ["Garage Rock", "Alternative"], spotifyTrackId: "2ij6yADMQmxbNgcJyZNlV4" },
    { artist: "Beartooth", title: "King of Anything", genre: ["Metalcore"], spotifyTrackId: "61Aqcrs2bQeL6bsM8LOemK" },
    { artist: "Papa Roach", title: "Last Resort", genre: ["Nu Metal", "Alternative"], spotifyTrackId: "5W8YXBz9MTIDyrpYaCg2Ky" },
    { artist: "Die Ärzte", title: "Junge", genre: ["Punk Rock"], spotifyTrackId: "10waMsh44ojvTwXAIy213n" },
    { artist: "Joan Jett", title: "I Love Rock'N Roll", genre: ["Rock", "Hard Rock"], spotifyTrackId: "2Cdvbe2G4hZsnhNMKyGrie" },
    { artist: "System Of A Down", title: "Lonely Day", genre: ["Alternative", "Metal"], spotifyTrackId: "1VNWaY3uNfoeWqb5U8x2QX" },
    { artist: "Blink-182", title: "All The Small Things", genre: ["Punk Rock"], spotifyTrackId: "2m1hi0nfMR9vdGC8UcrnwU" },
    { artist: "Billy Talent", title: "Fallen Leaves", genre: ["Alternative", "Rock"], spotifyTrackId: "3jUTjCISntIUFL8jnAjzgc" },
    { artist: "Lenny Kravitz", title: "Fly Away", genre: ["Funk", "Alternative"], spotifyTrackId: "1OxcIUqVmVYxT6427tbhDW" },
    { artist: "Sportfreunde Stiller", title: "Ein Kompliment", genre: ["Indie", "Rock", "Alternative"], spotifyTrackId: "5QRkWkMabF6HJmQQm2HBVX" },
    { artist: "Böhse Onkelz", title: "Stunde des Siegers", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "2WatMna4dkHY25Xo4y260V" },
    { artist: "Nirvana", title: "Rape Me", genre: ["Grunge"], spotifyTrackId: "5Rizj5FLb2AyNKu9esjYY6" },
    { artist: "Nickelback", title: "How You Remind Me", genre: ["Post-Grunge", "Hard Rock"], spotifyTrackId: "0gmbgwZ8iqyMPmXefof8Yf" },
    { artist: "Sum 41", title: "In Too Deep", genre: ["Punk Rock", "Alternative"], spotifyTrackId: "1HNE2PX70ztbEl6MLxrpNL" },
    { artist: "Ramones", title: "Blitzkrieg Bop", genre: ["Punk Rock"], spotifyTrackId: "3dzG1BbbQrE8n3zuxHoR6b" },
    { artist: "Böhse Onkelz", title: "Kirche", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "0xgfbP3ryZPZC0sK4PGChR" },
    { artist: "The Hives", title: "Tick Tick Boom", genre: ["Garage Rock", "Alternative", "Indie"], spotifyTrackId: "7xl2ZaOnKAxJyrkIQe2S43" },
    { artist: "Die Ärzte", title: "Himmelblau", genre: ["Punk Rock"], spotifyTrackId: "7fq710Wt4xdERqce0uAhNw" },
    { artist: "Green Day", title: "Brain Stew", genre: ["Punk Rock", "Alternative"], spotifyTrackId: "1nLnpLXvl68RZCSjfkyiaa" },
    { artist: "Volbeat", title: "Fallen", genre: ["Metal", "Rockabilly"], spotifyTrackId: "3gXxpp7y7EAOg4PVqqGCAb" },
    { artist: "The Offspring", title: "Pretty Fly", genre: ["Punk Rock", "Skate Punk", "Alternative"], spotifyTrackId: "3SFXsFpeGmBTtQvKiwYMDA" },
    { artist: "Puddle Of Mudd", title: "She Hates Me", genre: ["Post-Grunge", "Alternative"], spotifyTrackId: "16DhvbuyvJob4Q9GHNYu2n" },
    { artist: "Manowar", title: "Warriors of the World", genre: ["Heavy Metal"], spotifyTrackId: "0GQfQ8FMofK4FVFpC4Vvxq" },
    { artist: "Metallica", title: "For Whom The Bell Tolls", genre: ["Metal", "Heavy Metal"], spotifyTrackId: "4MgMDL78p9R5GHxHLCcC1b" },
    { artist: "Böhse Onkelz", title: "Wir ham noch lange nicht genug", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "2tTT2LsNqxMz3fHDdO9Cco" },
    { artist: "Böhse Onkelz", title: "Mexico", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "2v1QddDvfW4SY9cMZaP2nG" },
    { artist: "Die Ärzte", title: "Deine Schuld", genre: ["Punk Rock"], spotifyTrackId: "0GT9OI4Fot0TKzsUsO7SVA" },
    { artist: "Farin Urlaub", title: "OK", genre: ["Rock", "Punk Rock"], spotifyTrackId: "1JsGJJOdB2OZGxms8V97bf" },
    { artist: "Green Day", title: "When I Come Around", genre: ["Punk Rock", "Alternative"], spotifyTrackId: "1Dr1fXbc2IxaK1Mu8P8Khz" },
    { artist: "Böhse Onkelz", title: "Ich bin in Dir", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "0wpfxeNyk9BSfQcCzfj61M" },
    { artist: "Rammstein", title: "Rammstein", genre: ["Industrial Metal", "Metal"], spotifyTrackId: "0Zfh4uDmJz3D44Qy9nYMqu" },
    { artist: "The White Stripes", title: "The Hardest Button to Button", genre: ["Garage Rock", "Alternative", "Indie"], spotifyTrackId: "3RdQfyk7BBxxIx0zSnCBIw" },
    { artist: "Blur", title: "Song 2", genre: ["Alternative", "Rock", "Indie"], spotifyTrackId: "1FTSo4v6BOZH9QxKc3MbVM" },
    { artist: "Nirvana", title: "Come As You Are", genre: ["Grunge", "Alternative"], spotifyTrackId: "2RsAajgo0g7bMCHxwH3Sk0" },
    { artist: "The Subways", title: "Rock & Roll Queen", genre: ["Indie", "Rock", "Alternative"], spotifyTrackId: "1uNKzxSXBkPTngkASu10pl" },
    { artist: "Die Ärzte", title: "Hurra", genre: ["Punk Rock"], spotifyTrackId: "5FxSMT9Yib2jObrvAKgtVE" },
    { artist: "Judas Priest", title: "Living After Midnight", genre: ["Heavy Metal", "Metal"], spotifyTrackId: "0IXpUl1fn2QZcBavfuq0H4" },
    { artist: "Sleipnir", title: "Alkoholiker", genre: ["Rock"], spotifyTrackId: "1a5AHyGmachsiBjR7ZXexy" },
    { artist: "AC/DC", title: "Highway to Hell", genre: ["Rock", "Hard Rock"], spotifyTrackId: "2zYzyRzz6pRmhPzyfMEC8s" },
    { artist: "Metallica", title: "Die, Die My Darling", genre: ["Metal", "Heavy Metal"], spotifyTrackId: "0t7LcUic4qolMCysPrKeAd" },
    { artist: "Böhse Onkelz", title: "Bin ich nur glücklich wenn es schmerzt", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "74NBrEJMp3gVFfeWiOIzJi" },
    { artist: "Green Day", title: "Holiday", genre: ["Punk Rock", "Alternative"], spotifyTrackId: "5vfjUAhefN7IjHbTvVCT4Z" },
    { artist: "Die Ärzte", title: "Schrei nach Liebe", genre: ["Punk Rock"], spotifyTrackId: "4P4PHxZQ1FcwQKKnfEPsAZ" },
    { artist: "The Hives", title: "Hate To Say I Told You So", genre: ["Garage Rock", "Alternative"], spotifyTrackId: "20j7B6mL9gnNvG3ic6Vwh5" },
    { artist: "Danzig", title: "Mother", genre: ["Heavy Metal", "Hard Rock"], spotifyTrackId: "7txxAtOMwLLnQTpKeBL6bp" },
    { artist: "Lynyrd Skynyrd", title: "Simple Man", genre: ["Southern Rock", "Hard Rock"], spotifyTrackId: "1ju7EsSGvRybSNEsRvc7qY" },
    { artist: "Nirvana", title: "Smells Like Teen Spirit", genre: ["Grunge"], spotifyTrackId: "4CeeEOM32jQcH3eN9Q2dGj" },
    { artist: "Böhse Onkelz", title: "Nur die besten sterben jung", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "6RMhSqv2gPXOrSH4e4zGkO" },
    { artist: "Böhse Onkelz", title: "Auf gute Freunde", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "0oIVNEkOgvOU9yG9oW13xC" },
    { artist: "Wolfmother", title: "Joker And The Thief", genre: ["Rock", "Hard Rock"], spotifyTrackId: "6dNJ3lasVLPd0078T9yqlm" },
    { artist: "Green Day", title: "American Idiot", genre: ["Punk Rock", "Alternative"], spotifyTrackId: "6nTiIhLmQ3FWhvrGafw2zj" },
    { artist: "Böhse Onkelz", title: "Für immer", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "61NghtTREVsZXDxAEod6dY" },
    { artist: "Böhse Onkelz", title: "Die Firma", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "4zsz7RcDf6w8zvM8rwnBVQ" },
    { artist: "Böhse Onkelz", title: "Terpentin", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "1QZ2EDvjCPJNv5n9ZVMNuC" },
    { artist: "Red Hot Chili Peppers", title: "Californication", genre: ["Alternative", "Funk"], spotifyTrackId: "48UPSzbZjgc449aqz8bxox" },
    { artist: "Böhse Onkelz", title: "Du kannst alles haben", genre: ["Hard Rock", "Deutschrock"], spotifyTrackId: "61ptBy8V67BxjVj6yqCaLB" }
  ];

  const genres = [
  "Alle",
  ...Array.from(
    new Set(songs.flatMap(song => song.genre))
  )
];


  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "Alle" || song.genre.includes(selectedGenre);

    return matchesSearch && matchesGenre;
  });

  const genreColors: Record<string, string> = {
  Rock: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Hard Rock": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Blues Rock": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "Southern Rock": "bg-amber-500/20 text-amber-400 border-amber-500/30",

  Metal: "bg-red-500/20 text-red-400 border-red-500/30",
  "Heavy Metal": "bg-red-700/20 text-red-500 border-red-700/30",
  "Nu Metal": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  "Industrial Metal": "bg-gray-500/20 text-gray-400 border-gray-500/30",
  Metalcore: "bg-lime-500/20 text-lime-400 border-lime-500/30",

  "Punk Rock": "bg-green-500/20 text-green-400 border-green-500/30",
  "Pop-Punk": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Skate Punk": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",

  Alternative: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Indie: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  "Garage Rock": "bg-orange-500/20 text-orange-400 border-orange-500/30",

  Funk: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
  Grunge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Post-Grunge": "bg-rose-500/20 text-rose-400 border-rose-500/30",

  Rockabilly: "bg-yellow-700/20 text-yellow-500 border-yellow-700/30",
  Deutschrock: "bg-stone-500/20 text-stone-400 border-stone-500/30",

  Mix: "bg-neutral-500/20 text-neutral-400 border-neutral-500/30",
  Punk: "bg-green-600/20 text-green-500 border-green-600/30",
  "Alternative Metal": "bg-red-600/20 text-red-400 border-red-600/30",
};


  const roundedSongsCount = Math.floor(songs.length / 10) * 10;

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background/50 to-rock-lighter w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-rock text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6 leading-tight text-split-repertoire">
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

                        <div className="flex flex-wrap gap-1 max-w-full">
                          {song.genre.map((g) => (
                            <span
                              key={g}
                              className={`px-3 py-1 rounded-full border text-sm font-semibold whitespace-normal break-words ${genreColors[g] || "bg-neutral-500/20 text-neutral-400 border-neutral-500/30"}`}
                            >
                              {g}
                            </span>
                          ))}
                        </div>

                      </div>

                      {/* Spotify Embed mit DSGVO-konformer Zwei-Klick-Lösung */}
                      {song.spotifyTrackId && (
                        <SpotifyEmbed 
                          trackId={song.spotifyTrackId} 
                          title={`Spotify Player – ${song.title} von ${song.artist}`} 
                        />
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
                const count = songs.filter(song => song.genre.includes(genre)).length;
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
                        <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${genreColors[genre] || "bg-neutral-500/20 text-neutral-400 border-neutral-500/30"}`}>
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
