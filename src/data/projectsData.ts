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
      { label: 'Primary Materials', value: 'Rustic Weatherboard, Treated Pine, Concrete Slab, Custom Matt Black Plates' },
      { label: 'Location', value: 'Sheffield, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey' },
      { label: 'Company', value: "Aubrey's Building" }
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
      { label: 'Primary Materials', value: 'Treated Pine, Masonry Anchors' },
      { label: 'Location', value: 'North West Coast, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey' },
      { label: 'Company', value: "Aubrey's Building" }
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
      { label: 'Primary Materials', value: 'Premium Hardwood, Timber Balusters, Stainless Steel Fixings' },
      { label: 'Location', value: 'Lake Barrington, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey' },
      { label: 'Company', value: "Aubrey's Building" }
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
  },
  {
    id: 'modern-villa-complex',
    title: 'Modern Villa Complex',
    location: 'North West Coast, Tasmania',
    scope: 'Bespoke Residential Build',
    heroImage: '/images/villa-complex.png',
    overview: 'Merging contemporary architectural form with the dramatic landscape of Tasmania\'s North West Coast. The structure utilizes steel and glass volumes to open up to the environment, creating an active dialog between modern living and natural context. Floor-to-ceiling glass envelopes frame coastal views while ensuring a completely seamless indoor-outdoor living transition.',
    metrics: [
      { label: 'Year Completed', value: '2025' },
      { label: 'Structural System', value: 'Steel Frame & Timber Infill' },
      { label: 'Primary Materials', value: 'Polished Concrete, low-iron Glass, Tasmanian Hardwood' },
      { label: 'Location', value: 'North West Coast, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey' },
      { label: 'Company', value: "Aubrey's Building" }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/images/blueprint-base.png',
        description: 'Bespoke structural blueprint showing foundation plans and load-bearing columns.'
      },
      {
        type: 'Interior Framing',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Detailing structural timber posts and wall frames.'
      },
      {
        type: 'Final Finishes',
        image: 'https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'The completed interior showing clean lines and wide open windows.'
      }
    ]
  },
  {
    id: 'luxury-estate',
    title: 'Rural Lifestyle Retreat',
    location: 'Sheffield, Tasmania',
    scope: 'Rural Residential Build',
    heroImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'A contemporary lifestyle residence built to sit naturally within the Tasmanian countryside. Designed to withstand the winter elements while presenting a warm, inviting aesthetic. High-grade timber columns integrate perfectly with a stone clad core to anchor the building, while wide double-glazed windows frame local peaks. The design prioritizes local stone and sustainably sourced timbers.',
    metrics: [
      { label: 'Year Completed', value: '2024' },
      { label: 'Structural System', value: 'Timber Post & Beam Frame' },
      { label: 'Primary Materials', value: 'Sourced Stone, Hardwood Timbers, Double-Glazed Glass' },
      { label: 'Location', value: 'Sheffield, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey' },
      { label: 'Company', value: "Aubrey's Building" }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/images/blueprint-drawing.png',
        description: 'Elevation drawings detailing post-and-beam timber layout specifications.'
      },
      {
        type: 'Interior Framing',
        image: '/images/luxury-estate-framing.png',
        description: 'Timber framework under construction showcasing high-precision jointing.'
      },
      {
        type: 'Final Finishes',
        image: '/images/luxury-estate-finishes.png',
        description: 'Comfortable contemporary living area displaying rich warm wood finishes and wide rural vistas.'
      }
    ]
  },
  {
    id: 'architectural-masterpiece',
    title: 'Custom Home Build',
    location: 'North West Coast, Tasmania',
    scope: 'Bespoke Family Home',
    heroImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview: 'A custom residential build completed to the highest standards. Perched to capture light and views, this home features clean modern geometry with a durable Colorbond and weatherboard exterior. Inside, the open-plan layout flows seamlessly to the outdoor deck, perfectly matching the requirements of modern family living in the local Tasmanian climate.',
    metrics: [
      { label: 'Year Completed', value: '2025' },
      { label: 'Structural System', value: 'Timber Wall Frame & Colorbond Roofing' },
      { label: 'Primary Materials', value: 'Colorbond Steel Cladding, Custom Weatherboards' },
      { label: 'Location', value: 'North West Coast, Tasmania' },
      { label: 'Lead Builder', value: 'Jacob Aubrey' },
      { label: 'Company', value: "Aubrey's Building" }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/images/blueprint-drawing.png',
        description: 'Bespoke roof truss and structural framing layout drawings.'
      },
      {
        type: 'Interior Framing',
        image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Precise framing setup prior to plastering.'
      },
      {
        type: 'Final Finishes',
        image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Beautifully finished light-filled living spaces.'
      }
    ]
  }
];
