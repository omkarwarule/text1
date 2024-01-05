<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">

    <!-- <script async src="https://unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js"></script> -->
    <script type="importmap">
        { "imports": { "three": "https://unpkg.com/three@v0.149.0/build/three.module.js", "three/addons/": "https://unpkg.com/three@v0.149.0/examples/jsm/" } }
    </script>

    <title>CSI Hackathon</title>
    <style>
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>

<body>
    <canvas id="gradient-canvas" data-js-darken-top data-transition-in></canvas>
    <!-- <div class="loading-screen">
        <div class="loader"></div>
    </div> -->
    <header>
        <a class="ms-logo" ><img src="./images/WhatsApp Image 2023-12-27 at 11.47.28 AM.jpeg" alt="" class="logo"></a>

        <ul>
            <li><a href="#sec-rules">Rules</a></li>
            <li><a href="#sec-timeline">Timeline</a></li>
            <li><a href="#Gallerycontainer">Contact</a></li>
        </ul>
        <div class="toggle_btn">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="dropdown_menu">
            <li><a href="#sec-rules">Rules</a></li>
            <li><a href="#sec-timeline">Timeline</a></li>
            <li><a href="#Gallerycontainer">Contact</a></li>
        </div>
    </header>


    <section id="basic-info">
        
        <div class="basic-info">

            <h1>COMPUTER SOCIETY OF</h1> 
            <h1>INDIA</h1> 
            <h3 class="text-above" style="margin-bottom:15px;">Welcomes you to</h3>
            <img  style="height: 18rem; margin-top: 30px;" src="./images/LOGO main.png" alt="">

            <div class="anim-text">
                <h1>TECHNO-FEA HACKATHON</h1>
                <h1 id="typed-text2"></h1>
            </div>

            <!-- <div class="information">
               
            </div> -->
        </div>
    </section>
    <section id="sec-rules">
        <h1 class="section-title">Event Rules and structure</h1>
        <div class="cards-container">
            <div class="card rules-card">
                <h1>Rules</h1>
                <ol>
                    <li class="list-element">
                        <span>1</span>
                        <p>
                            Teams will be given 4 problem statements to choose from and develop a solution in the 7 days time period.
                            <br> The solution may consist of an Application ( Web or Mobile ), Data visualization or a Design prototype.
                        </p>
                    </li>
                    <li class="list-element">
                        <span>2</span>
                        <p>
                            Participants are urged to craft innovative applications in line with our problem statement. Onsite mentors will provide guidance, ensuring teams create impactful solutions during the event.
                        </p>
                    </li>
                    <li class="list-element">
                        <span>3</span>
                        <p>
                            Each team must present their product to our onsite mentors during the hackathon and deliver a final presentation to the judging panel. The winner will be selected based on these presentations.
                        </p>
                    </li>
                 
                    <li class="list-element">
                        <span>4</span>
                        <p>
                            Winners will be chosen solely on discretion. In case of any disputes, the decision of the organizers and the judges will be final and binding to all.
                        </p>
                    </li>
                </ol>
            </div>
            </section>
           
        <section id="sec-timeline">

            <h2 class="section-title">Timeline</h2>
            <main>
                <article class="stop">
                    <div class="text">
                        <h2>Registration</h2>
                        <p>Last date : 20 january</p>
                        <p>Secure your spot in this exciting event and be part of the innovation revolution!</p>
                    </div>
                </article>
                <article class="stop">
                    <div class="text">
                        <h2>Problem Statement Announcement</h2>
                        <p>22 january</p>
                        <p>Get ready for the big reveal of this year's challenging problem statements that will test your skills and creativity.
                        </p>
                    </div>
                </article>
                <article class="stop">
                    <div class="text">
                        <h2>final presentation</h2>
                        <p>29 january </p>
                        <p>Join us with us and showcase your transform ideas into solutions in record time!
                        </p>
                    </div>
                </article>
                <article class="stop">
                    <div class="text">
                        <h2>Results</h2>
                        <p>29 january</p>
                        <p>Discover who will rise to the top and claim victory in our competition.</p>
                    </div>
                </article>
            </main>
    
        </section>


    <section id="sec-problem">
        <h2 class="section-title problem-title">Problem Statements</h2>
        <div class="wrap wrap--1">
            <div class="container container--1">
                <div class="example_text">
                    <h4 class="example__name">Problem Statement 1</h4>
                    <p class="example__desc">
                        <strong>
              Health
            </strong><br> You can build applications that help
            patients manage their health, or tools that
            assist healthcare providers in diagnosing
            and treating patients.
            </p>
                </div>
                <div class="example_img1"></div>
            </div>
        </div>

        <div class="wrap wrap--2">
            <div class="container container--2">
                <div class="example_text">
                    <h4 class="example__name">Problem Statement 2</h4>
                    <p class="example__desc">
                        <strong>Environment</strong><br>continuous increament in pollution due to unawareness of citizens and due to inappropriate waste management, come up with innovative solution for proper 
                        waste management or develope a unique interface(web or app) which can spread awareness about that.

                    </p>
                </div>
                <div class="example_img2"></div>
            </div>
        </div>

        <div class="wrap wrap--3">
            <div class="container container--3">
                <div class="example_text">
                    <h4 class="example__name">Problem Statement 3</h4>
                    <p class="example__desc">
                        <strong> finance</strong><br> craft Innovative solution for managing financial services with more secure and speedy transaction environment. 
                    </p>
                </div>
                <div class="example_img4"></div>
            </div>
        </div>
        <div class="wrap wrap--3">
            <div class="container container--3">
                <div class="example_text">
                    <h4 class="example__name">Problem Statement 4</h4>
                    <p class="example__desc">
                        <strong>Education </strong><br> Create an innovative tool to enhance remote collaboration in educational settings. This could be a platform that facilitates virtual group projects, a system for interactive online classrooms, or a unique approach to making remote learning more engaging and effective.

                    </p>
                </div>
                <div class="example_img3"></div>
            </div>
          
        </div>


    </section>

    </section>
    
    <section id="sec-gallery">
        <div id="Gallerycontainer">
        </div>
        <div class="visme_d" data-title="Expert Blog Subscription" data-url="ep39ywvm-expert-blog-subscription" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="8521">
        </div>
        <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
        
    </section>
    <section id="sec-links">
        
        <div class="footer-container">
            <div class="end-container"> 
            </div>
            <ul class="links">
                
                <li>
                    <a href="https://www.linkedin.com/company/csi-viit/"><i class="fab fa-linkedin-in icon"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/csiviit/"><i class="fa-brands fa-instagram icon"></i></a>
                </li>
            </ul>
        </div>
    </section>
    <script>
        const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function() {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen ?
                'fa-solid fa-xmark' :
                'fa-solid fa-bars'
        }
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollToPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
    <script src="./gradient.js"></script>
    <script src="interactive.js"></script>
    <script src="typed.js"></script>
    <script src="tilt_cards.js"></script>
    <script>
        

        let startX = null;
        let endX = null;

        function handleTouchStart(event) {
            startX = event.touches[0].clientX;
        }

        function handleTouchEnd(event) {
            if (startX === null) {
                return;
            }
            endX = event.changedTouches[0].clientX;
            handleSwipe();
            startX = null;
            endX = null;
        }

        function handleSwipe() {
            if (startX < endX) {
                let lists = document.querySelectorAll('.gallery-item');
                document.getElementById('slide').prepend(lists[lists.length - 1]);
            } else if (startX > endX) {
                let lists = document.querySelectorAll('.gallery-item');
                document.getElementById('slide').appendChild(lists[0]);
            }
        }

        document.getElementById('next').onclick = function() {
            let lists = document.querySelectorAll('.gallery-item');
            document.getElementById('slide').appendChild(lists[0]);
        };

        document.getElementById('prev').onclick = function() {
            let lists = document.querySelectorAll('.gallery-item');
            document.getElementById('slide').prepend(lists[lists.length - 1]);
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);


        //Footer

        gsap.registerPlugin(ScrollTrigger);

        const textElements = gsap.utils.toArray('.footer-text');

        textElements.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 100%',
                    end: 'center 20%',
                    scrub: true,
                },
            });
        });

        
    </script>
    <script>
        if (window.innerWidth > 1000) {
        
            var screenWidth = window.innerWidth;
            console.log(screenWidth);
            var script = document.createElement('script');
            script.src = 'index.js'; 
            script.type = 'module';

        
            document.body.appendChild(script);

        }
    </script>
</body>

</html>
