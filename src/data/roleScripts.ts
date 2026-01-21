import { RoleScript } from '../types';

export const ROLE_SCRIPTS: RoleScript[] = [
  {
    id: 'toastmaster',
    name: 'Toastmaster of the Day',
    role: 'Toastmaster of the Day',
    description: 'Sets the tone for the meeting, introduces speakers, and keeps the program on schedule.',
    script: `Good morning, Toastmasters and guests!

Welcome to [Club Name] Toastmasters Club! I'm [Your Name], your Toastmaster of the Day.

This morning's theme is [Announce Theme if applicable]. We have an exciting agenda prepared for you.

Before we begin, I'd like to remind everyone that Toastmasters is a place where we can practice leadership, communication, and speaking skills in a supportive environment. Whether you're an experienced speaker or giving your first speech, everyone here is committed to helping you grow.

I want to thank [mention any special people - club officers, guests, sponsors]. Your presence makes our meeting special.

Now, let me introduce our first speaker... [Continue with program]

Remember to have fun, be supportive of your fellow Toastmasters, and take advantage of this wonderful opportunity to learn and grow together.

Let's make this morning a great meeting!`,
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
    script: `Good morning, Toastmasters!

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
    script: `Toastmasters, this morning was [adjective - excellent/wonderful/energetic] meeting!

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
This morning demonstrated what makes Toastmasters special - a supportive community dedicated to growth. Keep up this excellent momentum!

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
    script: `Greetings Mr./Madam Toastmaster, fellow Toastmasters, and guests. The purpose of the Ah-Counter is to note words and sounds that are used as a "crutch" or "pause filler" by anyone who speaks. During the meeting, I will listen for overused words, including and, well, but, so, and you know. I will also listen for filler sounds, including ah, um, and er. I will also note when a speaker repeats a word or phrase, such as "I, I" or "This means, this means." At the end of the meeting, I will report the number of times that each speaker used these expressions.

Thank you, Mr./Madam Toastmaster.

---

AH-COUNTER REPORT:

[Speaker 1]: [number] filler words
- Specific fillers: [list the types - e.g., "um" x3, "and" x2, "like" x1]

[Speaker 2]: [number] filler words
- Specific fillers: [list the types]

[Add any other speakers]

SUMMARY:
- Speaker with fewest fillers: [name] with [number]
- Speaker with most fillers: [name] with [number]
- Most common filler used today: [word]
- Most improved speaker: [name]

OBSERVATIONS:
Using filler words is completely natural, especially when we're nervous or thinking on our feet. The good news? With practice and awareness, we can reduce them. I encourage everyone to record themselves and listen - that's the best way to catch these patterns.

Remember, every time we catch ourselves and pause instead of saying "um," that's a win! Keep practicing, and your confidence will grow.

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
    script: `Mr./Madam Toastmaster, fellow Toastmasters, and guests. As Grammarian, it is my responsibility to pay close attention to all speakers, listening carefully to their language usage. I'll take note of any improper language, as well as any outstanding words, quotes, sayings, or thoughts. As Grammarian, it is also my duty to introduce the Word of the Day.

For today's meeting, the Word of the Day is: "[Word]" which means [Definition].

[Display the Word of the Day at the front of the room.]

An example of using the word is: [Example sentence or phrase using the word]

Each speaker is encouraged to use the Word of the Day. I will give the Grammarian's report when called upon during the meeting and also report on the usage of the Word of the Day.

Thank you, Mr./Madam Toastmaster.

---

GRAMMARIAN'S REPORT:

Date: [Date] | Word of the Day: [Word]

SPEAKERS WHO USED THE WORD OF THE DAY:
- [Speaker 1 name]
- [Speaker 2 name]
- [Add any others who used it]

LANGUAGE HIGHLIGHTS:

Outstanding Words, Quotes, or Sayings:
- [Speaker name]: "[Quote or phrase]" - This was excellent because [reason]
- [Another example if applicable]

LANGUAGE OBSERVATIONS:

Improper Language or Grammar Issues:
- [Speaker name]: Used "[incorrect phrase]" - The correct usage is "[correct phrase]" because [brief explanation]
- [Another example if applicable]

POSITIVE LANGUAGE USAGE:
- [Speaker name] demonstrated excellent vocabulary/grammar by [specific example]

OVERALL ASSESSMENT:
This morning's language usage was [assessment: articulate/clear/engaging/professional]. Keep working on clarity and precision in your communication - it strengthens your message and engages your audience more effectively.

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
    script: `Greetings Mr./Madam Toastmaster, fellow Toastmasters, and guests. As Timer, I will time the Table Topics speakers, formal speeches, and the evaluations. I will also alert each speaker of the time they have left, using the green, yellow, and red cards, which denote specific times remaining.

TABLE TOPICS SPEAKERS should limit their remarks to no more than 2 minutes:
- At 1 minute, I will raise the green card.
- At 1 minute and 30 seconds, I will raise the yellow card.
- At 2 minutes, I will raise the red card.

ICE BREAKER SPEECHES should be 4-6 minutes in length:
- At 4 minutes, I will raise the green card.
- At 5 minutes, I will raise the yellow card.
- At 6 minutes, I will raise the red card.

MOST OTHER SPEECHES should be 5-7 minutes in length:
- At 5 minutes, I will raise the green card.
- At 6 minutes, I will raise the yellow card.
- At 7 minutes, I will raise the red card.

INDIVIDUAL EVALUATIONS should be between 2-3 minutes:
- At 2 minutes, I will raise the green card.
- At 2 minutes and 30 seconds, I will raise the yellow card.
- At 3 minutes, I will raise the red card.

Thank you, Mr./Madam Toastmaster.

---

TIMER'S REPORT:

TABLE TOPICS SPEAKERS:
[Speaker 1]: [minutes:seconds] - [status: on time/exceeded]
[Speaker 2]: [minutes:seconds] - [status]

FORMAL SPEECHES:
[Speaker 1]: [minutes:seconds] - [status: on time/short/over]
[Speaker 2]: [minutes:seconds] - [status]

EVALUATIONS:
[Evaluator 1]: [minutes:seconds] - [status]
[Evaluator 2]: [minutes:seconds] - [status]

TIME MANAGEMENT SUMMARY:
- Fastest speaker: [name] - [time]
- Slowest speaker: [name] - [time]
- Most speakers on time: [count/percentage]
- Speakers who exceeded time: [names]

Overall, time management was [excellent/good/needs improvement]. Keep focusing on delivering your message within your allotted time - it's a valuable skill that shows respect for your audience and fellow speakers.

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
    script: `Greetings Mr./Madam Toastmaster, fellow Toastmasters, and guests. The purpose of the Topicsmaster is to facilitate Table Topics®, where guests and members will have the opportunity to practice their impromptu speaking. I will introduce a topic and call on speakers, who will be given two minutes to speak on the subject.

Thank you Mr./Madam Toastmaster.

---

TOPICSMASTER CHECKLIST:

Today's Meeting Theme: [Theme - if applicable]

TOPICS FOR TODAY:

[Topic 1]: [Description or question]
[Topic 2]: [Description or question]
[Topic 3]: [Description or question]
[Topic 4]: [Description or question]
[Topic 5]: [Description or question]

---

TABLE TOPICS SPEAKERS:

| Speaker's Name | Topic | Time |
|---|---|---|
| [Name 1] | [Topic] | [Minutes:Seconds] |
| [Name 2] | [Topic] | [Minutes:Seconds] |
| [Name 3] | [Topic] | [Minutes:Seconds] |
| [Name 4] | [Topic] | [Minutes:Seconds] |
| [Name 5] | [Topic] | [Minutes:Seconds] |

---

TOPICSMASTER'S REPORT:

SPEAKERS PARTICIPATED: [Number] speakers

HIGHLIGHTS:
- Best answer: [Speaker name] - [brief reason]
- Most creative response: [Speaker name] - [brief description]
- Best use of humor: [Speaker name]

OVERALL OBSERVATION:
Today's Table Topics demonstrated [observation about participation, creativity, or speaking quality]. Keep embracing these opportunities - impromptu speaking is one of the best ways to improve your quick thinking and delivery skills.

Thank you.`,
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
