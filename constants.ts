import {
  Wind, Smile, User, Utensils, Activity,
  Zap, Droplets, Heart, Baby, Brain,
  Thermometer, Monitor, Microscope, Truck
} from 'lucide-react';
import { ServiceCategory, FaqItem, Seminar, CaseStudy, ContactDetails, Testimonial } from './types';

export const CONTACT_INFO: ContactDetails = {
  address: "FF7, First Floor, Sharanam Complex, Opp. FortuneAir, Krunal Cross Road, Gotri, Vadodara, 390021",
  phone: "+91 81413 27947",
  email: "hetalpandav712@gmail.com",
  timings: "Monday to Saturday, 5:30 PM to 8:30 PM",
  // Google Maps Search Link based on address
  mapLink: "https://maps.app.goo.gl/dui8wiVw7eayJHnN8",
  // WhatsApp API link
  whatsappLink: "https://wa.me/918141327947?text=Hello%20Dr.%20Hetal,%20I%20would%20like%20to%20book%20an%20appointment.",
  // Social Media Links
  instagramLink: "https://www.instagram.com/dr.hetalpandav?igsh=OGlkaWVyYXNjdG9m",
  facebookLink: "https://www.facebook.com/share/1Boy67Q6vq/"
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'respiratory',
    title: 'Advanced Respiratory Care',
    description: 'Natural relief for chronic asthma and allergies without steroids.',
    icon: Wind,
    details: ['Asthma', 'Allergic Rhinitis', 'Sinusitis', 'Bronchitis', 'Pneumonia'],
    imageUrl: '/Client images/RESPIRATORY DISORDERS.jpg',
    fullContent: {
      overview: "Respiratory disorders affect the airways and lungs, leading to difficulty in breathing, frequent infections, and reduced quality of life. These conditions may be seasonal or chronic and are often triggered by allergies, pollution, weather changes, or weak immunity. Many patients become dependent on inhalers or frequent medications, which only provide temporary relief.\n\nHomeopathy focuses on strengthening the respiratory system and immune response, offering long-term improvement rather than short-term suppression.",
      symptoms: [
        "Shortness of breath",
        "Wheezing or whistling sound while breathing",
        "Chronic cough",
        "Chest tightness",
        "Nasal blockage or runny nose",
        "Recurrent respiratory infections"
      ],
      causes: [
        "Air pollution and dust exposure",
        "Allergens such as pollen or mites",
        "Cold weather and humidity",
        "Stress and anxiety",
        "Weak immune system"
      ],
      approach: "Homeopathic treatment addresses the root cause of respiratory sensitivity. Medicines are selected based on individual symptoms, triggers, and overall health. The goal is to reduce frequency and intensity of attacks while improving lung strength.",
      benefits: [
        "Reduced dependency on inhalers",
        "Improved breathing capacity",
        "Strengthened immunity",
        "Safe for children and elderly"
      ],
      whoShouldConsult: [
        "Patients with chronic asthma or allergies",
        "Children with recurrent cough and cold",
        "Individuals dependent on long-term medications"
      ]
    }
  },
  {
    id: 'skin',
    title: 'Clinical Dermatology & Skincare',
    description: 'Deep healing for eczema, psoriasis, and persistent infections.',
    icon: Smile,
    details: ['Eczema', 'Psoriasis', 'Acne', 'Warts', 'Fungal Infection'],
    imageUrl: '/Client images/SKIN CONDITIONS.jpg',
    fullContent: {
      overview: "Skin conditions are often external manifestations of internal imbalance. Chronic skin problems can significantly affect confidence and mental well-being. Conventional treatments often rely on steroids or topical creams that suppress symptoms temporarily.\n\nHomeopathy treats skin diseases from within by addressing immunity, digestion, and hormonal balance.",
      symptoms: [
        "Persistent itching",
        "Redness and inflammation",
        "Dry, scaly, or cracked skin",
        "Pimples, scars, or pigmentation",
        "Recurrent fungal infections"
      ],
      causes: [
        "Immune system imbalance",
        "Hormonal disturbances",
        "Stress and anxiety",
        "Digestive disorders",
        "Genetic tendency"
      ],
      approach: "Treatment is individualized and focuses on long-term healing rather than quick suppression. Medicines are gentle and safe for prolonged use.",
      benefits: [
        "Gradual and permanent improvement",
        "No steroids or harsh chemicals",
        "Reduced recurrence",
        "Improved skin texture"
      ],
      whoShouldConsult: [
        "Patients with chronic or recurrent skin problems",
        "Individuals seeking steroid-free treatment"
      ]
    }
  },
  {
    id: 'hair',
    title: 'Trichology & Hair Restoration',
    description: 'Targeting root causes of hair fall and alopecia naturally.',
    icon: User,
    details: ['Hair-fall', 'Alopecia'],
    imageUrl: '/Client images/HAIR REJUVENATION.jpg',
    fullContent: {
      overview: "Hair problems are commonly linked to stress, hormonal imbalance, nutritional deficiencies, and genetic factors. Sudden hair fall or patchy hair loss can be emotionally distressing.\n\nHomeopathy strengthens hair roots and improves scalp health naturally.",
      symptoms: [
        "Excessive hair fall",
        "Thinning of hair",
        "Patchy hair loss",
        "Dandruff and itchy scalp"
      ],
      causes: [
        "Hormonal imbalance",
        "Stress and lifestyle issues",
        "Poor nutrition",
        "Hereditary factors"
      ],
      approach: "Medicines stimulate hair follicles, improve blood circulation to the scalp, and correct internal imbalances responsible for hair loss.",
      benefits: [
        "Reduced hair fall",
        "Improved hair density",
        "Stronger roots",
        "Safe and natural"
      ]
    }
  },
  {
    id: 'digestive',
    title: 'Gastroenterology & Gut Health',
    description: 'Gentle correction for IBS, acidity, and chronic indigestion.',
    icon: Utensils,
    details: ['Indigestion', 'Acidity', 'IBS', 'Ulcers', 'Piles', 'Fissures'],
    imageUrl: '/Client images/DIGESTIVE HEALTH.jpg',
    fullContent: {
      overview: "Digestive health plays a vital role in overall well-being. Chronic digestive problems can affect energy levels, immunity, and mental health. Suppressive medications often provide temporary relief.\n\nHomeopathy corrects digestive imbalance by improving gut sensitivity and metabolism.",
      symptoms: [
        "Acidity and heartburn",
        "Gas and bloating",
        "Irregular bowel movements",
        "Abdominal pain",
        "Rectal discomfort"
      ],
      causes: [
        "Poor eating habits",
        "Stress",
        "Sedentary lifestyle",
        "Food intolerance"
      ],
      approach: "Focuses on restoring digestive balance and improving gut function naturally.",
      benefits: [
        "Improved digestion",
        "Regular bowel habits",
        "Long-term relief",
        "No dependency on laxatives"
      ]
    }
  },
  {
    id: 'musculo',
    title: 'Orthopedic & Joint Wellness',
    description: 'Pain management and mobility restoration for joints and bones.',
    icon: Activity,
    details: ['Arthritis', 'Joint pain', 'Sprains', 'Gout'],
    imageUrl: '/Client images/MUSCULOSKELETAL DISORDERS.jpg',
    fullContent: {
      overview: "Musculoskeletal disorders cause pain, stiffness, and reduced mobility. These conditions may be age-related or due to injury, inflammation, or lifestyle factors.\n\nHomeopathy reduces inflammation and improves joint flexibility without painkillers.",
      symptoms: [
        "Joint pain and stiffness",
        "Swelling",
        "Difficulty in movement",
        "Muscle soreness"
      ],
      causes: [
        "Age-related degeneration",
        "Inflammation",
        "Injury or trauma",
        "Lifestyle factors"
      ],
      approach: "Homeopathy helps to reduce inflammation, repair tissues, and improve joint flexibility naturally.",
      benefits: [
        "Natural pain relief",
        "Improved mobility",
        "Slowed disease progression",
        "No gastric side effects"
      ]
    }
  },
  {
    id: 'nerve',
    title: 'Neurological Disorders & Pain Management',
    description: 'Soothing relief for sciatica and nerve-related neuralgia.',
    icon: Zap,
    details: ['Sciatica', 'Neuralgia'],
    imageUrl: '/Client images/NERVE DISORDERS.jpg',
    fullContent: {
      overview: "Nerve-related pain can be sharp, shooting, or burning in nature. It often interferes with daily activities and sleep.\n\nHomeopathy helps calm irritated nerves and promotes healing.",
      symptoms: [
        "Shooting or burning pain",
        "Tingling or numbness",
        "Muscle weakness",
        "Sensitivity to touch"
      ],
      causes: [
        "Compression of nerves",
        "Diabetes (Neuropathy)",
        "Injury or trauma",
        "Viral infections (e.g., Herpes Zoster)"
      ],
      approach: "Homeopathic medicines help to soothe inflamed nerves and restore normal nerve function without sedation.",
      benefits: [
        "Reduced nerve pain",
        "Improved nerve function",
        "Non-sedative treatment",
        "Holistic healing"
      ]
    }
  },
  {
    id: 'urinary',
    title: 'Urology & Renal Health',
    description: 'Effective resolution for recurrent infections and stones.',
    icon: Droplets,
    details: ['Infections', 'Stones'],
    imageUrl: '/Client images/URINARY HEALTH.jpg',
    fullContent: {
      overview: "Urinary problems can be painful and recurrent. Frequent infections or stones may severely affect daily comfort.\n\nHomeopathy helps treat infections and prevents recurrence.",
      symptoms: [
        "Burning sensation while urinating",
        "Frequent urge to urinate",
        "Pain in lower abdomen or back",
        "Cloudy or bloody urine"
      ],
      causes: [
        "Bacterial infections",
        "Dehydration",
        "Kidney stones",
        "Structural issues"
      ],
      approach: "Homeopathy strengthens the urinary tract's defense mechanisms and helps dissolve small stones naturally.",
      benefits: [
        "Reduced burning and pain",
        "Prevention of recurrence",
        "Supports kidney function",
        "Avoids antibiotic resistance"
      ]
    }
  },
  {
    id: 'women',
    title: "Gynecology & Hormonal Balance",
    description: 'Hormonal balance for PCOS, menopause, and menstrual health.',
    icon: Heart,
    details: ['PCOS', 'Irregular periods', 'Menopause', 'Leucorrhea'],
    imageUrl: "/Client images/WOMEN’S HEALTH.jpg",
    fullContent: {
      overview: "Women’s health issues are often related to hormonal imbalance and stress. These conditions affect physical, emotional, and reproductive health.\n\nHomeopathy helps restore hormonal balance gently.",
      symptoms: [
        "Irregular or painful periods",
        "Mood swings and irritability",
        "Hot flashes (Menopause)",
        "Unwanted hair growth (PCOS)",
        "Fatigue"
      ],
      causes: [
        "Hormonal imbalance",
        "Stress",
        "Lifestyle & Diet",
        "Genetic factors"
      ],
      approach: "Homeopathy works on the endocrine system to regulate hormones naturally without external hormone replacement.",
      benefits: [
        "Regular menstrual cycles",
        "Reduced hormonal symptoms",
        "Improved fertility support",
        "Emotional stability"
      ]
    }
  },
  {
    id: 'children',
    title: 'Pediatric Care & Immunity',
    description: 'Safe, sweet pills for immunity, behavior, and growth.',
    icon: Baby,
    details: ['Behavioral issues', 'Common illnesses'],
    imageUrl: '/Client images/CHILD CARE.jpg',
    fullContent: {
      overview: "Children require gentle and safe treatment. Homeopathy is ideal for building immunity and supporting healthy development without harsh side effects.",
      symptoms: [
        "Frequent colds and coughs",
        "Behavioral tantrums",
        "Bedwetting",
        "Poor appetite or growth issues"
      ],
      causes: [
        "Developing immune system",
        "Environmental factors",
        "Emotional stress",
        "Dietary gaps"
      ],
      approach: "Simple, sweet pills that children love to take. The constitutional remedy enhances the child's own fighting mechanism.",
      benefits: [
        "Improved immunity",
        "Reduced recurrent infections",
        "Safe and non-habit forming",
        "Supports mental & physical growth"
      ]
    }
  },
  {
    id: 'mental',
    title: 'Psychology & Emotional Wellness',
    description: 'Holistic support for anxiety, depression, and stress management.',
    icon: Brain,
    details: ['Anxiety', 'Depression', 'Stress Management'],
    imageUrl: '/Client images/MENTAL WELLNESS.jpg',
    fullContent: {
      overview: "Mental health is as important as physical health. Stress and emotional imbalance can affect sleep, appetite, and productivity.\n\nHomeopathy treats emotional well-being holistically.",
      symptoms: [
        "Excessive worry or fear",
        "Low mood or irritability",
        "Sleep disturbances",
        "Fatigue and lack of focus"
      ],
      causes: [
        "Chronic stress",
        "Trauma or grief",
        "Chemical imbalance",
        "Lifestyle factors"
      ],
      approach: "Homeopathy considers the mind and body as one. Medicines help restore emotional balance and resilience.",
      benefits: [
        "Emotional stability",
        "Improved sleep",
        "Better stress management",
        "Non-addictive treatment"
      ]
    }
  },
  {
    id: 'lifestyle',
    title: 'Metabolic & Lifestyle Management',
    description: 'Constitutional management of diabetes, BP, and thyroid issues.',
    icon: Activity,
    details: ['Diabetes', 'Hypertension', 'Thyroid (Hypo/Hyper)'],
    imageUrl: '/Client images/LIFESTYLE DISEASES.jpg',
    fullContent: {
      overview: "Lifestyle diseases require long-term management. Homeopathy supports metabolic balance and overall health along with lifestyle modifications.",
      symptoms: [
        "Fluctuating blood pressure",
        "Uncontrolled blood sugar",
        "Weight gain or loss (Thyroid)",
        "Fatigue"
      ],
      causes: [
        "Sedentary lifestyle",
        "Unhealthy diet",
        "Stress",
        "Genetic predisposition"
      ],
      approach: "Constitutional treatment helps regularize metabolic functions and reduces the severity of the disease.",
      benefits: [
        "Better disease control",
        "Improved energy levels",
        "Supports conventional care",
        "Prevents complications"
      ]
    }
  },
  {
    id: 'acute',
    title: 'Acute Infection & Viral Care',
    description: 'Rapid recovery from seasonal flu, fevers, and colds.',
    icon: Thermometer,
    details: ['Cold', 'Cough', 'Fever', 'Flu'],
    imageUrl: '/Client images/ACUTE ILLNESS.jpg',
    fullContent: {
      overview: "Acute illnesses are common and usually seasonal. Proper homeopathic care helps faster recovery without antibiotics or suppression.",
      symptoms: [
        "Fever",
        "Runny nose",
        "Sore throat",
        "Body ache"
      ],
      causes: [
        "Viral or bacterial infection",
        "Weather complications",
        "Exposure to sick individuals"
      ],
      approach: "Short-acting remedies that match the acute symptoms to boost the body's immediate immune response.",
      benefits: [
        "Quick symptom relief",
        "Reduced recurrence",
        "Safe for all ages",
        "Prevents post-viral weakness"
      ]
    }
  }
];

