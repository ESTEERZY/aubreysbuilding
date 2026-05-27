export interface ProjectMetric {
  label: string;
  value: string;
}

export interface GalleryItem {
  type: 'Structural Details' | 'Interior Framing' | 'Final Finishes';
  image: string;
  description: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  location: string;
  scope: string;
  heroImage: string;
  overview: string;
  metrics: ProjectMetric[];
  gallery: GalleryItem[];
}

export const projectsData: CaseStudyData[] = [
  {
    id: 'back-entrance-renovation',
    title: 'Back Entrance Renovation & Entertainment Area',
    location: 'Sheffield, Tasmania',
    scope: 'Residential Renovation & Gazebo Extension',
    heroImage: '/images/back-entrance-1.jpg',
    overview: 'A complete transformation of a dead back entrance into a functional, beautiful living zone. The project introduces a new lounge area, a modern laundry, and a powder room/WC accessed via seamless cavity sliders. Outside, a custom timber-framed gazebo with a decorative truss was built entirely onsite, topped with a Colorbond roof and translucent panels. The facade was updated, replacing custom orb with rustic weatherboard siding ready for paint. Custom matt black intersection steel plates will complete the joints.',
    metrics: [
      { label: 'Year Completed', value: '2024 (In Progress)' },
      { label: 'Structural System', value: 'Timber Truss Gazebo & Cavity Slider Framing' },
      { label: 'Location', value: 'Sheffield, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey Ray Steers' },
      { label: 'Company', value: "Aubreys Building" }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/images/blueprint-base.png',
        description: 'Structural layout detailing the cavity slider wall placements and onsite decorative truss configurations.'
      },
      {
        type: 'Interior Framing',
        image: '/images/back-entrance-1.jpg',
        description: 'Framing out the new laundry and WC spaces within the former dead zone.'
      },
      {
        type: 'Final Finishes',
        image: '/images/back-entrance-1.jpg',
        description: 'The onsite-built gazebo structure showcasing white posts, raw weatherboard cladding, and the structural decorative truss.'
      }
    ]
  },
  {
    id: 'pergola-replacement',
    title: 'Pergola Replacement',
    location: 'North West Coast, Tasmania',
    scope: 'Outdoor Pergola Replacement',
    heroImage: '/images/pergola-1.jpg',
    overview: 'Helped out Lynette with a complete outdoor pergola replacement. The old, deteriorated pergola was safely removed and replaced with a clean, sturdy treated pine frame. The new design matches the structural lines of the house, providing a refreshed outdoor seating area attached to the red brick home under the Tasmanian sun.',
    metrics: [
      { label: 'Year Completed', value: '2024' },
      { label: 'Structural System', value: 'Treated Pine Post & Rafter System' },
      { label: 'Location', value: 'North West Coast, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey Ray Steers' },
      { label: 'Company', value: "Aubreys Building" }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/images/blueprint-drawing.png',
        description: 'Detailed layout plan of the pine rafter spacing and wall plate anchorage.'
      },
      {
        type: 'Interior Framing',
        image: '/images/pergola-2.jpg',
        description: 'Tensioning and anchoring the structural post supports to the brick base.'
      },
      {
        type: 'Final Finishes',
        image: '/images/pergola-1.jpg',
        description: 'The finished treated pine pergola frame showing clean carpentered joints against the classic red brick home.'
      }
    ]
  },
  {
    id: 'lake-barrington-deck',
    title: 'Lake Barrington Deck & Balustrade',
    location: 'Lake Barrington, Tasmania',
    scope: 'Premium Outdoor Decking & Balustrade',
    heroImage: '/images/lake-barrington-1.jpg',
    overview: 'Perched overlooking the breathtaking waters of Lake Barrington, this project was a favorite build of 2024. The build features a large-scale hardwood timber deck built to withstand the elements, complete with a custom matching timber balustrade. The design maximizes the panoramic views of the lake and surrounding hills, creating the ultimate Tasmanian outdoor entertaining space.',
    metrics: [
      { label: 'Year Completed', value: '2024' },
      { label: 'Structural System', value: 'Hardwood Decking & Timber Balustrade Post Grid' },
      { label: 'Location', value: 'Lake Barrington, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey Ray Steers' },
      { label: 'Company', value: "Aubreys Building" }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/images/blueprint-base.png',
        description: 'Sub-floor structural layout showing hardwood joist spans and bearer details.'
      },
      {
        type: 'Interior Framing',
        image: '/images/lake-barrington-1.jpg',
        description: 'Laying down the high-grade timber decking boards with precision spacer alignments.'
      },
      {
        type: 'Final Finishes',
        image: '/images/lake-barrington-1.jpg',
        description: 'The completed hardwood deck showcasing its rich warm tones and balustrade railing framing the panoramic lake view.'
      }
    ]
  }
];
