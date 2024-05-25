const testimonials = [
    {
      imgSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy course was incredibly detailed and well-structured. I now feel confident in my ability to handle governance and compliance tasks.",
      customerName: "Aisha Khan"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "Thanks to GRCademy, I’ve improved my risk management skills significantly. The materials were easy to follow and very informative.",
      customerName: "Luis Martinez"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I highly recommend GRCademy for anyone looking to get a solid foundation in compliance. The support team was also very helpful.",
      customerName: "Haruto Tanaka"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1534754118680-1a1b2da908bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy training program is fantastic. The course content is relevant and up-to-date, which helped me stay ahead in my job.",
      customerName: "Sophia Zhang"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517336714731-489689fdac63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I was amazed at how comprehensive the GRCademy course is. It covers everything you need to know about governance, risk, and compliance.",
      customerName: "Anil Patel"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1519337426502-0b6da44a624d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy made learning about GRC easy and enjoyable. The course materials were top-notch and very detailed.",
      customerName: "Natalia Ivanova"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote: "I’m very pleased with the GRCademy course. It’s given me the knowledge I need to advance my career in compliance and risk management.",
      customerName: "David Osei"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-0e69e6e210f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy training was a game-changer for me. The content was thorough and very relevant to my work.",
      customerName: "Emma Larsson"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-703ee2897e85?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote: "I found the GRCademy course to be very engaging and informative. It’s a must for anyone serious about GRC.",
      customerName: "Mei Chen"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      quote: "The insights I gained from GRCademy are invaluable. The course is well-structured and easy to follow.",
      customerName: "Carlos Fernandez"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-0e69e6e210f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy has exceeded my expectations. The training is comprehensive and the support is excellent.",
      customerName: "Fatima Mohammed"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-703ee2897e85?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote: "The GRCademy course provided me with practical skills that I could apply immediately in my job. Highly recommended!",
      customerName: "Liam O'Connor"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote: "The course content is very thorough and up-to-date. GRCademy is a fantastic resource for anyone in the field.",
      customerName: "Isabella Rossi"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-0e69e6e210f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy’s course has been instrumental in my professional development. The material is top-notch and very practical.",
      customerName: "Jamal Abdallah"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517336714731-489689fdac63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The training I received from GRCademy was comprehensive and easy to understand. It’s helped me advance in my career.",
      customerName: "Hannah Schmidt"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1534754118680-1a1b2da908bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy’s course has given me a competitive edge in my career. The knowledge and skills I gained are invaluable.",
      customerName: "Ravi Singh"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy training is very detailed and informative. It’s a great course for anyone looking to improve their GRC skills.",
      customerName: "Anna Kowalski"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I found the GRCademy course to be extremely valuable. The course materials were excellent and very comprehensive.",
      customerName: "Alejandro Gomez"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy has been a fantastic learning resource for me. The course is well-organized and very informative.",
      customerName: "Lena Müller"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The training provided by GRCademy is top-notch. The course content is very detailed and easy to follow.",
      customerName: "Mohamed El-Sayed"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-703ee2897e85?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote: "I highly recommend GRCademy for anyone looking to improve their GRC skills. The course materials are very thorough.",
      customerName: "Chloe Johnson"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy’s training has been incredibly beneficial to my career. The content is very relevant and practical.",
      customerName: "Lucas Pereira"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy course was very informative and well-organized. It’s a great resource for anyone in the field.",
      customerName: "Diana Popescu"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517336714731-489689fdac63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I’m very impressed with the quality of the GRCademy course. The materials are detailed and very informative.",
      customerName: "Rajesh Kumar"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1534754118680-1a1b2da908bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy training has been a great investment in my career. The course content is very relevant and practical.",
      customerName: "Maria Silva"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1519337426502-0b6da44a624d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I highly recommend GRCademy for anyone looking to improve their GRC knowledge. The course materials are excellent.",
      customerName: "Wei Li"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote: "The GRCademy course has been extremely valuable to my career. The materials are very detailed and easy to follow.",
      customerName: "Ethan Williams"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-703ee2897e85?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote: "I’m very pleased with the GRCademy training. The course content is comprehensive and very well-organized.",
      customerName: "Priya Mehta"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-0e69e6e210f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy course has exceeded my expectations. The materials are very thorough and easy to understand.",
      customerName: "Andreas Johansson"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517336714731-489689fdac63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy’s training has been incredibly beneficial to my career. The content is very relevant and practical.",
      customerName: "Elena Petrova"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1534754118680-1a1b2da908bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I’m very impressed with the quality of the GRCademy course. The materials are detailed and very informative.",
      customerName: "Nabil Ali"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1519337426502-0b6da44a624d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy training has been a great investment in my career. The course content is very relevant and practical.",
      customerName: "Yuki Yamamoto"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote: "I highly recommend GRCademy for anyone looking to improve their GRC knowledge. The course materials are excellent.",
      customerName: "Olivia Brown"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy course has been extremely valuable to my career. The materials are very detailed and easy to follow.",
      customerName: "Fernando Sousa"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I’m very pleased with the GRCademy training. The course content is comprehensive and very well-organized.",
      customerName: "Isabella Lopez"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy course has exceeded my expectations. The materials are very thorough and easy to understand.",
      customerName: "Omar Hassan"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1534754118680-1a1b2da908bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "GRCademy’s training has been incredibly beneficial to my career. The content is very relevant and practical.",
      customerName: "Sophie Dupont"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I’m very impressed with the quality of the GRCademy course. The materials are detailed and very informative.",
      customerName: "Ahmad Raza"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-0e69e6e210f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy training has been a great investment in my career. The course content is very relevant and practical.",
      customerName: "Tatiana Ivanova"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517336714731-489689fdac63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I highly recommend GRCademy for anyone looking to improve their GRC knowledge. The course materials are excellent.",
      customerName: "Jin Park"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1534754118680-1a1b2da908bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy course has been extremely valuable to my career. The materials are very detailed and easy to follow.",
      customerName: "Emily Taylor"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1519337426502-0b6da44a624d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I’m very pleased with the GRCademy training. The course content is comprehensive and very well-organized.",
      customerName: "Ahmed Youssef"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote: "The GRCademy course has exceeded my expectations. The materials are very thorough and easy to understand.",
      customerName: "Marta Novak"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551818253-703ee2897e85?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote: "GRCademy’s training has been incredibly beneficial to my career. The content is very relevant and practical.",
      customerName: "Daniel Brown"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517336714731-489689fdac63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "I’m very impressed with the quality of the GRCademy course. The materials are detailed and very informative.",
      customerName: "Amina Ahmed"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1534754118680-1a1b2da908bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote: "The GRCademy training has been a great investment in my career. The course content is very relevant and practical.",
      customerName: "Luca Ricci"
    }
  ];

export default testimonials;