export const FACILITIES = [
  { icon: Monitor, text: "Online Consultation" },
  { icon: Microscope, text: "Diagnostic Lab Tie-ups" },
  { icon: Truck, text: "Medicine Home Delivery" }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is Homeopathy slow to act?",
    answer: "This is a common myth. In acute conditions like fevers or colds, homeopathy can act as fast as conventional medicine. In chronic cases (like arthritis or eczema) that have existed for years, cure takes time because we treat the root cause, not just suppress symptoms."
  },
  {
    question: "Can I take homeopathic medicines with other drugs?",
    answer: "Yes, generally. Homeopathic medicines are non-toxic and do not chemically interact with conventional drugs. However, always inform Dr. Hetal about your current prescriptions so she can manage the dosage effectively."
  },
  {
    question: "Are there any dietary restrictions?",
    answer: "Minimal restrictions may apply, such as avoiding strong flavors like raw onion, garlic, or coffee immediately before or after taking the dose, as they might interfere with the absorption of the sweet pills."
  },
  {
    question: "Do steroids exist in homeopathy?",
    answer: "Absolutely not. Homeopathic remedies are prepared from natural sources (plants, minerals) and undergo potentization. Dr. Hetal Pandav follows ethical practice standards and ensures 100% steroid-free treatment."
  },
  {
    question: "Is it safe for infants and pregnant women?",
    answer: "Yes, it is one of the safest systems of medicine for all ages, including newborns and pregnant women, as the doses are minute and devoid of toxic side effects."
  }
];

