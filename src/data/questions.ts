export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  source: string;
  tags: string[];
}

export const questions: Question[] = [
  // Consolidating questions from the provided attachments
  {
    question: "What minimum distance must a motor vehicle driver maintain when passing a bicyclist traveling in the same direction in Massachusetts?",
    options: ["At least 2 feet", "At least 4 feet (a safe distance)", "At least 6 feet", "At least 10 feet"],
    correctAnswer: "B",
    explanation: "Under Massachusetts law (An Act Vulnerable Road Users), drivers must provide a safe passing distance of at least 4 feet when passing bicyclists, pedestrians, or other vulnerable road users.",
    source: "Chapter 5 - Sharing the Road",
    tags: ["MA_RMV", "Bicycles", "Safety_Laws"]
  },
  {
    question: "Are bicyclists in Massachusetts permitted to use the full lane on a public roadway even when a bike lane is present?",
    options: ["No, bicyclists must stay in the bike lane at all times", "Yes, bicyclists may use the full lane when necessary for safety, turning, or avoiding hazards", "Only during nighttime driving hours", "Only on roads with speed limits under 25 mph"],
    correctAnswer: "B",
    explanation: "Bicyclists have the legal right to use the full travel lane when necessary to avoid road hazards, prepare for left turns, or when the lane is too narrow to share side-by-side safely.",
    source: "Chapter 5 - Bicycle Rules",
    tags: ["MA_RMV", "Bicycles", "Right_of_Way"]
  },
  {
    question: "What is a large truck's or bus's 'No-Zone'?",
    options: ["The area directly in front of the truck's bumper", "The high-occupancy vehicle lane", "The blind spots around the front, rear, and sides of the vehicle where the driver cannot see you", "The emergency stopping lane on a highway"],
    correctAnswer: "C",
    explanation: "'No-Zones' are large blind spots around trucks and buses (to the front, rear, and both sides) where small passenger vehicles disappear from the truck driver's view.",
    source: "Chapter 5 - Large Trucks",
    tags: ["MA_RMV", "Large_Trucks", "Safety"]
  },
  {
    question: "If you cannot see a truck driver's side mirrors while driving behind them, what does it mean?",
    options: ["You are maintaining a safe following distance", "The truck driver cannot see you because you are in their rear blind spot", "The truck is preparing to turn left", "The truck driver is legally required to pull over"],
    correctAnswer: "B",
    explanation: "A good rule of thumb for large trucks is: if you cannot see the driver's side mirrors, the truck driver cannot see your vehicle.",
    source: "Chapter 5 - Large Trucks",
    tags: ["MA_RMV", "Large_Trucks", "Safety"]
  },
  {
    question: "Why do large trucks often swing wide to the left before making a turn at an intersection?",
    options: ["To clear oncoming passenger cars", "To prepare to make a right turn safely without running rear wheels over the curb", "To signal that they are coming to a complete stop", "To allow faster cars to pass on the right"],
    correctAnswer: "B",
    explanation: "Large trucks require extra turning space and often swing left to make a wide right turn. Never attempt to pass a truck on the right when it is turning.",
    source: "Chapter 5 - Large Trucks",
    tags: ["MA_RMV", "Large_Trucks", "Turning"]
  },
  {
    question: "Under Massachusetts law, who has the right-of-way at a marked crosswalk when a pedestrian is stepping onto or crossing the street?",
    options: ["Motor vehicles traveling straight", "The pedestrian", "The vehicle that arrives at the crosswalk first", "Bicyclists entering the crosswalk"],
    correctAnswer: "B",
    explanation: "Motorists must yield the right-of-way to pedestrians crossing within any marked crosswalk or entering a crosswalk on the driver's side of the road.",
    source: "Chapter 5 - Pedestrian Safety",
    tags: ["MA_RMV", "Pedestrians", "Right_of_Way"]
  },
  {
    question: "What is the fine for failing to yield to a pedestrian in a crosswalk in Massachusetts?",
    options: ["$50", "$100", "$200", "$500"],
    correctAnswer: "C",
    explanation: "Failing to yield the right-of-way to a pedestrian in a crosswalk carries a fine of up to $200.",
    source: "Chapter 5 - Pedestrian Laws",
    tags: ["MA_RMV", "Pedestrians", "Penalties"]
  },
  {
    question: "When a visually impaired pedestrian using a white cane or guide dog is attempting to cross a street, what must you do?",
    options: ["Honk your horn to let them know you are present", "Come to a complete stop and yield the right-of-way regardless of traffic signals", "Drive slowly around them if there is space", "Flash your high beams to signal them to cross"],
    correctAnswer: "B",
    explanation: "Drivers must come to a complete stop and yield the right-of-way to any blind or visually impaired pedestrian carrying a white cane or accompanied by a guide dog.",
    source: "Chapter 5 - Pedestrian Safety",
    tags: ["MA_RMV", "Pedestrians", "Right_of_Way"]
  },
  {
    question: "In Massachusetts, are motorcycles entitled to the full width of a travel lane?",
    options: ["No, cars may share a lane side-by-side with a motorcycle", "Yes, motorcycles have the legal right to full lane use, and car drivers must never crowd into their lane", "Only on multi-lane highways", "Only during daylight hours"],
    correctAnswer: "B",
    explanation: "Motorcycles are full-sized vehicles entitled to the complete width of a travel lane. Automobile drivers must never attempt to share a lane with a motorcycle.",
    source: "Chapter 5 - Motorcycle Safety",
    tags: ["MA_RMV", "Motorcycles", "Safety"]
  },
  {
    question: "What is 'lane splitting' (a motorcycle driving between two lanes of stopped or slow traffic) under Massachusetts law?",
    options: ["Legal at speeds under 20 mph", "Legal on highways only", "Illegal in Massachusetts", "Permitted only during peak rush hours"],
    correctAnswer: "C",
    explanation: "Lane splitting is strictly illegal in Massachusetts. Motorcycles must occupy a complete travel lane just like any other motor vehicle.",
    source: "Chapter 5 - Motorcycle Rules",
    tags: ["MA_RMV", "Motorcycles", "Violations"]
  },
  {
    question: "Why should you increase your following distance to at least 3 to 4 seconds when driving behind a motorcycle?",
    options: ["Motorcycles can stop much faster than cars, creating a collision risk if you tail them", "Motorcycles kick up more road debris", "Motorcycle tail lights are difficult to see", "Motorcycles travel at lower speeds than other traffic"],
    correctAnswer: "A",
    explanation: "Motorcycles are lightweight and can stop in much shorter distances than passenger cars. Following too closely increases the risk of a rear-end collision.",
    source: "Chapter 5 - Motorcycle Safety",
    tags: ["MA_RMV", "Motorcycles", "Safety"]
  },
  {
    question: "During what times must your vehicle's headlights be activated in Massachusetts?",
    options: ["From 1 hour after sunset to 1 hour before sunrise", "From one-half hour after sunset to one-half hour before sunrise, and whenever windshield wipers are in continuous use", "Only when driving in complete darkness outside city limits", "From 8:00 PM to 6:00 AM daily"],
    correctAnswer: "B",
    explanation: "Massachusetts law requires headlights from 1/2 hour after sunset to 1/2 hour before sunrise, whenever visibility is under 500 feet, and whenever windshield wipers are in use due to weather.",
    source: "Chapter 5 - Vehicle Equipment",
    tags: ["MA_RMV", "Equipment", "Safety_Laws"]
  },
  {
    question: "When driving at night with high beam headlights on, at what distance must you dim your high beams when approaching an oncoming vehicle?",
    options: ["Within 200 feet", "Within 500 feet", "Within 800 feet", "Within 1,000 feet"],
    correctAnswer: "B",
    explanation: "You must dim your high beams to low beams when an oncoming vehicle approaches within 500 feet.",
    source: "Chapter 5 - Night Driving",
    tags: ["MA_RMV", "Night_Driving", "Equipment"]
  },
  {
    question: "At what distance must you dim your high beam headlights when following closely behind another vehicle at night?",
    options: ["Within 100 feet", "Within 200 feet", "Within 300 feet", "Within 500 feet"],
    correctAnswer: "C",
    explanation: "Dim your high beams when following within 200 to 300 feet behind another vehicle to avoid blinding the driver in their rear-view mirror.",
    source: "Chapter 5 - Night Driving",
    tags: ["MA_RMV", "Night_Driving", "Equipment"]
  },
  {
    question: "What should you do if an oncoming vehicle approaches you with its high beam headlights glaring in your eyes?",
    options: ["Stare directly at the oncoming headlights to maintain orientation", "Turn on your high beams in retaliation", "Look down toward the right edge of your travel lane (the white edge line) to avoid temporary blindness", "Close your eyes briefly until the vehicle passes"],
    correctAnswer: "C",
    explanation: "To avoid glare from oncoming high beams, look toward the lower right edge of your lane (the white fog line) until the oncoming car passes.",
    source: "Chapter 5 - Night Driving",
    tags: ["MA_RMV", "Night_Driving", "Safety"]
  },
  {
    question: "What is the minimum legal tread depth required for tires on a passenger vehicle in Massachusetts?",
    options: ["1/32 of an inch", "2/32 (1/16) of an inch", "4/32 of an inch", "6/32 of an inch"],
    correctAnswer: "B",
    explanation: "Tires must have a minimum tread depth of 2/32 of an inch in every major tread groove to pass annual safety inspection in Massachusetts.",
    source: "Chapter 5 - Vehicle Inspection & Equipment",
    tags: ["MA_RMV", "Equipment", "Inspection"]
  },
  {
    question: "What is hydroplaning and when is it most likely to occur?",
    options: ["Sliding on black ice during freezing temperatures", "Tires riding up on a film of water rather than contacting the road, especially at speeds above 35-50 mph in heavy rain", "Steering wheel locking during sharp turns at high speeds", "Brakes failing after driving through deep standing water"],
    correctAnswer: "B",
    explanation: "Hydroplaning happens when water builds up under your tires faster than tire tread can channel it away, causing loss of traction. It can start at speeds as low as 35 mph in heavy rain.",
    source: "Chapter 5 - Adverse Driving Conditions",
    tags: ["MA_RMV", "Weather_Driving", "Safety"]
  },
  {
    question: "What is the first thing you should do if your vehicle begins to hydroplane on a wet road?",
    options: ["Slam on the brakes as hard as possible", "Turn the steering wheel sharply toward the shoulder", "Gradually ease your foot off the accelerator pedal to slow down until the tires regain traction", "Shift the transmission into neutral instantly"],
    correctAnswer: "C",
    explanation: "If you hydroplane, stay calm and ease your foot off the gas pedal to let the vehicle slow down naturally. Do not slam on the brakes or jerk the steering wheel.",
    source: "Chapter 5 - Driving Emergencies",
    tags: ["MA_RMV", "Weather_Driving", "Safety"]
  },
  {
    question: "What should you do if your brakes suddenly fail while you are driving?",
    options: ["Turn off the ignition immediately", "Downshift to a lower gear and pump the brake pedal rapidly (or apply parking brake gently)", "Swerve rapidly from side to side", "Shift directly into reverse"],
    correctAnswer: "B",
    explanation: "If brakes fail, downshift to a lower gear to use engine braking, pump the brake pedal to build hydraulic pressure, and gently apply the emergency parking brake if needed.",
    source: "Chapter 5 - Driving Emergencies",
    tags: ["MA_RMV", "Driving_Emergencies"]
  },
  {
    question: "Under Massachusetts law, if your vehicle is involved in a crash that results in injury, death, or property damage exceeding $1,000, within how many days must you file an official Motor Vehicle Crash Operator Report with the RMV and local police?",
    options: ["Within 24 hours", "Within 3 days", "Within 5 days", "Within 10 days"],
    correctAnswer: "C",
    explanation: "You must file a written crash report with both the RMV and the local police department within 5 days of any accident involving injury, death, or damage exceeding $1,000.",
    source: "Chapter 5 - Accident Reporting",
    tags: ["MA_RMV", "Accident_Reporting", "Procedures"]
  },
  {
    question: "What does a flashing red traffic light mean in Massachusetts?",
    options: ["Slow down and proceed with caution", "The light is broken; proceed without stopping", "Come to a complete stop and yield right-of-way, treating it like a STOP sign", "Stop and wait until the light turns solid green"],
    correctAnswer: "C",
    explanation: "A flashing red light means the exact same thing as a STOP sign. You must come to a complete stop, yield to pedestrians and oncoming traffic, and proceed when safe.",
    source: "Chapter 4 - Traffic Signals",
    tags: ["MA_RMV", "Traffic_Signals"]
  },
  {
    question: "What does a flashing yellow traffic light indicate?",
    options: ["Stop completely before entering the intersection", "Warning: proceed with caution and stay alert", "Left turns are fully protected", "Prepare to turn off your engine"],
    correctAnswer: "B",
    explanation: "A flashing yellow light is a warning signal. You are not required to come to a complete stop, but you must slow down, stay alert, and proceed through the intersection with caution.",
    source: "Chapter 4 - Traffic Signals",
    tags: ["MA_RMV", "Traffic_Signals"]
  },
  {
    question: "What does a steady green arrow pointing left mean at an intersection?",
    options: ["You may turn left, but you must yield to oncoming traffic", "You have a protected left turn and oncoming traffic is stopped by a red light", "Left turns are prohibited until the main circle turns green", "You must stop first before making a left turn"],
    correctAnswer: "B",
    explanation: "A green arrow indicates a 'protected turn.' Oncoming traffic and pedestrians facing the intersection are stopped by red lights, allowing you to turn safely in the direction of the arrow.",
    source: "Chapter 4 - Traffic Signals",
    tags: ["MA_RMV", "Traffic_Signals"]
  },
  {
    question: "If all traffic signals at an intersection are blacked out or not working due to a power outage, how must you treat the intersection?",
    options: ["As an uncontrolled roadway where major street traffic has absolute right-of-way", "As a four-way stop in all directions", "Drive through at 15 mph without stopping", "Wait on the shoulder until a police officer arrives"],
    correctAnswer: "B",
    explanation: "If traffic signals are completely unlit or malfunctioning, you must treat the intersection as a four-way stop in all directions and proceed according to standard right-of-way rules.",
    source: "Chapter 4 - Traffic Signals",
    tags: ["MA_RMV", "Traffic_Signals"]
  },
  {
    question: "When are you legally permitted to make a left turn on a red light in Massachusetts?",
    options: ["Never under any circumstances", "Whenever there is no oncoming traffic", "When turning from a one-way street onto another one-way street after coming to a full stop and yielding", "Only between 12:00 AM and 5:00 AM"],
    correctAnswer: "C",
    explanation: "In Massachusetts, you may turn left on a red light only when turning from a one-way street onto another one-way street, after coming to a complete stop and yielding to traffic and pedestrians.",
    source: "Chapter 4 - Traffic Signals",
    tags: ["MA_RMV", "Traffic_Signals"]
  },
  {
    question: "What does a solid yellow line paired with a broken yellow line on a two-lane road mean?",
    options: ["Passing is prohibited for traffic on both sides", "Passing is permitted for traffic on both sides", "Passing is permitted only for traffic on the side with the broken line", "The road is converting into a one-way street"],
    correctAnswer: "C",
    explanation: "A broken yellow line alongside a solid yellow line means passing is allowed only for vehicles traveling on the side next to the broken line when safe.",
    source: "Chapter 4 - Pavement Markings",
    tags: ["MA_RMV", "Pavement_Markings"]
  },
  {
    question: "What do double solid yellow lines down the center of a two-lane road indicate?",
    options: ["Passing is allowed during daylight hours", "Passing is strictly prohibited in both directions, but crossing to turn left into a driveway is allowed", "You may cross the lines to pass slow agricultural vehicles", "The street is designated for one-way traffic only"],
    correctAnswer: "B",
    explanation: "Double solid yellow lines mean passing is prohibited in both directions. You may only cross double solid yellow lines to turn left into a driveway, alley, or private road when clear.",
    source: "Chapter 4 - Pavement Markings",
    tags: ["MA_RMV", "Pavement_Markings"]
  },
  {
    question: "What do broken white lines painted on a roadway separate?",
    options: ["Traffic moving in opposite directions", "Lanes of traffic moving in the same direction where lane changing is permitted", "The right shoulder from the main travel lane", "HOV lanes from standard travel lanes"],
    correctAnswer: "B",
    explanation: "Broken white lines separate lanes of traffic traveling in the same direction. You may cross broken white lines to change lanes after signaling.",
    source: "Chapter 4 - Pavement Markings",
    tags: ["MA_RMV", "Pavement_Markings"]
  },
  {
    question: "What does a double solid white line painted between lanes on a roadway indicate?",
    options: ["Lane changing is permitted with caution", "The road is restricted to bicycles only", "Crossing the line or changing lanes is strictly prohibited", "Traffic is traveling in opposite directions"],
    correctAnswer: "C",
    explanation: "Double solid white lines separate lanes of traffic moving in the same direction where changing lanes or crossing the lines is strictly prohibited.",
    source: "Chapter 4 - Pavement Markings",
    tags: ["MA_RMV", "Pavement_Markings"]
  },
  {
    question: "What does a white diamond symbol painted on a highway lane mean?",
    options: ["The lane is ending in 500 feet", "The lane is reserved for high-occupancy vehicles (HOV), buses, or specific restricted traffic", "The lane has a minimum speed limit of 55 mph", "The pavement is slippery when wet"],
    correctAnswer: "B",
    explanation: "A white diamond symbol indicates a special lane restriction, such as HOV (carpool) lanes, bus-only lanes, or bicycle lanes.",
    source: "Chapter 4 - Pavement Markings",
    tags: ["MA_RMV", "Pavement_Markings"]
  },
  // Adding more questions from the other files...
  {
    question: "What is the strict hands-free driving law requirement in Massachusetts for drivers age 18 and older?",
    options: ["Mobile devices can be held only while stopped at red lights", "Drivers may hold a phone to speak but cannot text", "Drivers cannot touch or hold any electronic device while operating a vehicle, except for one-touch hands-free features", "Hands-free rules only apply on state highways"],
    correctAnswer: "C",
    explanation: "Massachusetts law strictly prohibits holding or supporting any electronic device while driving. Drivers 18 and older may only use hands-free mode via voice commands or a single tap/swipe.",
    source: "Chapter 3 - Hands-Free Law",
    tags: ["MA_RMV", "Hands_Free_Law", "Violations"]
  },
  {
    question: "What is the restriction regarding mobile electronic devices for drivers under the age of 18 (including JOL holders and permit holders)?",
    options: ["They can use hands-free Bluetooth features only", "They are strictly prohibited from using any mobile device or hands-free technology while driving", "They can use speakerphone mode if the phone is mounted", "They can text only when traffic is stopped"],
    correctAnswer: "B",
    explanation: "Operators under 18 are completely banned from using any mobile electronic device while driving, including hands-free features and Bluetooth interfaces.",
    source: "Chapter 3 - Hands-Free Law",
    tags: ["MA_RMV", "JOL_Laws", "Hands_Free_Law"]
  },
  {
    question: "What is the fine for a first offense of violating the Massachusetts Hands-Free Driving Law for a driver over 18?",
    options: ["$50", "$100", "$250", "$500"],
    correctAnswer: "B",
    explanation: "A first offense of the Hands-Free Driving Law carries a $100 fine.",
    source: "Chapter 3 - Hands-Free Law",
    tags: ["MA_RMV", "Penalties", "Hands_Free_Law"]
  },
  {
    question: "What are the penalties for a second offense under the Massachusetts Hands-Free Law for an adult driver?",
    options: ["$100 fine", "$250 fine and completion of an RMV-approved distracted driving course", "$500 fine and 30-day suspension", "$1,000 fine"],
    correctAnswer: "B",
    explanation: "A second offense results in a $250 fine plus a mandatory distracted driving education course.",
    source: "Chapter 3 - Hands-Free Law",
    tags: ["MA_RMV", "Penalties", "Hands_Free_Law"]
  },
  {
    question: "What is the fine for a third or subsequent offense of the Massachusetts Hands-Free Driving Law?",
    options: ["$100", "$250", "$500", "$1,000"],
    correctAnswer: "C",
    explanation: "A third or subsequent hands-free violation carries a $500 fine and insurance surcharge points.",
    source: "Chapter 3 - Hands-Free Law",
    tags: ["MA_RMV", "Penalties", "Hands_Free_Law"]
  },
  {
    question: "Under what sole exception may any driver legally hold and use a mobile phone while driving in Massachusetts?",
    options: ["Checking a GPS map during heavy traffic", "Reporting an emergency to 911 or emergency services", "Reading an urgent text message from family", "Changing a music playlist while stopped at a red light"],
    correctAnswer: "B",
    explanation: "Drivers are permitted to hold and use a mobile phone while operating a vehicle only to report a emergency situation to public safety personnel.",
    source: "Chapter 3 - Hands-Free Law",
    tags: ["MA_RMV", "Hands_Free_Law"]
  },
  {
    question: "What is the legal Blood Alcohol Concentration (BAC) limit for drivers age 21 or older operating a non-commercial vehicle in Massachusetts?",
    options: ["0.02%", "0.04%", "0.05%", "0.08%"],
    correctAnswer: "D",
    explanation: "For drivers age 21 and older, it is illegal to operate a motor vehicle with a BAC of 0.08% or higher.",
    source: "Chapter 3 - OUI and Alcohol Laws",
    tags: ["MA_RMV", "OUI_Laws", "BAC_Limits"]
  },
  {
    question: "What is the Blood Alcohol Concentration (BAC) threshold for underage drivers (under 21) under Massachusetts Zero Tolerance laws?",
    options: ["0.00%", "0.02%", "0.05%", "0.08%"],
    correctAnswer: "B",
    explanation: "Under the zero-tolerance policy, any driver under 21 with a BAC of 0.02% or higher will face immediate administrative suspension.",
    source: "Chapter 3 - OUI and Alcohol Laws",
    tags: ["MA_RMV", "OUI_Laws", "BAC_Limits"]
  },
  {
    question: "What is the legal BAC limit for commercial driver's license (CDL) holders operating a commercial motor vehicle?",
    options: ["0.02%", "0.04%", "0.08%", "0.10%"],
    correctAnswer: "B",
    explanation: "Commercial vehicle operators are held to a stricter BAC limit of 0.04% while driving commercial vehicles.",
    source: "Chapter 3 - OUI and Alcohol Laws",
    tags: ["MA_RMV", "OUI_Laws", "BAC_Limits"]
  },
  {
    question: "Under Massachusetts Implied Consent Law, what do you automatically agree to by simply operating a vehicle on public roads?",
    options: ["Allow law enforcement to inspect your vehicle's trunk at any time", "Submit to a chemical breath or blood test if arrested for driving under the influence", "Keep your vehicle insured with comprehensive collision coverage", "Pay double fines for moving violations in work zones"],
    correctAnswer: "B",
    explanation: "Under the Implied Consent Law, by driving in MA, you consent to chemical testing (breath or blood) if a law enforcement officer suspects you of OUI.",
    source: "Chapter 3 - Implied Consent Law",
    tags: ["MA_RMV", "OUI_Laws", "Implied_Consent"]
  },
  {
    question: "What is the license suspension period for a driver age 21 or older who refuses a chemical breath test for a first OUI arrest?",
    options: ["30 days", "90 days", "180 days", "1 year"],
    correctAnswer: "C",
    explanation: "Refusing a breath test results in an immediate 180-day administrative license suspension for a first offense for drivers 21 and older.",
    source: "Chapter 3 - Breathalyzer Refusal Penalties",
    tags: ["MA_RMV", "OUI_Laws", "Penalties"]
  },
  {
    question: "What is the breath test refusal suspension period for a driver under the age of 21 with no prior OUI offenses?",
    options: ["180 days", "1 year", "3 years", "3 years plus 180 days (total 3 years + 180 days)"],
    correctAnswer: "D",
    explanation: "Drivers under 21 who refuse a breath test face a 3-year suspension for the refusal, plus an additional 180-day suspension under the Youth Alcohol Program.",
    source: "Chapter 3 - Breathalyzer Refusal Penalties",
    tags: ["MA_RMV", "OUI_Laws", "JOL_Laws"]
  },
  {
    question: "If a driver age 21 or older takes a breath test and fails (BAC 0.08% or higher), how long is their license administratively suspended immediately?",
    options: ["10 days", "30 days", "60 days", "90 days"],
    correctAnswer: "B",
    explanation: "Failing a chemical breath test (0.08% or higher) results in an immediate 30-day administrative license suspension.",
    source: "Chapter 3 - OUI Penalties",
    tags: ["MA_RMV", "OUI_Laws", "Penalties"]
  },
  {
    question: "What is the administrative license suspension for a driver UNDER 21 who takes a breath test and registers a BAC of 0.02% or higher?",
    options: ["30 days", "30 days plus an additional 180 days (Youth Alcohol Program)", "1 year", "2 years"],
    correctAnswer: "B",
    explanation: "Drivers under 21 who register a BAC of 0.02% or higher face a 30-day suspension plus a mandatory 180-day Youth Alcohol Program suspension.",
    source: "Chapter 3 - Underage Drinking Laws",
    tags: ["MA_RMV", "OUI_Laws", "JOL_Laws"]
  },
  {
    question: "What is the maximum jail sentence for a first-offense conviction of Operating Under the Influence (OUI) in Massachusetts?",
    options: ["30 days", "6 months", "1 year", "2.5 years (2 and a half years)"],
    correctAnswer: "D",
    explanation: "A first-offense OUI conviction carries potential court fines, a 1-year suspension, and up to 2.5 years in a house of correction.",
    source: "Chapter 3 - OUI Court Penalties",
    tags: ["MA_RMV", "OUI_Laws", "Penalties"]
  },
  {
    question: "How long does an OUI conviction remain on your permanent Massachusetts driving record?",
    options: ["3 years", "5 years", "10 years", "Permanently (forever)"],
    correctAnswer: "D",
    explanation: "Unlike standard moving violations that clear after several years, OUI convictions remain on your Massachusetts driving record permanently.",
    source: "Chapter 3 - OUI Records",
    tags: ["MA_RMV", "OUI_Laws", "Driving_Record"]
  },
  {
    question: "In Massachusetts, what is the Open Container Law?",
    options: ["You cannot carry unopened alcohol in the back seat", "You cannot have an open container of alcohol anywhere in the passenger area of a vehicle while on a public way", "Open containers are allowed if the vehicle is parked on the shoulder", "Passengers may hold open alcohol containers if the driver is completely sober"],
    correctAnswer: "B",
    explanation: "It is illegal to have an open container of alcohol in the passenger compartment of a motor vehicle on any public road, even if held by a passenger.",
    source: "Chapter 3 - Alcohol Laws",
    tags: ["MA_RMV", "Alcohol_Laws", "Violations"]
  },
  {
    question: "What is the fine for violating the Open Container Law in Massachusetts?",
    options: ["$50 to $100", "$100 to $500", "$500 to $5,000", "Mandatory jail time of 10 days"],
    correctAnswer: "C",
    explanation: "A conviction for possessing an open container of alcohol in a vehicle carries a fine ranging from $500 to $5,000.",
    source: "Chapter 3 - Alcohol Laws",
    tags: ["MA_RMV", "Alcohol_Laws", "Penalties"]
  },
  {
    question: "Under the Safe Driver Insurance Plan (SDIP), how many years of driving history are evaluated to calculate your surcharge points and insurance rates?",
    options: ["3-year experience period", "5-year experience period", "7-year experience period", "10-year experience period"],
    correctAnswer: "B",
    explanation: "The Safe Driver Insurance Plan evaluates driving records over a 5-year observation period to determine surchargeable events and merit ratings.",
    source: "Chapter 3 - SDIP and Insurance Points",
    tags: ["MA_RMV", "SDIP", "Insurance_Points"]
  },
  {
    question: "How many surchargeable events (moving violations or at-fault accidents) within a 3-year period will trigger a mandatory Driver Retraining Course?",
    options: ["2 events", "3 events", "5 events", "7 events"],
    correctAnswer: "B",
    explanation: "Accumulating 3 surchargeable events within a 3-year window requires you to complete an RMV-approved Driver Retraining Course or face suspension.",
    source: "Chapter 3 - License Suspensions",
    tags: ["MA_RMV", "Suspensions", "Retraining"]
  },
  {
    question: "What license suspension penalty occurs if you accumulate 7 surchargeable events within a 3-year period in Massachusetts?",
    options: ["30-day suspension", "60-day suspension", "120-day suspension", "1-year suspension"],
    correctAnswer: "B",
    explanation: "Receiving 7 surchargeable events within a 3-year period results in an automatic 60-day license suspension.",
    source: "Chapter 3 - License Suspensions",
    tags: ["MA_RMV", "Suspensions"]
  },
  {
    question: "What is the suspension penalty for being classified as a Habitual Traffic Offender (accumulating 3 major moving violations or 12 total violations within 5 years)?",
    options: ["1-year suspension", "2-year suspension", "4-year suspension", "10-year suspension"],
    correctAnswer: "C",
    explanation: "A Habitual Traffic Offender designation results in a mandatory 4-year license suspension.",
    source: "Chapter 3 - Habitual Traffic Offender",
    tags: ["MA_RMV", "Suspensions"]
  },
  {
    question: "What is the license reinstatement fee for a suspension caused by 3 surchargeable events?",
    options: ["$50", "$100", "$200", "$500"],
    correctAnswer: "B",
    explanation: "Reinstating a license suspended due to 3 surchargeable events requires a $100 reinstatement fee.",
    source: "Chapter 3 - Reinstatement Fees",
    tags: ["MA_RMV", "Fees", "Suspensions"]
  },
  {
    question: "What is the license reinstatement fee for an OUI conviction suspension in Massachusetts?",
    options: ["$100", "$200", "$500", "$1,200"],
    correctAnswer: "C",
    explanation: "Reinstating your driver's license following an OUI suspension requires a $500 reinstatement fee.",
    source: "Chapter 3 - Reinstatement Fees",
    tags: ["MA_RMV", "Fees", "OUI_Laws"]
  },
  {
    question: "If you are caught driving with a suspended or revoked license, what is the penalty for a first offense?",
    options: ["$100 fine only", "$500 to $1,000 fine and up to 10 days in prison (plus an additional suspension period)", "Mandatory 1-year jail sentence", "Vehicle forfeiture"],
    correctAnswer: "B",
    explanation: "Operating a motor vehicle after license suspension carries a fine of $500 to $1,000, potential jail time up to 10 days, and an additional suspension period.",
    source: "Chapter 3 - Violations and Penalties",
    tags: ["MA_RMV", "Suspensions", "Penalties"]
  },
  {
    question: "What is the penalty for attaching false motor vehicle registration plates or concealing a license plate?",
    options: ["$50 fine", "Fine of up to $150 and possible license suspension", "$500 fine and mandatory vehicle impoundment", "10 days community service"],
    correctAnswer: "B",
    explanation: "Attaching false plates or obscuring plates can result in fines up to $150, court assessments, and potential license suspension.",
    source: "Chapter 3 - Registration Laws",
    tags: ["MA_RMV", "Registration", "Violations"]
  },
  {
    question: "How many surcharge points are assigned for a minor moving violation (like speeding) under the Safe Driver Insurance Plan?",
    options: ["1 point", "2 points", "4 points", "5 points"],
    correctAnswer: "B",
    explanation: "A minor moving traffic violation adds 2 surcharge points to your driving history under SDIP rules.",
    source: "Chapter 3 - SDIP Points",
    tags: ["MA_RMV", "SDIP", "Insurance_Points"]
  },
  {
    question: "How many surcharge points are assigned for a major moving violation (such as OUI or reckless driving)?",
    options: ["2 points", "3 points", "4 points", "5 points"],
    correctAnswer: "D",
    explanation: "Major moving violations, including OUI and drag racing, carry 5 surcharge points under SDIP rules.",
    source: "Chapter 3 - SDIP Points",
    tags: ["MA_RMV", "SDIP", "Insurance_Points"]
  },
  {
    question: "How many surcharge points are added for a major at-fault accident resulting in over $1,000 in property damage?",
    options: ["2 points", "3 points", "4 points", "5 points"],
    correctAnswer: "C",
    explanation: "A major at-fault accident involving claim payments exceeding $1,000 adds 4 surcharge points to your insurance rating.",
    source: "Chapter 3 - SDIP Points",
    tags: ["MA_RMV", "SDIP", "Insurance_Points"]
  },
  {
    question: "Under the Massachusetts Clean Driver provisions, how many consecutive years of safe driving without surchargeable events are required to lower your SDIP step?",
    options: ["1 year", "3 years", "5 years", "10 years"],
    correctAnswer: "C",
    explanation: "Maintaining a clean driving record for 5 consecutive years qualifies drivers for clean-driver credit discounts and point reductions.",
    source: "Chapter 3 - SDIP Clean Driver Credit",
    tags: ["MA_RMV", "SDIP", "Insurance_Points"]
  },
  {
    question: "What is the statutory speed limit in a school zone in Massachusetts unless posted otherwise?",
    options: ["15 mph", "20 mph", "25 mph", "30 mph"],
    correctAnswer: "B",
    explanation: "The statutory speed limit in an established school zone in Massachusetts is 20 mph when children are present or when lights are flashing.",
    source: "Chapter 3 - Speed Limits",
    tags: ["MA_RMV", "Speed_Limits"]
  },
  {
    question: "What is the default statutory speed limit in a thickly settled or business district in Massachusetts?",
    options: ["20 mph", "25 mph", "30 mph", "35 mph"],
    correctAnswer: "C",
    explanation: "Unless posted otherwise, the statutory speed limit in a thickly settled or business district in Massachusetts is 30 mph.",
    source: "Chapter 3 - Speed Limits",
    tags: ["MA_RMV", "Speed_Limits"]
  },
  {
    question: "What defines a 'thickly settled district' under Massachusetts driving law?",
    options: ["An area where houses or buildings are less than 200 feet apart for a distance of 1/4 mile or more", "An area with at least 5 commercial businesses per block", "Any city street with a paved sidewalk", "A residential area with a population density over 1,000 residents per square mile"],
    correctAnswer: "A",
    explanation: "A thickly settled district is defined as an area where buildings/houses are spaced less than 200 feet apart for a distance of at least 1/4 mile (1,320 feet).",
    source: "Chapter 3 - Speed Limits",
    tags: ["MA_RMV", "Speed_Limits"]
  },
  {
    question: "What is the statutory speed limit on a highway outside a thickly settled or business district in Massachusetts?",
    options: ["40 mph", "45 mph", "50 mph", "55 mph"],
    correctAnswer: "C",
    explanation: "Outside of a thickly settled or business district, driving over 50 mph on a highway is considered unreasonable and improper unless higher limits are posted.",
    source: "Chapter 3 - Speed Limits",
    tags: ["MA_RMV", "Speed_Limits"]
  },
  {
    question: "What is the minimum speed limit on the Massachusetts Turnpike (I-90) under normal driving conditions?",
    options: ["30 mph", "35 mph", "40 mph", "45 mph"],
    correctAnswer: "C",
    explanation: "The Massachusetts Turnpike has a posted minimum speed limit of 40 mph under normal driving and weather conditions.",
    source: "Chapter 3 - Speed Limits",
    tags: ["MA_RMV", "Speed_Limits"]
  },
  {
    question: "What distance before making a turn on a city or local street must you activate your turn signal in Massachusetts?",
    options: ["At least 50 feet", "At least 100 feet", "At least 200 feet", "At least 500 feet"],
    correctAnswer: "B",
    explanation: "Massachusetts law requires drivers to signal at least 100 feet before making a turn or changing lanes on local streets.",
    source: "Chapter 3 - Turning and Signaling",
    tags: ["MA_RMV", "Turning_Signaling"]
  },
  {
    question: "How far in advance must you signal before changing lanes or exiting on a highway in Massachusetts?",
    options: ["At least 100 feet", "At least 200 feet", "At least 300 feet", "At least 500 feet"],
    correctAnswer: "D",
    explanation: "When driving on a highway, you must activate your turn signal at least 500 feet before making a turn or changing lanes.",
    source: "Chapter 3 - Turning and Signaling",
    tags: ["MA_RMV", "Turning_Signaling"]
  },
  {
    question: "Who has the right-of-way when entering a rotary in Massachusetts?",
    options: ["Vehicles entering from the right", "Vehicles already inside the rotary", "The vehicle traveling at the higher rate of speed", "Larger commercial vehicles"],
    correctAnswer: "B",
    explanation: "Vehicles already circulating inside a Massachusetts rotary always have the right-of-way over entering traffic, unless specific signs or police direct otherwise.",
    source: "Chapter 3 - Rotaries and Intersections",
    tags: ["MA_RMV", "Rotaries", "Right_of_Way"]
  },
  {
    question: "In what direction does traffic flow in a Massachusetts rotary?",
    options: ["Clockwise", "Counter-clockwise", "Whichever direction is marked on the entry lane", "Bi-directionally depending on traffic volume"],
    correctAnswer: "B",
    explanation: "Traffic in all Massachusetts rotaries and roundabouts travels counter-clockwise around a central island.",
    source: "Chapter 3 - Rotaries",
    tags: ["MA_RMV", "Rotaries"]
  },
  {
    question: "In a multi-lane rotary with no specific lane signs, which lane should you use if you plan to take a U-turn or go three-quarters around?",
    options: ["The far-right lane", "The left lane", "Any lane that has less traffic", "The shoulder lane"],
    correctAnswer: "B",
    explanation: "In a multi-lane rotary without lane signs, enter from the left lane to make a three-quarters turn or a U-turn.",
    source: "Chapter 3 - Rotaries",
    tags: ["MA_RMV", "Rotaries"]
  },
  {
    question: "What should you do if you miss your intended exit in a Massachusetts rotary?",
    options: ["Stop immediately and back up carefully", "Make a sharp U-turn across inner lanes", "Continue around the rotary again until you reach your exit", "Pull onto the central island grass and wait"],
    correctAnswer: "C",
    explanation: "Never stop or back up in a rotary. If you miss your exit, continue around the rotary counter-clockwise until you reach it again.",
    source: "Chapter 3 - Rotaries",
    tags: ["MA_RMV", "Rotaries"]
  },
  {
    question: "When two vehicles arrive at an uncontrolled intersection at the exact same time, who has the right-of-way?",
    options: ["The vehicle on the left", "The vehicle on the right", "The larger vehicle", "The vehicle traveling straight on the wider road"],
    correctAnswer: "B",
    explanation: "At an uncontrolled intersection (no signs or signals), when two vehicles arrive simultaneously, the driver on the left must yield to the driver on the right.",
    source: "Chapter 3 - Right-of-Way",
    tags: ["MA_RMV", "Right_of_Way"]
  },
  {
    question: "At a T-intersection where one road ends and terminates at a main road, who must yield the right-of-way?",
    options: ["Traffic on the main continuing road", "Traffic on the terminating road that is ending", "Whichever driver reached the intersection second", "Whichever vehicle is making a right turn"],
    correctAnswer: "B",
    explanation: "At a T-intersection, the vehicle traveling on the road that ends must yield the right-of-way to all traffic on the continuing cross road.",
    source: "Chapter 3 - Right-of-Way",
    tags: ["MA_RMV", "Right_of_Way"]
  },
  {
    question: "When turning left at an intersection, to whom must you yield the right-of-way?",
    options: ["Oncoming traffic traveling straight or turning right", "Only vehicles traveling straight", "Vehicles behind you attempting to pass", "Traffic approaching from your left only"],
    correctAnswer: "A",
    explanation: "Drivers making a left turn must yield the right-of-way to all oncoming vehicles going straight or turning right across their path.",
    source: "Chapter 3 - Turning and Right-of-Way",
    tags: ["MA_RMV", "Turning", "Right_of_Way"]
  },
  {
    question: "What does Massachusetts law require you to do when approaching a emergency vehicle stopped on the side of the road with flashing lights (Move Over Law)?",
    options: ["Maintain your speed but honk your horn", "Stop completely until the emergency vehicle leaves", "Reduce speed and move over one lane if safe, or slow down if changing lanes is unsafe", "Turn on your hazard lights and accelerate past"],
    correctAnswer: "C",
    explanation: "The Move Over Law requires drivers approaching a stationary emergency or maintenance vehicle with flashing lights to reduce speed and move into an adjacent lane if safe to do so.",
    source: "Chapter 3 - Move Over Law",
    tags: ["MA_RMV", "Safety_Laws"]
  },
  {
    question: "When a school bus is stopped on an undivided road with its red lights flashing and stop arm extended, who must stop?",
    options: ["Only traffic behind the bus", "Only traffic meeting the bus from the front", "Traffic moving in both directions", "Only heavy commercial trucks"],
    correctAnswer: "C",
    explanation: "On an undivided highway or local road, vehicles moving in both directions must come to a complete stop when a school bus has red lights flashing and its stop arm extended.",
    source: "Chapter 3 - School Bus Rules",
    tags: ["MA_RMV", "Right_of_Way"]
  },
  {
    question: "Under what condition are you allowed to pass a school bus with flashing red lights on a divided highway with a physical median barrier?",
    options: ["Never", "Only if you are traveling in the opposite direction on the other side of the physical barrier", "If you are traveling in the same direction and slow down to 10 mph", "If an adult crosswalk guard waves you through"],
    correctAnswer: "B",
    explanation: "Drivers on the opposite side of a divided highway separated by an unpaved median strip or physical barrier are not required to stop for a school bus.",
    source: "Chapter 3 - School Bus Rules",
    tags: ["MA_RMV", "Right_of_Way"]
  },
  {
    question: "What hand signal indicates an intention to make a left turn?",
    options: ["Left arm extended horizontally straight out the window", "Left arm bent upward at a 90-degree angle", "Left arm bent downward pointing toward the ground", "Left hand waving repeatedly"],
    correctAnswer: "A",
    explanation: "Extending your left arm straight out horizontally out the driver side window signals a left-hand turn.",
    source: "Chapter 3 - Hand Signals",
    tags: ["MA_RMV", "Hand_Signals"]
  },
  {
    question: "What hand signal indicates an intention to stop or decrease speed?",
    options: ["Left arm extended straight out", "Left arm bent upward at a 90-degree angle", "Left arm extended downward with palm facing backward", "Right arm extended out the passenger window"],
    correctAnswer: "C",
    explanation: "A hand signal for stopping or slowing down is represented by extending your left arm downward out the window with palm facing rearward.",
    source: "Chapter 3 - Hand Signals",
    tags: ["MA_RMV", "Hand_Signals"]
  },
  {
    question: "What hand signal indicates an intention to make a right turn?",
    options: ["Left arm extended straight out", "Left arm bent upward at a 90-degree angle", "Left arm pointing downward", "Right arm waving across the windshield"],
    correctAnswer: "B",
    explanation: "Pointing your left arm upward out the window at a 90-degree angle indicates a right turn.",
    source: "Chapter 3 - Hand Signals",
    tags: ["MA_RMV", "Hand_Signals"]
  },
  {
    question: "When parking uphill on a street with a curb, which way should you turn your front wheels?",
    options: ["Straight ahead", "Right (toward the curb)", "Left (away from the curb)", "It does not matter as long as the parking brake is set"],
    correctAnswer: "C",
    explanation: "When parking uphill against a curb, turn your front wheels to the left (away from the curb) so the back of the tire rests against the curb if the brakes fail.",
    source: "Chapter 3 - Parking Rules",
    tags: ["MA_RMV", "Hill_Parking"]
  },
  {
    question: "When parking downhill on a street with a curb, which way should you turn your front wheels?",
    options: ["Left (away from the curb)", "Right (toward the curb)", "Parallel to the roadway", "Straight ahead"],
    correctAnswer: "B",
    explanation: "When parking downhill with a curb, turn your front wheels to the right (toward the curb) so your vehicle rolls into the curb if it slips.",
    source: "Chapter 3 - Parking Rules",
    tags: ["MA_RMV", "Hill_Parking"]
  },
  {
    question: "When parking uphill or downhill on a street WITHOUT a curb, which direction should you turn your front wheels?",
    options: ["Toward the center of the road", "Toward the side of the road / edge of pavement", "Straight ahead", "Opposite the direction of traffic"],
    correctAnswer: "B",
    explanation: "When parking on a hill without a curb, always turn your wheels toward the edge of the road (right) so the car rolls off the roadway in an emergency.",
    source: "Chapter 3 - Parking Rules",
    tags: ["MA_RMV", "Hill_Parking"]
  },
  {
    question: "What is the legal maximum distance you can park from a curb when parallel parking in Massachusetts?",
    options: ["6 inches", "12 inches", "18 inches", "24 inches"],
    correctAnswer: "B",
    explanation: "When parallel parking in Massachusetts, your vehicle's wheels must be within 12 inches (1 foot) of the curb.",
    source: "Chapter 3 - Parking Rules",
    tags: ["MA_RMV", "Parking_Rules"]
  },
  {
    question: "How far back must you park from a fire hydrant in Massachusetts?",
    options: ["At least 5 feet", "At least 10 feet", "At least 15 feet", "At least 20 feet"],
    correctAnswer: "B",
    explanation: "It is illegal to park within 10 feet of a fire hydrant in Massachusetts.",
    source: "Chapter 3 - Parking Restrictions",
    tags: ["MA_RMV", "Parking_Rules"]
  },
  {
    question: "How far back must you park from an intersection or crosswalk in Massachusetts unless posted otherwise?",
    options: ["At least 10 feet", "At least 20 feet", "At least 30 feet", "At least 50 feet"],
    correctAnswer: "B",
    explanation: "Massachusetts law prohibits parking within 20 feet of an intersection or crosswalk.",
    source: "Chapter 3 - Parking Restrictions",
    tags: ["MA_RMV", "Parking_Rules"]
  },
  {
    question: "When entering a highway from an entrance ramp, who has the right-of-way?",
    options: ["Traffic already on the highway", "Vehicles merging from the entrance ramp", "Whichever vehicle is traveling faster", "Alternating merge (zipper rule) by statute"],
    correctAnswer: "A",
    explanation: "Drivers entering a highway from an acceleration lane or entrance ramp must yield the right-of-way to traffic already traveling on the highway.",
    source: "Chapter 3 - Highway Driving",
    tags: ["MA_RMV", "Right_of_Way", "Highway"]
  },
  {
    question: "Is making a right turn on red legal in Massachusetts?",
    options: ["No, right turns on red are strictly prohibited statewide", "Yes, after coming to a complete stop and yielding to traffic/pedestrians, unless a sign states 'NO TURN ON RED'", "Yes, without stopping if the lane is clear", "Only during daylight hours"],
    correctAnswer: "B",
    explanation: "In Massachusetts, right turns on red are allowed after making a full stop and yielding, unless a posted sign explicitly prohibits it.",
    source: "Chapter 3 - Turning Rules",
    tags: ["MA_RMV", "Signals_Rules"]
  },
  {
    question: "When passing another vehicle on a two-lane road, when are you legally permitted to exceed the posted speed limit?",
    options: ["Never", "By up to 10 mph for safety", "Whenever you are on a state highway", "Only when passing slow-moving agricultural machinery"],
    correctAnswer: "A",
    explanation: "It is illegal to exceed the posted speed limit at any time, even while passing another vehicle on a two-lane roadway.",
    source: "Chapter 3 - Passing Rules",
    tags: ["MA_RMV", "Passing_Rules"]
  },
  {
    question: "What is the fundamental speed law in Massachusetts?",
    options: ["Always drive at the exact posted speed limit", "Never drive faster than is reasonable and proper for current road, weather, and traffic conditions", "Maintain at least 45 mph on all numbered routes", "Match the speed of the vehicle directly ahead of you"],
    correctAnswer: "B",
    explanation: "The Fundamental Speed Law states that you must never drive at a speed greater than is reasonable and proper for existing conditions, regardless of posted limits.",
    source: "Chapter 3 - Speed Laws",
    tags: ["MA_RMV", "Speed_Limits"]
  },
  {
    question: "What is the curfew for a Junior Operator License (JOL) holder in Massachusetts who is driving without a parent or legal guardian?",
    options: ["11:00 PM to 5:00 AM", "12:00 AM to 5:00 AM", "12:30 AM to 5:00 AM", "1:00 AM to 6:00 AM"],
    correctAnswer: "C",
    explanation: "A JOL holder may not drive between the hours of 12:30 AM and 5:00 AM unless accompanied by a parent or legal guardian.",
    source: "Chapter 1 - JOL Restrictions",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "For how many months is a newly licensed Junior Operator (JOL) restricted from carrying passengers under the age of 18 (unless accompanied by a parent/guardian or an adult at least 21)?",
    options: ["First 3 months", "First 6 months", "First 12 months", "Until they turn 18"],
    correctAnswer: "B",
    explanation: "For the first 6 months after receiving a JOL, you cannot carry passengers under 18 unless a parent, legal guardian, or licensed driver who is at least 21 is in the vehicle.",
    source: "Chapter 1 - Passenger Restrictions",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "What is the penalty for a first-offense conviction of speeding while holding a Junior Operator License (JOL) in Massachusetts?",
    options: ["$50 fine only", "30-day license suspension and a $100 fine", "90-day license suspension, retraining course, and fine", "1-year license suspension"],
    correctAnswer: "C",
    explanation: "A first speeding offense for a JOL holder results in a 90-day license suspension, a requirement to complete a State-sponsored driver attitudinal retraining course, and a fine/reinstatement fees.",
    source: "Chapter 1 - JOL Penalties and Suspensions",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "What is the penalty for a first-offense drag racing conviction for a Junior Operator License (JOL) holder in Massachusetts?",
    options: ["30-day suspension", "90-day suspension", "1-year license suspension", "3-year license suspension"],
    correctAnswer: "D",
    explanation: "A first-offense drag racing conviction for a JOL holder carries a 1-year license suspension. (Subsequent offenses carry a 3-year suspension).",
    source: "Chapter 1 - JOL Penalties and Suspensions",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "At what minimum age can an individual apply for a Learner's Permit in Massachusetts?",
    options: ["15 years old", "15 years and 6 months old", "16 years old", "16 years and 6 months old"],
    correctAnswer: "B",
    explanation: "In Massachusetts, you must be at least 16 years and 6 months old to apply for a Class D Learner's Permit.",
    source: "Chapter 1 - Obtaining a Permit",
    tags: ["MA_RMV", "License_Requirements"]
  },
  {
    question: "When driving with a Class D Learner's Permit in Massachusetts, who must be seated beside you in the front passenger seat?",
    options: ["Any licensed driver over 18", "A parent or legal guardian only", "A licensed driver who is at least 21 years old and has at least 1 year of driving experience", "A licensed driving instructor only"],
    correctAnswer: "C",
    explanation: "A permit holder must always be accompanied by a licensed operator who is at least 21 years old, has at least 1 year of driving experience, and is seated in the front passenger seat.",
    source: "Chapter 1 - Permit Driving Rules",
    tags: ["MA_RMV", "License_Requirements"]
  },
  {
    question: "What is the license suspension period for a first offense of operating under the influence (OUI) of alcohol or drugs for a driver age 21 or older, assuming a failed breathalyzer (BAC of 0.08% or more)?",
    options: ["30 days", "90 days to 1 year", "30 days plus a 1-year administrative suspension", "180 days (or until your case is resolved / 30 days administrative)"],
    correctAnswer: "D",
    explanation: "A failed breath test for drivers 21+ carries a standard 30-day administrative suspension, but court convictions carry longer suspensions ranging from 1 year or more.",
    source: "Chapter 1 - OUI and Alcohol Laws",
    tags: ["MA_RMV", "OUI_Laws"]
  },
  {
    question: "What is the zero-tolerance Blood Alcohol Concentration (BAC) threshold for drivers under the age of 21 in Massachusetts?",
    options: ["0.00%", "0.02%", "0.04%", "0.08%"],
    correctAnswer: "B",
    explanation: "Massachusetts has a zero-tolerance law for underage drivers. If a driver under 21 has a BAC of 0.02% or greater, their license will be suspended immediately for 180 days.",
    source: "Chapter 1 - Underage Drinking Laws",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "What is the penalty for refusing to take a chemical breath test or blood test when requested by a law enforcement officer (Implied Consent Law) for a driver over 21 with no prior OUI record?",
    options: ["No penalty if you pass a field sobriety test", "180-day license suspension", "1-year license suspension", "Immediate revocation of vehicle ownership"],
    correctAnswer: "B",
    explanation: "Refusing a chemical test results in an immediate 180-day license suspension for a first offense for drivers 21 and older (longer for younger drivers or repeat offenders).",
    source: "Chapter 1 - Implied Consent Law",
    tags: ["MA_RMV", "Penalties"]
  },
  {
    question: "Which of the following documents is NOT required when you go to the RMV to take your road test?",
    options: ["A completed, signed Class D learner's permit application", "A valid learner's permit", "Proof of vehicle insurance and valid registration", "A certified birth certificate"],
    correctAnswer: "D",
    explanation: "While a birth certificate or passport is required when initially getting a permit, the road test requires your permit, a completed application, valid registration, valid insurance, and a qualified sponsor.",
    source: "Chapter 1 - Road Test Requirements",
    tags: ["MA_RMV", "License_Requirements"]
  },
  {
    question: "Can a JOL holder drive passengers under 18 to school-sponsored extracurricular activities during the first 6 months?",
    options: ["Yes, if they have a signed letter from the school principal", "Yes, with a parent's written permission", "No, the passenger restriction applies at all times with no exceptions for school activities", "Yes, if accompanied by someone 21 or older"],
    correctAnswer: "C",
    explanation: "The passenger restriction during the first 6 months for a JOL holder is absolute; there are no exceptions for school-sponsored events unless a parent, guardian, or qualified adult is present.",
    source: "Chapter 1 - JOL Restrictions",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "If you change your address within Massachusetts, within how many days must you notify the RMV?",
    options: ["10 days", "30 days", "60 days", "Next time you renew your license"],
    correctAnswer: "B",
    explanation: "Massachusetts law requires you to notify the RMV of any change of address within 30 days. You can do this online or in writing.",
    source: "Chapter 1 - Administrative Rules",
    tags: ["MA_RMV", "RMV_Procedures"]
  },
  {
    question: "What type of license is issued to a driver who is under 18 years old in Massachusetts?",
    options: ["Standard Class D License", "Junior Operator License (JOL)", "Minor Driver Permit", "Provisional Operator License"],
    correctAnswer: "B",
    explanation: "Drivers between 16.5 and 18 years old who pass the road test receive a Junior Operator License (JOL).",
    source: "Chapter 1 - License Types",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "What happens to your Junior Operator License (JOL) if you are convicted of a first speeding offense?",
    options: ["Suspended for 30 days", "Suspended for 90 days", "Suspended for 1 year", "Revoked permanently"],
    correctAnswer: "B",
    explanation: "A first speeding conviction for a JOL holder results in a mandatory 90-day suspension.",
    source: "Chapter 1 - JOL Penalties",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "What is the penalty for a first-offense conviction of reckless or negligent operation of a motor vehicle for a JOL holder?",
    options: ["60-day suspension", "180-day suspension", "180-day to 1-year suspension", "3-year suspension"],
    correctAnswer: "C",
    explanation: "A first conviction for reckless or negligent operation results in a 180-day license suspension for adult drivers, but a 180-day to 1-year suspension for JOL holders.",
    source: "Chapter 1 - JOL Penalties",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "Under the Massachusetts Junior Operator Law, what is the penalty for a second or subsequent speeding offense?",
    options: ["90 days suspension", "1 year suspension", "3 years suspension", "Permanent revocation"],
    correctAnswer: "B",
    explanation: "A second or subsequent speeding conviction for a JOL holder results in a 1-year suspension.",
    source: "Chapter 1 - JOL Penalties",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "If a driver under 21 is convicted of buying or attempting to buy alcohol, what is the mandatory license suspension penalty in Massachusetts?",
    options: ["30 days", "90 days", "180 days", "1 year"],
    correctAnswer: "C",
    explanation: "A conviction for purchasing or attempting to purchase alcohol by someone under 21 results in a mandatory 180-day license suspension.",
    source: "Chapter 1 - Underage Drinking Laws",
    tags: ["MA_RMV", "Penalties"]
  },
  {
    question: "What minimum age requirement must your accompanying licensed driver meet when you drive with a learner's permit?",
    options: ["At least 18 years old", "At least 21 years old", "At least 25 years old", "No age requirement, as long as they have a valid license"],
    correctAnswer: "B",
    explanation: "The accompanying operator must be at least 21 years old and hold a valid driver's license with at least 1 year of driving experience.",
    source: "Chapter 1 - Permit Rules",
    tags: ["MA_RMV", "License_Requirements"]
  },
  {
    question: "Can a person with a Junior Operator License (JOL) operate a vehicle for compensation (such as driving for a delivery service)?",
    options: ["Yes, if they have parental permission", "Yes, during daylight hours only", "No, JOL holders are prohibited from driving for compensation", "Yes, if they hold a commercial permit"],
    correctAnswer: "C",
    explanation: "JOL holders are strictly prohibited from operating a motor vehicle for compensation or employment involving driving.",
    source: "Chapter 1 - JOL Restrictions",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "How long must a driver hold a learner's permit in Massachusetts before they are eligible to take the road test (if under 18)?",
    options: ["At least 3 months", "At least 6 consecutive months", "At least 9 months", "At least 12 months"],
    correctAnswer: "B",
    explanation: "Under-18 applicants must hold their learner's permit for at least 6 consecutive months before taking the road test, alongside completing driver education requirements.",
    source: "Chapter 1 - Road Test Eligibility",
    tags: ["MA_RMV", "License_Requirements"]
  },
  {
    question: "What is required to reinstate a license after a suspension for a drug-related conviction (non-OUI)?",
    options: ["Pay a $100 fee only", "Serve the suspension period and pay a $500 reinstatement fee", "Retake the written permit test only", "Complete a drug education program and pay a $500 reinstatement fee"],
    correctAnswer: "B",
    explanation: "Drug-related convictions (even if not driving-related) carry a mandatory 1-to-5-year license suspension and a $500 reinstatement fee.",
    source: "Chapter 1 - Suspensions and Revocations",
    tags: ["MA_RMV", "Penalties"]
  },
  {
    question: "When does a standard Massachusetts Class D driver's license expire?",
    options: ["Every year on your birthday", "Every 3 years on your birthday", "Every 5 years on your birthday", "Every 10 years on your birthday"],
    correctAnswer: "C",
    explanation: "A standard Class D driver's license in Massachusetts expires every 5 years on your birthday.",
    source: "Chapter 1 - License Renewal",
    tags: ["MA_RMV", "RMV_Procedures"]
  },
  {
    question: "If you lose your Massachusetts driver's license, what should you do?",
    options: ["Wait until the expiration date to request a new one", "Apply for a replacement license online, by mail, or in person at the RMV", "Drive with your birth certificate until you can visit the RMV", "File a police report and wait 30 days"],
    correctAnswer: "B",
    explanation: "You can apply for a duplicate or replacement license online through the RMV portal or in person after paying the duplicate fee.",
    source: "Chapter 1 - License Replacement",
    tags: ["MA_RMV", "RMV_Procedures"]
  },
  {
    question: "What are the education requirements for a driver under 18 seeking a Junior Operator License?",
    options: ["10 hours of classroom instruction only", "30 hours of classroom instruction, 12 hours of behind-the-wheel training, and 6 hours of in-car observation", "20 hours of classroom and 5 hours of driving", "No formal education is required if parents teach them"],
    correctAnswer: "B",
    explanation: "The complete Driver Education Program for minors requires 30 hours of classroom, 12 hours of behind-the-wheel training, and 6 hours of observation.",
    source: "Chapter 1 - Driver Education",
    tags: ["MA_RMV", "License_Requirements"]
  },
  {
    question: "How many additional hours of driving must a parent/guardian certify that a minor completed with them outside of professional driving school?",
    options: ["20 hours", "30 hours", "40 hours", "50 hours"],
    correctAnswer: "C",
    explanation: "Parents or guardians must certify that the minor has completed an additional 40 hours of supervised driving practice (or 30 hours if completed as part of an alternative program format).",
    source: "Chapter 1 - Driver Education",
    tags: ["MA_RMV", "License_Requirements"]
  },
  {
    question: "What is the penalty for a JOL holder caught driving during the restricted hours (12:30 AM to 5:00 AM) without a parent or guardian?",
    options: ["Warning for the first offense", "60-day license suspension for a first offense", "1-year license suspension immediately", "$50 fine only"],
    correctAnswer: "B",
    explanation: "Driving during the JOL curfew hours without a parent or guardian results in a 60-day suspension for a first offense, 180 days for a second, and 1 year for subsequent offenses.",
    source: "Chapter 1 - JOL Restrictions",
    tags: ["MA_RMV", "JOL_Laws"]
  },
  {
    question: "Which of the following is true regarding out-of-state traffic violations for a Massachusetts driver?",
    options: ["They do not count in Massachusetts", "They are reported to the Massachusetts RMV and can affect your driving record and insurance points", "They only matter if you are pulled over in a neighboring state", "They require you to retake your road test in MA"],
    correctAnswer: "B",
    explanation: "Under interstate compact agreements, out-of-state violations are reported to the MA RMV and carry penalties and points just as if they occurred in Massachusetts.",
    source: "Chapter 1 - Out-of-State Violations",
    tags: ["MA_RMV", "Penalties"]
  },
  {
    question: "If your vehicle fails its annual safety and emissions inspection, within how many days must you repair the vehicle and obtain a re-test?",
    options: ["10 days", "20 days", "30 days", "60 days"],
    correctAnswer: "D",
    explanation: "If your vehicle fails inspection, you have 60 days to have it repaired and return for a re-test at a licensed inspection station.",
    source: "Chapter 1 - Vehicle Inspection",
    tags: ["MA_RMV", "RMV_Procedures"]
  },
  {
    question: "What is the maximum speed limit in a designated school zone in Massachusetts unless posted otherwise?",
    options: ["15 mph", "20 mph", "25 mph", "30 mph"],
    correctAnswer: "B",
    explanation: "The speed limit in a school zone when children are present or when indicated by flashing lights is 20 mph.",
    source: "Chapter 1 / Chapter 3 - Speed Limits",
    tags: ["MA_RMV", "Speed_Limits"]
  },
  {
    question: "What is the default statutory speed limit in a thickly settled or business district in Massachusetts, unless posted otherwise?",
    options: ["20 mph", "25 mph", "30 mph", "35 mph"],
    correctAnswer: "C",
    explanation: "The statutory speed limit in a thickly settled or business district (where buildings are less than 200 feet apart for a distance of 1/4 mile or more) is 30 mph.",
    source: "Chapter 1 / Chapter 3 - Speed Limits",
    tags: ["MA_RMV", "Speed_Limits"]
  }
];
