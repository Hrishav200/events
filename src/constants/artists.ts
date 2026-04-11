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
    name: "Subik ft. Talamuni",
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
    playlist: [{ name: "Creep", dur: "4:00" }],
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
      { name: "Mah janchu la", dur: "3:30" },
      { name: "Zombie", dur: "4:10" },
    ],
  },
  {
    name: "The Third Eye",
    image: "/3eye.jpg",
    genre: "Hard Rock",
    desc: "A spotlight on the rock performer — raw, unfiltered, and deeply personal.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/the_3rd_eye_band?igsh=MTBvdmptcmVvbno2Ng==",
      },
    ],
    playlist: [
      { name: "Maryo ni maryo", dur: "5:30" },
      { name: "Parkhidina", dur: "4:10" },
      { name: "Komal tyo timro", dur: "4:57" },
      { name: "Gari khana deu", dur: "4:30" },
      { name: "Sex on fire", dur: "3:30" },
      { name: "Raftaar", dur: "4:10" },
      { name: "Timi vane", dur: "5:30" },
      { name: "Pinjadako suga", dur: "4:50" },
    ],
  },
  {
    name: "Niharika",
    image: "/niharika.jpg",
    genre: "Acoustic / Singer",
    desc: "A spotlight on the individual — raw, unfiltered, and deeply personal. Melbourne's solo artist take the mic between sets to share something intimate with the crowd. No band needed. Just pure heart.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/niharikagyawali_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
    playlist: [
      { name: "Mountain High", dur: "3:30" },
      { name: "Cold/Mess", dur: "4:10" },
      { name: "Ananta", dur: "3:00" },
      { name: "Yellow", dur: "4:30" },
      { name: "Zombie", dur: "4:40" },
    ],
  },
  {
    name: "Talamuni",
    image: "/talamuni.jpg",
    genre: "Alternative",
    desc: "Talamuni rocks the night with full-force chaos and heart. Grunge grit, Metal weight, Punk attitude and Rock soul — all at once. This is the set that everyone will still be talking about the next morning.",
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
  {
    name: "Khatra",
    image: "/khatra.jpg",
    genre: "Rock / Alternative",
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
      { name: "Notion", dur: "3:10" },
      { name: "Nischal", dur: "4:10" },
      { name: "Afnai sansaar ma", dur: "3:55" },
      { name: "Shine", dur: "5:10" },
      { name: "Timi vane", dur: "5:30" },
      { name: "Yellow", dur: "4:35" },
      { name: "Summer of 69", dur: "3:45" },
      { name: "Just the way you are", dur: "3:52" },
      { name: "Jau ki basau", dur: "5:24" },
      { name: "Mercedes Benz", dur: "5:10" },
    ],
  },
];

export const Schedule = [
  {
    event: "Doors Open – Welcome & Warm-up",
    time: "5:00 PM",
    label: "Arrival",
  },
  {
    event: "ANORI",
    time: "6:00 PM",
    label: "Opening Set",
  },
  {
    event: "Subik ft. Talamuni",
    time: "6:40 PM",
    label: "Main Stage",
  },
  {
    event: "Niharika",
    time: "7:20 PM",
    label: "Main Stage",
  },
  {
    event: "The Third Eye",
    time: "8:00 PM",
    label: "Main Stage",
  },
  {
    event: "Talamuni",
    time: "9:10 PM",
    label: "Main Stage",
  },
  {
    event: "Khatra",
    time: "10:10 PM",
    label: "Closing Act",
  },
  {
    event: "The Encore – Final Bows & After Vibes",
    time: "11:20 PM",
    label: "End of Night",
  },
];
