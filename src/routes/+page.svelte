<script lang="ts">
    import WorkItem from '$lib/components/WorkItem.svelte';
    import { modals } from './modalData';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<!--javy said add this to help with mobile device scaling-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<main>
	<div class="startcontainer">
		<img src="/images/portrait.jpg" alt="Rounded Image" class="rounded-image" width="300px" >
		<div class="text-content">
		  <p>Jacob Burke is a passionate software engineer with expertise in C++, C#, and JavaScript. Raised on a sailboat while traveling the world, he developed a love for creating games that bridge cultural and language barriers. After earning his BS in Computer Science and Game Design from DigiPen Institute of Technology, he led multi-discipline teams to develop and ship various games. Jacob co-created Strata, an immersive live performance tool, and presented it at a film festival in Germany. He then joined Hexagram as a Gameplay Engineer, tackling technical and design challenges to create engaging experiences.</p>
		  <p>Jacob specializes in gameplay, tools, and engine programming. He also has additional skills in UI/UX design, gameplay design, and project management.</p>
	
		  <p>In his free time, Jacob enjoys sailing, painting, 3D printing, and taking care of his guinea pigs.</p>
		</div>
	</div>

	<section id="professional_projects">
	<div class="container" style="padding:16px 16px" id="professional_projects">
		<h2 class="center underline">Professional Projects</h2>
		<div class="flex-container" style="margin-top:32px">
			<WorkItem
				name="Strata"
				role="Prototype Developer"
				description="An Unreal application exploring overlapping land-use philosophies in the Badlands National Park, South Dakota, through documentary film and interactive media."
				videoSrc="/videos/strata_loop.webm"
				tags={["UE5", "C#", "Blueprints", "Virtual Production"]}
				modalText= {modals.Strata.text}
				modalUrls= {modals.Strata.videoSrc}
				modalTitle = {modals.Strata.title}
			/>
			<WorkItem
				name="XLA Metasites"
				role="Gameplay Engineer"
				description="Modular 3D internet framework that provides individual creators with the capacity to deploy their Unreal Engine-built content and connect it to the XLA ecosystem of features"
				videoSrc="/videos/metasites_loop.webm"
				tags={["UE5", "C#", "Blueprints", "AI"]}
				modalText= {modals.Metasites.text}
				modalUrls= {modals.Metasites.videoSrc}
				modalTitle = {modals.Metasites.title}
			/>
			<WorkItem
				name="Unannounced Project"
				role="Gameplay Engineer"
				description="This unannounced project was a completed AI role-playing VR game prototype made for a major tech firm in Unity."
				videoSrc="/videos/bugblast_loop.webm"
				tags={["Unity", "C++", "JavaScript", "AI"]}
				modalText= {modals.Unannounced.text}
				modalUrls= {modals.Unannounced.videoSrc}
				modalTitle = {modals.Unannounced.title}

			/>
			<WorkItem
				name="BugBlast"
				role="A very fun game rated very well"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
				videoSrc="/videos/bugblast_loop.webm"
				visibility="hidden"
			/>
		</div>
	</div>
	</section>

	<section id="academic_projects">
		<div class="container" style="padding:16px 16px" id="academic_projects">
			<h2 class="center underline">Academic Projects</h2>
			<div class="flex-container" style="margin-top:32px">
				<WorkItem
					name="Bug Blast Ultimate"
					role="AI Tools Programmer / VR Developer"
					description="Fast paced, style based neon FPS in which you have to fight through futuristic bugs with a large assortment of weaponry. BREAK"
					videoSrc="/videos/bugblastultimate_loop.webm"
					tags={["Unity", "C#"]}
					modalText= {modals.BugBlastUltimate.text}
					modalUrls= {modals.BugBlastUltimate.videoSrc}
					modalTitle = {modals.BugBlastUltimate.title}
				/>
				<WorkItem
					name="Anesthesia"
					role="Gameplay Programmer / Producer"
					description="Atmospheric 3D puzzle horror game in which a young patient undergoing surgery at a hospital faces her fears in a surreal dreamscape."
					videoSrc="/videos/anesthesia_loop.webm"
					tags={["Unreal", "C++"]}
					modalText= {modals.Anesthesia.text}
					modalUrls= {modals.Anesthesia.videoSrc}
					modalTitle = {modals.Anesthesia.title}
				/>
				<WorkItem
					name="Dimlight Dungeon"
					role="Audio Programmer / Producer"
					description="2D dark fantasy side scrolling brawler where the player controls a reptilian monster and travels within the ruins of a once mighty, heroic fortress."
					videoSrc="/videos/dimlight_loop.webm"
					tags={["Custom Engine", "C++"]}
					modalText= {modals.Dimlight.text}
					modalUrls= {modals.Dimlight.videoSrc}
					modalTitle = {modals.Dimlight.title}
				/>
				<WorkItem
					name="Bug Blast"
					role="Systems Programmer / Tech Lead"
					description="Top-down twin-stick space shooter where the player controls a spaceship and must stand against the hive of alien space bugs that are invading our solar system."
					videoSrc="/videos/bugblast_loop.webm"
					tags={["Custom Engine", "C++"]}
					modalText= {modals.BugBlast.text}
					modalUrls= {modals.BugBlast.videoSrc}
					modalTitle = {modals.BugBlast.title}
				/>
				<WorkItem
					name="Substeam"
					role="Gameplay Programmer / Producer"
					description="2D action platformer set in a post-apocalyptic underwater world. Fight your way through steam-punk robots and traverse through the dangerous landscape BREAK"
					videoSrc="/videos/substeam_loop.webm"
					tags={["Custom Engine", "Javascript"]}
					modalText= {modals.Substeam.text}
					modalUrls= {modals.Substeam.videoSrc}
					modalTitle = {modals.Substeam.title}
				/>
				<WorkItem
					name="Substeam"
					role="Gameplay Programmer / Producer"
					description="2D action platformer set in a post-apocalyptic underwater world. Fight your way through steam-punk robots and traverse through the dangerous landscape BREAK"
					videoSrc="/videos/bugblast_loop.webm"
					tags={["Custom Engine", "Javascript"]}
					visibility="hidden"
				/>
			</div>
	</div>
	</section>

	<section id="game_jams">
		<div class="container" style="padding:16px 16px" id="game_jams">
			<h2 class="center underline">Game Jams</h2>
			<div class="flex-container" style="margin-top:32px">
				<WorkItem
					name="Ingfish"
					role="Programmer"
					description="Play a normal fishing scenario, but you are the fish! "
					videoSrc="/videos/ingfish_loop.webm"
					modalText= {modals.IngFish.text}
					modalUrls= {modals.IngFish.videoSrc}
				/>
				<WorkItem
					name="Orc Ball"
					role="Programmer"
					description="Roll around orc time"
					videoSrc="/videos/orcball_loop.webm"
				/>
				<WorkItem
					name="This Website"
					role="Programmer"
					description="The whole website you are on right now"
					videoSrc="/videos/bugblast_loop.webm"
				/>
				<WorkItem
					name="This Website"
					role="Programmer"
					description="The whole website you are on right now"
					videoSrc="/videos/bugblast_loop.webm"
					visibility="hidden"
				/>
			</div>
	</div>
	</section>
</main>
