import { Brain, Radar, Radio, Database, Code, Activity, Atom, Satellite, Star, Aperture } from 'lucide-react';

export const personalInfo = {
    name: "Miora Mbolatiana Randrianasy",
    title: "Astrophysicist & Data Scientist",
    bio: [
        "I am an aspiring astrophysicist and data scientist with a deep passion for unlocking the mysteries of the universe through data. My work focuses on the intersection of observational radio astronomy and advanced machine learning techniques.",
        "My MSc research investigates the radio properties and star formation activity of galaxy populations within the cosmic web."
    ],
    email: "miora.randrianasy@gmail.com",
    phone: "+261 34 32 903 59",
    linkedin: "https://www.linkedin.com/in/miora-randrianasy-499977247/",
    cvUrl: "/Miora_Randrianasy.pdf"
};

export const skills = {
    "Data Science & AI": [
        "Python", "Anomaly Detection", "Machine Learning", "Deep Learning"
    ],
    "Astrophysics Tools": [
        "CASA", "Radio Interferometry", "AstroPy", "VLBI"
    ],
    "Software & Tools": [
        "Linux", "Git", "React", "Javascript", "SQL"
    ],
    "Languages": [
        "Malagasy (Native)", "French (Advanced)", "English (Intermediate)", "German (Beginner)"
    ]
};

export const projects = [
    {
        title: "Anomaly Detection in Large Astronomical Datasets",
        description: "A 6-month internship project with the Breakthrough Listen Project at the University of the Western Cape, Cape Town (2026). Developing robust anomaly detection pipelines for large radio astronomical datasets.",
        image: "/images/anomaly-project.png",
        tags: ["Python", "Scikit-Learn", "Isolation Forest", "Unsupervised ML"],
        category: "Machine Learning",
        icon: Activity,
        link: "https://github.com/MioraRandrianasy/MGCLS_Moment_pooling_vs_PCA"
    },
    {
        title: "Radio Properties & Star Formation in the Cosmic Web",
        description: "My MSc thesis research, investigating the radio properties and star formation activity of galaxy populations within the cosmic web at higher redshifts. Using high-sensitivity radio continuum data from the VLA-COSMOS survey (3 GHz), this work probes galaxy evolution and the radio-infrared correlation across cosmic time.",
        image: "/images/galaxy-project.png",
        tags: ["Python", "AstroPy", "CASA", "VLA-COSMOS", "Radio Astronomy", "Galaxy Evolution"],
        category: "Astrophysics",
        icon: Radar,
        link: "https://ui.adsabs.harvard.edu/abs/2024IAUGA..32P1634R/abstract"
    },
    {
        title: "AI-Assisted Brain Tumor Detection",
        description: "A full-stack medical imaging application designed to assist radiologists. The app uses deep learning models to identify and classify brain tumors from MRI scans with high accuracy.",
        image: "/images/brain-tumor-project.png",
        tags: ["TensorFlow", "React", "Python", "Computer Vision", "Healthcare"],
        category: "Machine Learning",
        icon: Brain,
        link: "https://github.com/MioraRandrianasy/Neuro_Vision_AI" // Placeholder
    },
    {
        title: "AfAS Data Science Hackathon — Winner",
        description: "First-place project at the African Astronomical Society Data Science Hackathon 2025, held at UNISA Science Campus in Johannesburg. Theme: 'Connecting Astronomy in Africa: A Pathway to Growth'. Designed and implemented a data-driven solution under the guidance of tutor James O. Chibueze.",
        image: "/images/hackathon-project.png",
        tags: ["Python", "Data Science", "Astronomy", "Africa", "Hackathon"],
        category: "Data Science",
        icon: Star,
        link: "#"
    },
    {
        title: "VLBI Imaging & Calibration Studies",
        description: "Advanced training and hands-on research in Very Long Baseline Interferometry (VLBI) through the JIVE VLBI School 2025 at the University of Pretoria. Focused on VLBI data calibration, imaging, and analysis using real interferometric datasets, building on my earlier mini-thesis on the importance of VLBI in astrophysics.",
        image: "/images/vlbi-project.png",
        tags: ["VLBI", "CASA", "Radio Interferometry", "HartRAO", "MeerKAT", "Calibration"],
        category: "Astrophysics",
        icon: Aperture,
        link: "#"
    },
    {
        title: "ShakthiSAT Mission — Madagascar Ambassador",
        description: "Serving as the official Ambassador for Madagascar in the ShakthiSAT mission by Space Kidz India (2025–2026). Acting as the country's point of contact in a global STEM initiative empowering 12,000 girls from 108 countries to learn space science and participate in building a satellite.",
        image: "/images/shakthisat-project.png",
        tags: ["STEM Outreach", "Satellite", "Space Education", "Women in STEM", "Madagascar"],
        category: "Outreach & Leadership",
        icon: Satellite,
        link: "#"
    }
];

