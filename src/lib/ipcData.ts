
export interface IPCSection {
  section: string;
  title: string;
  description: string;
  punishment?: string;
  tags: string[];
}

export const ipcSections: IPCSection[] = [
  {
    section: "299",
    title: "Culpable Homicide",
    description: "Whoever causes death by doing an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that he is likely by such act to cause death, commits the offence of culpable homicide.",
    punishment: "Punishment for culpable homicide not amounting to murder—Imprisonment for life, or imprisonment for a term which may extend to 10 years, and fine.",
    tags: ["homicide", "murder", "death", "killing", "fatal", "life"]
  },
  {
    section: "300",
    title: "Murder",
    description: "Culpable homicide is murder if the act by which the death is caused is done with the intention of causing death, or if it is done with the intention of causing such bodily injury as the offender knows to be likely to cause the death of the person to whom the harm is caused.",
    punishment: "Punishment for murder—Death, or imprisonment for life, and fine.",
    tags: ["homicide", "murder", "death", "killing", "fatal", "life"]
  },
  {
    section: "302",
    title: "Punishment for Murder",
    description: "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
    punishment: "Death, or imprisonment for life, and fine.",
    tags: ["murder", "punishment", "death penalty", "life imprisonment"]
  },
  {
    section: "304",
    title: "Punishment for Culpable Homicide not amounting to Murder",
    description: "Whoever commits culpable homicide not amounting to murder shall be punished with imprisonment for life, or imprisonment for a term which may extend to ten years, and shall also be liable to fine.",
    punishment: "Imprisonment for life, or imprisonment up to 10 years, and fine.",
    tags: ["homicide", "punishment", "culpable", "unintentional killing"]
  },
  {
    section: "304A",
    title: "Causing death by negligence",
    description: "Whoever causes the death of any person by doing any rash or negligent act not amounting to culpable homicide, shall be punished with imprisonment for a term which may extend to two years, or with fine, or with both.",
    punishment: "Imprisonment up to 2 years, or fine, or both.",
    tags: ["negligence", "death", "accident", "rash", "careless"]
  },
  {
    section: "319",
    title: "Hurt",
    description: "Whoever causes bodily pain, disease or infirmity to any person is said to cause hurt.",
    tags: ["hurt", "injury", "bodily harm", "pain"]
  },
  {
    section: "320",
    title: "Grievous Hurt",
    description: "The following kinds of hurt only are designated as 'grievous': Emasculation; Permanent privation of the sight of either eye; Permanent privation of the hearing of either ear; Privation of any member or joint; Destruction or permanent impairing of the powers of any member or joint; Permanent disfiguration of the head or face; Fracture or dislocation of a bone or tooth; Any hurt which endangers life or which causes the sufferer to be during the space of twenty days in severe bodily pain, or unable to follow his ordinary pursuits.",
    tags: ["grievous hurt", "serious injury", "permanent damage", "disability"]
  },
  {
    section: "323",
    title: "Punishment for voluntarily causing hurt",
    description: "Whoever voluntarily causes hurt, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine which may extend to one thousand rupees, or with both.",
    punishment: "Imprisonment up to 1 year, or fine up to 1000 rupees, or both.",
    tags: ["hurt", "voluntarily", "punishment", "injury"]
  },
  {
    section: "376",
    title: "Punishment for rape",
    description: "Whoever commits rape shall be punished with rigorous imprisonment of either description for a term which shall not be less than seven years, but which may extend to imprisonment for life, and shall also be liable to fine.",
    punishment: "Rigorous imprisonment not less than 7 years, which may extend to imprisonment for life, and fine.",
    tags: ["rape", "sexual assault", "crime against women"]
  },
  {
    section: "378",
    title: "Theft",
    description: "Whoever, intending to take dishonestly any moveable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
    tags: ["theft", "stealing", "dishonest", "property", "movable property"]
  },
  {
    section: "379",
    title: "Punishment for theft",
    description: "Whoever commits theft shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    punishment: "Imprisonment up to 3 years, or fine, or both.",
    tags: ["theft", "stealing", "punishment"]
  },
  {
    section: "383",
    title: "Extortion",
    description: "Whoever intentionally puts any person in fear of any injury to that person, or to any other, and thereby dishonestly induces the person so put in fear to deliver to any person any property or valuable security, or anything signed or sealed which may be converted into a valuable security, commits extortion.",
    tags: ["extortion", "blackmail", "threat", "fear", "dishonest"]
  },
  {
    section: "391",
    title: "Dacoity",
    description: "When five or more persons conjointly commit or attempt to commit a robbery, or where the whole number of persons conjointly committing or attempting to commit a robbery, and persons present and aiding such commission or attempt, amount to five or more, every person so committing, attempting or aiding, is said to commit dacoity.",
    tags: ["dacoity", "robbery", "gang", "group crime"]
  },
  {
    section: "415",
    title: "Cheating",
    description: "Whoever, by deceiving any person, fraudulently or dishonestly induces the person so deceived to deliver any property to any person, or to consent that any person shall retain any property, or intentionally induces the person so deceived to do or omit to do anything which he would not do or omit if he were not so deceived, and which act or omission causes or is likely to cause damage or harm to that person in body, mind, reputation or property, is said to cheat.",
    tags: ["cheating", "fraud", "deception", "dishonest"]
  },
  {
    section: "503",
    title: "Criminal Intimidation",
    description: "Whoever threatens another with any injury to his person, reputation or property, or to the person or reputation of any one in whom that person is interested, with intent to cause alarm to that person, or to cause that person to do any act which he is not legally bound to do, or to omit to do any act which that person is legally entitled to do, as the means of avoiding the execution of such threat, commits criminal intimidation.",
    tags: ["intimidation", "threat", "alarm", "criminal"]
  }
];

export const searchIPCSections = (query: string): IPCSection[] => {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ');
  
  return ipcSections.filter(section => {
    // Check the title, description, and tags for matches
    const titleMatch = section.title.toLowerCase().some(word => 
      searchTerms.some(term => word.includes(term))
    );
    
    const descriptionMatch = section.description.toLowerCase().some(word => 
      searchTerms.some(term => word.includes(term))
    );
    
    const tagMatch = section.tags.some(tag => 
      searchTerms.some(term => tag.includes(term))
    );
    
    return titleMatch || descriptionMatch || tagMatch;
  }).map(section => ({
    ...section,
    relevance: calculateRelevance(section, searchTerms)
  }));
};

// Helper function to calculate relevance of a section to the search query
const calculateRelevance = (section: IPCSection, searchTerms: string[]): "high" | "medium" | "low" => {
  // Count how many search terms appear in the title, description, and tags
  let score = 0;
  
  // Title matches are weighted heavily
  searchTerms.forEach(term => {
    if (section.title.toLowerCase().includes(term)) {
      score += 3;
    }
  });
  
  // Tags are also important
  section.tags.forEach(tag => {
    if (searchTerms.some(term => tag.includes(term))) {
      score += 2;
    }
  });
  
  // Description matches add some weight
  searchTerms.forEach(term => {
    if (section.description.toLowerCase().includes(term)) {
      score += 1;
    }
  });
  
  // Determine relevance based on score
  if (score >= 5) return "high";
  if (score >= 2) return "medium";
  return "low";
};
