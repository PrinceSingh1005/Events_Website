  import img1 from '../images/hackathon.png'
  const data={
  page:'home',
  event : null,
  logo : 'https://avatars0.githubusercontent.com/u/60884679?s=280&v=4',
  banner : 'banner.png',
  links:[
    { name: 'About Us', url: '#' },
    { name: 'Events', url: '#' },
    { name: 'Sponsors', url: '#' },
  ],
  events : [
    {
      id: 1,
      name: 'TCF Hackathon',
      date: 'October 1, 2023',
      venue: 'TCF Auditorium',
      description:
        'A 24-hour coding challenge where teams of up to four participants compete to create the most innovative and impactful solutions for real-world problems.',
      image:{img1},
      schedule: [
        { time: '9:00 AM', agenda: 'Registration and Breakfast' },
        { time: '10:00 AM', agenda: 'Opening Ceremony and Problem Statements' },
        { time: '11:00 AM', agenda: 'Hacking Begins' },
        { time: '1:00 PM', agenda: 'Lunch' },
        { time: '6:00 PM', agenda: 'Dinner' },
        { time: '9:00 PM', agenda: 'Fun Activities and Snacks' },
        { time: '12:00 AM', agenda: 'Midnight Surprise' },
        { time: '6:00 AM', agenda: 'Breakfast' },
        { time: '9:00 AM', agenda: 'Hacking Ends' },
        { time: '10:00 AM', agenda: 'Judging and Presentations' },
        { time: '12:00 PM', agenda: 'Closing Ceremony and Prizes' },
      ],
    }
  ],
  
};

  export default data

