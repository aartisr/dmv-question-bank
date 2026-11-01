import { Question } from '../types';
import { manualQuestions } from './manualQuestions';

const baseQuestions: Question[] = [
  // ==========================================
  // CHAPTER 1: OBTAINING YOUR LICENSE (Class D, JOL, Permits, Fees)
  // ==========================================
  {
    id: "q-ch1-01",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Junior Operator Law",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the curfew for a Junior Operator License (JOL) holder in Massachusetts who is driving without a parent or legal guardian?",
    options: [
      "11:00 PM to 5:00 AM",
      "12:00 AM to 5:00 AM",
      "12:30 AM to 5:00 AM",
      "1:00 AM to 6:00 AM"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A JOL holder may not drive between the hours of 12:30 AM and 5:00 AM unless accompanied by a parent or legal guardian.",
    source: "Chapter 1 - JOL Restrictions, Page 10",
    statute: "M.G.L. c. 90, § 8 & § 10",
    tags: ["JOL", "Curfew", "Night Restriction"]
  },
  {
    id: "q-ch1-02",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Passenger Restrictions",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "For how many months is a newly licensed Junior Operator (JOL) restricted from carrying passengers under the age of 18 (unless accompanied by a parent/guardian or a licensed adult at least 21)?",
    options: [
      "First 3 months",
      "First 6 months",
      "First 12 months",
      "Until they turn 18"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "For the first 6 months after receiving a JOL, you cannot carry passengers under 18 unless accompanied by a licensed driver who is at least 21 years old with at least 1 year driving experience, occupying the passenger seat beside you.",
    source: "Chapter 1 - Passenger Restrictions, Page 10",
    statute: "M.G.L. c. 90, § 8",
    tags: ["JOL", "Passenger Restriction"]
  },
  {
    id: "q-ch1-03",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "JOL Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the penalty for a first-offense conviction of speeding while holding a Junior Operator License (JOL) in Massachusetts?",
    options: [
      "$50 fine only",
      "30-day license suspension and a $100 fine",
      "90-day license suspension, retraining course, and fine/reinstatement fee",
      "1-year license suspension"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A first speeding offense for a JOL holder results in a mandatory 90-day license suspension, completion of a state-approved Driver Attitudinal Retraining course, a new permit exam, and a $500 reinstatement fee.",
    source: "Chapter 1 / Chapter 3 - Mandatory License Suspensions, Page 11 & 64",
    statute: "M.G.L. c. 90, § 17",
    tags: ["JOL", "Speeding", "Suspension"]
  },
  {
    id: "q-ch1-04",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Drag Racing Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the penalty for a first-offense drag racing conviction for a Junior Operator License (JOL) holder in Massachusetts?",
    options: [
      "30-day suspension",
      "90-day suspension",
      "1-year license suspension",
      "3-year license suspension"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A first-offense drag racing conviction for a JOL holder carries a 1-year license suspension, requirement to retake exams, retraining course, SCARR course, and a $500 reinstatement fee.",
    source: "Chapter 1 / Chapter 3 - JOL Suspensions, Page 11 & 64",
    statute: "M.G.L. c. 90, § 17B",
    tags: ["JOL", "Drag Racing", "Suspension"]
  },
  {
    id: "q-ch1-05",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Permit Requirements",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "At what minimum age can an individual apply for a Class D Learner's Permit in Massachusetts?",
    options: [
      "15 years old",
      "15 years and 6 months old",
      "16 years old",
      "16 years and 6 months old"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "In Massachusetts, an applicant must be at least 16 years old to apply for a Class D or Class M learner's permit.",
    source: "Chapter 1 - Age Requirement, Page 3 & 15",
    statute: "M.G.L. c. 90, § 8B",
    tags: ["Permit", "Age Requirement"]
  },
  {
    id: "q-ch1-06",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Permit Supervised Driving",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "When driving with a Class D Learner's Permit in Massachusetts, who must be seated beside you in the front passenger seat?",
    options: [
      "Any licensed driver over 18",
      "A parent or legal guardian only",
      "A licensed driver who is at least 21 years old and has at least 1 year of driving experience",
      "A licensed driving instructor only"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A Class D permit holder must always be accompanied by a licensed operator who is at least 21 years of age, has had at least 1 year of driving experience, and is occupying the front passenger seat.",
    source: "Chapter 1 - Driving With Your Permit, Page 18",
    statute: "M.G.L. c. 90, § 8B",
    tags: ["Permit", "Sponsor", "Supervised Driving"]
  },
  {
    id: "q-ch1-07",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Underage Alcohol Zero Tolerance",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the zero-tolerance Blood Alcohol Concentration (BAC) threshold for drivers under the age of 21 in Massachusetts?",
    options: [
      "0.00%",
      "0.02%",
      "0.04%",
      "0.08%"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts enforces a strict zero-tolerance law for drivers under 21: registering a BAC of 0.02% or higher triggers an immediate administrative suspension.",
    source: "Chapter 1 & 3 - Underage Drinking Laws, Page 69 & 73",
    statute: "M.G.L. c. 90, § 24P",
    tags: ["Zero Tolerance", "BAC", "Under 21"]
  },
  {
    id: "q-ch1-08",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Implied Consent Refusal",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the administrative license suspension for refusing a chemical breath test for a first OUI arrest for a driver age 21 or older with no prior record?",
    options: [
      "30 days",
      "90 days",
      "180 days",
      "1 year"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Refusing a chemical breath test results in an immediate 180-day administrative license suspension for a first offense for drivers 21 and older.",
    source: "Chapter 1 & 3 - Chemical Test Refusal, Page 70",
    statute: "M.G.L. c. 90, § 24(1)(f)",
    tags: ["Implied Consent", "Breathalyzer", "Suspension"]
  },
  {
    id: "q-ch1-09",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Road Test Documentation",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "Which document is NOT required when presenting yourself at the RMV for a Class D road test?",
    options: [
      "A completed, signed Class D road test application",
      "A valid learner's permit",
      "Proof of vehicle insurance and valid registration certificate",
      "A certified birth certificate"
    ],
    correctAnswer: "D",
    correctIndex: 3,
    explanation: "While a birth certificate was verified during original permit issuance, the road test requires the permit, completed application, valid vehicle registration, insurance, and a qualified sponsor.",
    source: "Chapter 1 - Road Test Requirements, Page 22",
    tags: ["Road Test", "Documentation"]
  },
  {
    id: "q-ch1-10",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "JOL Passenger Rules Exceptions",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "Can a newly licensed JOL holder drive non-family passengers under 18 to high school extracurricular activities during the first 6 months?",
    options: [
      "Yes, if they carry a signed permit from the high school principal",
      "Yes, if they have written consent from their parent",
      "No, the passenger restriction applies at all times with no exception for school events unless a licensed driver 21+ is present",
      "Yes, during daylight hours only"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "The 6-month passenger restriction is absolute: there are NO exceptions for school activities, sports, or work unless accompanied by a licensed driver 21+ with 1+ year experience.",
    source: "Chapter 1 - JOL License Restrictions, Page 10",
    statute: "M.G.L. c. 90, § 8",
    tags: ["JOL", "Passenger Restriction"]
  },
  {
    id: "q-ch1-11",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Address Change Notification",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "If you change your residential or mailing address within Massachusetts, within how many days must you notify the RMV?",
    options: [
      "10 days",
      "30 days",
      "60 days",
      "At your next license renewal"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts law requires you to notify the RMV in writing or online of any change of address within 30 days.",
    source: "Chapter 1 - Administrative Rules, Page 2",
    statute: "M.G.L. c. 90, § 26A",
    tags: ["RMV Regulations", "Address Change"]
  },
  {
    id: "q-ch1-12",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Junior Operator Classification",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "In Massachusetts, what age range classifies an operator as a Junior Operator under the law?",
    options: [
      "15 to 17 years old",
      "16 to 18 years old",
      "16 1/2 to 18 years old",
      "16 to 21 years old"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Any motor vehicle operator or motorcyclist between the ages of 16 1/2 and 18 is classified as a Junior Operator (code letter I restriction).",
    source: "Chapter 1 - The Junior Operator License Law, Page 9",
    statute: "M.G.L. c. 90, § 8",
    tags: ["JOL", "Age Threshold"]
  },
  {
    id: "q-ch1-13",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "JOL Subsequent Speeding",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "Under the Massachusetts Junior Operator Law, what is the suspension period for a second or subsequent speeding conviction?",
    options: [
      "90 days",
      "180 days",
      "1 year",
      "3 years"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A second or subsequent speeding conviction for a Junior Operator carries a mandatory 1-year license suspension, retraining requirements, and a $500 reinstatement fee.",
    source: "Chapter 1 & 3 - Mandatory License Suspensions, Page 11 & 64",
    statute: "M.G.L. c. 90, § 17",
    tags: ["JOL", "Speeding", "Suspension"]
  },
  {
    id: "q-ch1-14",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Underage Alcohol Purchase",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "If a person under 21 is convicted of buying, attempting to buy, or transporting alcohol without a parent, what is the mandatory suspension in Massachusetts?",
    options: [
      "30 days",
      "90 days",
      "180 days",
      "1 year"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "If you are under 21 and buy, or try to buy, or transport alcohol, your license will be suspended for 180 days.",
    source: "Chapter 3 - Buying, Possessing, or Transporting Alcohol, Page 74",
    statute: "M.G.L. c. 90, § 22",
    tags: ["Under 21", "Alcohol Laws", "Suspension"]
  },
  {
    id: "q-ch1-15",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Commercial Driving Restriction for JOL",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Can an individual holding a Junior Operator License (JOL) operate a vehicle for compensation or employment involving driving?",
    options: [
      "Yes, if they have parental permission",
      "Yes, during daylight hours only",
      "No, JOL holders are strictly prohibited from driving for compensation or holding a CDL",
      "Yes, if operating within a 15-mile radius"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Holders of a Junior Operator License are strictly prohibited from operating any vehicle that requires a commercial license or driving for compensation.",
    source: "Chapter 1 - JOL License Restrictions, Page 11",
    tags: ["JOL", "CDL", "Restrictions"]
  },
  {
    id: "q-ch1-16",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Permit Holding Period",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "How long must an applicant under 18 maintain a clean learner's permit before being eligible to take the road test?",
    options: [
      "At least 3 months",
      "At least 6 consecutive months",
      "At least 9 months",
      "At least 12 months"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "An applicant between 16 1/2 and 18 must have had a learner's permit in good standing with a clean driving record for at least six consecutive months before taking the road test.",
    source: "Chapter 1 - Requirements to Obtain a JOL, Page 9-10",
    tags: ["JOL", "Permit", "Road Test"]
  },
  {
    id: "q-ch1-17",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "License Duration and Expiration",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "When does a standard Massachusetts Class D driver's license expire?",
    options: [
      "Every year on your birthday",
      "Every 3 years on your birthday",
      "Every 5 years on your birthday",
      "Every 10 years on your birthday"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A standard Massachusetts Class D driver's license is valid for a maximum of 5 years and typically expires on your birthday.",
    source: "Chapter 1 - License Length, Page 7",
    tags: ["License Renewal", "Expiration"]
  },
  {
    id: "q-ch1-18",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Driver Education Requirements",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What are the required hours for professional driver's education for minor applicants under 18 in Massachusetts?",
    options: [
      "10 hours classroom, 6 hours behind the wheel",
      "30 hours classroom, 12 hours behind the wheel, 6 hours in-car observation",
      "20 hours classroom, 10 hours behind the wheel",
      "40 hours classroom only"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The RMV driver education curriculum requires 30 hours of classroom instruction, 12 hours of behind-the-wheel training, and 6 hours of in-car observation of student drivers.",
    source: "Chapter 1 - Driver's Education, Page 10 & 19",
    tags: ["Driver Education", "JOL Requirements"]
  },
  {
    id: "q-ch1-19",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Parent Supervised Driving Hours",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "How many additional hours of behind-the-wheel supervised driving must a parent/guardian certify for a minor before taking the road test?",
    options: [
      "20 hours",
      "30 hours",
      "40 hours (or 30 hours if completing a driver skills development program)",
      "50 hours"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Parents or guardians must provide a certified statement confirming at least 40 hours of supervised behind-the-wheel driving (30 hours if completing a driver skills development program).",
    source: "Chapter 1 - Requirements to Obtain a JOL, Page 10 & 19",
    tags: ["Supervised Driving", "Parent Certification"]
  },
  {
    id: "q-ch1-20",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Curfew Violation Penalty",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "What is the license suspension penalty for a JOL holder caught driving between 12:30 AM and 5:00 AM without a parent/guardian for a first offense?",
    options: [
      "Written warning",
      "60-day license suspension",
      "180-day license suspension",
      "1-year license suspension"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Violating the night curfew restriction results in a 60-day suspension for a first offense, 180 days for a second, and 1 year for subsequent offenses.",
    source: "Chapter 1 & 3 - JOL License Restrictions, Page 11 & 63",
    statute: "M.G.L. c. 90, § 10",
    tags: ["JOL", "Curfew", "Suspension"]
  },
  {
    id: "q-ch1-21",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Out of State Violations",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "How are out-of-state motor vehicle traffic convictions handled by the Massachusetts RMV?",
    options: [
      "They are disregarded unless committed in New England",
      "They are treated as 'like' offenses and impact your Massachusetts record and insurance surcharges",
      "They only apply to commercial drivers",
      "They are cleared after 30 days"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Out-of-state violations are reported to the RMV and treated just as if they occurred in Massachusetts, triggering suspensions and insurance points.",
    source: "Chapter 1 & 3 - Out-of-State Violations, Page 1 & 58",
    tags: ["Out of State", "Interstate Compact"]
  },
  {
    id: "q-ch1-22",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Annual Inspection Re-test Grace",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "If your motor vehicle fails its annual Massachusetts safety and emissions inspection, within how many days must you repair the vehicle and obtain a re-test?",
    options: [
      "10 days",
      "20 days",
      "30 days",
      "60 days"
    ],
    correctAnswer: "D",
    correctIndex: 3,
    explanation: "You have 60 days from the date of the initial failure to have necessary repairs completed and pass a re-inspection.",
    source: "Chapter 1 - Vehicle Inspection & Equipment, Page 34",
    tags: ["Inspection", "Emissions", "60 Days"]
  },
  {
    id: "q-ch1-23",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Road Test Parking Brake Check",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Rigorous",
    question: "Under 540 CMR 4.04(4), how does the RMV examiner test your passenger vehicle's parking brake before commencing the road test?",
    options: [
      "By placing the car in reverse on an incline",
      "By accelerating the motor to 1,200 to 1,300 RPMs with the vehicle in the lowest gear with parking brake set",
      "By turning the steering wheel all the way to the lock position",
      "By testing ABS brake pedal pulsations"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Regulation 540 CMR 4.04(4) mandates testing parking brakes by setting the brake, placing the vehicle in lowest gear, and accelerating engine to 1,200–1,300 RPMs; the car must not move.",
    source: "Chapter 1 - Passenger Vehicle Requirements, Page 23-24",
    statute: "540 CMR 4.04(4)",
    tags: ["Road Test", "Parking Brake", "CMR"]
  },
  {
    id: "q-ch1-24",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "Road Test Sponsor Requirements",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What are the legal qualifications for a sponsor accompanying an applicant on a Massachusetts Class D road test?",
    options: [
      "At least 18 years old with a valid license",
      "At least 21 years old, at least 1 year driving experience, holding a valid US home state license",
      "A parent or driving school owner only",
      "At least 25 years old with clean driving history"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The sponsor must be at least 21 years old, have had at least one year of driving experience, and possess a valid driver's license issued by their home state (foreign licenses cannot sponsor).",
    source: "Chapter 1 - Sponsor Requirements, Page 23",
    tags: ["Sponsor", "Road Test"]
  },
  {
    id: "q-ch1-25",
    chapter: 1,
    chapterName: "Obtaining Your License",
    topic: "REAL ID vs Standard License",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the primary operational distinction between a Massachusetts REAL ID Driver's License and a Standard Driver's License?",
    options: [
      "REAL ID permits driving heavy commercial trucks",
      "A REAL ID is federally accepted to board domestic flights and enter federal buildings, while driving privileges are identical",
      "Standard licenses do not expire",
      "REAL ID requires an annual vision re-test"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Both cards grant identical driving privileges; however, only the REAL ID is compliant with federal security standards for boarding domestic flights and accessing secure federal facilities.",
    source: "Chapter 1 - REAL ID and Standard Cards, Page 6",
    tags: ["REAL ID", "Federal Compliance"]
  },

  // ==========================================
  // CHAPTER 2: SAFETY FIRST & DEFENSIVE DRIVING
  // ==========================================
  {
    id: "q-ch2-01",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Seat Belt Fine",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Under Massachusetts law, what is the fine for an unbelted driver or an unbelted passenger age 16 or older?",
    options: [
      "$25",
      "$50",
      "$100",
      "$200"
    ],
    correctAnswer: "A",
    correctIndex: 0,
    explanation: "Any driver or passenger age 16 or older who is not wearing a safety belt can be fined $25 under Massachusetts law.",
    source: "Chapter 2 - Safety/Seat Belt Law, Page 35",
    statute: "M.G.L. c. 90, § 13A",
    tags: ["Seat Belt", "Fines"]
  },
  {
    id: "q-ch2-02",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Child Passenger Restraints",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "In Massachusetts, until what age or height must infants and small children sit in federally approved child passenger restraints?",
    options: [
      "Until age 6 or 48 inches tall",
      "Until age 8 or at least 57 inches tall",
      "Until age 10 or 60 inches tall",
      "Until age 12"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Infants and small children must sit in federally approved child safety restraints until they are at least 8 years old OR at least 57 inches (4 feet 9 inches) tall.",
    source: "Chapter 2 - Child Passenger Restraints, Page 36",
    statute: "M.G.L. c. 90, § 7AA",
    tags: ["Child Restraint", "Safety Seats"]
  },
  {
    id: "q-ch2-03",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Tire Tread Depth & Penny Test",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Foundational",
    question: "What is the minimum legal tire tread depth required in Massachusetts, and what common coin test verifies it?",
    options: [
      "1/32 inch using a nickel",
      "2/32 (1/16) inch using Lincoln's head on a penny",
      "4/32 inch using a quarter",
      "6/32 inch using a dime"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Tires must have at least 2/32 inches of tread depth in every major groove. Sliding a penny into the tread upside down: if Lincoln's head is visible, tires are illegal and worn out.",
    source: "Chapter 2 - Brakes and Tires, Page 42",
    tags: ["Tire Tread", "Inspection", "Safety Equipment"]
  },
  {
    id: "q-ch2-04",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Stopping Distances at 60 MPH",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Rigorous",
    question: "On dry, level pavement, what is the approximate total stopping distance (reaction distance + braking distance) for a passenger vehicle traveling at 60 mph?",
    options: [
      "156 feet",
      "215 feet",
      "292 feet (almost a football field)",
      "350 feet"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "At 60 mph, reaction distance takes ~66 feet (3/4 second) and braking distance takes ~226 feet, resulting in a total stopping distance of approximately 292 feet.",
    source: "Chapter 2 - Braking and Stopping Table, Page 44",
    tags: ["Stopping Distance", "Physics", "Speed"]
  },
  {
    id: "q-ch2-05",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Stopping Distances at 30 MPH",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "What is the total stopping distance (reaction time + braking) for a passenger car traveling at 30 mph under ideal conditions?",
    options: [
      "59 feet",
      "104 feet",
      "140 feet",
      "180 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "At 30 mph, total stopping distance is approximately 104 feet (reaction time distance plus braking distance on dry pavement).",
    source: "Chapter 2 - Braking and Stopping, Page 44",
    tags: ["Stopping Distance", "Speed"]
  },
  {
    id: "q-ch2-06",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Three-Second Rule",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Foundational",
    question: "What is the recommended minimum safe following distance behind the vehicle directly in front of you under normal driving conditions?",
    options: [
      "At least 1 second",
      "At least 2 car lengths",
      "At least 3 seconds",
      "At least 6 seconds"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "The 'three-second rule' represents the statutory baseline minimum following distance for passenger vehicles on dry roads with moderate traffic.",
    source: "Chapter 2 - Safe Distances Around Your Car, Page 43",
    tags: ["Following Distance", "Three Second Rule"]
  },
  {
    id: "q-ch2-07",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Following Motorcycle Distance",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "Why should you increase your following distance to at least 4 seconds when traveling behind a motorcycle?",
    options: [
      "Motorcycles can stop much faster than cars, creating an extreme rear-end collision risk",
      "Motorcycles throw up more dust and gravel",
      "Motorcycles have dimmer taillights",
      "Motorcycle riders cannot see behind them"
    ],
    correctAnswer: "A",
    correctIndex: 0,
    explanation: "Motorcycles are lightweight and stop in substantially shorter distances than passenger automobiles; extra following space prevents tailgating collisions.",
    source: "Chapter 2 & 5 - Safe Distances, Page 43 & 51",
    tags: ["Motorcycles", "Following Distance"]
  },
  {
    id: "q-ch2-08",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Headlight Activation Mandatory Times",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "When are drivers in Massachusetts legally mandated to have vehicle headlights and taillights illuminated?",
    options: [
      "From sunset to sunrise",
      "From 1/2 hour after sunset until 1/2 hour before sunrise, visibility under 500 ft, and whenever windshield wipers are in use",
      "Between 8:00 PM and 6:00 AM",
      "Only during inclement weather and heavy snow"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Headlights must be on from 1/2 hour after sunset to 1/2 hour before sunrise, anytime visibility is less than 500 feet, and whenever windshield wipers are running.",
    source: "Chapter 2 - Using Headlights, Page 45",
    statute: "M.G.L. c. 90, § 7",
    tags: ["Headlights", "Wipers Law"]
  },
  {
    id: "q-ch2-09",
    chapter: 2,
    chapterName: "Safety First",
    topic: "High Beam Dimming Distances",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "At what distances must you dim your high beam headlights to low beams when approaching an oncoming vehicle and when following another vehicle?",
    options: [
      "1,000 feet oncoming; 500 feet following",
      "500 feet oncoming; 200 feet following",
      "300 feet oncoming; 100 feet following",
      "800 feet oncoming; 300 feet following"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You must lower high beams when approaching within 500 feet of an oncoming vehicle or within 200 feet of a vehicle you are following.",
    source: "Chapter 2 - High Beam Headlights, Page 46",
    tags: ["High Beams", "Night Driving"]
  },
  {
    id: "q-ch2-10",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Hands-Free Law Adult Restrictions",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "Under the Massachusetts Hands-Free Driving Law, what are drivers age 18 and older permitted to do with electronic mobile devices while operating a vehicle?",
    options: [
      "Hold the phone to talk as long as they do not text",
      "Use hands-free voice commands or a single tap/swipe if the device is securely mounted to windshield, dashboard, or console",
      "Type text messages when stopped at red traffic lights",
      "Hold the device in their lap on speakerphone"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Drivers 18 and older cannot hold or support any device. Hands-free mode is only permitted via voice commands or a single tap on a dashboard-mounted unit. Handheld use at red lights is strictly illegal.",
    source: "Chapter 2 - Hands-Free Mobile Phone Use, Page 39",
    statute: "M.G.L. c. 90, § 13B",
    tags: ["Hands-Free", "Distracted Driving"]
  },
  {
    id: "q-ch2-11",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Hands-Free Law Minor Ban",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the mobile phone restriction for drivers under the age of 18 (including permit and JOL holders)?",
    options: [
      "They may use Bluetooth hands-free earplugs",
      "They are completely prohibited from using any mobile electronic device, even in hands-free or Bluetooth mode (except reporting 911 emergencies)",
      "They may use navigation apps if mounted",
      "They can make calls if accompanied by a parent"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under Massachusetts law, teen drivers under 18 are totally banned from using all mobile electronic devices, including hands-free Bluetooth systems. The only exception is dialing 911 for an emergency.",
    source: "Chapter 2 - Drivers Under 18, Page 40",
    statute: "M.G.L. c. 90, § 8M",
    tags: ["JOL", "Hands-Free", "Minors"]
  },
  {
    id: "q-ch2-12",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Distracted Driving Fines",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What are the statutory fines for first, second, and third offenses under the Massachusetts Hands-Free Law for adult drivers?",
    options: [
      "$50, $100, $200",
      "$100 (1st), $250 + course (2nd), $500 + insurance surcharge (3rd+)",
      "$200, $500, $1,000",
      "$150, $300, $600"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Penalties are: 1st offense = $100 fine; 2nd offense = $250 fine + mandatory distracted driving class; 3rd offense = $500 fine + insurance surcharge + course.",
    source: "Chapter 2 - Penalties for Violating the Law, Page 40",
    tags: ["Hands-Free", "Fines", "Penalties"]
  },
  {
    id: "q-ch2-13",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Air Bag Safety with Child Seats",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Foundational",
    question: "Where should an infant riding in a rear-facing child safety seat never be placed in a motor vehicle equipped with passenger-side air bags?",
    options: [
      "In the middle rear seat",
      "In the front passenger seat",
      "Behind the driver seat",
      "Behind the passenger seat"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Never install a rear-facing infant safety seat in the front seat if an air bag is active. Deployment force can cause severe injury or death. Children are always safest in the rear seat.",
    source: "Chapter 2 - Air-Bag Safety, Page 36 & 38",
    tags: ["Air Bags", "Child Restraint"]
  },
  {
    id: "q-ch2-14",
    chapter: 2,
    chapterName: "Safety First",
    topic: "Window Tinting Regulations",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the legal tinting limitation for side and rear windows on passenger vehicles in Massachusetts?",
    options: [
      "Windows can be darkened up to 50%",
      "Windows can be darkened up to 35% light transmittance reduction; windshield tinting is illegal",
      "Tinting is only allowed on the rear window",
      "Any darkness is legal if medical note is present"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts allows darkening side and rear windows up to 35 percent. It is strictly illegal to tint the front windshield.",
    source: "Chapter 2 - Passenger Vehicle Safety, Page 34",
    tags: ["Window Tint", "Safety Equipment"]
  },

  // ==========================================
  // CHAPTER 3: KEEPING YOUR LICENSE (OUI, Suspensions, Fines, SDIP)
  // ==========================================
  {
    id: "q-ch3-01",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Speeding Fine Formula",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "If you are cited for driving 73 mph in a 55 mph zone (18 mph over limit), how is your total fine calculated under Massachusetts law?",
    options: [
      "Flat $100 fine plus court costs",
      "$105 for first 10 mph + ($10 x 8 mph) = $185 total fine (including $50 Head Injury Fund surcharge)",
      "$250 flat fine",
      "$15 per mph over limit ($270)"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The minimum speeding fine is $105 for the first 10 mph over the limit. Each additional mph over the first 10 adds $10. All speeding fines include a $50 surcharge dedicated to the Head Injury Treatment Services Trust Fund.",
    source: "Chapter 3 - Speeding Violations, Page 57",
    statute: "M.G.L. c. 90, § 17 & § 20",
    tags: ["Speeding Fine", "Formula", "Head Injury Fund"]
  },
  {
    id: "q-ch3-02",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Work Zone Speeding Double Fine",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What happens to the statutory speeding fine if you are caught speeding in a posted highway work zone in Massachusetts?",
    options: [
      "The fine is increased by $50",
      "The speeding fine is doubled",
      "Your license is revoked on the spot",
      "You receive 5 insurance surcharge points"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "If you are caught speeding within a posted construction or maintenance work zone, the speeding fine is doubled by law.",
    source: "Chapter 3 - Work Zones, Page 57",
    tags: ["Work Zone", "Double Fines"]
  },
  {
    id: "q-ch3-03",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Adult Speeding Suspensions",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "For a driver age 18 or older, what license suspension occurs upon conviction of 3 speeding violations within a 12-month period?",
    options: [
      "Warning letter only",
      "Automatic 30-day suspension",
      "60-day suspension",
      "1-year suspension"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Accumulating 3 speeding violations within any 12-month period triggers an automatic 30-day license suspension and a $100 reinstatement fee.",
    source: "Chapter 3 - Mandatory License Suspensions, Page 57 & 62",
    tags: ["Speeding", "Suspension", "Three Offenses"]
  },
  {
    id: "q-ch3-04",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Surchargeable Events & Retraining",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "How many surchargeable events (moving violations or at-fault crashes) within a 2-year period will trigger a mandatory Driver Retraining Course?",
    options: [
      "2 events",
      "3 events",
      "5 events",
      "7 events"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "If you accumulate 3 surchargeable events within 2 years, you must complete the 8-hour Driver Retraining Course within 90 days or your license is suspended indefinitely.",
    source: "Chapter 3 - Surchargeable Events, Page 59 & 62",
    tags: ["Surchargeable Events", "Driver Retraining"]
  },
  {
    id: "q-ch3-05",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Seven Surchargeable Events Suspension",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the mandatory license suspension penalty if a driver accumulates 7 surchargeable events within a 3-year period?",
    options: [
      "30-day suspension",
      "60-day automatic suspension",
      "90-day suspension",
      "1-year suspension"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Receiving 7 surchargeable events within a 3-year window results in an automatic 60-day license suspension and a $100 reinstatement fee.",
    source: "Chapter 3 - Mandatory License Suspensions, Page 59 & 62",
    tags: ["Surchargeable Events", "Suspensions"]
  },
  {
    id: "q-ch3-06",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Habitual Traffic Offender",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "What driving record qualifies an operator as a Habitual Traffic Offender, and what is the mandatory suspension period?",
    options: [
      "5 speeding tickets in 1 year; 1-year suspension",
      "3 major moving violations OR any combination of 12 major/minor violations in 5 years; 4-year suspension",
      "2 OUI offenses; lifetime suspension",
      "10 parking tickets in 2 years; 60-day suspension"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Accumulating 3 major moving violations or 12 total violations within 5 years triggers the Habitual Traffic Offender status with a mandatory 4-year license suspension and $500 reinstatement fee.",
    source: "Chapter 3 - Habitual Traffic Offender, Page 62",
    statute: "M.G.L. c. 90, § 22F",
    tags: ["Habitual Offender", "Suspensions"]
  },
  {
    id: "q-ch3-07",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Legal BAC Limit Adults",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the statutory Blood Alcohol Concentration (BAC) limit defining Operating Under the Influence (OUI) for a driver 21+ in Massachusetts?",
    options: [
      "0.02%",
      "0.04%",
      "0.05%",
      "0.08%"
    ],
    correctAnswer: "D",
    correctIndex: 3,
    explanation: "For drivers age 21 and older operating passenger vehicles, it is strictly illegal to operate a motor vehicle with a BAC of 0.08% or greater.",
    source: "Chapter 3 - OUI and Alcohol Laws, Page 73",
    statute: "M.G.L. c. 90, § 24",
    tags: ["OUI", "BAC Limits"]
  },
  {
    id: "q-ch3-08",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Commercial Driver BAC Limit",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the legal Blood Alcohol Concentration (BAC) limit for Commercial Driver's License (CDL) holders operating a commercial vehicle?",
    options: [
      "0.02%",
      "0.04%",
      "0.08%",
      "0.10%"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Commercial operators are held to federal and state standards of 0.04% BAC while operating a commercial vehicle.",
    source: "Chapter 3 - Blood Alcohol Content, Page 72",
    tags: ["CDL", "BAC"]
  },
  {
    id: "q-ch3-09",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Chemical Test Failure Suspensions",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "If a driver age 21 or older takes a chemical breath test and registers a BAC of 0.08% or higher, how long is their license suspended administratively?",
    options: [
      "10 days",
      "30 days (or until conclusion of court case, whichever is shorter)",
      "90 days",
      "180 days"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Failing a chemical breath test (BAC 0.08%+) results in an immediate 30-day administrative license suspension (or until court resolution, whichever is shorter).",
    source: "Chapter 3 - License Suspension Periods for Failed Tests, Page 69",
    statute: "M.G.L. c. 90, § 24(1)(f)",
    tags: ["OUI", "Breathalyzer Failure", "Suspension"]
  },
  {
    id: "q-ch3-10",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Under 21 Failed Chemical Test",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "What is the total administrative suspension period for a driver under 21 who fails a chemical breath test with a BAC of 0.02% or higher?",
    options: [
      "30 days only",
      "30 days plus an additional 180 days (waivable upon entry into alcohol education)",
      "1 year total",
      "3 years"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under MGL c.90 § 24P, drivers under 21 face 30 days suspension plus an additional 180 days (or 1 year if under 18) for Youth Alcohol education.",
    source: "Chapter 3 - Failed Chemical Tests Chart, Page 69",
    statute: "M.G.L. c. 90, § 24P",
    tags: ["Under 21", "OUI", "Youth Alcohol Program"]
  },
  {
    id: "q-ch3-11",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "First Offense OUI Court Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the maximum prison sentence and fine upon court conviction for a first-offense OUI in Massachusetts?",
    options: [
      "30 days jail, $250 fine",
      "Up to 2 1/2 years in a house of correction and fines from $500 to $5,000",
      "5 years state prison, $10,000 fine",
      "Community service only"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A first OUI court conviction carries a maximum prison term of 2 1/2 years, fines between $500 and $5,000, and a 1-year license suspension.",
    source: "Chapter 3 - Penalties for Operating Under Influence Chart, Page 68",
    statute: "M.G.L. c. 90, § 24",
    tags: ["OUI Penalties", "Prison Term"]
  },
  {
    id: "q-ch3-12",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Open Container Law",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "Under the Massachusetts Open Container Law, what is the fine for possessing an open container of alcohol inside the passenger compartment of a vehicle on a public way?",
    options: [
      "$25 to $50",
      "$100 to $500",
      "$500 to $5,000",
      "Flat $50"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Conviction for an open alcoholic container in the passenger area carries a fine of $100 to $500 (and arrest/suspension if the offender is under 21).",
    source: "Chapter 3 - Open Container Law, Page 74",
    statute: "M.G.L. c. 90, § 24I",
    tags: ["Open Container", "Alcohol Laws"]
  },
  {
    id: "q-ch3-13",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Safe Driver Insurance Plan (SDIP)",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "How many surcharge points are assessed under the Safe Driver Insurance Plan (SDIP) for a minor moving violation (e.g. speeding) and a major moving violation (e.g. OUI)?",
    options: [
      "1 point minor; 2 points major",
      "2 points for minor; 5 points for major",
      "3 points minor; 6 points major",
      "4 points minor; 8 points major"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under the SDIP merit rating rules, minor moving violations assess 2 points, while major violations (such as OUI or reckless driving) assess 5 points.",
    source: "Chapter 3 - SDIP Points, Page 59",
    tags: ["SDIP", "Insurance Surcharges"]
  },
  {
    id: "q-ch3-14",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Major At-Fault Accident Threshold",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "Under the Safe Driver Insurance Plan, how many points are added for a major at-fault accident resulting in claim payments exceeding $1,000?",
    options: [
      "2 points",
      "3 points",
      "4 points",
      "5 points"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A major at-fault accident involving property damage or injury claims over $1,000 adds 4 surcharge points under SDIP rules.",
    source: "Chapter 3 - SDIP Points & At-Fault Crashes, Page 58 & 59",
    tags: ["SDIP", "At-Fault Crashes"]
  },
  {
    id: "q-ch3-15",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Ignition Interlock Device Mandate",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "Under Melanie's Law, when is an operator required to install an Ignition Interlock Device (IID) on their vehicle in Massachusetts?",
    options: [
      "After any single speeding citation over 20 mph",
      "Upon two or more OUI convictions when applying for a hardship license or license reinstatement",
      "Only after four or more felony convictions",
      "Whenever a driver is under 21"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Drivers with two or more OUI convictions who are granted a hardship license or seek license reinstatement must install an IID at their own expense for the duration of hardship plus two additional years.",
    source: "Chapter 3 - Ignition Interlock Devices, Page 73",
    statute: "M.G.L. c. 90, § 24 1/2",
    tags: ["Ignition Interlock", "Melanies Law", "OUI"]
  },
  {
    id: "q-ch3-16",
    chapter: 3,
    chapterName: "Keeping Your License",
    topic: "Fake or Altered License Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What administrative action can the RMV take if you use, alter, or transfer a false license or ID card, even without a criminal conviction?",
    options: [
      "Issue a $25 warning",
      "Suspend your driving privileges for 6 months (or 1 year after conviction)",
      "Revoke your vehicle registration indefinitely",
      "Mandate community service"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Under MGL c.90 § 22(e), the RMV can suspend your license for 6 months without a conviction for using or making a fake ID, and for 1 full year upon court conviction.",
    source: "Chapter 3 - False or Altered Licenses, Page 74",
    statute: "M.G.L. c. 90, § 22(e)",
    tags: ["Fake ID", "License Suspension"]
  },

  // ==========================================
  // CHAPTER 4: RULES OF THE ROAD (Speed, Signals, Signs, Rotaries, Right-of-Way)
  // ==========================================
  {
    id: "q-ch4-01",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "School Zone Speed Limit",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the statutory speed limit in an established school zone in Massachusetts unless posted otherwise?",
    options: [
      "15 mph",
      "20 mph",
      "25 mph",
      "30 mph"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The statutory speed limit in a school zone is 20 mph when children are present or when school warning lights are flashing.",
    source: "Chapter 4 - Speed Limits, Page 79 & 80",
    statute: "M.G.L. c. 90, § 17",
    tags: ["Speed Limit", "School Zone"]
  },
  {
    id: "q-ch4-02",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Thickly Settled District Speed",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the default statutory speed limit in a thickly settled or business district in Massachusetts?",
    options: [
      "20 mph",
      "25 mph",
      "30 mph (unless a municipality has posted 25 mph signs)",
      "35 mph"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Unless posted otherwise, driving over 30 mph in a thickly settled or business district is unreasonable and improper under Massachusetts law (municipalities may opt into 25 mph citywide).",
    source: "Chapter 4 - Speed Limits, Page 79",
    statute: "M.G.L. c. 90, § 17",
    tags: ["Speed Limit", "Thickly Settled"]
  },
  {
    id: "q-ch4-03",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Definition of Thickly Settled District",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "How is a 'thickly settled district' legally defined under Massachusetts General Law?",
    options: [
      "Any residential territory with more than 500 inhabitants",
      "An area where buildings are spaced fewer than 200 feet apart for a distance of 1/4 mile or more",
      "Any city road featuring sidewalks and bicycle paths",
      "An area within 1 mile of a municipal center"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A thickly settled district is legally defined as territory where houses or commercial structures are spaced fewer than 200 feet apart for a distance of at least 1/4 mile (1,320 feet).",
    source: "Chapter 4 - Speed Limits, Page 80",
    statute: "M.G.L. c. 90, § 1",
    tags: ["Thickly Settled", "Legal Definition"]
  },
  {
    id: "q-ch4-04",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Massachusetts Turnpike Minimum Speed",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What is the posted statutory minimum speed limit on the Massachusetts Turnpike (I-90) under normal driving conditions?",
    options: [
      "30 mph",
      "35 mph",
      "40 mph",
      "45 mph"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "The Massachusetts Turnpike has a posted minimum speed limit of 40 mph under normal conditions (and 20 mph in Boston Harbor tunnels).",
    source: "Chapter 4 - Speed Limits, Page 79",
    tags: ["Mass Pike", "Minimum Speed"]
  },
  {
    id: "q-ch4-05",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Turn Signaling Distances",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "At what distance must you activate your directional turn signals before turning or changing lanes on local streets vs. highways?",
    options: [
      "50 feet on local streets; 200 feet on highways",
      "100 feet on local streets; 500 feet on highways",
      "200 feet on local streets; 1,000 feet on highways",
      "50 feet on local streets; 300 feet on highways"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "You must signal at least 100 feet before turning or changing lanes on city/local streets, and at least 500 feet before an exit or maneuver on a highway.",
    source: "Chapter 4 - Signaling, Page 93 & 97",
    statute: "M.G.L. c. 90, § 14",
    tags: ["Signaling", "Turns", "Distances"]
  },
  {
    id: "q-ch4-06",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Flashing Red Traffic Light",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What does a flashing red circular traffic light mean at an intersection in Massachusetts?",
    options: [
      "Slow down and proceed with caution",
      "The signal is out of order; continue driving",
      "Come to a complete stop and obey right-of-way laws exactly like a STOP sign",
      "Wait until the signal turns solid green"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "A flashing red circle means the exact same thing as a STOP sign: you must come to a full stop before the stop line or crosswalk, yield to pedestrians and cross traffic, and proceed only when clear.",
    source: "Chapter 4 - Traffic Signals, Page 81",
    tags: ["Traffic Signals", "Flashing Red"]
  },
  {
    id: "q-ch4-07",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Flashing Yellow Arrow",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Standard",
    question: "What does a flashing yellow arrow traffic signal indicate to turning motorists?",
    options: [
      "Protected turn: oncoming traffic is stopped",
      "Unprotected turn: you may turn in the direction of the arrow after yielding to oncoming traffic and pedestrians",
      "The lane is closing ahead",
      "Full stop required before turning"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A flashing yellow arrow allows an unprotected turn: you may turn in the direction of the arrow after yielding to approaching vehicles and pedestrians.",
    source: "Chapter 4 - Traffic Signals, Page 81",
    tags: ["Traffic Signals", "Yellow Arrow"]
  },
  {
    id: "q-ch4-08",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Malfunctioning Traffic Signals",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Standard",
    question: "If traffic lights at an intersection are blacked out or unlit due to a power failure, how must drivers treat the intersection?",
    options: [
      "As an open highway where the wider road has absolute priority",
      "As a four-way stop in all directions",
      "Maintain 15 mph and proceed through",
      "Pull over and wait for a traffic officer"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "If signals are blacked out and not functioning, you must treat the intersection as a four-way stop in all directions and proceed according to standard right-of-way rules.",
    source: "Chapter 4 - Traffic Signals Not Working, Page 82",
    tags: ["Traffic Signals", "Power Outage", "Four-Way Stop"]
  },
  {
    id: "q-ch4-09",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Left Turn on Red Legality",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "Under what specific condition is a left turn on a red signal legally permitted in Massachusetts?",
    options: [
      "Never under any circumstances",
      "Whenever there are no vehicles within 500 feet",
      "Only when turning from a one-way street onto another one-way street after coming to a complete stop and yielding",
      "Between 11:00 PM and 5:00 AM"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "You can turn left on a red light in Massachusetts ONLY when driving on a one-way street and turning left onto another one-way street, after coming to a full stop and yielding.",
    source: "Chapter 4 - Steady Red Circle, Page 81 & 98",
    tags: ["Turns", "Red Light", "One-Way"]
  },
  {
    id: "q-ch4-10",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Pavement Markings Yellow Lines",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What do double solid yellow lines painted along the center of a two-lane roadway mean?",
    options: [
      "Passing permitted during daylight hours",
      "Passing is prohibited in both directions, but you may cross them to turn left into a driveway or private alley",
      "The lane is designated for bicycles only",
      "Traffic is traveling in one direction"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Double solid yellow lines prohibit passing in both directions. You may only cross them when making a safe left turn into or out of a private driveway, alley, or street.",
    source: "Chapter 4 - Pavement Markings, Page 90",
    tags: ["Pavement Markings", "Yellow Lines"]
  },
  {
    id: "q-ch4-11",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "White Diamond Symbol",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What does a white painted diamond symbol on a highway travel lane represent?",
    options: [
      "The lane is ending in 500 feet",
      "The lane is reserved for restricted use, such as High-Occupancy Vehicles (HOV), carpools, or buses",
      "Minimum speed limit 55 mph",
      "Rough road surface ahead"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "A white diamond symbol designates a special lane restriction, such as HOV carpool lanes, bus-only lanes, or bicycle lanes.",
    source: "Chapter 4 - Pavement Markings, Page 90 & 91",
    tags: ["Pavement Markings", "HOV", "Diamond"]
  },
  {
    id: "q-ch4-12",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Traffic Sign Shapes",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What exclusive shapes are legally reserved for STOP signs and YIELD signs in the United States?",
    options: [
      "Stop: 8-sided Octagon; Yield: Downward-pointing equilateral triangle",
      "Stop: Circle; Yield: Diamond",
      "Stop: Square; Yield: Pentagon",
      "Stop: Rectangle; Yield: Triangle pointing up"
    ],
    correctAnswer: "A",
    correctIndex: 0,
    explanation: "An 8-sided octagon is used exclusively for STOP signs. A downward-pointing equilateral triangle is used exclusively for YIELD signs.",
    source: "Chapter 4 - Road Signs Shapes & Colors, Page 85 & 86",
    tags: ["Road Signs", "Shapes"]
  },
  {
    id: "q-ch4-13",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "School Zone Sign Shape",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What shape and color designates an advance School Zone or School Crossing warning sign?",
    options: [
      "Circular with yellow background",
      "5-sided Pentagon with fluorescent yellow-green background",
      "Diamond with orange background",
      "Rectangle with blue background"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "School zone and school crossing signs are pentagons (5-sided) featuring fluorescent yellow-green coloring for heightened visibility.",
    source: "Chapter 4 - Traffic Signs, Page 83 & 85",
    tags: ["Road Signs", "School Zone"]
  },
  {
    id: "q-ch4-14",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Railroad Advance Warning Sign",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What design features appear on an advance railroad crossing warning sign?",
    options: [
      "An orange diamond with a train pictogram",
      "A round circular yellow sign with a black 'X' and two 'R' letters",
      "A white crossbuck with red letters",
      "A red square with white diagonal slash"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The advance railroad warning sign is a circular round yellow sign with a black 'X' and 'RR'. The crossbuck sign is located at the crossing itself.",
    source: "Chapter 4 - Railroad Crossings, Page 85 & 86",
    tags: ["Railroad", "Road Signs"]
  },
  {
    id: "q-ch4-15",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Rotary Right-of-Way Rules",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Foundational",
    question: "Who has the legal right-of-way when entering a rotary or roundabout in Massachusetts?",
    options: [
      "Vehicles entering from the access ramps",
      "Vehicles already circulating inside the rotary",
      "The vehicle moving at the highest speed",
      "Commercial vehicles entering from the right"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Traffic already inside a rotary or roundabout always has the right-of-way over vehicles attempting to enter. Entering traffic must yield.",
    source: "Chapter 4 - Rotaries, Page 101",
    tags: ["Rotary", "Right-of-Way"]
  },
  {
    id: "q-ch4-16",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Rotary Traffic Flow Direction",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Foundational",
    question: "In which direction does vehicular traffic always flow around the central island in a Massachusetts rotary?",
    options: [
      "Clockwise",
      "Counter-clockwise",
      "Determined by the entering lane",
      "Alternating depending on congestion"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Traffic in all Massachusetts rotaries and roundabouts travels counter-clockwise around the central island.",
    source: "Chapter 4 - Rotary Traffic Rules, Page 101",
    tags: ["Rotary", "Traffic Flow"]
  },
  {
    id: "q-ch4-17",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Missed Exit in Rotary",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Foundational",
    question: "What should you do if you miss your intended exit while circulating inside a Massachusetts rotary?",
    options: [
      "Stop immediately in your lane and reverse slowly",
      "Cut across the central island divider",
      "Continue circulating around the rotary counter-clockwise until you reach the exit again",
      "Pull over onto the inner grass and wait for traffic to clear"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Never stop or back up in a rotary. If you miss your exit, continue around the rotary counter-clockwise and safely position yourself to exit.",
    source: "Chapter 4 - Rotaries, Page 101-102",
    tags: ["Rotary", "Maneuver"]
  },
  {
    id: "q-ch4-18",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Uncontrolled Intersection Right-of-Way",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Foundational",
    question: "When two vehicles arrive at an uncontrolled intersection at the exact same moment, who has the right-of-way?",
    options: [
      "The vehicle on the left",
      "The vehicle on the right",
      "The larger vehicle",
      "The vehicle traveling on the street with higher speed limit"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "At an uncontrolled intersection where two vehicles arrive at the same time, the driver on the left must yield the right-of-way to the vehicle on the right.",
    source: "Chapter 4 - Right-of-Way Rules, Page 100",
    tags: ["Right-of-Way", "Intersections"]
  },
  {
    id: "q-ch4-19",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "School Bus Flashing Red Lights",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "On an undivided roadway, who must stop when a school bus activates flashing red lights and extends its stop arm?",
    options: [
      "Only traffic following behind the bus",
      "Traffic moving in both directions",
      "Only commercial vehicles",
      "Traffic approaching from the front only"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "On an undivided road, traffic traveling in both directions must come to a complete stop when a school bus displays flashing red lights and stop sign.",
    source: "Chapter 4 - School Buses, Page 105",
    statute: "M.G.L. c. 90, § 14",
    tags: ["School Bus", "Right-of-Way"]
  },
  {
    id: "q-ch4-20",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "School Bus Divided Highway Exception",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "Under what sole condition are motorists exempt from stopping for a school bus with flashing red lights traveling in the opposite direction?",
    options: [
      "If the road has at least four lanes",
      "Only if traveling on the opposite side of a divided highway separated by an unpaved median strip or physical barrier",
      "If driving over 50 mph",
      "If late for work"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The only exception is if the school bus is on the opposite side of a divided highway with a physical median barrier separating traffic directions.",
    source: "Chapter 4 - School Buses, Page 105",
    statute: "M.G.L. c. 90, § 14",
    tags: ["School Bus", "Divided Highway"]
  },
  {
    id: "q-ch4-21",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Hand Signals Master Check",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Foundational",
    question: "What do the three standard manual hand signals represent when made through the driver's window?",
    options: [
      "Arm straight out = Left turn; Arm bent 90° upward = Right turn; Arm bent 90° downward = Stop or Slow",
      "Arm straight out = Right turn; Arm upward = Stop; Arm downward = Left turn",
      "Arm waved upward = Hazard; Arm straight out = Yield",
      "Arm downward = U-turn; Arm straight = Pass"
    ],
    correctAnswer: "A",
    correctIndex: 0,
    explanation: "Hand extended straight out = Left turn; hand extended upward at 90 degrees = Right turn; hand extended downward with palm to rear = Slow down or Stop.",
    source: "Chapter 4 - Hand Signals, Page 93",
    statute: "M.G.L. c. 90, § 14B",
    tags: ["Hand Signals", "Signaling"]
  },
  {
    id: "q-ch4-22",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Hill Parking Wheels Direction",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "Which direction should you turn your vehicle's front wheels when parking UPHILL against a curb vs. DOWNHILL against a curb?",
    options: [
      "Uphill: Turn wheels right (to curb); Downhill: Turn wheels left (from curb)",
      "Uphill: Turn wheels left (away from curb); Downhill: Turn wheels right (inward to curb)",
      "Both uphill and downhill: Keep wheels straight",
      "Both uphill and downhill: Turn wheels inward"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "When parking Uphill against a curb, turn wheels outward to the left so the tire rolls against the curb. When parking Downhill against a curb, turn wheels inward to the right so it rolls into the curb.",
    source: "Chapter 4 - Parking on Hills, Page 110",
    tags: ["Hill Parking", "Curb Rules"]
  },
  {
    id: "q-ch4-23",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Hill Parking Without a Curb",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "When parking on a hill (either uphill or downhill) on a road WITHOUT a curb, which way must you turn your front wheels?",
    options: [
      "Toward the center of the road",
      "Toward the side of the road / edge of pavement (right)",
      "Straight ahead",
      "Opposite oncoming traffic"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Without a curb, always turn front wheels to the right (toward the side of the road) so the vehicle will roll off the roadway in the event of brake failure.",
    source: "Chapter 4 - Parking on Hills, Page 110",
    tags: ["Hill Parking", "No Curb"]
  },
  {
    id: "q-ch4-24",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Parking Distance from Curb & Hydrant",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "In Massachusetts, what is the maximum legal distance from the curb when parallel parking, and the minimum clearance from a fire hydrant?",
    options: [
      "6 inches from curb; 5 feet from hydrant",
      "Within 12 inches (1 foot) of curb; at least 10 feet from hydrant",
      "Within 18 inches of curb; at least 15 feet from hydrant",
      "Within 24 inches of curb; at least 20 feet from hydrant"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "When parallel parking, your vehicle must be within 12 inches of the curb. You must never park within 10 feet of a fire hydrant or fire lane.",
    source: "Chapter 4 - Parking Regulations, Page 109 & 111",
    tags: ["Parallel Parking", "Fire Hydrant"]
  },
  {
    id: "q-ch4-25",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Parking Distance from Intersection",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "How far back must you park your motor vehicle from an intersection or crosswalk in Massachusetts?",
    options: [
      "At least 10 feet",
      "At least 20 feet",
      "At least 30 feet",
      "At least 50 feet"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Massachusetts law prohibits parking a motor vehicle within 20 feet of an intersection or crosswalk.",
    source: "Chapter 4 - Parking Regulations, Page 110",
    tags: ["Parking Clearance", "Intersections"]
  },
  {
    id: "q-ch4-26",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Move Over Law Mandate",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "Under the Massachusetts Move Over Law, what must you do when approaching a stationary emergency or maintenance vehicle displaying flashing lights on a multi-lane highway?",
    options: [
      "Honk your horn and maintain posted speed",
      "Safely vacate the lane adjacent to the emergency vehicle (move over one lane), or slow down to a reasonable speed if changing lanes is unsafe",
      "Come to an immediate complete stop in your lane",
      "Accelerate quickly past the vehicle"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Chapter 418 of the Acts of 2008 requires drivers on highways of 4+ lanes to vacate the lane adjacent to the stationary emergency vehicle if safe, or reduce speed to a safe level.",
    source: "Chapter 4 & 5 - Move-Over Law, Page 104 & 120",
    statute: "M.G.L. c. 89, § 7C",
    tags: ["Move Over Law", "Emergency Vehicles"]
  },
  {
    id: "q-ch4-27",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Speeding While Passing",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "When passing another vehicle on a two-lane road, are you legally permitted to exceed the posted speed limit to complete the pass?",
    options: [
      "Yes, up to 10 mph for safety",
      "Never under any circumstances",
      "Yes, during daylight hours only",
      "Yes, when passing farm equipment"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "It is illegal to exceed the posted speed limit at any time, even when passing another vehicle.",
    source: "Chapter 4 - Rules for Passing, Page 102",
    tags: ["Passing", "Speed Limits"]
  },
  {
    id: "q-ch4-28",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Passing on the Right Legality",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "When is passing on the right legally permitted in Massachusetts?",
    options: [
      "Only on the paved shoulder of any road",
      "When the vehicle overtaken is making/about to make a left turn, or on a one-way street, or on a multi-lane roadway moving in one direction",
      "Never; passing on the right is strictly prohibited",
      "Whenever the left lane is moving below 40 mph"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Passing on the right is allowed only when the overtaken car is making a left turn, on one-way streets, or on multi-lane highways with traffic moving in the same direction. Never use the shoulder.",
    source: "Chapter 4 - Passing on the Right, Page 103",
    statute: "M.G.L. c. 89, § 2",
    tags: ["Passing", "Passing on Right"]
  },
  {
    id: "q-ch4-29",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "T-Intersection Priority",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "At a T-intersection where a terminating throughway meets a continuing roadway, who must yield the right-of-way?",
    options: [
      "The vehicle traveling on the through cross-road",
      "The vehicle on the terminating road that ends",
      "Whichever vehicle is turning left",
      "Whichever car arrived first"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "At a T-intersection, the driver traveling on the road that ends must yield the right-of-way to all traffic traveling on the continuing cross road.",
    source: "Chapter 4 - Right-of-Way Rules, Page 100",
    tags: ["T-Intersection", "Right-of-Way"]
  },
  {
    id: "q-ch4-30",
    chapter: 4,
    chapterName: "Rules of the Road",
    topic: "Fundamental Speed Law",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "What is the core mandate of the Massachusetts Fundamental Speed Law?",
    options: [
      "Always travel at the exact maximum posted limit",
      "You must never travel at a speed greater than is reasonable and proper for current weather, road, traffic, and visibility conditions, regardless of posted limits",
      "Maintain a minimum of 45 mph on all numbered state routes",
      "Travel 5 mph below prevailing traffic flow"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The Fundamental Speed Law states that you must never travel faster than is reasonable and proper for existing conditions (weather, pedestrians, road surface), even if posted limits are higher.",
    source: "Chapter 4 - Fundamental Speed Law, Page 79",
    statute: "M.G.L. c. 90, § 17",
    tags: ["Fundamental Speed Law", "Conditions"]
  },

  // ==========================================
  // CHAPTER 5: SPECIAL DRIVING SITUATIONS & VULNERABLE ROAD USERS
  // ==========================================
  {
    id: "q-ch5-01",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Vulnerable Road Users Passing Distance",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Foundational",
    question: "Under Massachusetts Vulnerable Road Users Law, what minimum passing clearance must a motor vehicle maintain when passing a bicyclist or pedestrian?",
    options: [
      "At least 2 feet",
      "At least 3 feet",
      "At least 4 feet",
      "At least 6 feet"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Under An Act to Reduce Traffic Fatalities (Vulnerable Road Users Law), drivers must provide a safe passing distance of at least 4 feet when passing pedestrians, bicyclists, or roadside workers.",
    source: "Chapter 5 - Vulnerable Road Users Law, Page 49 & 115",
    statute: "M.G.L. c. 89, § 2",
    tags: ["Vulnerable Users", "Bicycles", "4 Feet Rule"]
  },
  {
    id: "q-ch5-02",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Bicycle Lane and Full Lane Use",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Standard",
    question: "Are bicyclists in Massachusetts permitted to take the full travel lane even when a bike lane exists on the roadway?",
    options: [
      "No, bicyclists must strictly remain in the bike lane",
      "Yes, bicyclists may use the full lane whenever necessary for safety, avoiding road hazards, or preparing for turns",
      "Only during night hours",
      "Only on roads posted under 25 mph"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Bicyclists have the legal right to use the full lane anywhere, anytime (except limited-access expressways), even when a bike lane is present.",
    source: "Chapter 5 - Laws for Bicyclists, Page 112",
    statute: "M.G.L. c. 85, § 11B",
    tags: ["Bicycles", "Full Lane", "Rights"]
  },
  {
    id: "q-ch5-03",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Dutch Reach Method",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Standard",
    question: "What is the 'Dutch Reach' technique recommended to prevent 'dooring' collisions with approaching bicyclists?",
    options: [
      "Opening the vehicle door with your feet",
      "Reaching across your body with your far hand (hand farther from door) to open the latch, forcing your torso to rotate to check blind spots",
      "Pushing the door open quickly before bicyclists arrive",
      "Sounding your horn before exiting the vehicle"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "The Dutch Reach requires opening the car door with your far hand. This naturally pivots your upper body toward the mirror and street, allowing you to spot oncoming cyclists.",
    source: "Chapter 5 - The Danger of Open Doors to Bicyclists, Page 116",
    tags: ["Dutch Reach", "Bicycles", "Dooring"]
  },
  {
    id: "q-ch5-04",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Bicycle Boxes and Green Pavement",
    cognitiveDomain: "Signs & Markings",
    difficulty: "Standard",
    question: "How must motor vehicle operators treat green painted 'Bicycle Boxes' at signalized intersections?",
    options: [
      "Motorists may park inside the box if traffic is backed up",
      "Drivers must stop behind the bicycle box (even if empty) at red lights to allow turning cyclists priority",
      "Bicycle boxes are reserved for electric scooters only",
      "Motorists have right-of-way over cyclists in the box"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Drivers must stop behind the green bicycle box at red traffic signals (even when empty) and await a green signal. The box protects turning and queuing cyclists.",
    source: "Chapter 5 - Bicycle Boxes, Page 116",
    tags: ["Bicycle Box", "Green Pavement"]
  },
  {
    id: "q-ch5-05",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Large Truck No-Zones",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Foundational",
    question: "What are the 'No-Zones' of large commercial trucks and tractor-trailers?",
    options: [
      "Restricted toll booth lanes",
      "Massive blind spots directly in front, in the rear, and along both sides where small vehicles cannot be seen by the truck driver",
      "Emergency breakdown shoulders",
      "Cargo loading docks"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "No-Zones are extensive blind spots surrounding large trucks. A key rule: if you cannot see the truck driver's side mirrors, the driver cannot see your vehicle.",
    source: "Chapter 5 - Large Trucks, Page 105-106",
    tags: ["Trucks", "No-Zones", "Blind Spots"]
  },
  {
    id: "q-ch5-06",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Trolley and Bus Passenger Steps Clearance",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Rigorous",
    question: "Under Massachusetts law, how close may you drive to a trolley passenger step when the trolley is actively letting passengers on or off?",
    options: [
      "You must not drive closer than 4 feet",
      "You must not drive closer than 8 feet",
      "You must not drive closer than 15 feet",
      "You may pass at 5 mph"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "State law explicitly dictates: you must not drive closer than 8 feet of a trolley passenger step when the trolley is actively taking on or discharging passengers.",
    source: "Chapter 5 - Buses and Trolleys, Page 107",
    tags: ["Trolleys", "8 Feet Rule"]
  },
  {
    id: "q-ch5-07",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Funeral Procession Right-of-Way",
    cognitiveDomain: "Right-of-Way & Spatial",
    difficulty: "Rigorous",
    question: "Under M.G.L. Ch. 85, § 14A, what right-of-way rule governs funeral processions at intersections?",
    options: [
      "Processions must stop at all red lights and stop signs",
      "If the lead vehicle legally enters an intersection, all procession vehicles with headlights on may follow through regardless of traffic signals (except yielding to emergency vehicles)",
      "Processions only have right-of-way on state highways",
      "Vehicles may cut through processions if they have a green arrow"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "If the lead vehicle in a funeral procession enters an intersection legally, all vehicles in the procession may proceed through, even if the signal changes to red, yielding only to emergency vehicles.",
    source: "Chapter 5 - Funeral Processions, Page 107-108",
    statute: "M.G.L. c. 85, § 14A",
    tags: ["Funeral Procession", "Right-of-Way"]
  },
  {
    id: "q-ch5-08",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Skidding Recovery Technique",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Foundational",
    question: "What is the proper procedure if your vehicle begins to skid on an icy or slippery roadway?",
    options: [
      "Slam on the brakes and pull the parking brake",
      "Remove your foot slowly from the gas, shift into neutral, and steer gently in the direction of the skid",
      "Turn the wheel in the opposite direction of the skid and accelerate",
      "Pump power brakes rapidly"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Never slam on brakes during a skid. Ease off accelerator, shift to neutral, and steer in the direction the rear wheels are sliding until you regain traction.",
    source: "Chapter 5 - Skidding, Page 123",
    tags: ["Skidding", "Emergency Handling"]
  },
  {
    id: "q-ch5-09",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Hydroplaning Response",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Foundational",
    question: "What is the very first action you should take if your vehicle begins to hydroplane across standing water?",
    options: [
      "Stomp hard on the brake pedal",
      "Jerk the steering wheel toward the shoulder",
      "Gradually ease your foot off the gas pedal to let the vehicle slow down naturally until tires regain road contact",
      "Engage cruise control"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "If hydroplaning occurs, gently ease off the accelerator. Do not brake or steer violently, as sudden inputs will initiate an uncontrolled spin.",
    source: "Chapter 5 - Hydroplaning, Page 47 & 123",
    tags: ["Hydroplaning", "Adverse Weather"]
  },
  {
    id: "q-ch5-10",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Brake Failure Action",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Standard",
    question: "If your hydraulic foot brakes suddenly fail while traveling on a highway, what sequence of actions should you take?",
    options: [
      "Turn the ignition switch to off/lock position immediately",
      "Downshift to a lower gear to use engine braking, pump the pedal rapidly (if non-ABS) or gently apply parking brake while holding the release",
      "Shift directly into park",
      "Swerve back and forth across lanes"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Downshift to lowest gear to let engine compressions slow you down, pump non-ABS brakes to build hydraulic pressure, and gently apply the emergency brake while holding release.",
    source: "Chapter 5 - Brake Failure, Page 124",
    tags: ["Brake Failure", "Emergency Protocol"]
  },
  {
    id: "q-ch5-11",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Railroad Tracks Stalling Emergency",
    cognitiveDomain: "Hazard & Emergencies",
    difficulty: "Standard",
    question: "If your car stalls on railroad tracks and an approaching train is sighted, which direction should you run after evacuating passengers?",
    options: [
      "Straight down the tracks in front of the train",
      "Directly behind your car along the tracks",
      "At a 45-degree angle away from the tracks in the direction that the train is coming",
      "Stay in the car and sound the horn"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "Evacuate immediately and run at a 45-degree angle away from the tracks towards the approaching train to avoid being struck by flying debris when impact occurs.",
    source: "Chapter 5 - Stalling on Railroad Tracks, Page 125",
    tags: ["Railroad", "Emergency Protocol"]
  },
  {
    id: "q-ch5-12",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Breakdown Warning Flare Placements",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Rigorous",
    question: "When broken down on an undivided two-lane road carrying traffic in both directions, where must warning triangles or LED flares be placed?",
    options: [
      "Only on the vehicle roof",
      "10 feet behind, 100 feet behind, and 100 feet in front of your vehicle",
      "50 feet on both sides",
      "500 feet in front only"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "On a two-lane road or undivided highway, place flares: 10 feet behind, 100 feet behind, AND 100 feet in front of your vehicle to alert bidirectional traffic.",
    source: "Chapter 5 - Setting Up Safety Equipment, Page 126",
    tags: ["Breakdowns", "Safety Equipment", "Flares"]
  },
  {
    id: "q-ch5-13",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Hit and Run Criminal Penalties",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Standard",
    question: "What are the criminal penalties under M.G.L. c. 90, § 24 for leaving the scene of a crash causing personal injury not resulting in death?",
    options: [
      "$50 fine",
      "Up to $1,000 fine and imprisonment up to 2 years",
      "Automatic life revocation only",
      "60-day civil suspension only"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Leaving the scene of a crash causing personal injury carries up to $1,000 fine and up to 2 years imprisonment, plus a 1-to-2 year license suspension.",
    source: "Chapter 5 - Hit and Run Crashes, Page 130",
    statute: "M.G.L. c. 90, § 24(2)(a 1/2)",
    tags: ["Hit and Run", "Criminal Penalties"]
  },
  {
    id: "q-ch5-14",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Motor Vehicle Crash Report Deadline",
    cognitiveDomain: "Statutory Thresholds",
    difficulty: "Foundational",
    question: "Under Massachusetts law, within how many days must an operator file a written Motor Vehicle Crash Operator Report if property damage exceeds $1,000 or injury occurs?",
    options: [
      "Within 24 hours",
      "Within 3 days",
      "Within 5 days",
      "Within 14 days"
    ],
    correctAnswer: "C",
    correctIndex: 2,
    explanation: "You must file a written crash report with both the RMV and local police department within 5 days of any crash involving injury, death, or property damage over $1,000.",
    source: "Chapter 5 - Reporting a Crash, Page 129 & 131",
    statute: "M.G.L. c. 90, § 26",
    tags: ["Crash Report", "Deadlines"]
  },
  {
    id: "q-ch5-15",
    chapter: 5,
    chapterName: "Special Driving Situations",
    topic: "Police Stop Driver Protocol",
    cognitiveDomain: "Defensive Operation",
    difficulty: "Foundational",
    question: "When being pulled over by a police officer in Massachusetts, what should you do regarding your hands and documents?",
    options: [
      "Immediately reach into the glove compartment before the officer arrives",
      "Keep hands in plain sight on the steering wheel, instruct passengers to keep hands visible, and wait until the officer asks before reaching for license/registration",
      "Exit the vehicle immediately and walk toward the cruiser",
      "Keep window rolled up until officer taps glass"
    ],
    correctAnswer: "B",
    correctIndex: 1,
    explanation: "Keep hands in plain sight on the steering wheel. Never make sudden movements or reach into compartments until requested by the officer, preventing undue anxiety.",
    source: "Chapter 5 - Stopped by a Police Officer, Page 122",
    tags: ["Police Stop", "Driver Protocol"]
  }
];

// Combine base questions and newly generated Driver's Manual questions with strict deduplication
export const masterQuestions: Question[] = (() => {
  const seen = new Set<string>();
  const combined: Question[] = [];

  [...baseQuestions, ...manualQuestions].forEach((q) => {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!seen.has(key)) {
      seen.add(key);
      combined.push(q);
    }
  });

  return combined;
})();

// Helper functions for exam generation and psychometrics
export const getQuestionsByChapter = (chapter: 1 | 2 | 3 | 4 | 5): Question[] => {
  return masterQuestions.filter(q => q.chapter === chapter);
};

export const getRandomExam = (count: number = 25): Question[] => {
  const shuffled = [...masterQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
