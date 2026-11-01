import { Question } from '../types';

export const manualQuestions: Question[] = [
  // ==========================================
  // CHAPTER 1: OBTAINING YOUR LICENSE
  // ==========================================
  {
    id: "q-man-ch1-01",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Vision Screening Standards",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the minimum visual acuity required to qualify for an unrestricted Massachusetts Class D driver's license?",
    options: [
      "20/20 in both eyes",
      "20/40 visual acuity in the better eye with or without corrective lenses",
      "20/50 in either eye",
      "20/30 in the dominant eye only"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under Massachusetts RMV regulations, you must pass a vision screening with at least 20/40 visual acuity in your better eye (with or without corrective lenses) and at least 120 degrees of horizontal peripheral vision.",
    source: "Driver's Manual, Chapter 1 - Vision Screening",
    statute: "540 CMR 24.00",
    tags: ["Vision Test", "License Requirements", "Restriction B"]
  },
  {
    id: "q-man-ch1-02",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Corrective Lenses Restriction",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "If you require glasses or contact lenses to pass the RMV vision screening, what restriction code will appear on your Massachusetts license?",
    options: [
      "Restriction A",
      "Restriction B",
      "Restriction C",
      "Restriction J"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Restriction B on a Massachusetts driver's license denotes 'Corrective Lenses'. Operating a vehicle without prescribed corrective lenses is a civil motor vehicle infraction.",
    source: "Driver's Manual, Chapter 1 - License Restrictions",
    statute: "M.G.L. c. 90, § 8",
    tags: ["Restriction B", "Corrective Lenses"]
  },
  {
    id: "q-man-ch1-03",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "REAL ID Requirements",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "How is an official REAL ID driver's license visually distinguished from a Standard Massachusetts driver's license?",
    options: [
      "A red banner across the bottom",
      "A gold star inside a circle in the top right corner",
      "An embossed Massachusetts state seal watermark only",
      "A holographic barcode on the front"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A federally compliant REAL ID license features a gold star enclosed in a circle in the top right corner. Standard credentials state 'Not for Federal Identification'.",
    source: "Driver's Manual, Chapter 1 - REAL ID Credentials",
    statute: "6 CFR Part 37",
    tags: ["REAL ID", "Documentation"]
  },
  {
    id: "q-man-ch1-04",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Learner's Permit Validity",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "For how long is a Massachusetts Class D learner's permit valid from the date of issuance?",
    options: [
      "1 year",
      "2 years",
      "3 years",
      "5 years"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A Massachusetts Class D learner's permit is valid for exactly two (2) years from its issue date. If it expires prior to passing the road test, the applicant must re-test for a new permit.",
    source: "Driver's Manual, Chapter 1 - Learner's Permit",
    statute: "M.G.L. c. 90, § 8B",
    tags: ["Permit Validity", "Expirations"]
  },
  {
    id: "q-man-ch1-05",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Road Test Vehicle Emergency Brake",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "What specific safety equipment must your vehicle have to be accepted by the RMV examiner for a Class D road test?",
    options: [
      "An automatic transmission only",
      "An emergency parking brake located in the center console between the front seats accessible to the examiner",
      "Dual rear-view camera monitors",
      "A factory-installed dash camera"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The vehicle must have an emergency parking brake mounted in the center console between the driver and front passenger seats so the examiner can reach it, unless the vehicle has dual brake controls or a manufacturer emergency electronic brake override accessible to the passenger.",
    source: "Driver's Manual, Chapter 1 - Road Test Vehicle Requirements",
    statute: "540 CMR 2.06",
    tags: ["Road Test", "Vehicle Equipment", "Emergency Brake"]
  },
  {
    id: "q-man-ch1-06",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Parent Driver Education Requirement",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "For a driver under age 18 applying for a JOL, how many hours of driver education orientation must at least one parent or guardian attend?",
    options: [
      "1 hour",
      "2 hours",
      "4 hours",
      "6 hours"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts law requires at least one parent or legal guardian to complete a mandatory 2-hour parent orientation curriculum with the certified driving school before the minor can take the road test.",
    source: "Driver's Manual, Chapter 1 - Driver Education Program",
    statute: "M.G.L. c. 90, § 8",
    tags: ["JOL", "Parent Class", "Driver Education"]
  },
  {
    id: "q-man-ch1-07",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "JOL Electronic Device Ban",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Under Massachusetts law, when is a Junior Operator (under 18) permitted to use a mobile phone or electronic device while operating a motor vehicle?",
    options: [
      "Only when using hands-free Bluetooth mode",
      "Only while stopped at a steady red traffic light",
      "Only in an emergency to report an imminent safety threat to police, fire, or ambulance",
      "Whenever driving with a licensed adult in the passenger seat"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Junior operators are strictly prohibited from using any mobile phone or mobile electronic device while driving—including hands-free mode—except during a genuine emergency to contact public safety officials.",
    source: "Driver's Manual, Chapter 1 - JOL Distracted Driving",
    statute: "M.G.L. c. 90, § 8M",
    tags: ["JOL", "Cell Phone", "Distracted Driving"]
  },
  {
    id: "q-man-ch1-08",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "JOL Cell Phone Suspension Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "What is the license suspension for a Junior Operator convicted of a first offense for using a mobile electronic device while driving?",
    options: [
      "30-day suspension and a $50 fine",
      "60-day suspension, $100 fine, and mandatory driver attitudinal retraining course",
      "90-day suspension and $250 fine",
      "1-year suspension and court appearance"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A first offense cell phone conviction for a JOL holder carries a 60-day suspension, a $100 fine, and the requirement to complete a State-certified driver attitudinal retraining course.",
    source: "Driver's Manual, Chapter 1 - JOL Penalties",
    statute: "M.G.L. c. 90, § 8M",
    tags: ["JOL", "Penalties", "Cell Phone"]
  },
  {
    id: "q-man-ch1-09",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "License Expiration and In-Person Renewal",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "At what age are Massachusetts drivers required by state law to renew their driver's license in person at an RMV Service Center rather than online?",
    options: [
      "Age 65 and older",
      "Age 70 and older",
      "Age 75 and older",
      "Age 80 and older"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Massachusetts drivers age 75 or older must renew their driver's license in person at an RMV service center and complete a vision screening.",
    source: "Driver's Manual, Chapter 1 - License Renewal",
    statute: "M.G.L. c. 90, § 8I",
    tags: ["Senior Drivers", "License Renewal"]
  },
  {
    id: "q-man-ch1-10",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Address Change Notification",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Within how many days must a licensed Massachusetts driver notify the RMV of a legal change of residential or mailing address?",
    options: [
      "10 days",
      "30 days",
      "60 days",
      "90 days"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "M.G.L. c. 90 § 26A requires all drivers to report any change of address to the RMV within 30 days. This can be executed online or in writing.",
    source: "Driver's Manual, Chapter 1 - License Maintenance",
    statute: "M.G.L. c. 90, § 26A",
    tags: ["Address Change", "Deadlines"]
  },

  // ==========================================
  // CHAPTER 2: SAFETY FIRST
  // ==========================================
  {
    id: "q-man-ch2-01",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Seat Belt Law - Minor Liability",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "In Massachusetts, who is issued the $25 citation if a passenger aged 14 is observed riding in a motor vehicle without wearing a seat belt?",
    options: [
      "The 14-year-old passenger directly",
      "The driver of the vehicle",
      "Both the passenger and the driver receive separate citations",
      "The vehicle owner only"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under M.G.L. c. 90 § 13A, drivers are legally responsible for ensuring that all passengers aged 12 to 15 are wearing seat belts, and the driver is assessed the $25 fine for each unbelted passenger in that age group.",
    source: "Driver's Manual, Chapter 2 - Seat Belt Law",
    statute: "M.G.L. c. 90, § 13A",
    tags: ["Seat Belt", "Fines", "Driver Responsibility"]
  },
  {
    id: "q-man-ch2-02",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Child Booster Seat Dimensions",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Under Massachusetts Child Passenger Safety Law, a child must remain secured in an approved booster seat until they reach what age or height?",
    options: [
      "Age 6 or 48 inches tall",
      "Age 8 or at least 57 inches (4 feet 9 inches) tall",
      "Age 10 or 60 inches tall",
      "Age 12 or 80 pounds"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts General Law mandates that children must ride in a federally approved booster seat until they reach 8 years of age OR exceed 57 inches (4'9\") in height.",
    source: "Driver's Manual, Chapter 2 - Child Passenger Safety Law",
    statute: "M.G.L. c. 90, § 7AA",
    tags: ["Child Restraint", "Booster Seat", "Statutory Dimensions"]
  },
  {
    id: "q-man-ch2-03",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Rear-Facing Car Seat Standards",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "Until what minimum age must infants and toddlers ride in a rear-facing child safety seat under Massachusetts safety guidance?",
    options: [
      "Until age 1",
      "Until at least age 2, or until exceeding the seat's height/weight limit",
      "Until age 4",
      "Until they weigh at least 15 pounds"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Infants and toddlers must be secured in a rear-facing infant car seat until at least age 2, or until they reach the maximum height and weight limits specified by the seat manufacturer.",
    source: "Driver's Manual, Chapter 2 - Infant Restraints",
    statute: "M.G.L. c. 90, § 7AA",
    tags: ["Car Seats", "Infants", "Rear-Facing"]
  },
  {
    id: "q-man-ch2-04",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Air Bag Spacing",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "To prevent severe injury from an expanding steering wheel air bag, what is the recommended minimum distance between the driver's breastbone and the steering wheel?",
    options: [
      "5 to 7 inches",
      "10 to 12 inches",
      "16 to 18 inches",
      "24 inches"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Drivers should adjust their seating position so there is at least 10 to 12 inches between the center of the breastbone and the center hub of the steering wheel.",
    source: "Driver's Manual, Chapter 2 - Air Bag Safety",
    tags: ["Air Bags", "Driver Positioning", "Defensive Driving"]
  },
  {
    id: "q-man-ch2-05",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Child Seating Location",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Foundational",
    question: "According to the Massachusetts Driver's Manual, what is the safest seating position for children aged 12 and younger?",
    options: [
      "In the front passenger seat with the air bag turned on",
      "In the back seat, away from deploying front air bags",
      "In the center front seat",
      "In any seat with an active three-point belt"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Children aged 12 and younger must always ride in the rear seat whenever possible. Deploying front passenger air bags can cause fatal head and neck injuries to children.",
    source: "Driver's Manual, Chapter 2 - Air Bag Safety & Children",
    tags: ["Children", "Seating Safety", "Air Bags"]
  },
  {
    id: "q-man-ch2-06",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Tire Tread Depth",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the minimum legal tire tread depth for passenger vehicles operating on Massachusetts roadways?",
    options: [
      "1/32 inch",
      "2/32 (1/16) inch",
      "4/32 inch",
      "6/32 inch"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Tires must have at least 2/32 inch of tread depth in all major grooves. When inserting a penny upside down into the tread, if the top of Lincoln's head is visible, the tire is legally bald and unsafe.",
    source: "Driver's Manual, Chapter 2 - Vehicle Inspection & Tires",
    statute: "540 CMR 4.00",
    tags: ["Tire Safety", "Tread Depth", "Penny Test"]
  },
  {
    id: "q-man-ch2-07",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Horn Audible Distance",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "Under Massachusetts motor vehicle equipment laws, a vehicle horn must be audible under normal atmospheric conditions for a distance of at least:",
    options: [
      "100 feet",
      "200 feet",
      "300 feet",
      "500 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Every motor vehicle operated on a Massachusetts way must be equipped with a horn in good working order capable of emitting sound audible under normal conditions from a distance of at least 200 feet.",
    source: "Driver's Manual, Chapter 2 - Vehicle Equipment",
    statute: "M.G.L. c. 90, § 7",
    tags: ["Vehicle Equipment", "Horn", "Acoustics"]
  },
  {
    id: "q-man-ch2-08",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Windshield Wipers and Headlights Law",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Under Massachusetts General Laws Chapter 85 Section 15, when must you turn on your headlights when using windshield wipers?",
    options: [
      "Only if raining between sunset and sunrise",
      "Anytime windshield wipers are in continuous or intermittent use due to rain, sleet, snow, or mist",
      "Only when traveling at highway speeds above 50 mph",
      "Only when visibility is under 100 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts 'Wipers On, Lights On' law requires headlights to be activated anytime weather conditions necessitate the continuous or intermittent use of windshield wipers.",
    source: "Driver's Manual, Chapter 2 - Lighting Rules",
    statute: "M.G.L. c. 85, § 15",
    tags: ["Headlights", "Wipers", "Weather"]
  },
  {
    id: "q-man-ch2-09",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Headlight Dimming Distances",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "At what distance must you dim your high-beam headlights when approaching an oncoming vehicle, and when following behind another vehicle?",
    options: [
      "300 feet oncoming, 100 feet following",
      "500 feet oncoming, 200 feet following",
      "1,000 feet oncoming, 500 feet following",
      "400 feet oncoming, 250 feet following"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You must lower your high beams to low beams when an oncoming vehicle is within 500 feet, or when you are following another vehicle within 200 feet.",
    source: "Driver's Manual, Chapter 2 - Night Driving & Headlights",
    statute: "M.G.L. c. 90, § 7",
    tags: ["High Beams", "Dimming", "Night Driving"]
  },
  {
    id: "q-man-ch2-10",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Commercial Truck Blind Spot Areas",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "Which blind spot around a large commercial tractor-trailer is the largest and most dangerous?",
    options: [
      "Directly in front of the truck cab",
      "The left side driver's blind spot",
      "The right side blind spot, extending across multiple traffic lanes",
      "Directly behind the rear bumper"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "The 'No-Zone' on the right side of a commercial truck is significantly larger than on the left, extending across three lanes. If you cannot see the driver's face in their side mirror, they cannot see you.",
    source: "Driver's Manual, Chapter 2 - Sharing the Road with Trucks",
    tags: ["Commercial Trucks", "No-Zone", "Blind Spots"]
  },

  // ==========================================
  // CHAPTER 3: KEEPING YOUR LICENSE
  // ==========================================
  {
    id: "q-man-ch3-01",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Speeding Fine Calculation",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "What is the total statutory Massachusetts fine for driving 73 mph in a posted 55 mph zone (18 mph over the limit)?",
    options: [
      "$105",
      "$185",
      "$235",
      "$280"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "The fine formula: $105 base fine for the first 10 mph over the limit + $10 for each additional mph (8 mph × $10 = $80) + mandatory $50 Head Injury surcharge = $235 total.",
    source: "Driver's Manual, Chapter 3 - Speeding Violations",
    statute: "M.G.L. c. 90, § 17 & § 20",
    tags: ["Speeding", "Fine Formula", "Head Injury Surcharge"]
  },
  {
    id: "q-man-ch3-02",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Highway Work Zone Fines",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What happens to the statutory speeding fine when the violation occurs in an active, posted highway construction or maintenance work zone?",
    options: [
      "It is increased by a flat $50",
      "The fine is doubled",
      "The fine is tripled and causes an immediate 30-day suspension",
      "A mandatory court appearance without fine is required"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under Massachusetts law, speeding fines are automatically doubled when committed inside a designated, posted construction or maintenance work area where workers are present.",
    source: "Driver's Manual, Chapter 3 - Work Zone Safety",
    statute: "M.G.L. c. 90, § 17",
    tags: ["Work Zones", "Doubled Fines", "Speeding"]
  },
  {
    id: "q-man-ch3-03",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Three Speeding Violations Rule",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the license suspension penalty for any driver convicted of three (3) speeding violations within a consecutive 12-month period?",
    options: [
      "15 days",
      "30 days",
      "60 days",
      "90 days"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under M.G.L. c. 90 § 20, being convicted of three speeding violations within any 12-month period results in an automatic, mandatory 30-day driver's license suspension.",
    source: "Driver's Manual, Chapter 3 - License Suspensions",
    statute: "M.G.L. c. 90, § 20",
    tags: ["Three Speeding Rule", "Suspensions", "12 Months"]
  },
  {
    id: "q-man-ch3-04",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Three Surchargeable Events Retraining",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "If you accumulate three (3) surchargeable events (moving violations or at-fault accidents) on your record within 24 months, what must you do to avoid suspension?",
    options: [
      "Pay an administrative penalty fee of $500",
      "Complete a certified National Safety Council Driver Retraining Course within 90 days",
      "Retake the written learner's permit exam only",
      "Submit an appeal letter to the Board of Appeals on Motor Vehicle Policies"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Accumulating 3 surchargeable events within 24 months triggers a requirement to complete the Driver Retraining Course within 90 days. Failure to complete it results in an indefinite license suspension.",
    source: "Driver's Manual, Chapter 3 - Surchargeable Events",
    statute: "M.G.L. c. 175, § 113B",
    tags: ["Surchargeable Events", "Driver Retraining", "Deadlines"]
  },
  {
    id: "q-man-ch3-05",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Seven Surchargeable Events Suspension",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "What is the mandatory license suspension period for accumulating seven (7) surchargeable events within a three-year period in Massachusetts?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "1 year"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "If you accumulate 7 surchargeable events within a 3-year period, your license will be suspended automatically for 60 days.",
    source: "Driver's Manual, Chapter 3 - Surchargeable Events",
    statute: "M.G.L. c. 90, § 22F",
    tags: ["Seven Surcharges", "60-Day Suspension"]
  },
  {
    id: "q-man-ch3-06",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Habitual Traffic Offender Criteria",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "Under Massachusetts General Law, what triggers an 'Habitual Traffic Offender' classification and what is the associated license revocation?",
    options: [
      "3 major moving violations or 12 minor violations within 5 years; 4-year revocation",
      "5 speeding tickets in 3 years; 2-year revocation",
      "2 OUI convictions in 10 years; 5-year revocation",
      "10 moving violations in 1 year; 1-year revocation"
    ],
    correctAnswer: "A",
    correctIndex: 0,
    explanation: "An Habitual Traffic Offender is defined as having 3 major moving violations OR any combination of 12 minor surchargeable moving violations within a 5-year period. It results in a mandatory 4-year license revocation and a $500 reinstatement fee.",
    source: "Driver's Manual, Chapter 3 - Habitual Traffic Offender",
    statute: "M.G.L. c. 90, § 22F",
    tags: ["Habitual Traffic Offender", "4-Year Revocation"]
  },
  {
    id: "q-man-ch3-07",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Open Container Law Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the statutory fine for possessing an open container of an alcoholic beverage in the passenger compartment of a vehicle under M.G.L. c. 90 § 24I?",
    options: [
      "$25 to $50",
      "$100 to $500",
      "$1,000 flat fine",
      "Mandatory 30 days imprisonment"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts General Laws Chapter 90 Section 24I prohibits open containers of alcohol in the passenger compartment of a motor vehicle on a public way, carrying a statutory fine of $100 to $500.",
    source: "Driver's Manual, Chapter 3 - Alcohol Laws & Open Container",
    statute: "M.G.L. c. 90, § 24I",
    tags: ["Open Container", "Fines", "Alcohol"]
  },
  {
    id: "q-man-ch3-08",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Chemical Test Refusal with Prior OUI",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "For a driver age 21 or older with ONE prior OUI conviction, what is the license suspension for refusing to submit to a chemical breath or blood test?",
    options: [
      "180 days",
      "1 year",
      "3 years",
      "5 years"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Under the Massachusetts Implied Consent Law, a driver 21+ with one prior OUI who refuses a chemical test faces a mandatory 3-year license suspension (compared to 180 days for a first offense with zero priors).",
    source: "Driver's Manual, Chapter 3 - Chemical Test Refusal",
    statute: "M.G.L. c. 90, § 24(1)(f)(1)",
    tags: ["Implied Consent", "Test Refusal", "OUI Priors"]
  },
  {
    id: "q-man-ch3-09",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Ignition Interlock Device Mandate",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "When is a driver in Massachusetts legally required to install and maintain an Ignition Interlock Device (IID) on their vehicle?",
    options: [
      "Upon receiving any speeding ticket over 85 mph",
      "Upon receiving any hardship license or reinstatement after two or more OUI convictions",
      "Only after a third felony OUI conviction",
      "Whenever convicted of operating with a suspended license"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Melanie's Law requires an Ignition Interlock Device (IID) for any driver with two or more OUI convictions who is issued a hardship license or has their license reinstated.",
    source: "Driver's Manual, Chapter 3 - Ignition Interlock Device",
    statute: "M.G.L. c. 90, § 24½",
    tags: ["Ignition Interlock", "Melanie's Law", "OUI"]
  },
  {
    id: "q-man-ch3-10",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Fake ID / License Fraud Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the administrative license suspension penalty for falsely using or altering a driver's license or using someone else's ID?",
    options: [
      "30 days",
      "90 days",
      "6 months",
      "1 year"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Under M.G.L. c. 90 § 24B, using a false name, altering a driver's license, or possessing a fake ID carries a mandatory 6-month license suspension in addition to criminal court penalties.",
    source: "Driver's Manual, Chapter 3 - License Fraud",
    statute: "M.G.L. c. 90, § 24B",
    tags: ["Fake ID", "License Fraud", "Suspension"]
  },

  // ==========================================
  // CHAPTER 4: RULES OF THE ROAD
  // ==========================================
  {
    id: "q-man-ch4-01",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Left Turn on Steady Red",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Rigorous",
    question: "In Massachusetts, under what specific condition is a left turn on a steady red light legally permitted?",
    options: [
      "It is never legal under any circumstance",
      "Only when turning from a one-way street onto another one-way street after coming to a complete stop and yielding",
      "Anytime there is no oncoming traffic and no pedestrians",
      "Only between the hours of 11:00 PM and 5:00 AM"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You may only turn left on a steady red light if you are turning from a one-way street onto another one-way street. You must first come to a complete stop, look for 'No Turn on Red' signs, and yield to oncoming vehicles and pedestrians.",
    source: "Driver's Manual, Chapter 4 - Steady Red Light",
    statute: "M.G.L. c. 89, § 8",
    tags: ["Left Turn on Red", "One-Way", "Traffic Lights"]
  },
  {
    id: "q-man-ch4-02",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Flashing Yellow Arrow Meaning",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Standard",
    question: "What does a flashing yellow arrow signal indicate to a turning driver at an intersection?",
    options: [
      "Your turn is protected; oncoming traffic has a red light",
      "Turns are permitted, but you must yield to oncoming traffic and pedestrians before completing the turn",
      "The lane is about to close ahead",
      "You must stop and wait for a green arrow"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A flashing yellow arrow allows you to turn in the direction of the arrow on an unprotected basis. You must yield the right-of-way to oncoming vehicles, bicyclists, and pedestrians before proceeding.",
    source: "Driver's Manual, Chapter 4 - Traffic Signals",
    tags: ["Flashing Yellow Arrow", "Traffic Signals", "Turns"]
  },
  {
    id: "q-man-ch4-03",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Flashing Red Signal Protocol",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "How must a driver respond to a flashing red traffic signal at an intersection?",
    options: [
      "Slow down and proceed if no other vehicles are visible",
      "Come to a complete stop, yield to pedestrians and opposing traffic, then proceed when safe (same as a STOP sign)",
      "Yield to traffic on the right only",
      "Stop only if an officer is directing traffic"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A flashing red traffic signal requires a complete stop at the stop line or crosswalk. It functions exactly like a STOP sign: yield the right-of-way and proceed only when clear.",
    source: "Driver's Manual, Chapter 4 - Traffic Signals",
    statute: "M.G.L. c. 89, § 9",
    tags: ["Flashing Red", "Stop Sign Equivalent"]
  },
  {
    id: "q-man-ch4-04",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Pennant Shaped Road Sign",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Standard",
    question: "What does a pennant-shaped (sideways triangle) yellow traffic sign indicate, and where is it posted?",
    options: [
      "School crossing zone; posted on the right side of the road",
      "No Passing Zone; posted on the left side of the road facing traffic",
      "Yield ahead; posted in highway gore areas",
      "Sharp right curve ahead; posted on highway exit ramps"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A pennant-shaped sign warns of a 'No Passing Zone'. It is uniquely posted on the LEFT side of the roadway to alert drivers who may be preparing to overtake another vehicle.",
    source: "Driver's Manual, Chapter 4 - Sign Shapes and Colors",
    tags: ["Pennant Sign", "No Passing Zone", "Sign Placement"]
  },
  {
    id: "q-man-ch4-05",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Round Road Sign Meaning",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What does a circular (round) yellow road sign indicate?",
    options: [
      "Emergency evacuation route",
      "Advance warning of a railroad grade crossing ahead",
      "Roundabout or rotary intersection",
      "Stop ahead"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A circular yellow sign with an 'X' and the letters 'RR' is the advance warning sign alerting drivers that they are approaching a railroad-highway grade crossing.",
    source: "Driver's Manual, Chapter 4 - Sign Shapes",
    tags: ["Railroad Sign", "Round Sign", "Warning Signs"]
  },
  {
    id: "q-man-ch4-06",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Pentagon Shaped Sign",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What type of traffic zone is indicated by a five-sided (pentagon) shaped road sign?",
    options: [
      "Hospital zone",
      "School zone or school crossing",
      "County boundary",
      "Construction detour"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A five-sided pentagon sign (shaped like a house) indicates a school zone or school pedestrian crossing ahead. Drivers must watch for children and prepare to reduce speed to 20 mph.",
    source: "Driver's Manual, Chapter 4 - Sign Shapes",
    tags: ["Pentagon Sign", "School Zone"]
  },
  {
    id: "q-man-ch4-07",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Pavement Markings - Double Solid White",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Standard",
    question: "What do double solid white lines painted between lanes of traffic indicate?",
    options: [
      "Passing is permitted on both sides",
      "Traffic moves in opposite directions with no passing allowed",
      "Traffic moves in the same direction, and changing lanes is strictly prohibited",
      "An emergency lane designated for snow plows"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "White lines separate lanes of traffic traveling in the same direction. A double solid white line indicates that lane changing is strictly prohibited (often used near tunnel entries or high-occupancy vehicle lanes).",
    source: "Driver's Manual, Chapter 4 - Pavement Markings",
    tags: ["Double Solid White", "Lane Changes", "Pavement Markings"]
  },
  {
    id: "q-man-ch4-08",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Center Two-Way Left-Turn Lane",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "What is the proper and lawful use of a shared center two-way left-turn lane marked by inner dashed and outer solid yellow lines?",
    options: [
      "To accelerate and merge into highway traffic",
      "To overtake and pass slower vehicles traveling in your direction",
      "Exclusively for making left turns into or out of side streets and driveways",
      "To stop and park during loading/unloading"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Shared center left-turn lanes are reserved solely for vehicles preparing to turn left off the road or entering the roadway from an alley or driveway. They may never be used for passing or continuous forward driving.",
    source: "Driver's Manual, Chapter 4 - Pavement Markings",
    tags: ["Shared Turn Lane", "Left Turns", "Rules of the Road"]
  },
  {
    id: "q-man-ch4-09",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Multi-Lane Rotary Lane Selection",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "When approaching a multi-lane rotary in Massachusetts, which lane should you choose if you plan to exit more than halfway around the circle (e.g. taking a left turn or U-turn)?",
    options: [
      "The far right lane only",
      "The left-hand lane (inner ring of the rotary)",
      "Either lane at random",
      "The road shoulder"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "When entering a multi-lane rotary, if you plan to travel more than halfway around the rotary (3rd exit or completing a U-turn), you should enter from and remain in the left-hand lane along the inner ring until you signal and transition toward your exit.",
    source: "Driver's Manual, Chapter 4 - Multi-Lane Rotaries",
    statute: "M.G.L. c. 89, § 8",
    tags: ["Rotary", "Lane Selection", "Multi-Lane"]
  },
  {
    id: "q-man-ch4-10",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Bicycle Passing Clearance Law",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Foundational",
    question: "Under the Massachusetts Vulnerable Road Users Act, how much clearance must a motorist provide when passing a bicyclist?",
    options: [
      "At least 2 feet",
      "At least 4 feet of safe passing clearance",
      "At least 6 feet",
      "A complete empty traffic lane at all times"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts law requires motorists to provide at least 4 feet of clearance when passing vulnerable road users (bicyclists, pedestrians, roadside workers). Drivers may cross a center line to pass when safe to do so.",
    source: "Driver's Manual, Chapter 4 - Sharing the Road with Bicycles",
    statute: "M.G.L. c. 89, § 2",
    tags: ["Bicycle Safety", "4-Foot Rule", "Vulnerable Users"]
  },
  {
    id: "q-man-ch4-11",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Dooring Cyclist Violation",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "In Massachusetts, what is the fine for opening a vehicle door into oncoming traffic or the path of a bicyclist ('dooring') without checking?",
    options: [
      "$25 fine",
      "$50 fine",
      "$100 fine",
      "$250 fine"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "M.G.L. c. 90 § 14 forbids opening a motor vehicle door unless it is reasonably safe to do so without interfering with other traffic, including bicyclists. Violators are subject to a $100 fine.",
    source: "Driver's Manual, Chapter 4 - Sharing the Road",
    statute: "M.G.L. c. 90, § 14",
    tags: ["Dooring", "Bicycles", "Fines"]
  },
  {
    id: "q-man-ch4-12",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "School Bus Stopping Distance",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Foundational",
    question: "When a school bus stops with flashing red lights and its stop-sign arm extended, vehicles traveling in BOTH directions must stop at least how many feet away?",
    options: [
      "At least 10 feet",
      "At least 20 feet",
      "At least 35 feet",
      "At least 50 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You must stop at least 20 feet from a school bus with flashing red lights and an extended stop arm, whether approaching from the front or rear. Violations carry a $250 minimum fine for a first offense.",
    source: "Driver's Manual, Chapter 4 - School Buses",
    statute: "M.G.L. c. 90, § 14",
    tags: ["School Bus", "20 Feet Rule", "Fines"]
  },
  {
    id: "q-man-ch4-13",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Trolley Streetcar Boarding Rule",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "When a streetcar or light-rail trolley stops to discharge or pick up passengers on an undivided street, what must a following motorist do?",
    options: [
      "Sound the horn and pass slowly on the left",
      "Stop at least 8 feet behind the lowest running board or door of the trolley",
      "Pass on the right at 10 mph",
      "Continue without stopping if in an adjacent lane"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under M.G.L. c. 90 § 14, drivers must stop at least 8 feet behind the lowest step or passenger door of a streetcar or trolley stopped to take on or let off passengers, unless a designated safety zone is present.",
    source: "Driver's Manual, Chapter 4 - Streetcars and Light Rail",
    statute: "M.G.L. c. 90, § 14",
    tags: ["Streetcars", "Trolley", "8-Foot Rule"]
  },
  {
    id: "q-man-ch4-14",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Highway Exit Turn Signal Distance",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "When traveling on a multi-lane highway or interstate expressway, at least how far in advance must you signal your intention to exit?",
    options: [
      "100 feet",
      "250 feet",
      "500 feet",
      "1,000 feet"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "On a highway or expressway, you must signal continuously for at least 500 feet before making a turn or entering an exit ramp (compared to 100 feet on ordinary roads).",
    source: "Driver's Manual, Chapter 4 - Turn Signals & Lane Changes",
    statute: "M.G.L. c. 90, § 14B",
    tags: ["Turn Signals", "Highway Exits", "500 Feet Rule"]
  },
  {
    id: "q-man-ch4-15",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Standard Turn Signal Distance",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "On ordinary city streets or rural roads, you must signal your intention to turn or change lanes at least how far before the turn?",
    options: [
      "50 feet",
      "100 feet",
      "200 feet",
      "300 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You must signal your intention to turn or change lanes at least 100 feet before the turn on normal city and town roads.",
    source: "Driver's Manual, Chapter 4 - Turn Signals",
    statute: "M.G.L. c. 90, § 14B",
    tags: ["Turn Signals", "100 Feet Rule"]
  },
  {
    id: "q-man-ch4-16",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Hand Signals for Driving",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What does the driver's hand and arm extended straight out horizontally from the window indicate?",
    options: [
      "Right turn",
      "Left turn",
      "Slow down or stop",
      "Caution, road hazard"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Hand signals: Arm extended straight out = Left Turn. Arm bent upward at a 90° angle = Right Turn. Arm pointed downward at a 90° angle = Slow or Stop.",
    source: "Driver's Manual, Chapter 4 - Hand Signals",
    statute: "M.G.L. c. 90, § 14B",
    tags: ["Hand Signals", "Left Turn"]
  },
  {
    id: "q-man-ch4-17",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Parking on Hills Uphill with Curb",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "When parking uphill on a street with a raised curb, in which direction should you turn your vehicle's front wheels?",
    options: [
      "Toward the curb (to the right)",
      "Away from the curb (to the left), letting the tire roll back against the curb",
      "Parallel to the curb pointing straight forward",
      "It does not matter as long as the parking brake is set"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "When parking uphill with a curb, turn your front wheels AWAY from the curb (to the left) and allow the car to roll back slightly until the back of the front tire touches the curb, preventing rollaway.",
    source: "Driver's Manual, Chapter 4 - Parking on Hills",
    tags: ["Parking on Hills", "Uphill with Curb"]
  },
  {
    id: "q-man-ch4-18",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Parking Distance from Fire Hydrant",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the minimum legal parking distance from a fire hydrant in Massachusetts?",
    options: [
      "5 feet",
      "10 feet",
      "15 feet",
      "20 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You must not park within 10 feet of a fire hydrant on any street or highway.",
    source: "Driver's Manual, Chapter 4 - Parking Restrictions",
    tags: ["Parking", "Fire Hydrant", "Distances"]
  },
  {
    id: "q-man-ch4-19",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Parking Distance from Intersection",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the minimum legal parking distance from an intersection or street corner curb in Massachusetts?",
    options: [
      "10 feet",
      "20 feet",
      "30 feet",
      "50 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You may not park within 20 feet of an intersection or roadway intersection curb line.",
    source: "Driver's Manual, Chapter 4 - Parking Restrictions",
    tags: ["Parking", "Intersections", "Distances"]
  },
  {
    id: "q-man-ch4-20",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Parallel Parking Curb Distance",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "When parallel parking along a roadway curb, your curbside wheels must be positioned within what distance of the curb?",
    options: [
      "Within 6 inches",
      "Within 12 inches (1 foot)",
      "Within 18 inches",
      "Within 24 inches"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "When parking parallel to a curb, you must park within 12 inches (1 foot) of the curb face.",
    source: "Driver's Manual, Chapter 4 - Parallel Parking",
    tags: ["Parallel Parking", "Curb Distance"]
  },

  // ==========================================
  // CHAPTER 5: SPECIAL DRIVING SITUATIONS
  // ==========================================
  {
    id: "q-man-ch5-01",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Move-Over Law Mandates",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "Under the Massachusetts Move-Over Law (M.G.L. c. 89 § 7C), what must you do when approaching a stationary emergency vehicle, tow truck, or highway maintenance truck with flashing lights on a multi-lane highway?",
    options: [
      "Honk to signal your presence and maintain current speed",
      "Vacate the adjacent lane if safe to do so, or slow down to a reasonable and safe speed",
      "Come to an immediate complete stop in the travel lane",
      "Accelerate quickly past the hazard to avoid bottlenecking"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts Move-Over Law requires drivers approaching stationary emergency, recovery, highway maintenance, or roadside assistance vehicles with flashing lights to move over one lane if safe, or slow to a safe speed. Violations carry a $100 fine.",
    source: "Driver's Manual, Chapter 5 - Move-Over Law",
    statute: "M.G.L. c. 89, § 7C",
    tags: ["Move-Over Law", "Emergency Vehicles", "Work Zones"]
  },
  {
    id: "q-man-ch5-02",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Following Responding Emergency Vehicles",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "Under Massachusetts General Law, what is the minimum legal distance you must maintain when following behind an emergency vehicle responding to an alarm?",
    options: [
      "100 feet",
      "200 feet",
      "300 feet",
      "500 feet"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "It is unlawful to follow closer than 300 feet behind any fire apparatus or emergency response vehicle that is traveling in response to an alarm with sirens and emergency lights activated.",
    source: "Driver's Manual, Chapter 5 - Emergency Vehicles",
    statute: "M.G.L. c. 89, § 7A",
    tags: ["Emergency Vehicles", "300 Feet Rule", "Following Distance"]
  },
  {
    id: "q-man-ch5-03",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Hydroplaning Speed and Recovery",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "Hydroplaning can begin at speeds as low as 35 mph. What is the correct initial recovery action if your vehicle begins to hydroplane?",
    options: [
      "Slam on the brakes immediately to force tire contact",
      "Gradually ease your foot off the accelerator and hold the steering wheel straight without braking",
      "Turn the steering wheel vigorously from side to side",
      "Shift the transmission into reverse"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "If you begin to hydroplane, gently ease off the accelerator to let the car slow down. Never slam on the brakes or make sharp steering inputs until the tires re-establish direct pavement contact.",
    source: "Driver's Manual, Chapter 5 - Hydroplaning",
    tags: ["Hydroplaning", "Wet Weather", "Skid Recovery"]
  },
  {
    id: "q-man-ch5-04",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Skid Recovery Technique",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Foundational",
    question: "When your vehicle begins to skid on a slippery road, in what direction should you steer?",
    options: [
      "In the opposite direction of the skid",
      "In the direction you want the front of the vehicle to go (steer into the skid)",
      "Keep the wheel locked completely straight and apply the parking brake",
      "Turn sharply toward the road shoulder"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "To recover from a skid, take your foot off the gas pedal, avoid braking, and steer gently in the direction of the skid (the direction you want the front of the car to travel).",
    source: "Driver's Manual, Chapter 5 - Skid Control",
    tags: ["Skidding", "Winter Driving", "Emergency Steering"]
  },
  {
    id: "q-man-ch5-05",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "ABS Emergency Braking",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Foundational",
    question: "How should a driver operate the brake pedal in an emergency stop when driving a vehicle equipped with Anti-Lock Brakes (ABS)?",
    options: [
      "Pump the brake pedal rapidly up and down",
      "Apply firm, continuous downward pressure on the brake pedal without pumping",
      "Tap the pedal lightly once every second",
      "Engage the emergency handbrake while steering"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "With Anti-Lock Brakes (ABS), apply firm, continuous pressure to the brake pedal and hold it down. Do not pump the brakes; the ABS computer automatically pulses the brakes faster than humanly possible.",
    source: "Driver's Manual, Chapter 5 - Anti-Lock Brakes (ABS)",
    tags: ["ABS", "Emergency Braking", "Brake Control"]
  },
  {
    id: "q-man-ch5-06",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Winter Bridge Ice Formation",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Foundational",
    question: "Why do highway bridges and elevated overpasses freeze earlier and remain icy longer than adjacent road surfaces?",
    options: [
      "They are constructed with steel beams that attract moisture",
      "Cold air circulates both above and underneath the bridge deck, removing ground warmth",
      "They are higher in elevation closer to cloud moisture",
      "Highway de-icing salt cannot be applied to bridges"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Bridges and overpasses freeze before normal roads because cold air circulates freely both above and below the bridge structure, cooling it much faster without the thermal insulation of the earth.",
    source: "Driver's Manual, Chapter 5 - Winter Driving Hazards",
    tags: ["Bridges Freeze First", "Black Ice", "Winter Driving"]
  },
  {
    id: "q-man-ch5-07",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Highway Flare Placement Distance",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Standard",
    question: "When your vehicle breaks down on a highway at night, at what distance behind your vehicle should emergency warning flares or reflective triangles be placed?",
    options: [
      "50 feet behind",
      "100 feet behind",
      "200 to 300 feet behind your vehicle",
      "500 to 1,000 feet behind"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "On high-speed roadways and expressways, emergency flares or reflective triangles should be placed 200 to 300 feet behind your disabled vehicle to give approaching highway traffic sufficient time to react.",
    source: "Driver's Manual, Chapter 5 - Vehicle Breakdowns",
    tags: ["Breakdown Flares", "Emergency Distances", "Highway Safety"]
  },
  {
    id: "q-man-ch5-08",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Crash Written Reporting Threshold",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Under Massachusetts General Laws Chapter 90 Section 26, within how many days must an operator file a written crash report if property damage exceeds $1,000 or any person is injured?",
    options: [
      "24 hours",
      "3 days",
      "5 days",
      "10 days"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A written Motor Vehicle Crash Operator Report (Form MV-106) must be submitted within 5 days to both the RMV and the local police department if any person was injured, killed, or property damage exceeded $1,000.",
    source: "Driver's Manual, Chapter 5 - Crash Reporting",
    statute: "M.G.L. c. 90, § 26",
    tags: ["Crash Report", "5-Day Rule", "$1,000 Threshold"]
  },
  {
    id: "q-man-ch5-09",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Railroad Crossing Stop Distance",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "When approaching a railroad grade crossing with active flashing red lights or lowered gates, you must stop your vehicle within what distance of the nearest rail?",
    options: [
      "Between 5 and 10 feet",
      "Between 15 and 50 feet",
      "At least 75 feet",
      "At least 100 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You must stop at least 15 feet—and no more than 50 feet—from the nearest rail of a railroad grade crossing when warning signals are active or a train is approaching.",
    source: "Driver's Manual, Chapter 5 - Railroad Crossings",
    statute: "M.G.L. c. 90, § 15",
    tags: ["Railroad Crossing", "Stopping Distance", "15-50 Feet"]
  },
  {
    id: "q-man-ch5-10",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Vehicle Stalled on Railroad Tracks",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Rigorous",
    question: "If your vehicle stalls on railroad tracks and a train is approaching, what is the life-saving emergency protocol?",
    options: [
      "Remain inside the vehicle with seatbelts fastened and horn sounding",
      "Evacuate all occupants immediately and run at a 45-degree angle toward the oncoming train (away from the tracks)",
      "Run directly down the center of the tracks in the opposite direction of the train",
      "Attempt to push the car off the tracks with the help of passengers"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Evacuate everyone immediately. Run away from the tracks at a 45-degree angle in the direction the train is coming from. If the train strikes the vehicle, debris will be pushed forward, so running toward the train's approach prevents being struck by flying wreckage.",
    source: "Driver's Manual, Chapter 5 - Railroad Emergencies",
    tags: ["Railroad Emergency", "Stalled Vehicle", "Life Safety"]
  }
];
