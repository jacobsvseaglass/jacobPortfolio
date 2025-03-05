// modalData.ts

export const modals = {
    "Strata": {
        title: "Strata",
        videoSrc: ["https://www.youtube.com/embed/be1vmLL5iI4"],
        text: "<p><i>Strata</i> is a unique and innovative Unreal 5 application that I created for my interactive and performance art client. <i>Topography</i> uses this technology and techniques in documentary film and interactive media to explore a set of overlapping philosophies of land-use in the area in a particular region in South Dakota in and around the Badlands National Park. Ultimately, this project will include a feature length documentary film, an installation at a major interactive festival, and series of performances, some of which are already underway.</p><p>As the prototype developer, I worked with project directors to create prototypes proving out the concept, visuals, and mechanics of the experience. I imported and optimized motion capture data and photogrammetry scans. I also developed custom shaders for environmental features and created several camera controllers that utilize a live-streaming toolkit. I built the user interface for performers to use, where they can select and customize key values and content elements in real-time.</p><p>In the latest phase, I collaborated with project directors to create prototypes for interactive technical installations adaptable for any setting or structure. I worked with Unreal virtual production tools allowing for real-time features in conjunction with needed assets and effects on the project to be conveyed in real-world spaces. I also designed tools for recording both media and audio outputs from Unreal for use in installations.</p>"
    },
    "Metasites": {
        title: "Metasites",
        videoSrc: ["https://www.youtube.com/embed/ujXNyhOZYFs"],
        text: "<p>\"Metasites is a modular 3D internet framework built by XLA, that provides individual creators with the capacity to deploy their Unreal Engine-built content and connect it to the XLA ecosystem of features and services. The presentation revealed high fidelity graphics core experience, instant access to the system in the cloud through the browser, OpenAI’s GPT-3.5 integration powering non-active characters and their behavior, virtual assistant IVEE, ability to semantically analyze text and generate 3D scenes in UE5 and many other features.\" – Alexey Savchenko, XLA Chief Product Office</p> <p>On the project, my main focus was developing a custom Plugin in Unreal 5 to handle all the information between our company’s propriety event-driven distributed game server for asynchronous games and the XLA’s Unreal client. The plugin was engineered specifically to give tools to developers to access critical mechanics required for making and running different Metasites. I worked on the quest handler, game AI behavior (including conversations, spawning, movement, and actions), an abstract inventory manager, and player tracking. All of these features required work both on the plugin in Unreal C++ and blueprints, as well as network code on the game server.</p>"
    },
    "Unannounced": {
        title: "Unannounced",
        videoSrc: ["none"],
        text: "<p>This unannounced project was a completed AI role-playing VR game prototype made for a major tech firm in Unity.</p><p>My main responsibility on this project was the procedural map generation, which required creating systems on both the company’s game server in JavaScript and the Unity client in C#. On the game server, I developed the map generator which handled creation of the maps from generated data in 2 different map scales. Using traditional procgen techniques combined with an AI generated art overlay API, this system created consistent maps that matched the desired gameplay and artistic goals of the prototype whenever a new procedural instance was made. I also dealt with storing the data in an accessible and compact fashion on the server. On the Unity Client, I programmed the functionalities to receive and display the data and handled the gameplay aspects of the map. I also created a tool in Unity to store and assign the relevant prototype’s art per each procedural instance. Finally, I created technical art and game transition states in regard to the map in game.</p>"
    },
    "BugBlastUltimate": {
        title: "Bug Blast Ultimate",
        videoSrc: ["https://www.youtube.com/embed/QkPhJ3ZGl7k", "https://www.youtube.com/embed/qre91nPNI8w", "https://www.youtube.com/embed/acukuFEKVp0"],
        captions: ["test", "test2"],
        text: "<h3>About</h3><p>Bug Blast Ultimate is a fast paced, style based neon FPS in which you have to fight through futuristic bugs with a large assortment of weaponry. Players must navigate procedurally generated levels, unlocking guns with limited ammo while wall jumping and dodging to rack up points and destroy a variety of enemies.</p> <p><h3>Contributions</h3></p><p>• Programmed a tool to create custom behavior trees in Unity.</p> <p> • Developed an editor tool to create blackboards.</p><p> • Used these tools in addition to an agent system I worked on to develop the core AI in the game.</p><p>• Ported the game to VR and adapted gameplay mechanics to function in virtual reality.</p>"
    },
    "Anesthesia": {
        title: "Anesthesia",
        videoSrc: ["https://www.youtube.com/embed/INXrB6y0kzY"],
        text: "<p>Anesthesia is an atmospheric 3D puzzle horror game in which a young patient undergoing surgery at a hospital faces her fears in a surreal dreamscape. Players must work their way through rooms in the hospital, collecting items and solving puzzles all while avoiding manifestations of her medical trauma and fears in the form of a monster.</p><p>The team was made up of 17 people, and we used the Unreal engine 4.26.2. As the producer, I had to work closely with each discipline to meet the expectations of each milestone and solve many team conflicts. I also had to optimize production tools and documents, as well as support teammates with tasks and scheduling. As a programmer, I developed the AI in the project and its behaviors and functions including movement, hearing, and sight. It was mainly done through Unreal’s C++, with some blueprints. My other contributions to the project included tools for designers and engineering of essential mechanics for gameplay such as the puzzle system.</p>"
    },
    "Dimlight": {
        title: "Dimlight Dungeon",
        videoSrc: ["https://www.youtube.com/embed/ZbRo7lcP5xA"],
        text: "<p>Dimlight Dungeon is a 2D dark fantasy side scrolling brawler where the player controls a reptilian monster and travels within the ruins of a once mighty, heroic fortress. There the player must battle through rooms of knights to reach the final room and reclaim their lost land.</p> <p>The team was made up of 13 people, and we built a custom C++ engine. In this project, I integrated the audio system FMOD studio and an input system into the custom C++ engine. Additionally, I engineered many gameplay mechanics including enemy behaviors. As a producer, I collaborated closely and supported each discipline to make sure expectations were met for every milestone.</p>"
    },
    "BugBlast": {
        title: "Bug Blast",
        videoSrc: ["https://www.youtube.com/embed/lH6-YQE0ZgY"],
        text: "<p>Bug Blast is a top-down twin-stick space shooter where the player controls a spaceship and must stand against the hive of alien space bugs that are invading our solar system. Soar through the stars and recover fallen space stations from the war, gaining new weapons and eventually facing the hive mind.</p><p>The team was made up of 5 people, and we used a custom C++ engine. My focus was mainly within behavior and controllers in the custom C++ engine. I developed the player controller with both mouse/keyboard and controller inputs and implemented swarm behavior and functionality of enemies. As the producer, I wrote and delegated the documentation and prepared the team to meet each milestone with success.</p>"
    },
    "Substeam": {
        title: "Substeam",
        videoSrc: ["https://www.youtube.com/embed/s7Rf6FapFuk"],
        text: "<p>Substeam is a 2D action platformer set in a post-apocalyptic underwater world. Fight your way through steam-punk robots and traverse through the dangerous landscape as you upgrade your armor and weapons in hope to overthrow the AI’s reign of terror.</p><p>The team was made up of 5 people, and we used the Zero Engine (Javascript based engine). I was the tech lead of the project and did most of the code as well as delegated out programming tasks accordingly. I programmed core back-end features such as the inventory, and developed gameplay mechanics including the player controller, enemy behaviors, environmental hazards, and the dynamic camera.</p>"
    },
    "IngFish": {
        title: "IngFish",
        videoSrc: ["link"],
        text: "GMTK 2023 Game Jam Submission. In this game you play a normal fishing scenario, but you are the fish! Survive as long as you can as you rack up points from eating baits and escaping danger. This project was made by a team of 3 people in one day on Unity."
    }
    // Add more modal data as needed
};