export const publications = [
    {
        title: "Investigating radio properties and star formation activity of galaxy population at higher redshift",
        venue: "32nd IAU General Assembly — Symposium 394: All-inclusive AGN",
        location: "Cape Town, South Africa",
        year: 2024,
        type: "Scientific Poster",
        link: "https://ui.adsabs.harvard.edu/abs/2024IAUGA..32P1634R/abstract",
        abstract: "We present a study of the radio properties and star formation activity of galaxy populations at higher redshifts, using high-sensitivity radio continuum data from the VLA-COSMOS 3 GHz survey. By analyzing the radio-infrared correlation, we probe the cosmic star formation history and investigate how AGN activity interplays with star formation across the cosmic web."
    }
];

export const experience = [
    {
        role: "Research Intern — Anomaly Detection",
        organization: "Breakthrough Listen Project, University of the Western Cape",
        location: "Cape Town, South Africa",
        period: "2026 (6 months)",
        description: "Developing anomaly detection pipelines for large radio astronomy datasets, applying unsupervised machine learning methods."
    },
    {
        role: "MSc Researcher — Radio Astronomy & Galaxy Evolution",
        organization: "University of Antananarivo",
        location: "Antananarivo, Madagascar",
        period: "2022 – 2025",
        description: "Conducted MSc thesis research on the radio properties and star formation activity of galaxy populations within the cosmic web. Supervised by Prof. Solohery Randriamampandry. Achieved 87% aggregate."
    },
    {
        role: "Madagascar Ambassador",
        organization: "ShakthiSAT Mission — Space Kidz India",
        location: "Remote / Madagascar",
        period: "2025 – 2026",
        description: "Country representative for a global STEM initiative empowering 12,000 girls from 108 countries to learn space science and contribute to a satellite mission."
    }
];

export const education = [
    {
        degree: "MSc in Astrophysics and Astronomy",
        institution: "University of Antananarivo",
        period: "2022 – 2025",
        grade: "87%",
        thesis: "Investigating the radio properties and star formation activity of galaxy population within the cosmic web.",
        supervisor: "Prof. Solohery Randriamampandry"
    },
    {
        degree: "BSc Honours in Computer Science",
        institution: "University of Antananarivo",
        period: "2024 – 2025",
        grade: "70%",
        department: "Mathematics, Informatics and Statistics (MISA)"
    },
    {
        degree: "BSc in Computer Science",
        institution: "University of Antananarivo",
        period: "2017 – 2024",
        grade: "62.5%"
    },
    {
        degree: "BSc in Physics",
        institution: "University of Antananarivo",
        period: "2017 – 2021",
        grade: "72.5%",
        note: "Mini-thesis: 'The importance of VLBI in Astrophysics'"
    }
];

export const awards = [
    {
        title: "Best Organizer — Data Science Regional Hackathon 2025",
        organization: "Hack4dev",
        date: "August 2025",
        description: "Recognized for outstanding communication, event planning, and chairing of the hackathon. Organized alongside teammates Ny Ando Ralitera, Andoniaina Rajaonarivelo, and Herman Randriamanantena."
    },
    {
        title: "Winner — AfAS Data Science Hackathon 2025",
        organization: "African Astronomical Society, UNISA Science Campus, Johannesburg",
        date: "March 2025",
        description: "First place at the AfAS Data Science Hackathon. Theme: 'Connecting Astronomy in Africa: A Pathway to Growth'. Mentored by James O. Chibueze."
    }
];

export const workshops = [
    {
        name: "African Science Entrepreneurship Program (ASEP)",
        organizer: "Johannesburg",
        date: "April 2026",
        description: "African Solutions for African Challenges: Project presentation"
    },
    {
        name: "Radio Astronomy Advancement Programme (RAAP)",
        organizer: "NWU Potchefstroom",
        date: "October 2025",
        description: "Training in radio data reduction and analysis using HartRAO, MeerKAT, VLA, and VLBI data, with a focus on massive star formation research."
    },
    {
        name: "POSYDON School",
        organizer: "SkAI Institute, Chicago, United States",
        date: "September 2025",
        description: "Training on the POSYDON binary population synthesis code, covering mass transfer, supernovae, binary evolution, and hands-on modeling labs."
    },
    {
        name: "JIVE VLBI School 2025",
        organizer: "University of Pretoria, South Africa",
        date: "September 2025",
        description: "Training in radio interferometry, VLBI data calibration, imaging, and analysis through lectures and hands-on tutorials."
    },
    {
        name: "DARA Basic Training Programme",
        organizer: "Development in Africa with Radio Astronomy",
        date: "2024 – 2025",
        description: "Comprehensive hands-on training in radio astronomy, Linux, Python, optical telescope sessions in Kenya, HartRAO facility visits, and interferometric data reduction. International researcher networking."
    }
];