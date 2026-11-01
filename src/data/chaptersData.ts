import { StudyChapter } from '../types';

export const chaptersData: StudyChapter[] = [
  {
    id: 'ch1',
    chapterNumber: 1,
    title: 'Obtaining Your License & Junior Operator Laws',
    subtitle: 'Eligibility, REAL ID, JOL Curfew & Passenger Rules, Road Test Mandates, and Reinstatement',
    manualPages: 'Pages 1 – 32',
    statutoryBasis: 'M.G.L. c. 90 §§ 8, 8B, 10, 17B, 24; 540 CMR 4.04',
    executiveSummary: 'Chapter 1 governs the legal requirements to obtain and hold a Massachusetts Class D driver\'s license, with strict statutory mandates for Junior Operators (ages 16 1/2 to 18), comprehensive documentation criteria, and rigorous road testing protocols.',
    corePrinciples: [
      {
        heading: 'Age and Permit Prerequisites',
        details: [
          'Minimum age to apply for Class D or Class M Learner\'s Permit is 16 years old.',
          'Permit holders must be accompanied by a licensed driver who is at least 21 years old, has at least 1 year of driving experience, and is seated in the front passenger seat.',
          'Permit is valid for up to 2 years and must be carried in physical form at all times while operating.'
        ],
        criticalNumber: '16 YRS (Permit) / 16.5 YRS (JOL)'
      },
      {
        heading: 'Junior Operator License (JOL) Curfew & Passenger Restrictions',
        details: [
          'Night Curfew: JOL holders cannot drive between 12:30 AM and 5:00 AM unless accompanied by a parent or legal guardian.',
          'Secondary Enforcement window operates between 12:30 AM–1:00 AM and 4:00 AM–5:00 AM; however operation without a parent is strictly illegal during all curfew hours.',
          '6-Month Passenger Restriction: During the first 6 months of holding a JOL, you cannot transport any passengers under age 18 (other than immediate family) unless accompanied by a licensed driver 21+ with 1+ year experience in the passenger seat.',
          'There are NO exceptions for school activities, sports, or work.'
        ],
        criticalNumber: '12:30 AM – 5:00 AM'
      },
      {
        heading: 'Minor Driver Education Requirements',
        details: [
          '30 hours classroom instruction at an RMV-approved driving school.',
          '12 hours behind-the-wheel instruction + 6 hours in-car observation of student drivers.',
          'Parent/Guardian must attend a 2-hour driver education orientation class.',
          'Parent/Guardian must certify an additional 40 hours of supervised driving (or 30 hours with a driver skills development program).'
        ],
        criticalNumber: '30h Class / 12h Driving / 40h Parent'
      },
      {
        heading: 'Road Test Vehicle & Sponsor Standards',
        details: [
          'Vehicle must have an accessible centrally located parking brake (examiner tests brake by revving engine to 1,200–1,300 RPM in lowest gear per 540 CMR 4.04(4)).',
          'Sponsor must be at least 21 years old, hold a valid US driver\'s license from their home state with 1+ year experience (foreign licenses cannot sponsor).',
          'Sponsors cannot sponsor more than 3 applicants within a 1-year period without prior RMV approval.'
        ],
        criticalNumber: '1,200 – 1,300 RPM Brake Test'
      }
    ],
    statutoryTables: [
      {
        title: 'Mandatory JOL Permit & License Suspensions (Ages 16 1/2 to 18)',
        description: 'Statutory penalties under M.G.L. c. 90 § 8, § 10, § 17, and § 17B',
        headers: ['Violation', '1st Offense Suspension', '2nd Offense Suspension', 'Reinstatement Fee'],
        rows: [
          ['Curfew / Passenger Restriction', '60 Days', '180 Days + Attitudinal Course', '$100'],
          ['Speeding (c. 90 § 17)', '90 Days + Attitudinal Course', '1 Year + Retake All Exams', '$500'],
          ['Drag Racing (c. 90 § 17B)', '1 Year + Retake Exams + SCARR', '3 Years', '$500 (1st) / $1,000 (2nd)'],
          ['Mobile Electronic Device (Text/Phone)', '60 Days + $100 Fine + Attitudinal Course', '180 Days + $250 Fine', '$100'],
          ['Negligent Operation with Injury (Mobile Phone)', '180 Days', '1 Year', '$500']
        ]
      },
      {
        title: 'Official RMV Application & Licensing Fees',
        headers: ['Transaction', 'Fee Amount', 'Validity'],
        rows: [
          ['Learner\'s Permit Exam Fee', '$30.00', 'Per Examination Attempt'],
          ['Class D Road Test Fee', '$35.00', 'Per Test Attempt (requires 72h cancellation)'],
          ['Class D License Issuance / Renewal', '$50.00', 'Valid for 5 Years (typically expires on birthday)'],
          ['Duplicate or Amended License', '$25.00', 'Replacement of lost/damaged card'],
          ['Out-of-State License Conversion (Class D)', '$115.00', 'Includes license fee']
        ]
      }
    ],
    visualCallouts: [
      {
        title: 'REAL ID vs Standard Massachusetts Cards',
        description: 'A REAL ID features a gold star in the upper right corner and requires 1 lawful presence document, 2 proofs of MA residency, and 1 SSN document. It is required for domestic flights and federal facilities.',
        badge: 'FEDERAL COMPLIANCE'
      },
      {
        title: 'Vertical Under-21 License Posture',
        description: 'All Massachusetts licenses issued to individuals under 21 are printed vertically with "Under 21" clearly highlighted. A horizontal license can only be requested after your 21st birthday.',
        badge: 'AGE RESTRICTION'
      }
    ],
    flashcards: [
      {
        id: 'fc-1-1',
        chapter: 1,
        category: 'JOL Restrictions',
        front: 'What are the restricted curfew hours for Junior Operator License (JOL) holders?',
        back: '12:30 AM to 5:00 AM (unless accompanied by a parent or legal guardian). Secondary enforcement applies 12:30-1:00 AM and 4:00-5:00 AM.',
        statute: 'M.G.L. c. 90, § 10'
      },
      {
        id: 'fc-1-2',
        chapter: 1,
        category: 'Passenger Rules',
        front: 'How long does the JOL passenger restriction last, and who can ride with you?',
        back: 'First 6 months after license issuance. You cannot carry passengers under 18 (other than immediate family) unless accompanied by a licensed driver 21+ with 1+ year experience in the passenger seat.',
        statute: 'M.G.L. c. 90, § 8'
      },
      {
        id: 'fc-1-3',
        chapter: 1,
        category: 'JOL Speeding',
        front: 'What is the penalty for a 1st speeding offense with a JOL?',
        back: 'Mandatory 90-day license suspension, completion of Driver Attitudinal Retraining, retaking learner\'s permit exam, and a $500 reinstatement fee.',
        statute: 'M.G.L. c. 90, § 17'
      },
      {
        id: 'fc-1-4',
        chapter: 1,
        category: 'Drag Racing',
        front: 'What is the suspension penalty for a first-offense drag racing conviction for a JOL holder?',
        back: '1-year license suspension, new permit exam, Driver Attitudinal Retraining, SCARR course, and a $500 reinstatement fee ($1,000 for 2nd offense).',
        statute: 'M.G.L. c. 90, § 17B'
      },
      {
        id: 'fc-1-5',
        chapter: 1,
        category: 'Road Test Sponsor',
        front: 'What are the 3 mandatory qualifications for a road test sponsor?',
        back: 'Must be at least 21 years old, have at least 1 year of driving experience, and hold a valid driver\'s license from their US home state (foreign licenses invalid).',
        statute: 'RMV Road Test Rules'
      }
    ]
  },
  {
    id: 'ch2',
    chapterNumber: 2,
    title: 'Safety First, Equipment & Defensive Driving',
    subtitle: 'Seat Belt Mandates, Stopping Distance Physics, Lincoln Penny Test, and Hands-Free Electronics',
    manualPages: 'Pages 33 – 54',
    statutoryBasis: 'M.G.L. c. 90 §§ 7, 7AA, 13A, 13B; 49 C.F.R. 571.213',
    executiveSummary: 'Chapter 2 covers vehicular safety devices, statutory seat belt obligations, the complete ban on handheld electronic devices, defensive stopping calculations, and vehicle inspection specifications.',
    corePrinciples: [
      {
        heading: 'Seat Belt & Child Restraint Laws',
        details: [
          'Massachusetts law requires every occupant in a private passenger vehicle under 18,000 lbs to wear a safety belt.',
          'Driver fine is $25 for being unbelted, plus $25 for every passenger age 12, 13, 14, or 15 not wearing a seat belt. Passengers 16+ receive their own $25 citation.',
          'Children must remain in federally approved child passenger restraints until they are at least 8 years old OR at least 57 inches tall.',
          'Air bags do not replace seat belts. Never place a rear-facing infant seat in the front seat if an air bag is active.'
        ],
        criticalNumber: '$25 Fine / 8 Yrs or 57 Inches'
      },
      {
        heading: 'Massachusetts Hands-Free Driving Law',
        details: [
          'Drivers 18 and older cannot hold or support any mobile electronic device while operating a vehicle. Only voice-to-text or single-touch activation is allowed when mounted to dashboard/console.',
          'Handheld device use is prohibited at red lights and stop signs.',
          'Drivers under 18 are completely banned from using any mobile phone or Bluetooth device for any reason while driving (only exception is calling 911 for emergency).'
        ],
        criticalNumber: '$100 / $250 / $500 Fines'
      },
      {
        heading: 'Braking Distance and Reaction Time Physics',
        details: [
          'Average driver reaction time is 3/4 of a second.',
          'At 30 mph: Reaction distance is ~33 ft; braking distance is ~71 ft; Total Stopping Distance = 104 feet.',
          'At 50 mph: Reaction distance is 55 ft; braking distance is 160 ft; Total Stopping Distance = 215 feet.',
          'At 60 mph: Reaction distance is 66 ft; braking distance is 226 ft; Total Stopping Distance = 292 feet (nearly an entire football field).',
          'Large trucks and tractor-trailers require twice the stopping distance of passenger cars.'
        ],
        criticalNumber: '292 FT Total Stop at 60 MPH'
      },
      {
        heading: 'Tire Tread Depth & Lincoln Penny Inspection',
        details: [
          'Tires must possess at least 2/32 of an inch of tread depth in every major groove to pass the mandatory annual inspection.',
          'The distance between the rim of a US penny and the top of Lincoln\'s head is exactly 2/32". If you slide a penny into the groove head first and see the top of Lincoln\'s hair, tires are bald and illegal.'
        ],
        criticalNumber: '2/32" Minimum Tread'
      }
    ],
    statutoryTables: [
      {
        title: 'Total Stopping Distance Dynamics on Dry Level Pavement (AAA)',
        headers: ['Speed (MPH)', 'Reaction Distance (3/4s)', 'Braking Distance', 'Total Stopping Distance'],
        rows: [
          ['20 MPH', '22 feet', '37 feet', '59 feet'],
          ['30 MPH', '33 feet', '71 feet', '104 feet'],
          ['40 MPH', '44 feet', '112 feet', '156 feet'],
          ['50 MPH', '55 feet', '160 feet', '215 feet'],
          ['60 MPH', '66 feet', '226 feet', '292 feet']
        ]
      },
      {
        title: 'Child Passenger Restraint Specifications',
        headers: ['Seat Type', 'Child Weight Limit', 'Positioning Requirement'],
        rows: [
          ['Infant Seat', 'Up to 20 pounds', 'Must face rear of vehicle in back seat'],
          ['Toddler Convertible Seat', '20 – 40 pounds', 'Forward-facing with internal harness'],
          ['Booster Seat', '40 – 80 pounds', 'Belt-positioning booster in back seat until 57" or age 8']
        ]
      }
    ],
    visualCallouts: [
      {
        title: 'Headlight Statutory Illumination Windows',
        description: 'Headlights and taillights are mandatory from 1/2 hour after sunset until 1/2 hour before sunrise, whenever visibility is less than 500 feet, and whenever windshield wipers are in continuous use. Daytime running lights are NOT sufficient.',
        badge: 'VISIBILITY STATUTE'
      },
      {
        title: 'High Beam Dimming Protocols',
        description: 'Dim high beams to low beams when an oncoming vehicle approaches within 500 feet, or when following within 200 to 300 feet behind another vehicle.',
        badge: 'NIGHT SAFETY'
      }
    ],
    flashcards: [
      {
        id: 'fc-2-1',
        chapter: 2,
        category: 'Seat Belts',
        front: 'What is the fine for failing to wear a seat belt in Massachusetts?',
        back: '$25 for the driver, $25 for each passenger 16+, and $25 for the driver for each passenger between ages 12 and 15.',
        statute: 'M.G.L. c. 90, § 13A'
      },
      {
        id: 'fc-2-2',
        chapter: 2,
        category: 'Child Restraints',
        front: 'Until what milestone must children ride in a federally approved car seat or booster?',
        back: 'Until they reach at least eight (8) years old OR at least 57 inches in height.',
        statute: 'M.G.L. c. 90, § 7AA'
      },
      {
        id: 'fc-2-3',
        chapter: 2,
        category: 'Tire Depth',
        front: 'How do you test tire tread depth with a penny, and what is the legal minimum?',
        back: 'Minimum legal depth is 2/32 of an inch. Slide a penny upside down into the tread: if Lincoln\'s head is visible, the tire is worn out and fails inspection.',
        statute: '540 CMR 4.00'
      },
      {
        id: 'fc-2-4',
        chapter: 2,
        category: 'Stopping Distance',
        front: 'What is the total stopping distance of a passenger car traveling at 60 mph on dry pavement?',
        back: 'Approximately 292 feet (66 feet reaction distance + 226 feet braking distance).',
        statute: 'AAA Driving Standards'
      },
      {
        id: 'fc-2-5',
        chapter: 2,
        category: 'Hands-Free Laws',
        front: 'Can adult drivers touch their mounted phone at a red light?',
        back: 'NO. Holding or using electronic devices is illegal whenever operating a vehicle on a public way, including while stopped at red lights or stop signs.',
        statute: 'M.G.L. c. 90, § 13B'
      }
    ]
  },
  {
    id: 'ch3',
    chapterNumber: 3,
    title: 'Keeping Your License: Violations, Suspensions & OUI',
    subtitle: 'Speeding Math, Surchargeable Events, Habitual Offender Status, Implied Consent & Melanie\'s Law',
    manualPages: 'Pages 55 – 76',
    statutoryBasis: 'M.G.L. c. 90 §§ 17, 20, 22F, 24, 24 1/2, 24I, 24P',
    executiveSummary: 'Chapter 3 details the legal consequences of moving violations, the mathematical speeding fine formula, automatic license suspensions for surchargeable events, and the strict penalties governing Operating Under the Influence (OUI).',
    corePrinciples: [
      {
        heading: 'Speeding Fine Calculation Architecture',
        details: [
          'Minimum speeding penalty is $105 for the first 10 mph over the posted speed limit (includes $100 base + $5 public safety surcharge).',
          'For each additional mph driven over the first 10, an extra $10 is added.',
          'Every speeding fine includes a mandatory $50 surcharge dedicated to the Head Injury Treatment Services Trust Fund.',
          'All speeding fines are doubled if committed within a posted roadway work zone.'
        ],
        criticalNumber: '$105 + $10/MPH over 10 (Doubled in Work Zones)'
      },
      {
        heading: 'Mandatory License Suspensions for Surchargeable Events',
        details: [
          '3 Speeding Convictions within 12 months = Automatic 30-day license suspension + $100 fee.',
          '3 Surchargeable Events within 2 years = Mandatory completion of Driver Retraining within 90 days or indefinite suspension.',
          '7 Surchargeable Events within 3 years = Automatic 60-day license suspension + $100 fee.',
          'Habitual Traffic Offender (3 major or 12 combined major/minor violations in 5 years) = Mandatory 4-year license suspension + $500 fee.'
        ],
        criticalNumber: '3 in 1yr (30d) / 7 in 3yr (60d) / Habitual (4yr)'
      },
      {
        heading: 'Blood Alcohol Content (BAC) Legal Limits',
        details: [
          'Drivers age 21 or older: 0.08% BAC threshold.',
          'Commercial Driver\'s License (CDL) holders: 0.04% BAC threshold.',
          'Under 21 Zero Tolerance Law: 0.02% BAC threshold (immediate administrative suspension under MGL c.90 § 24P).'
        ],
        criticalNumber: '0.08% Adult / 0.02% Under 21 / 0.04% CDL'
      },
      {
        heading: 'Implied Consent & Breathalyzer Refusals',
        details: [
          'Under Massachusetts Implied Consent Law, driving on public ways implies consent to chemical testing (breath or blood) upon arrest for OUI.',
          'Refusal for driver 21+ with no prior OUI: Immediate 180-day license suspension.',
          'Refusal for driver under 21 with no prior OUI: 3 years + 180 days suspension under Youth Alcohol Program.',
          'Refusal for driver under 18 with no prior OUI: 3 years + 1 year suspension.'
        ],
        criticalNumber: '180 Days (21+) / 3 Yrs + 180 Days (Under 21)'
      }
    ],
    statutoryTables: [
      {
        title: 'Penalties for Operating Under the Influence (OUI) Convictions',
        headers: ['Conviction Tier', 'Fines', 'House of Correction / Prison', 'License Suspension'],
        rows: [
          ['1st Offense', '$500 – $5,000', 'Up to 2 1/2 years', '1 Year (waivable to 45-90d with program)'],
          ['2nd Offense', '$600 – $10,000', '30 days – 2 1/2 years', '2 Years + Mandatory IID for 2 years'],
          ['3rd Offense (Felony)', '$1,000 – $15,000', '150 days – 5 years state prison', '8 Years'],
          ['4th Offense (Felony)', '$1,500 – $25,000', '1 year – 5 years state prison', '10 Years'],
          ['5th Offense (Felony)', '$2,000 – $50,000', '2 years – 5 years state prison', 'Lifetime Revocation (No Hardship)']
        ]
      },
      {
        title: 'Safe Driver Insurance Plan (SDIP) Merit Rating Points',
        headers: ['Incident Type', 'Surcharge Points', 'Experience Evaluation Period'],
        rows: [
          ['Minor Moving Traffic Violation (e.g. speeding)', '2 Points', '5-Year Observation Window'],
          ['Minor At-Fault Crash ($500 – $1,000 claim)', '3 Points', '5-Year Observation Window'],
          ['Major At-Fault Crash (over $1,000 claim)', '4 Points', '5-Year Observation Window'],
          ['Major Moving Violation (OUI, reckless, drag racing)', '5 Points', '5-Year Observation Window']
        ]
      }
    ],
    visualCallouts: [
      {
        title: 'Open Container Prohibition',
        description: 'It is strictly illegal to have an open container of alcohol anywhere in the passenger compartment of a vehicle on any public way, even if held by a passenger. Fine: $100 to $500, with immediate arrest if under 21.',
        badge: 'CRIMINAL CITATION'
      },
      {
        title: '19 Standards of Fault for Crashes',
        description: 'You are automatically deemed >50% at fault if a crash involves rear-ending another car, out-of-lane collision, failure to signal, backing up, or turning left across oncoming traffic.',
        badge: 'FAULT STANDARDS'
      }
    ],
    flashcards: [
      {
        id: 'fc-3-1',
        chapter: 3,
        category: 'Speeding Calculation',
        front: 'How much is the fine for driving 73 mph in a 55 mph zone (18 mph over)?',
        back: '$185 total ($105 base for first 10 mph + $80 for next 8 mph at $10/mph, including $50 Head Injury surcharge).',
        statute: 'M.G.L. c. 90, § 17'
      },
      {
        id: 'fc-3-2',
        chapter: 3,
        category: 'Habitual Offender',
        front: 'What triggers Habitual Traffic Offender status and what is the penalty?',
        back: '3 major moving violations OR 12 combined violations within 5 years. Results in a mandatory 4-year license suspension.',
        statute: 'M.G.L. c. 90, § 22F'
      },
      {
        id: 'fc-3-3',
        chapter: 3,
        category: 'Implied Consent',
        front: 'What happens if a 21+ driver refuses a breathalyzer test upon first OUI arrest?',
        back: 'Immediate 180-day administrative license suspension.',
        statute: 'M.G.L. c. 90, § 24'
      },
      {
        id: 'fc-3-4',
        chapter: 3,
        category: 'Underage Zero Tolerance',
        front: 'What is the BAC limit for drivers under 21?',
        back: '0.02% Blood Alcohol Content. Violations trigger an immediate 30-day suspension plus 180 days (or 1 year if under 18) for Youth Alcohol Education.',
        statute: 'M.G.L. c. 90, § 24P'
      },
      {
        id: 'fc-3-5',
        chapter: 3,
        category: 'Surchargeable Events',
        front: 'What suspension occurs after 7 surchargeable events in 3 years?',
        back: 'An automatic 60-day license suspension and a $100 reinstatement fee.',
        statute: 'M.G.L. c. 90, § 22'
      }
    ]
  },
  {
    id: 'ch4',
    chapterNumber: 4,
    title: 'Rules of the Road: Signals, Signs & Right-of-Way',
    subtitle: 'Traffic Signals, Road Markings, Rotary Navigation Protocol, and Hill Parking Geometry',
    manualPages: 'Pages 77 – 118',
    statutoryBasis: 'M.G.L. c. 89 §§ 1–11; M.G.L. c. 90 §§ 14, 17',
    executiveSummary: 'Chapter 4 is the largest and most tested section of the RMV Manual, defining statutory speed limits by district, visual road signs, pavement striping rules, rotary right-of-way, and precision parking geometry.',
    corePrinciples: [
      {
        heading: 'Statutory Speed Limits by District',
        details: [
          'School Zone: 20 mph when children are present or yellow lights are flashing.',
          'Thickly Settled or Business District: 30 mph unless posted 25 mph citywide.',
          'Outside a Thickly Settled District: 40 mph.',
          'Divided Highway outside Thickly Settled District: 50 mph.',
          'Mass Turnpike (I-90) Minimum Speed: 40 mph; Harbor Tunnels Minimum: 20 mph.'
        ],
        criticalNumber: '20 / 30 / 40 / 50 MPH'
      },
      {
        heading: 'Traffic Signal Special Protocols',
        details: [
          'Flashing Red Light: Exact equivalent of a STOP sign. Stop completely, yield, and proceed when safe.',
          'Flashing Yellow Light: Warning signal. Slow down, proceed with caution, and remain alert.',
          'Flashing Yellow Arrow: Unprotected turn. You may turn after yielding to oncoming traffic and pedestrians.',
          'Steady Green Arrow: Protected turn. Oncoming traffic faces red light.',
          'Blacked-Out / Non-functioning Light: Treat the intersection as a 4-way stop in all directions.',
          'Left Turn on Red: Legal ONLY when turning from a one-way street onto another one-way street after coming to a complete stop.'
        ],
        criticalNumber: 'Flashing Red = STOP Sign'
      },
      {
        heading: 'Rotaries & Roundabouts Traffic Rules',
        details: [
          'Traffic inside a rotary flows counter-clockwise around the central island.',
          'Vehicles inside the rotary ALWAYS possess absolute right-of-way over entering vehicles.',
          'Quarter-turn or straight through: Enter and exit from the right lane.',
          'Three-quarter turn or U-turn: Enter from the left lane, travel inner ring, and signal right to exit.',
          'If you miss your exit, NEVER stop or reverse; continue counter-clockwise around the central island.'
        ],
        criticalNumber: 'Inside Traffic Has Right-of-Way'
      },
      {
        heading: 'Hill Parking Wheel Directions & Clearances',
        details: [
          'Uphill WITH a curb: Turn wheels LEFT (away from curb) so tire backs up against curb.',
          'Downhill WITH a curb: Turn wheels RIGHT (inward to curb) so car rolls into curb.',
          'Uphill or Downhill WITHOUT a curb: Turn wheels RIGHT (toward edge of road/shoulder).',
          'Parallel Parking: Wheels must be within 12 inches (1 foot) of the curb.',
          'Clearances: At least 10 feet from fire hydrant; at least 20 feet from an intersection or crosswalk; 800 feet from a fire emergency.'
        ],
        criticalNumber: 'Uphill Curb = Left / All Others = Right'
      }
    ],
    statutoryTables: [
      {
        title: 'Master Guide to Road Sign Shapes and Semantic Meaning',
        headers: ['Shape', 'Color Palette', 'Primary Regulatory Purpose'],
        rows: [
          ['8-Sided Octagon', 'Red & White', 'STOP Sign (Full mandatory halt)'],
          ['Downward Equilateral Triangle', 'Red Border, White Field', 'YIELD Sign (Slow and yield right-of-way)'],
          ['5-Sided Pentagon', 'Fluorescent Yellow-Green', 'School Zone / School Crossing warning'],
          ['Round / Circle', 'Yellow with Black X and RR', 'Advance Railroad Crossing Warning'],
          ['Diamond', 'Yellow / Fluorescent Orange', 'General Road Hazard / Construction Warning'],
          ['Vertical Rectangle / Square', 'Black & White', 'Regulatory Laws (Speed limits, One Way, Do Not Pass)'],
          ['Pennant (Horizontal Triangle)', 'Yellow with Black Letters', 'No Passing Zone (placed on left side of roadway)']
        ]
      },
      {
        title: 'Pavement Striping & Passing Rules',
        headers: ['Pavement Marking', 'Traffic Direction', 'Permitted Maneuver'],
        rows: [
          ['Broken Yellow Line', 'Opposite Directions', 'Passing permitted when oncoming lane is clear (need 400 ft view)'],
          ['One Solid Yellow, One Broken', 'Opposite Directions', 'Passing permitted ONLY on side with broken line'],
          ['Double Solid Yellow Lines', 'Opposite Directions', 'Passing strictly prohibited in both directions (left turn to driveway allowed)'],
          ['Broken White Line', 'Same Direction', 'Lane changing permitted after signaling (100 ft local / 500 ft highway)'],
          ['Double Solid White Line', 'Same Direction', 'Lane changing or crossing line is strictly prohibited'],
          ['White Diamond Marking', 'Same Direction', 'Restricted lane (HOV carpool, transit bus, or bicycle)']
        ]
      }
    ],
    visualCallouts: [
      {
        title: 'Move Over Law (Chapter 418 of Acts of 2008)',
        description: 'When approaching stationary emergency, highway maintenance, or recovery vehicles with flashing lights on a multi-lane highway, you must vacate the lane adjacent to the emergency vehicle if safe, or slow to a safe speed.',
        badge: 'CRITICAL SAFETY'
      },
      {
        title: 'School Bus Stopping Mandate',
        description: 'On undivided roads, vehicles traveling in BOTH directions must stop when red lights flash and stop arm extends. First offense fine: $250 and license suspension. Divided highway with physical median is the ONLY exception.',
        badge: 'MANDATORY STOP'
      }
    ],
    flashcards: [
      {
        id: 'fc-4-1',
        chapter: 4,
        category: 'Speed Limits',
        front: 'What is the statutory speed limit in a thickly settled district?',
        back: '30 mph (unless a city or town has opted into the 25 mph statutory limit under M.G.L. c. 90 § 17c).',
        statute: 'M.G.L. c. 90, § 17'
      },
      {
        id: 'fc-4-2',
        chapter: 4,
        category: 'Hill Parking',
        front: 'Which way do you turn front wheels when parking Uphill with a curb?',
        back: 'Turn wheels LEFT (away from the curb) so the back of the front tire rolls against the curb if brakes slip.',
        statute: 'RMV Parking Rules'
      },
      {
        id: 'fc-4-3',
        chapter: 4,
        category: 'Rotary Rules',
        front: 'Who has right-of-way in a Massachusetts rotary, and what do you do if you miss your exit?',
        back: 'Vehicles already circulating inside have absolute right-of-way. If you miss your exit, continue counter-clockwise around again; never stop or reverse.',
        statute: 'RMV Rotary Protocol'
      },
      {
        id: 'fc-4-4',
        chapter: 4,
        category: 'Clearances',
        front: 'What are the legal parking distances from a curb, a fire hydrant, and an intersection?',
        back: 'Within 12 inches of curb; at least 10 feet from a fire hydrant; at least 20 feet from an intersection/crosswalk.',
        statute: 'M.G.L. c. 90'
      },
      {
        id: 'fc-4-5',
        chapter: 4,
        category: 'Traffic Signals',
        front: 'When can a driver legally make a left turn on a red light in Massachusetts?',
        back: 'Only when turning from a one-way street onto another one-way street, after coming to a full stop and yielding to traffic and pedestrians.',
        statute: 'M.G.L. c. 89, § 8'
      }
    ]
  },
  {
    id: 'ch5',
    chapterNumber: 5,
    title: 'Special Driving Situations & Vulnerable Road Users',
    subtitle: 'Vulnerable Users Law (4ft), Dutch Reach, Skid Recovery, Hydroplaning, and Crash Reporting',
    manualPages: 'Pages 119 – 140',
    statutoryBasis: 'M.G.L. c. 85 § 11B; M.G.L. c. 89 § 2; M.G.L. c. 90 §§ 14, 24, 26',
    executiveSummary: 'Chapter 5 provides life-saving guidance on sharing the road with pedestrians, bicyclists, and heavy commercial vehicles, as well as handling high-stress emergencies like skids, brake failure, and crash reporting.',
    corePrinciples: [
      {
        heading: 'Vulnerable Road Users Law & Bicycle Safety',
        details: [
          'Motorists must provide at least 4 feet of safe passing clearance when overtaking bicyclists, pedestrians, or roadside workers.',
          'Bicyclists have the legal right to use the full lane on public roads, even when bike lanes exist.',
          'Opening doors into bicyclists ("dooring") carries fines up to $100. Practice the "Dutch Reach" by using your far hand to open car doors.',
          'Green painted Bicycle Boxes at intersections require motorists to stop behind the box at red signals to keep cyclists safe from right-hook turns.'
        ],
        criticalNumber: '4 Feet Minimum Clearance'
      },
      {
        heading: 'Large Trucks & Heavy Vehicle Blind Spots',
        details: [
          'Large trucks have deep "No-Zones" on all four sides. If you cannot see the driver\'s side mirrors, the trucker cannot see you.',
          'Trucks often swing wide to the left before executing a right turn. Never attempt to pass a turning truck on the right.',
          'Tractor trailers require twice the stopping distance of passenger cars. Never cut abruptly in front of a truck.'
        ],
        criticalNumber: 'Double Stopping Distance'
      },
      {
        heading: 'Handling Driving Emergencies',
        details: [
          'Skidding: Gently ease off accelerator, shift to neutral, and steer gently in the direction of the skid. Never slam on the brakes.',
          'Hydroplaning: Ease foot off the gas pedal to let the car slow down naturally. Do not brake or steer violently.',
          'Brake Failure: Downshift to lowest gear, pump pedal rapidly (non-ABS), and gently apply emergency parking brake while holding the release.',
          'Stalled on Train Tracks: Evacuate all passengers immediately. If train is approaching, run at a 45-degree angle away from tracks towards the approaching train.'
        ],
        criticalNumber: 'Steer in Direction of Skid'
      },
      {
        heading: 'Breakdown Safety & Warning Flare Placement',
        details: [
          'On a divided highway: Place warning triangles or flares 10 feet behind and 100 feet behind your vehicle.',
          'On a two-lane undivided road: Place flares 10 feet behind, 100 feet behind, AND 100 feet in front of your vehicle.',
          'Crash Reporting: You must file a written Motor Vehicle Crash Operator Report with both the RMV and local police within 5 days if damage exceeds $1,000 or injury occurs.'
        ],
        criticalNumber: '10ft / 100ft Behind & 100ft Front (5 Days to Report)'
      }
    ],
    statutoryTables: [
      {
        title: 'Emergency Breakdown Triangle & Flare Placement Standards',
        headers: ['Highway Configuration', 'Flare 1 Placement', 'Flare 2 Placement', 'Flare 3 Placement'],
        rows: [
          ['Divided Highway (One-way direction)', '10 feet directly behind vehicle', '100 feet directly behind vehicle', 'Not required in front'],
          ['Two-Lane Undivided Road (Two-way traffic)', '10 feet directly behind vehicle', '100 feet directly behind vehicle', '100 feet in front of vehicle']
        ]
      },
      {
        title: 'Crash Responsibilities & Hit and Run Penalties (c. 90 § 24)',
        headers: ['Crash Incident Severity', 'Driver Legal Obligation', 'Maximum Criminal Penalty for Fleeing'],
        rows: [
          ['Property Damage Only ($1,000+)', 'Stop, exchange documents, file RMV report within 5 days', 'Up to $200 fine and up to 2 years jail (60d–1yr suspension)'],
          ['Crash Involving Personal Injury', 'Stop, provide first aid, call 911, file report within 5 days', 'Up to $1,000 fine and up to 2 years prison (1–2yr suspension)'],
          ['Crash Resulting in Death', 'Stop, identify, render aid, call 911 immediately', 'Up to $5,000 fine and 2 1/2 to 10 years state prison (MGL c.90)']
        ]
      }
    ],
    visualCallouts: [
      {
        title: 'Trolley 8-Foot Passenger Clearance',
        description: 'You must never drive closer than eight (8) feet to a trolley passenger step while passengers are boarding or disembarking on a shared street.',
        badge: 'PUBLIC TRANSIT'
      },
      {
        title: 'Dutch Reach Method',
        description: 'Always open your car door with your far hand (right hand for driver). This naturally pivots your torso to look over your shoulder, preventing cyclist door collisions.',
        badge: 'DUTCH REACH'
      }
    ],
    flashcards: [
      {
        id: 'fc-5-1',
        chapter: 5,
        category: 'Vulnerable Road Users',
        front: 'What minimum safe passing distance must you leave when overtaking a bicyclist?',
        back: 'At least four (4) feet of distance between your vehicle and the cyclist.',
        statute: 'M.G.L. c. 89, § 2'
      },
      {
        id: 'fc-5-2',
        chapter: 5,
        category: 'Skidding',
        front: 'What are the 3 critical steps to recover from a vehicular skid?',
        back: '1. Ease foot off gas pedal. 2. Shift into neutral. 3. Turn steering wheel in the direction of the skid. Never hit the brakes.',
        statute: 'RMV Emergency Standards'
      },
      {
        id: 'fc-5-3',
        chapter: 5,
        category: 'Accident Reporting',
        front: 'When must a Massachusetts crash report be filed, and within what timeframe?',
        back: 'Within 5 days of any crash resulting in death, personal injury, or property damage exceeding $1,000 (filed with both RMV and local police).',
        statute: 'M.G.L. c. 90, § 26'
      },
      {
        id: 'fc-5-4',
        chapter: 5,
        category: 'Emergency Flare Distances',
        front: 'Where should flares be placed when broken down on a two-lane two-way road?',
        back: '10 feet behind your vehicle, 100 feet behind your vehicle, and 100 feet in front of your vehicle.',
        statute: 'RMV Breakdown Standards'
      },
      {
        id: 'fc-5-5',
        chapter: 5,
        category: 'Trolleys',
        front: 'What distance must you maintain from a stopped trolley letting passengers off?',
        back: 'You must not drive closer than eight (8) feet to the trolley passenger step.',
        statute: 'M.G.L. c. 90, § 14'
      }
    ]
  }
];
