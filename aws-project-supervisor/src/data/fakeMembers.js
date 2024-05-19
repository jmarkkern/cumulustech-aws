// REMINDER THAT WE ARE USING THE FILE IN THE SERVER DATA FOLDER, THIS IS JUST USED TO FIRST DRAFT DEVELOP

const agentDetail = [
    {
        id: 1,
        name: "Jessica Lyn",
        imgURL:
            "https://www.shutterstock.com/image-vector/top-knot-bun-latina-pretty-260nw-2387965703.jpg",
        achievements: 5,
        level: 3,
        metrics: [
            { id: 1, m_name: "Avg Active Time", maxStreak: "5 days", currStreak: "3 days", rank: "10" },
            { id: 1.2, m_name: "Avg Handle Time", maxStreak: "4 days", currStreak: "1 days", rank: "25" },
            { id: 1.3, m_name: "Avg Non-Talk Time", maxStreak: "9 days", currStreak: "0 days", rank: "40" }
        ]
    },
    {
        id: 2,
        name: "Bauer Nor",
        imgURL:
            "https://www.shutterstock.com/image-vector/humble-smile-latino-guy-relaxed-260nw-2387965715.jpg",
        achievements: 10,
        level: 8,
        metrics: [
            { id: 2, m_name: "Avg Active Time", maxStreak: "20 days", currStreak: "13 days", rank: "1" },
            { id: 2.2, m_name: "Avg Handle Time", maxStreak: "12 days", currStreak: "7 days", rank: "10" },
            { id: 2.3, m_name: "Avg Non-Talk Time", maxStreak: "15 days", currStreak: "9 days", rank: "13" }
        ]
    },
    {
        id: 3,
        name: "Penop Ven",
        imgURL:
            "https://www.shutterstock.com/image-vector/eyeglasses-asian-grandma-relaxed-smiling-260nw-2393654147.jpg",
        achievements: 2,
        level: 1,
        metrics: [
            { id: 3, m_name: "Avg Active Time", maxStreak: "25 days", currStreak: "23 days", rank: "#" },
            { id: 3.2, m_name: "Avg Handle Time", maxStreak: "35 days", currStreak: "30 days", rank: "1" },
            { id: 3.3, m_name: "Avg Non-Talk Time", maxStreak: "19 days", currStreak: "19 days", rank: "28" }
        ]
    },
    {
        id: 4,
        name: "Wynn Opiz",
        imgURL:
            "https://www.shutterstock.com/image-vector/eyeglasses-asian-grandma-relaxed-smiling-260nw-2393654147.jpg",
        achievements: 6,
        level: 1,
        metrics: [
            { id: 4, m_name: "Avg Active Time", maxStreak: "3 days", currStreak: "3 days", rank: "32" },
            { id: 4.2, m_name: "Avg Handle Time", maxStreak: "35 days", currStreak: "17 days", rank: "5" },
            { id: 4.3, m_name: "Avg Non-Talk Time", maxStreak: "5 days", currStreak: "1 days", rank: "7" }
        ]
    }
    // , {
    //     id:5,
    //     name: "ummm Ven",
    //     imgURL:
    //     "https://www.shutterstock.com/image-vector/eyeglasses-asian-grandma-relaxed-smiling-260nw-2393654147.jpg",
    //     achievements: 2,
    //     metrics: [
    //         { id: 3, m_name: "Avg Active Time", streak: "13 days", rank: "4" },
    //         { id: 3.2, m_name: "Avg Handle Time", streak: "38 days", rank: "1" },
    //         { id: 3.3, m_name: "Avg Non-Talk Time", streak: "9 days", rank: "28" }
    //     ]
    // }
];

export default agentDetail;