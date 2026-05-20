"use client";
import { useState, useEffect } from "react";

// Sample artist data (you can expand this)
const artists = [
  {
    name: "Justin Bieber",
    listeners: 138020000,
    image:
      "https://pyxis.nymag.com/v1/imgs/363/20a/dcd487d85e5596c79f5d67e1ce756ed226-justinbieber.rhorizontal.w700.jpg",
  },
  {
    name: "Bruno Mars",
    listeners: 136980000,
    image:
      "https://www.billboard.com/wp-content/uploads/2025/01/Bruno-Mars-cr-2025-billboard-1548.jpg?w=942&h=628&crop=1",
  },
  {
    name: "The Weeknd",
    listeners: 115780000,
    image:
      "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/unnamed_12_yqagvp/photo-duncan-loudon.jpg",
  },
  {
    name: "Rihanna",
    listeners: 111070000,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/rihanna-attends-the-savage-x-fenty-celebration-of-lavish-news-photo-1758829666.pjpeg?crop=0.516xw:0.344xh;0.283xw,0.0645xh&resize=640:*",
  },
  {
    name: "Bad Bunny",
    listeners: 102470000,
    image:
      "https://www.billboard.com/wp-content/uploads/2023/10/bad-bunny-press-2023-billboard-1548.jpg?w=1024",
  },
  {
    name: "Taylor Swift",
    listeners: 101430000,
    image:
      "https://preview.redd.it/new-pic-of-taylor-for-spotify-v0-2bf4vwf5m3z71.png?width=1080&crop=smart&auto=webp&s=523316a5c3571c5ee7756afb8d0b2b2647566ef4",
  },
  {
    name: "Lady Gaga",
    listeners: 96930000,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/lady-gaga-attends-the-64th-annual-grammy-awards-at-mgm-news-photo-1727455427.jpg?crop=1.00xw:0.667xh;0,0.0477xh&resize=640:*",
  },
  {
    name: "Coldplay",
    listeners: 91290000,
    image:
      "https://tributetoentertainment.wordpress.com/wp-content/uploads/2012/06/coldplay.jpg",
  },
  {
    name: "Drake",
    listeners: 88930000,
    image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
  },
  {
    name: "David Guetta",
    listeners: 88090000,
    image:
      "https://www.billboard.com/wp-content/uploads/media/David-Guetta-press-by-Guerin-Blask-2019-billboard-1548.jpg",
  },
  {
    name: "Billie Eilish",
    listeners: 84230000,
    image: "https://pbs.twimg.com/media/GJ8xY3QWkAABDxa.jpg",
  },
  {
    name: "Ed Sheeran",
    listeners: 83590000,
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/05/18/Ed-Sheeran.jpg?width=1200&height=1200&fit=crop",
  },
  {
    name: "Ariana Grande",
    listeners: 83550000,
    image:
      "https://api.screendollars.com/wp-content/uploads/2024/04/0-ARIANA-GRANDE-PROFILE-02-1.jpg",
  },
  {
    name: "Shakira",
    listeners: 81020000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/960px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg",
  },
  {
    name: "Michael Jackson",
    listeners: 78340000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg/960px-Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg",
  },
  {
    name: "Katy Perry",
    listeners: 77330000,
    image: "https://i.scdn.co/image/ab6761610000e5eb4be5330bd48527f9dd620663",
  },
  {
    name: "Kanye West",
    listeners: 77060000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/250px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg",
  },
  {
    name: "Maroon 5",
    listeners: 76470000,
    image:
      "https://static.wikia.nocookie.net/whumpapedia/images/5/5d/Maroon_5.jpeg/revision/latest?cb=20211029190920",
  },
  {
    name: "Calvin Harris",
    listeners: 75520000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Calvin_Harris_-_Press_Image_1.tif/lossy-page1-960px-Calvin_Harris_-_Press_Image_1.tif.jpg",
  },
  {
    name: "Eminem",
    listeners: 75090000,
    image: "https://i8.amplience.net/i/naras/eminem.jpg.jpg",
  },
  {
    name: "Pitbull",
    listeners: 74180000,
    image: "https://i.scdn.co/image/ab6761610000e5eb8d8ac7290d0fe2d12fb6e4d9",
  },
  {
    name: "J Balvin",
    listeners: 73650000,
    image: "https://i.scdn.co/image/ab6761610000e5eb0405b03342c2e56751b9923d",
  },
  {
    name: "Kendrick Lamar",
    listeners: 71240000,
    image:
      "https://pyxis.nymag.com/v1/imgs/295/196/5f609a1bcf3bff4bde163d2287d72a5eaa-kendrick-ranking.1x.rsquare.w1400.jpg",
  },
  {
    name: "Zara Larsson",
    listeners: 69980000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Zara_Larsson_Midnight_Sun_European_Tour_%28cropped%29_%28cropped%29.jpg",
  },
  {
    name: "SZA",
    listeners: 68920000,
    image: "https://i.scdn.co/image/ab67616d00001e02e44bcbfd5aa9f2300d2ee63e",
  },
  {
    name: "Sia",
    listeners: 68780000,
    image: "https://i.scdn.co/image/ab67616d0000b273b9bea8700ca3c305eb9569a3",
  },
  {
    name: "Harry Styles",
    listeners: 67530000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzo2SLNVf9fp2J_1sGEG6OkJ-DiynI2ouFog&s",
  },
  {
    name: "Sabrina Carpenter",
    listeners: 66490000,
    image: "https://i.scdn.co/image/ab6761610000e5eb78e45cfa4697ce3c437cb455",
  },
  {
    name: "Lana Del Rey",
    listeners: 65790000,
    image:
      "https://i.pinimg.com/564x/27/e9/95/27e995ad2a080ea68dbbf8b9e8df97e8.jpg",
  },
  {
    name: "Dominic Fike",
    listeners: 65160000,
    image:
      "https://i.pinimg.com/736x/0e/b3/df/0eb3dff72af9b31caad7043687b8b847.jpg",
  },
  {
    name: "Dua Lipa",
    listeners: 64740000,
    image: "https://pbs.twimg.com/media/GK6tvifXoAANoLJ.jpg",
  },
  {
    name: "Travis Scott",
    listeners: 64710000,
    image: "https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71",
  },
  {
    name: "Daddy Yankee",
    listeners: 64540000,
    image: "https://i.scdn.co/image/ab6761610000e5eb9a6918fd0b2fd675d63c675d",
  },
  {
    name: "Sean Paul",
    listeners: 64180000,
    image: "https://i.scdn.co/image/ab6761610000e5eb60c3e9abe7327c0097738f22",
  },
  {
    name: "Tame Impala",
    listeners: 64050000,
    image: "https://i.scdn.co/image/ab6775700000ee855727af33566afe27c08c6284",
  },
  {
    name: "Chris Brown",
    listeners: 63100000,
    image: "https://i.scdn.co/image/ab67616d0000b2734b28d4d23dc56dc3ceda4b5d",
  },
  {
    name: "Post Malone",
    listeners: 61760000,
    image:
      "https://cherrybeachsound.com/wp-content/uploads/2023/11/Post-Malone.webp",
  },
  {
    name: "Miley Cyrus",
    listeners: 60420000,
    image: "https://i.scdn.co/image/ab67616100005174b14a2f1cede69cef4fb03b60",
  },
  {
    name: "Black Eyed Peas",
    listeners: 60060000,
    image: "https://i.scdn.co/image/ab6775700000ee85a94a9cd3681f98bfe41df5fc",
  },
  {
    name: "Adele",
    listeners: 57750000,
    image: "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
  },
  {
    name: "Olivia Rodrigo",
    listeners: 57480000,
    image: "https://i.scdn.co/image/ab6761610000e5ebe654806251e2661def1f4e65",
  },
  {
    name: "JENNIE",
    listeners: 56810000,
    image: "https://www.hellokpop.com/wp-content/uploads/2021/01/jennie.jpg",
  },
  {
    name: "DJ Snake",
    listeners: 56800000,
    image: "https://i.scdn.co/image/ab67616100005174175df1a8848d8ff67c6d5600",
  },
  {
    name: "Doja Cat",
    listeners: 56730000,
    image: "https://i.scdn.co/image/ab6761610000e5eb8a0644455ebfa7d3976f5101",
  },
  {
    name: "Beyoncé",
    listeners: 56440000,
    image: "https://i.scdn.co/image/ab6761610000e5eb7eaa373538359164b843f7c0",
  },
  {
    name: "Arijit Singh",
    listeners: 55880000,
    image: "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7",
  },
  {
    name: "Linkin Park",
    listeners: 55590000,
    image: "https://i.scdn.co/image/ab67616d0000b273f208c8aa667a6d4f6feb8bbc",
  },
  {
    name: "Imagine Dragons",
    listeners: 55040000,
    image: "https://i.scdn.co/image/ab6761610000e5ebab47d8dae2b24f5afe7f9d38",
  },
  {
    name: "KAROL G",
    listeners: 54770000,
    image: "https://i.scdn.co/image/ab6761610000e5eb66041ce9eb4497057cbc3496",
  },
  {
    name: "Halsey",
    listeners: 52540000,
    image: "https://i.scdn.co/image/ab6761610000e5eb15136101a0f63f0b2800b9dc",
  },
];
function getRandomArtist(exclude) {
  let filtered = artists.filter((a) => a.name !== exclude?.name);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export default function Home() {
  const [artistA, setArtistA] = useState(null);
  const [artistB, setArtistB] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const a = getRandomArtist();
    const b = getRandomArtist(a);
    setArtistA(a);
    setArtistB(b);
  }, []);

  const handleGuess = (guess) => {
    if (gameOver) return;

    const isHigher = artistB.listeners > artistA.listeners;

    if ((guess === "higher" && isHigher) || (guess === "lower" && !isHigher)) {
      setScore(score + 1);
      setArtistA(artistB);
      setArtistB(getRandomArtist(artistB));
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    const a = getRandomArtist();
    const b = getRandomArtist(a);
    setArtistA(a);
    setArtistB(b);
    setScore(0);
    setGameOver(false);
  };

  if (!artistA || !artistB) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎵 Higher or Lower</h1>

      <div style={styles.scoreBoard}>
        <div style={styles.scoreText}>🔥 Score: {score}</div>
      </div>

      <div style={styles.gameArea}>
        {/* LEFT */}
        <div style={styles.card} onClick={() => handleGuess("lower")}>
          <img src={artistA.image} style={styles.image} />
          <h2>{artistA.name}</h2>
          <p>{artistA.listeners.toLocaleString()}</p>
        </div>

        <div style={styles.vs}>VS</div>

        {/* RIGHT */}
        <div style={styles.card} onClick={() => handleGuess("higher")}>
          <img src={artistB.image} style={styles.image} />
          <h2>{artistB.name}</h2>

          {!gameOver ? (
            <p>??? listeners</p>
          ) : (
            <p>{artistB.listeners.toLocaleString()}</p>
          )}
        </div>
      </div>

      {!gameOver ? (
        <></>
      ) : (
        <div>
          <h2>Game Over 😢</h2>
          <button style={styles.button} onClick={resetGame}>
            🔄 Play Again
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    minHeight: "100vh",
    padding: "40px 20px",
    color: "#fff",

    background: `
      radial-gradient(circle at top left, rgba(124,58,237,0.5), transparent 30%),
      radial-gradient(circle at top right, rgba(59,130,246,0.4), transparent 30%),
      linear-gradient(135deg, #0f172a, #111827)
    `,
  },

  title: {
    fontSize: "40px",
    fontWeight: "800",
    marginBottom: "20px",
  },

  scoreBoard: {
    display: "inline-block",
    padding: "10px 25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.08)",
    marginBottom: "30px",
  },

  scoreText: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#38bdf8",
  },

  gameArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
    width: "260px",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",

    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.15)",

    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
  },

  vs: {
    fontSize: "40px",
    fontWeight: "900",
    color: "#facc15",
  },

  hint: {
    marginTop: "20px",
    color: "#94a3b8",
  },

  button: {
    marginTop: "20px",
    padding: "12px 25px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
    color: "#fff",
  },
};
