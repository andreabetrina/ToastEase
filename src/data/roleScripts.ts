import { RoleScript } from '../types';

export const ROLE_SCRIPTS: RoleScript[] = [
  {
    id: 'toastmaster',
    name: 'Toastmaster of the Day',
    role: 'Toastmaster of the Day',
    description: 'Sets the tone for the meeting, introduces speakers, and keeps the program on schedule.',
    script: `Good evening, Toastmasters and guests!

Welcome to [Club Name] Toastmasters Club! I'm [Your Name], your Toastmaster of the Day.

Tonight's theme is [Announce Theme if applicable]. We have an exciting agenda prepared for you.

Before we begin, I'd like to remind everyone that Toastmasters is a place where we can practice leadership, communication, and speaking skills in a supportive environment. Whether you're an experienced speaker or giving your first speech, everyone here is committed to helping you grow.

I want to thank [mention any special people - club officers, guests, sponsors]. Your presence makes our meeting special.

Now, let me introduce our first speaker... [Continue with program]

Remember to have fun, be supportive of your fellow Toastmasters, and take advantage of this wonderful opportunity to learn and grow together.

Let's make tonight a great meeting!`,
    tips: [
      'Arrive early and familiarize yourself with the agenda',
      'Keep energy high and set a positive tone',
      'Watch the time and keep the meeting on schedule',
      'Welcome guests warmly and make them feel included',
      'Transition smoothly between speakers and segments',
      'Use humor naturally, not forced',
      'Remember speaker names and pronunciate correctly'
    ]
  },
  {
    id: 'speaker',
    name: 'Speaker',
    role: 'Speaker',
    description: 'Delivers a prepared speech on a chosen topic, demonstrating communication skills.',
    script: `Good evening, Toastmasters!

[Your Opening - Hook your audience with a question, story, or surprising statement]

My name is [Your Name], and today I'm going to talk about [Your Topic].

[BODY - Develop your main points]
- Point 1: [Explanation with example or story]
- Point 2: [Explanation with example or story]
- Point 3: [Explanation with example or story]

[TRANSITION - Bridge to your conclusion]

[CONCLUSION - Summarize your key message]

In conclusion, [restate main idea] because [reason]. 

Thank you, Toastmasters!

[Signal to Timer and Evaluators that you're finished]`,
    tips: [
      'Practice your speech multiple times before delivery',
      'Maintain eye contact with your audience',
      'Use natural gestures and move purposefully on stage',
      'Vary your vocal tone, pace, and volume for emphasis',
      'Pause after important points to let them sink in',
      'Tell stories or use examples to illustrate your points',
      'Stick to your time limit (typically 5-7 minutes for CC speeches)',
      'Start and end strong - first 30 seconds and last 30 seconds are critical',
      'Avoid "um," "ah," and filler words',
      'Make sure your message is clear and your purpose is evident'
    ]
  },
  {
    id: 'evaluator',
    name: 'Evaluator',
    role: 'Evaluator',
    description: 'Provides constructive feedback on a speaker\'s performance.',
    script: `[Speaker Name], thank you for that [type of speech - educational/inspiring/entertaining] speech on [topic].

WHAT WENT WELL:
I particularly appreciated [specific observation] because [why it was effective]. Your [body language/vocal variety/story] really engaged the audience. I also loved how you [another strength].

SUGGESTIONS FOR GROWTH:
To take your speaking to the next level, I'd suggest [specific suggestion with example]. This would help [benefit]. Additionally, [another area for improvement with suggestion].

CLOSING OBSERVATION:
Overall, your message about [main point] was clear and compelling. Keep working on [area mentioned], and you'll continue to improve.

[Speaker Name], you demonstrated [skill or progress], and I'm looking forward to seeing your growth!

Thank you.`,
    tips: [
      'Prepare by taking notes during the speech',
      'Start with 2-3 specific compliments with examples',
      'Offer 2 suggestions for growth, not criticism',
      'Use the format: What went well → Suggestions → Positive closing',
      'Be specific - avoid generalities like "good job"',
      'Make it actionable - tell them how to improve, not just what needs fixing',
      'Keep it to 2-3 minutes',
      'Deliver with genuine encouragement',
      'Balance positive feedback with constructive suggestions',
      'Remember: the goal is to build confidence and growth, not tear down',
      'Avoid comparing to other speakers'
    ]
  },
  {
    id: 'general-evaluator',
    name: 'General Evaluator',
    role: 'General Evaluator',
    description: 'Evaluates the overall meeting and provides feedback on all roles and speakers.',
    script: `Toastmasters, tonight was [adjective - excellent/wonderful/energetic] meeting!

Let me share some observations about our program:

ON OUR SPEAKERS:
[Speaker 1] delivered a [type] speech on [topic]. I noticed [specific observation].
[Speaker 2] continued our theme by [observation].
[Any additional speaker feedback]

ON OUR ROLES:
Our [role names] did an excellent job [specific feedback on how they fulfilled their roles]. The meeting flowed smoothly because [observation about role execution].

ON THE MEETING OVERALL:
We accomplished [what was done]. Our theme of [theme] was well-integrated throughout. I noticed strong audience engagement when [observation].

HIGHLIGHTS:
One thing that stood out was [specific moment or achievement].

SUGGESTIONS:
For our next meeting, we might [constructive suggestion].

CLOSING THOUGHT:
Tonight demonstrated what makes Toastmasters special - a supportive community dedicated to growth. Keep up this excellent momentum!

Thank you.`,
    tips: [
      'Take notes throughout the entire meeting',
      'Comment on at least 2-3 speakers and all role players',
      'Recognize what went well overall',
      'Mention how the theme was reinforced',
      'Offer one constructive suggestion for the club',
      'Highlight participation and engagement',
      'Keep it to 3-4 minutes',
      'Balance appreciation with helpful observations',
      'Make specific observations, not generic praise',
      'End on an encouraging, positive note'
    ]
  },
  {
    id: 'ah-counter',
    name: 'Ah-Counter',
    role: 'Ah-Counter',
    description: 'Counts and reports verbal fillers like "um," "uh," "like," and "you know" used by speakers.',
    script: `Good evening! I'm [Your Name], your Ah-Counter for tonight.

My role is to track filler words - those little verbal crutches we all use sometimes, like "um," "uh," "like," "you know," "and," and other hesitations.

Tonight's results:

[Speaker 1]: [number] filler words. I noticed [specific filler used].
[Speaker 2]: [number] filler words. [Observation].
[Add any other speakers]

OBSERVATIONS:
- [Speaker with most: observation]
- [Speaker with improvement: observation]
- [Positive trend or challenge noticed]

OVERALL:
Using filler words is completely natural, especially when we're nervous. The good news? With practice and awareness, we can reduce them. I encourage everyone to record themselves and listen - that's the best way to catch them.

The speaker who was most aware of their fillers and made the most progress this period was [name].

Remember, every time we catch ourselves and pause instead of saying "um," that's a win!

Thank you.`,
    tips: [
      'Keep an accurate tally throughout the meeting',
      'Note the types of fillers used, not just count',
      'Don\'t shame speakers - everyone has fillers',
      'Present data in a light, encouraging way',
      'Highlight improvement from previous meetings if applicable',
      'Recognize the speaker(s) who performed best',
      'Keep it brief - 1-2 minutes maximum',
      'Be accurate in your counts',
      'Remember filler words include: um, uh, like, you know, and, so, well, etc.',
      'Mention that awareness is the first step to improvement'
    ]
  },
  {
    id: 'grammarian',
    name: 'Grammarian',
    role: 'Grammarian',
    description: 'Monitors the language used during the meeting and notes any grammar improvements.',
    script: `Good evening! I'm [Your Name], your Grammarian for tonight.

My role is to monitor the language used during our meeting and note grammar, vocabulary, and language usage.

WORDS OF THE EVENING:
I'd like to highlight [Word 1: definition]. We also heard some good uses of [Word 2] by [speaker name].

GRAMMAR OBSERVATIONS:
I noticed some excellent grammar tonight! For example, [positive observation]. However, I also heard a couple of areas where we could improve:

- [Speaker name] said "[incorrect phrase]" - the correct usage would be "[correct phrase]" because [brief explanation].
- Another common mistake tonight was [observation] - the correct way would be [correction].

VOCABULARY WINS:
[Speaker name] used a fantastic word: "[word]," which means [definition]. Great vocabulary choice!

OVERALL ASSESSMENT:
Tonight's language overall was [assessment - articulate/clear/engaging]. Keep striving for clarity and precision in your language - it strengthens your message.

Remember, language is how we connect with our audiences. The more precise and thoughtful we are with our words, the more impactful our communication becomes.

Thank you.`,
    tips: [
      'Listen actively for grammar usage throughout the meeting',
      'Note at least 2-3 correct uses of language to reinforce',
      'Choose 1-2 grammar improvements to mention constructively',
      'Focus on common mistakes, not nitpicking',
      'Be encouraging and educational, not critical',
      'Explain the rule or reasoning behind corrections',
      'Highlight interesting vocabulary choices',
      'Keep it to 2-3 minutes',
      'Use examples from the speakers themselves',
      'Remember: the goal is to improve communication, not embarrass'
    ]
  },
  {
    id: 'timer',
    name: 'Timer',
    role: 'Timer',
    description: 'Tracks and reports the time for all speeches and role performances.',
    script: `Good evening! I'm [Your Name], your Timer for tonight.

I tracked the time for all our speakers and role players. Here's how we did:

SPEECH TIMES:
[Speaker 1]: [minutes:seconds] - [status: on time/a bit short/over time]
[Speaker 2]: [minutes:seconds] - [status]
[Add all speakers with time frames: 5-7 minutes for prepared speeches, 1-2 minutes for impromptu, etc.]

ROLE TIMES:
[List approximate times for different roles as needed]

TIME MANAGEMENT NOTES:
- [Fastest speaker: name]
- [Most on time: observation]
- [Person closest to time limit: observation]

OVERALL:
Overall, we stayed right on schedule! Keeping to our time limits shows respect for our audience and fellow members. It also helps us improve our delivery efficiency - saying more with fewer words is a valuable skill.

Thank you.`,
    tips: [
      'Provide a visual timeline (green/yellow/red cards)',
      'Green: within time. Yellow: warning/time running out. Red: time\'s up',
      'Track time accurately with a visible timer',
      'Be clear about what time limits are for each segment',
      'Present data objectively without judgment',
      'Help speakers understand their time management',
      'Keep your own report brief - 1-2 minutes',
      'Make time limits clear at the start of the meeting',
      'Reward speakers who manage time well',
      'Note any speakers consistently over or under time'
    ]
  },
  {
    id: 'table-topics-master',
    name: 'Table Topics Master',
    role: 'Table Topics Master',
    description: 'Conducts impromptu speaking exercises (Table Topics), presenting topics and judging speakers.',
    script: `Good evening, Toastmasters! I'm [Your Name], your Table Topics Master.

Table Topics is where we get to practice speaking on the spot - no preparation, just you and your thoughts for 1-2 minutes. It's not about being perfect; it's about thinking quickly and speaking with confidence.

TONIGHT'S TOPICS:

[Speaker 1], your topic is: "[Topic - funny, thought-provoking, or creative question]"
You have [1-2] minutes. Begin!

[After speaker finishes]

Excellent! [Name], you really [specific observation].

---

[Speaker 2], your topic is: "[Topic]"
Begin!

[Repeat for each participant]

TABLE TOPICS REVIEW:
Tonight we heard some fantastic responses! I'd like to highlight:
- [Speaker name] who gave us [specific moment]
- [Speaker name] for [specific strength]

THE WINNER OF TABLE TOPICS TONIGHT:
Based on clarity of thought, organization, and delivery, the winner is [Speaker name]! [Brief reason]

Remember, Table Topics is one of the best ways to improve your quick-thinking and extemporaneous speaking skills. Embrace the challenge!

Thank you all for participating.`,
    tips: [
      'Prepare 5-7 topics suitable for your audience',
      'Make topics interesting, funny, or thought-provoking',
      'Keep topics open-ended so speakers have flexibility',
      'Use humor in your delivery to set a relaxed tone',
      'Make sure everyone knows they can pass if overwhelmed',
      'Track times and signal when time is up',
      'Provide encouraging feedback after each speaker',
      'Judge fairly and announce winner based on clear criteria',
      'Create a fun, non-threatening atmosphere',
      'Encourage speakers even if they struggle',
      'Sample topics: "If you could have dinner with anyone...", "What\'s your hidden talent?", "Describe your ideal vacation in 1 minute", "What\'s the best advice you\'ve ever received?"'
    ]
  }
];
