export interface Sponsor {
  type: "gold" | "silver" | "bronze";
  sponsors: {
    name: string;
    slogan: string;
    logo: React.ReactNode;
  }[];
}

export const Sponsors = [
  {
    type: "gold",
    sponsors: [
      {
        name: "NEXUS CO",
        slogan: "Future Forward",
        logo: (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            key="nexus-logo"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="rgba(245,166,35,0.12)"
              stroke="rgba(245,166,35,0.4)"
              strokeWidth="1.5"
            />
            <text
              x="24"
              y="29"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="13"
              fontWeight="bold"
              fill="#f5a623"
            >
              NX
            </text>
          </svg>
        ),
      },
      {
        name: "VORTEX AUDIO",
        slogan: "Sound Without Limits",
        logo: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect
              x="8"
              y="8"
              width="32"
              height="32"
              rx="6"
              fill="rgba(245,166,35,0.1)"
              stroke="rgba(245,166,35,0.35)"
              strokeWidth="1.5"
            />
            <text
              x="24"
              y="29"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="13"
              fontWeight="bold"
              fill="#f5a623"
            >
              VX
            </text>
          </svg>
        ),
      },
    ],
  },
  {
    type: "silver",
    sponsors: [
      {
        name: "ARC STUDIOS",
        slogan: "We Build Brands",
        logo: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <polygon
              points="24,4 44,40 4,40"
              fill="rgba(180,180,200,0.08)"
              stroke="rgba(180,180,200,0.35)"
              strokeWidth="1.5"
            />
            <text
              x="24"
              y="35"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="11"
              fontWeight="bold"
              fill="#b4b4c8"
            >
              ARC
            </text>
          </svg>
        ),
      },
      {
        name: "PULSE MEDIA",
        slogan: "Your Story, Amplified",
        logo: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect
              x="6"
              y="16"
              width="36"
              height="16"
              rx="8"
              fill="rgba(180,180,200,0.08)"
              stroke="rgba(180,180,200,0.35)"
              strokeWidth="1.5"
            />
            <text
              x="24"
              y="28"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="11"
              fontWeight="bold"
              fill="#b4b4c8"
            >
              PULSE
            </text>
          </svg>
        ),
      },
    ],
  },
  {
    type: "bronze",
    sponsors: [
      {
        name: "URBAN EATS",
        slogan: "Gear Up & Play",
        logo: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="rgba(180,100,60,0.08)"
              stroke="rgba(180,100,60,0.35)"
              strokeWidth="1.5"
            />
            <line
              x1="8"
              y1="24"
              x2="40"
              y2="24"
              stroke="rgba(180,100,60,0.5)"
              strokeWidth="1"
            />
            <text
              x="24"
              y="29"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="11"
              fontWeight="bold"
              fill="#c87c50"
            >
              GRV
            </text>
          </svg>
        ),
      },
      {
        name: "GROOVE GEAR",
        slogan: "Fuel the Night",
        logo: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect
              x="8"
              y="8"
              width="32"
              height="32"
              rx="2"
              fill="rgba(180,100,60,0.08)"
              stroke="rgba(180,100,60,0.35)"
              strokeWidth="1.5"
            />
            <text
              x="24"
              y="22"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="9"
              fontWeight="bold"
              fill="#c87c50"
            >
              URBAN
            </text>
            <text
              x="24"
              y="34"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="9"
              fontWeight="bold"
              fill="#c87c50"
            >
              EATS
            </text>
          </svg>
        ),
      },
    ],
  },
];

export const sponsorTiers = [
  {
    color: "amber",
    name: "Gold",
    price: "$350",
    description: "Headline Sponsor",
    perks: [
      "Logo featured prominently on website & all event materials",
      "Shoutout from the stage during the event",
      "Social media feature post before & after the event",
      "Banner placement at the venue",
      "VIP access for your team",
    ],
  },
  {
    color: "silver",
    name: "Silver",
    price: "$250",
    description: "Stage Sponsor",
    perks: [
      "Logo on website & event flyers",
      "Mention during stage announcements",
      "Social media tag in event posts",
      "Complimentary tickets for your team",
    ],
  },
  {
    color: "bronze",
    name: "Bronze",
    price: "$150",
    description: "Community Sponsor",
    perks: [
      "Logo listed on the event website",
      "Acknowledged in event program",
      "Invitation to the event",
    ],
  },
];
