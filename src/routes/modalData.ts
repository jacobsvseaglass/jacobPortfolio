// modalData.ts

export const modals = {
    "Strata": {
        title: "Strata",
        videoSrc: ["https://www.youtube.com/embed/be1vmLL5iI4"],
        buttons: [
            {
                text: "Headlands Center For The Arts 2022",
                img: "",
                link: "https://www.headlands.org/event/project-space-hannah-jayanti/"
            },
            {
                text: "transmediale 2023",
                img: "",
                link: "https://2023.transmediale.de/en/event/strata"
            },
        ],
        info: "Prototype Developer    |    Unreal Engine 5",
        about: "<i>Strata</i> is a unique and innovative Unreal 5 application that I created for my interactive and performance art client. <i>Topography</i> uses this technology and techniques in documentary film and interactive media to explore a set of overlapping philosophies of land-use in the area in a particular region in South Dakota in and around the Badlands National Park. Ultimately, this project will include a feature length documentary film, an installation at a major interactive festival, and series of performances, some of which are already underway.",
        text: "<p><h4>Phase One - Live Streaming Application</h4></p><p>• Collaborated with project directors to create prototypes proving out the concept, visuals, and mechanics of the experience.</p> • Imported and optimized motion capture data and photogrammetry scans. <p>• Developed custom shaders for environmental features and created several camera controllers that utilize a live-streaming toolkit.</p><p> • Built the user interface for performers to use, where they can select and customize key values and content elements in real-time.</p> <p><h4>Phase Two - Physical Installation</h4></p><p>• Collaborated with project directors to create prototypes for interactive technical installations adaptable for any setting or structure.</p><p>• Developed with Unreal virtual production tools allowing for real-time features in conjunction with needed assets and effects on the project to be conveyed in real-world spaces.</p><p>• Designed tools for recording both media and audio outputs from Unreal for use in installations.</p>"
    },
    "Metasites": {
        title: "Metasites",
        videoSrc: ["https://www.youtube.com/embed/ujXNyhOZYFs"],
        info: "Gameplay Engineer | Unreal Engine 5",
        about: "<p>\"Metasites is a modular 3D internet framework built by XLA, that provides individual creators with the capacity to deploy their Unreal Engine-built content and connect it to the XLA ecosystem of features and services. The presentation revealed high fidelity graphics core experience, instant access to the system in the cloud through the browser, OpenAI’s GPT-3.5 integration powering non-active characters and their behavior, virtual assistant IVEE, ability to semantically analyze text and generate 3D scenes in UE5 and many other features.\" – Alexey Savchenko, XLA Chief Product Office</p>",
        text: "<p>• Developed a custom Plugin in Unreal 5 to handle all the information between our company’s propriety event-driven distributed game server for asynchronous games and the XLA’s Unreal client.</p><p>• Engineered the plugin specifically to give tools to developers to access critical mechanics required for making and running different Metasites.</p><p>• Worked on the quest handler, game AI behavior (including conversations, spawning, movement, and actions), an abstract inventory manager, and player tracking. All of these features required work both on the plugin in Unreal C++ and blueprints, as well as network code on the game server.</p>"
    },
    "Unannounced": {
        title: "Unannounced",
        videoSrc: [],
        info: "Gameplay Engineer | Unity",
        about: "<p>This unannounced project was a completed AI role-playing VR game prototype made for a major tech firm in Unity.</p>",
        text: "<p>• Created procedural map generation, which required creating systems on both the company’s game server in JavaScript and the Unity client in C#.</p><p>• Developed map generator on the game server which handled creation of the maps from generated data in 2 different map scales.</p><p>• Applied traditional procgen techniques combined with an AI generated art overlay API, making a system to create consistent maps that matched the desired gameplay and artistic goals of the prototype whenever a new procedural instance was made.</p><p>• Handled storing the data in an accessible and compact fashion on the server.</p><p>• Programmed the functionalities on the Unity Client to receive and display the data and handled the gameplay aspects of the map.</p><p>• Created a tool in Unity to store and assign the relevant prototype’s art per each procedural instance.</p><p>• Designed technical art and game transition states in regard to the map in game.</p>"
    },
    "BugBlastUltimate": {
        title: "Bug Blast Ultimate",
        videoSrc: ["https://www.youtube.com/embed/QkPhJ3ZGl7k", "https://www.youtube.com/embed/qre91nPNI8w", "https://www.youtube.com/embed/acukuFEKVp0"],
        captions: ["test", "test2"],
        buttons: [
            {
                text: "Steam",
                img: "/images/steam.svg",
                link: ""
            }
        ],
        info: "AI Tools Programmer & VR Developer    |    Unity Engine 2021.3.17    |    5 People",
        about: "<p>Bug Blast Ultimate is a fast paced, style based neon FPS in which you have to fight through futuristic bugs with a large assortment of weaponry. Players must navigate procedurally generated levels, unlocking guns with limited ammo while wall jumping and dodging to rack up points and destroy a variety of enemies.</p> ",
        text: "<p>• Programmed a tool to create custom behavior trees in Unity.</p> <p> • Developed an editor tool to create blackboards.</p><p> • Used these tools in addition to an agent system I worked on to develop the core AI in the game.</p><p>• Ported the game to VR and adapted gameplay mechanics to function in virtual reality.</p>"
    },
    "Anesthesia": {
        title: "Anesthesia",
        videoSrc: ["https://www.youtube.com/embed/INXrB6y0kzY"],
        buttons: [
            {
                text: "Game Gallery",
                img: "/images/digipen.png",
                link: ""
            }
        ],
        info: "Gameplay Programmer & Producer | Unreal Engine 4.26.2 | 17 People",
        about: "<p>Anesthesia is an atmospheric 3D puzzle horror game in which a young patient undergoing surgery at a hospital faces her fears in a surreal dreamscape. Players must work their way through rooms in the hospital, collecting items and solving puzzles all while avoiding manifestations of her medical trauma and fears in the form of a monster.</p>",
        text: "<p>• Worked closely with each discipline to meet the expectations of each milestone and solve team conflicts.</p>• Optimized production tools and documents and supported teammates with tasks and scheduling.</p><p>• Developed the AI in the project and its behaviors and functions including movement, hearing, and sight using mainly Unreal’s C++, with some blueprints.</p><p>• Created tools for designers and engineered essential mechanics for gameplay including the puzzle system.<p>"
    },
    "Dimlight": {
        title: "Dimlight Dungeon",
        videoSrc: ["https://www.youtube.com/embed/ZbRo7lcP5xA"],
        buttons: [
            {
                text: "Steam",
                img: "/images/steam.svg",
                link: ""
            }
        ],
        info: "Audio Programer & Producer | Custom C++ Engine | 13 People",
        about: "<p>Dimlight Dungeon is a 2D dark fantasy side scrolling brawler where the player controls a reptilian monster and travels within the ruins of a once mighty, heroic fortress. There the player must battle through rooms of knights to reach the final room and reclaim their lost land.</p>",
        text: "<p>• Integrated the audio system FMOD studio and an input system into the custom C++ engine.</p><p>• Engineered many gameplay mechanics including enemy behaviors.</p><p>• Collaborated closely and supported each discipline to make sure expectations were met for every milestone.</p>"
    },
    "BugBlast": {
        title: "Bug Blast",
        videoSrc: ["https://www.youtube.com/embed/lH6-YQE0ZgY"],
        buttons: [
            {
                text: "Steam",
                img: "/images/steam.svg",
                link: ""
            }
        ],
        info: "Gameplay Programmer & Producer | Custom C++ Engine | 5 People",
        about: "<p>Bug Blast is a top-down twin-stick space shooter where the player controls a spaceship and must stand against the hive of alien space bugs that are invading our solar system. Soar through the stars and recover fallen space stations from the war, gaining new weapons and eventually facing the hive mind.</p>",
        text: "<p>• Worked on behavior and controllers in the custom C++ engine.</p><p>• Developed the player controller with both mouse/keyboard and controller inputs.</p><p>• Implemented swarm behavior and functionality of enemies.</p><p>• Wrote and delegated the documentation and prepared the team to meet each milestone with success.</p>"
    },
    "Substeam": {
        title: "Substeam",
        videoSrc: ["https://www.youtube.com/embed/s7Rf6FapFuk"],
        info: "Systems Programmer & Tech Lead | Zero Engine | 5 People",
        about: "<p>Substeam is a 2D action platformer set in a post-apocalyptic underwater world. Fight your way through steam-punk robots and traverse through the dangerous landscape as you upgrade your armor and weapons in hope to overthrow the AI’s reign of terror.</p>",
        text: "<p>• Worked as the tech lead for the project, taking on the majority of the coding responsibilities and delegating programming tasks efficiently to team members.</p><p> • Programmed core back-end features, including the inventory system.</p><p>• Developed various gameplay mechanics, such as the player controller.</p><p>• Implemented enemy behaviors and environmental hazards.</p><p>• Created a dynamic camera system to enhance gameplay.</p>"
    },
    "IngFish": {
        title: "IngFish",
        imgSrc: [],
        buttons: [
            {
                text: "Itch",
                img: "/images/itchio.svg",
                link: ""
            }
        ],
        about: "GMTK 2023 Game Jam Submission. In this game you play a normal fishing scenario, but you are the fish! Survive as long as you can as you rack up points from eating baits and escaping danger. This project was made by a team of 3 people in one day on Unity."
    },
    "OrcBall": {
        title: "OrcBall",
        imgSrc: [],
        buttons: [
            {
                text: "Itch",
                img: "/images/itchio.svg",
                link: ""
            }
        ],
        about: "GMTK 2024 Game Jam Submission. In this game you roll around the map as an orc trapped inside a ball, growing bigger as everything sticks to you. This project was made by a team of 4 people in one day on Unity."
    }
    // Add more modal data as needed
};
