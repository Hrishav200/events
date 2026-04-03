export interface Band {
  name: string;
  genre: string;
  desc: string;
  socials: { label: string; url: string }[];
  playlist: { name: string; dur: string }[];
}

export const bands = [
  {
    name: "Aquapuncture",
    genre: "Soft Rock / Yacht Rock / Pop / Soul / Light Jazz",
    desc: "Aquapuncture bring a smooth, sun-soaked energy to open the night. Drawing from Soft Rock, Yacht Rock, Pop, Soul and a touch of Light Jazz, their sound is effortlessly cool — the kind that feels good from the very first note.",
    socials: [
      { label: "Facebook", url: "https://www.facebook.com/aquapuncture" },
    ],
    playlist: [
      { name: "First Breath", dur: "4:12" },
      { name: "Meridian Flow", dur: "5:30" },
      { name: "Pressure Points", dur: "3:55" },
      { name: "Deep Currents", dur: "6:20" },
      { name: "Surface Tension", dur: "4:44" },
    ],
  },
  {
    name: "The Third Eye",
    genre: "Hard Rock",
    desc: "The Third Eye don't ask for your attention — they take it. Thunderous riffs, raw power and an intensity that hits you in the chest. Their Hard Rock set is built to shake the room and leave a mark.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/the_3rd_eye_band?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
    name: "Khatra",
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
    genre: "Grunge / Rock / Metal / Punk",
    desc: "Talamuni close the night with full-force chaos and heart. Grunge grit, Metal weight, Punk attitude and Rock soul — all at once. This is the set that everyone will still be talking about the next morning.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/tala.muni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      { label: "YouTube", url: "https://youtube.com" },
    ],
    playlist: [
      { name: "Abhiman — Albatross", dur: "" },
      { name: "Mero Lagi — Cobweb", dur: "" },
      { name: "Harayeko Graha — Kush", dur: "" },
      { name: "Khaseka Tara — Albatross", dur: "" },
      { name: "Hypnotize — System Of A Down", dur: "" },
      { name: "Bachau — Albatross", dur: "" },
      { name: "Man in the Box — Alice in Chains", dur: "" },
      { name: "TBD", dur: "" },
      { name: "Original", dur: "" },
    ],
  },
  {
    name: "Solo Performances",
    genre: "Acoustic / Singer-Songwriter",
    desc: "A spotlight on the individual — raw, unfiltered, and deeply personal. Melbourne's solo artists take the mic between sets to share something intimate with the crowd. No band needed. Just pure heart.",
    socials: [],
    playlist: [
      { name: "Just Me & The Room", dur: "3:30" },
      { name: "Stripped Back", dur: "4:10" },
      { name: "Honest Hours", dur: "3:55" },
      { name: "One Voice", dur: "4:20" },
    ],
  },
];

export const schedule = [
  {
    event: "Doors Open – Welcome & Warm-up",
    time: "6:00 PM",
    label: "Arrival",
  },
  {
    event: "Aquapuncture",
    time: "6:30 PM",
    label: "Opening Set",
  },
  {
    event: "The Third Eye",
    time: "7:15 PM",
    label: "Main Stage",
  },
  {
    event: "Solo Performances",
    time: "8:00 PM",
    label: "Acoustic Set",
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