export const STUDENT_SEMINARS: Seminar[] = [
  {
    id: 'sem1',
    title: "Mastering the Organon: Philosophy in Practice",
    date: "October 15, 2023",
    description: "A deep dive into Hahnemannian principles applied to modern chronic diseases.",
    image: "https://picsum.photos/seed/seminar1/400/300"
  },
  {
    id: 'sem2',
    title: "Pediatric Constitutional Prescribing",
    date: "November 05, 2023",
    description: "Identifying the core constitution in children through behavioral observation.",
    image: "https://picsum.photos/seed/seminar2/400/300"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case1',
    title: "Case of Chronic Psoriasis",
    category: "Skin",
    summary: "A 45-year-old male with 10-year history of plaque psoriasis. Treated with constitutional remedy Natrum Mur with 90% clearance in 6 months."
  },
  {
    id: 'case2',
    title: "Reversing Pediatric Asthma",
    category: "Respiratory",
    summary: "7-year-old child dependent on inhalers. Anti-miasmatic treatment reduced frequency of attacks significantly within 3 months."
  },
  {
    id: 'case3',
    title: "PCOS and Infertility",
    category: "Women's Health",
    summary: "Successful conception after 1 year of homeopathic treatment for Polycystic Ovarian Syndrome coupled with lifestyle management."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Khatri Manisha",
    location: "Vadodara",
    text: "I struggled with chronic sinusitis for over 15 years and tried almost everything. Antibiotics only gave temporary relief, but it always came back. Dr. Hetal’s treatment was different—she understood the root cause. Within 8 months, I felt completely cured. Truly grateful for this lasting relief.",
    condition: "Sinusitis"
  },
  {
    id: 't2',
    name: "Suthar Dhruv",
    location: "Online Patient (Mumbai)",
    text: "We were really worried about my daughter's recurring tonsillitis and wanted to avoid surgery at all costs. Dr. Hetal’s video consultation was so detailed; she asked about things no other doctor did. The sweet pills worked wonders, and my daughter hasn't had an episode since. Highly recommended!",
    condition: "Pediatric Tonsillitis"
  },
  {
    id: 't3',
    name: "Nisha Pandav",
    location: "Vadodara",
    text: "Migraines had started affecting my work and daily life. I was skeptical about homeopathy at first, but Dr. Pandav changed my mind. She listens with such patience. Her diagnosis was spot on, and I haven't had a severe headache in months. It feels like a fresh start.",
    condition: "Migraine"
  }
];