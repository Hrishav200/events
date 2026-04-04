export interface Band {
  name: string;
  genre: string;
  desc: string;
  image: string;
  socials: { label: string; url: string }[];
  playlist: { name: string; dur: string }[];
}

export const Artists = [
  {
    name: "Subik",
    genre: "Rock",
    image: "/subik.jpg",
    desc: "Subik kick off the night with his signature blend of high-energy Rock and infectious melodies. With a reputation for electrifying live shows, he is guaranteed to get the crowd moving and set the tone for an unforgettable evening.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/subik182?igsh=MXBnMG1sNmYzajYxaQ==",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@subikshrestha4284",
      },
    ],
    playlist: [
      { name: "Open Wide", dur: "5:01" },
      { name: "Kaleidoscope Mind", dur: "4:33" },
      { name: "The Watcher", dur: "6:10" },
      { name: "Neon Visions", dur: "3:48" },
      { name: "Beyond the Veil", dur: "5:55" },
    ],
  },
  {
    name: "ANORI",
    image: "/anori.jpg",
    genre: "Acoustic / Singer",
    desc: "A spotlight on the individual — raw, unfiltered, and deeply personal. Melbourne's solo artists take the mic between sets to share something intimate with the crowd. No band needed. Just pure heart.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/yourfavsongwriter?igsh=bHhxc2xtY216ZWp4",
      },
    ],
    playlist: [
      { name: "Just Me & The Room", dur: "3:30" },
      { name: "Stripped Back", dur: "4:10" },
      { name: "Honest Hours", dur: "3:55" },
      { name: "One Voice", dur: "4:20" },
    ],
  },
  {
    name: "Khatra",
    image: "/khatra.jpg",
    genre: "Rock / Melodious",
    desc: "Khatra blend driving Rock energy with deeply melodious songwriting — the kind of music that gets under your skin and stays there. Powerful, tuneful and impossible to ignore.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/khatrax2.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/watch?v=1eMwX1AYBRA&list=RD1eMwX1AYBRA&start_radio=1",
      },
    ],
    playlist: [
      { name: "Lit Fuse", dur: "3:20" },
      { name: "City Pulse", dur: "4:05" },
      { name: "Gold Chain Logic", dur: "3:55" },
      { name: "Aftermath", dur: "5:12" },
      { name: "Unstoppable", dur: "4:22" },
    ],
  },
  {
    name: "Talamuni",
    image: "/talamuni.jpg",
    genre: "Grunge / Rock / Metal / Punk",
    desc: "Talamuni close the night with full-force chaos and heart. Grunge grit, Metal weight, Punk attitude and Rock soul — all at once. This is the set that everyone will still be talking about the next morning.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/tala.muni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
    playlist: [
      { name: "Abhiman — Albatross", dur: "6:11" },
      { name: "Mero Lagi — Cobweb", dur: "4:50" },
      { name: "Harayeko Graha — Kush", dur: "3:45" },
      { name: "Khaseka Tara — Albatross", dur: "5:15" },
      { name: "Hypnotize — System Of A Down", dur: "3:15" },
      { name: "Bachau — Albatross", dur: "4:30" },
      { name: "Man in the Box — Alice in Chains", dur: "4:55" },
      { name: "I think we're alone", dur: "2:30" },
      { name: "Hidne Manche Ladcha", dur: "3:50" },
    ],
  },
];

export const Schedule = [
  {
    event: "Doors Open – Welcome & Warm-up",
    time: "6:00 PM",
    label: "Arrival",
  },
  {
    event: "ANORI",
    time: "6:30 PM",
    label: "Opening Set",
  },
  {
    event: "Subik Shrestha",
    time: "7:15 PM",
    label: "Main Stage",
  },

  {
    event: "Khatra",
    time: "8:45 PM",
    label: "Main Stage",
  },
  {
    event: "Talamuni",
    time: "9:45 PM",
    label: "Closing Act",
  },
  {
    event: "The Encore – Final Bows & After Vibes",
    time: "11:00 PM",
    label: "End of Night",
  },
];
