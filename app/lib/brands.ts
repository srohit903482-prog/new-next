
export interface BrandData {
    name: string;
    fullName: string;
    slug: string;
    logo: string;
    color:string;
    border:string;
    printerImage: string;
    description: string;
    heroGradient: string;
    series: string[];
    commonIssues: { title: string; description: string; icon: string }[];
}

export const brandsData: Record<string, BrandData> = {
    hp: {
        name: "HP",
        fullName: "HP (Hewlett-Packard)",
        slug: "hp",
        logo: "/images/hp-logo.png",
        color:"#5B9BD5",
        border:"#5B9BD5",
        printerImage: "/images/hp-printer.png",
        description: "Specialized technical assistance for all HP printer models. We resolve connection issues, driver problems, and hardware glitches.",
        heroGradient: "from-blue-50 to-white",
        series: ["LaserJet Series", "OfficeJet Series", "DeskJet Series", "Envy Series"],
        commonIssues: [
            { title: "Printer Offline", description: "Fix 'Printer is offline' status issues and connectivity problems.", icon: "fa-wifi" },
            { title: "Paper Jam", description: "Safe removal of paper jams and prevention of future occurrences.", icon: "fa-scroll" },
            { title: "Print Spooler", description: "Troubleshoot stuck print jobs and spooler service errors.", icon: "fa-print" },
            { title: "Print Quality", description: "Fix streaks, fading, and color misalignment on your prints.", icon: "fa-fill-drip" },
        ]
    },
    brother: {
        name: "Brother",
        fullName: "Brother",
        slug: "brother",
        logo: "/images/brother-logo.png",
        color:"#0d2ea0",
        border:"#5B9BD5",


        printerImage: "/images/brother-printer.png",
        description: "Expert technical assistance for all Brother printer models. Fast solutions for home and office equipment.",
        heroGradient: "from-blue-50 to-white",
        series: ["MFC Series", "HL Series", "DCP Series", "InkBenefit Series"],
        commonIssues: [
            { title: "Deep Sleep Mode", description: "Fix printer unable to wake up from deep sleep mode.", icon: "fa-bed" },
            { title: "Drum Replacement", description: "Assistance with drum unit replacement and counter reset.", icon: "fa-circle-notch" },
            { title: "Network Setup", description: "Wireless and wired network configuration for your Brother printer.", icon: "fa-network-wired" },
            { title: "Print Quality", description: "Resolve blurry text, fading, or toner lines on documents.", icon: "fa-file-alt" },
        ]
    },
    canon: {
        name: "Canon",
        fullName: "Canon",
        slug: "canon",
        color:"#e41920",
        border:"#5B9BD5",


        logo: "/images/canon-logo.png",
        printerImage: "/images/canon-printer.png",
        description: "Professional technical assistance for all Canon printer models. Quality support for PIXMA, MAXIFY and imageCLASS series.",
        heroGradient: "from-red-50 to-white",
        series: ["PIXMA Series", "MAXIFY Series", "imageCLASS", "imagePROGRAF"],
        commonIssues: [
            { title: "Error E02/E03", description: "Resolution for common Canon error codes and paper feed issues.", icon: "fa-exclamation-triangle" },
            { title: "Wifi Connection", description: "Setup and troubleshooting of Canon wireless printing.", icon: "fa-wifi" },
            { title: "Print Head", description: "Cleaning and maintenance guidance for Canon print heads.", icon: "fa-spray-can" },
            { title: "Ink Recognition", description: "Fix issues with cartridge recognition and ink level monitoring.", icon: "fa-tint" },
        ]
    }
};
