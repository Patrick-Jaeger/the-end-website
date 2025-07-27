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
    { artist: "Metallica", title: "Enter Sandman", genre: "Metal" },
    { artist: "Metallica", title: "Master of Puppets", genre: "Metal" },
    { artist: "Metallica", title: "One", genre: "Metal" },
    { artist: "Green Day", title: "American Idiot", genre: "Punk" },
    { artist: "Green Day", title: "Basket Case", genre: "Punk" },
    { artist: "Green Day", title: "When I Come Around", genre: "Punk" },
    { artist: "Die Ärzte", title: "Schrei nach Liebe", genre: "Punk" },
    { artist: "Die Ärzte", title: "Westerland", genre: "Punk" },
    { artist: "Die Ärzte", title: "Männer sind Schweine", genre: "Punk" },
    { artist: "Nirvana", title: "Smells Like Teen Spirit", genre: "Rock" },
    { artist: "Nirvana", title: "Come As You Are", genre: "Rock" },
    { artist: "Nirvana", title: "In Bloom", genre: "Rock" },
    { artist: "AC/DC", title: "Highway to Hell", genre: "Rock" },
    { artist: "AC/DC", title: "Back in Black", genre: "Rock" },
    { artist: "AC/DC", title: "Thunderstruck", genre: "Rock" },
    { artist: "Iron Maiden", title: "The Number of the Beast", genre: "Metal" },
    { artist: "Iron Maiden", title: "Run to the Hills", genre: "Metal" },
    { artist: "Black Sabbath", title: "Paranoid", genre: "Metal" },
    { artist: "Led Zeppelin", title: "Stairway to Heaven", genre: "Rock" },
    { artist: "Deep Purple", title: "Smoke on the Water", genre: "Rock" },
    { artist: "The Ramones", title: "Blitzkrieg Bop", genre: "Punk" },
    { artist: "Sex Pistols", title: "Anarchy in the UK", genre: "Punk" },
    { artist: "Foo Fighters", title: "Everlong", genre: "Rock" },
    { artist: "Foo Fighters", title: "Best of You", genre: "Rock" },
    { artist: "Queens of the Stone Age", title: "No One Knows", genre: "Rock" }
  ];

  const genres = ["Alle", "Rock", "Metal", "Punk"];

  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         song.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "Alle" || song.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const genreColors = {
    Rock: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Metal: "bg-red-500/20 text-red-400 border-red-500/30", 
    Punk: "bg-green-500/20 text-green-400 border-green-500/30"
  };

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background/50 to-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6">
              Repertoire
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unsere Setlist - von Punk über klassischem Rock bis Metal. 
              Über {songs.length} Songs für jeden Geschmack!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Song oder Artist suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>
              
              {/* Genre Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <div className="flex space-x-2">
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
            </div>

            {/* Results Counter */}
            <p className="text-muted-foreground mb-6">
              {filteredSongs.length} Song{filteredSongs.length !== 1 ? 's' : ''} gefunden
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <Music className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-rock text-lg font-bold">
                              {song.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {song.artist}
                            </p>
                          </div>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full border text-sm font-semibold ${genreColors[song.genre]}`}>
                          {song.genre}
                        </div>
                      </div>
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