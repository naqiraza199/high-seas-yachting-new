<template>
<div>
<NavbarSection />
    <!-- HERO SECTION -->
    <section class="hero">

        <!-- Hero Background Video -->
        <video class="hero-video-bg" autoplay muted loop playsinline>
            <source src="https://videos.pexels.com/video-files/36375958/15427525_2560_1440_50fps.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>

      

        <!-- Hero Content -->
        <div class="hero-content">
            <div class="welcome-pill">WELCOME TO</div>
            <h1 class="main-title">High Seas Yachting</h1>
            <p class="subtitle">Fort Lauderdale &amp; Miami Luxury Yacht Brokers</p>

            <div class="hero-buttons">
                <a href="#" class="btn btn-green">Get In Touch →</a>
                <a href="#" class="btn btn-outline">Browse All</a>
            </div>
        </div>

        <!-- Yacht Cards Slider -->
        <div class="yacht-slider-section">
            <div class="yacht-slider-container">
                <div class="yacht-slider">

                    <div class="yacht-card">
                        <div class="yacht-card-image">
                            <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/dutch--zeelander--55ft-0b2dc9cd/photos/2019%20Zeelander%2055%20Z55%20Dutch%20For%20Sale%20fort%20lauderdale%20Jordan%20Truchan%20High%20Seas%20Yachting%201.jpg"
                                alt="Zeelander 55">
                            <div class="yacht-card-overlay">
                                <a href="#" class="view-details-btn"><i class="fas fa-eye"></i> View Details</a>
                            </div>
                        </div>
                        <div class="yacht-card-info">
                            <h3 class="yacht-card-name">Zeelander 55</h3>
                            <p class="yacht-card-price">$2,495,000</p>
                        </div>
                    </div>

                    <div class="yacht-card">
                        <div class="yacht-card-image">
                            <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/LL%20On%20The%20Rocks%202012%20Azimut%2053%201.webp"
                                alt="Azimut 53">
                            <div class="yacht-card-overlay">
                                <a href="#" class="view-details-btn"><i class="fas fa-eye"></i> View Details</a>
                            </div>
                        </div>
                        <div class="yacht-card-info">
                            <h3 class="yacht-card-name">2012 Azimut 53</h3>
                            <p class="yacht-card-price">$895,000</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- ====================== EXPLORE YACHTS SECTION ====================== -->
    <section class="explore-section">
        <div class="explore-container">

            <div class="explore-grid">

                <!-- LEFT: Image Area -->
                <div class="image-column">
                    <div class="main-image-wrapper">
                        <img src="https://new.highseasyachting.com/assets/img/normal/new1.webp"
                            alt="Luxury Yachts in Ocean" class="main-image">

                        <!-- Experience Badge -->
                        <div class="experience-badge">
                            <span class="years">20+</span>
                            <span class="badge-text">Years Experience</span>
                        </div>

                        <!-- Overlapping Small Image -->
                        <div class="overlay-image">
                            <img src="https://new.highseasyachting.com/assets/img/normal/new2.webp"
                                alt="Yacht in Miami">
                        </div>
                    </div>
                </div>

                <!-- RIGHT: Content Area -->
                <div class="content-column">
                    <h2 class="section-title-explore">Explore Luxury Yachts <span>for Sale</span></h2>

                    <p class="description">
                        Browse our curated inventory of new and used yachts for sale in Fort Lauderdale, Miami and
                        beyond.
                        Each listing includes high-resolution images, detailed specifications, and professional
                        consultation.
                    </p>

                    <!-- Features -->
                    <div class="features">
                        <div class="feature-item">
                            <span class="check"><i class="fas fa-check"></i></span>
                            <span>High-Resolution Images</span>
                        </div>
                        <div class="feature-item">
                            <span class="check"><i class="fas fa-check"></i></span>
                            <span>Detailed Specifications</span>
                        </div>
                        <div class="feature-item">
                            <span class="check"><i class="fas fa-check"></i></span>
                            <span>Professional Consultation</span>
                        </div>
                    </div>

                    <!-- Call to Action -->
                    <div class="call-action">
                        <a href="tel:+19546861671" class="call-btn">
                            <i class="fas fa-phone phone-icon"></i>
                            <div>
                                <span class="call-text">CALL US NOW!</span><br>
                                <span class="phone-number">(954) 686-1671</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ====================== CHOOSE YOUR PERFECT YACHT SECTION ====================== -->
    <section class="yachts-section">
        <div class="yachts-container">
            <div class="section-header">
                <span class="tag">For Sale</span>
                <h2 class="section-title-yacht">Choose Your Perfect Yacht</h2>
                <p class="yachts-subtitle">Discover our exclusive collection of yachts available for sale</p>
            </div>

            <div class="yachts-grid">

                <!-- Yacht Card 1 -->
                <div class="yacht-card">
                    <div class="yacht-card-imageee">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/2016%20Azimut%2076%20Captial%20For%20Sale%20fort%20lauderdale%20Bobby%20Giancola%201.webp"
                            alt="Captial">
                        <div class="yacht-card-overlay">
                            <a href="#" class="yacht-view-btn"><i class="fas fa-eye"></i> View Details</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="yacht-name">Captial</h3>
                        <div class="specs">
                            <div class="spec-box">
                                <span class="spec-label">YEAR</span>
                                <span class="spec-value">2016</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">LENGTH</span>
                                <span class="spec-value">76 ft</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">MAKE</span>
                                <span class="spec-value">Azimut</span>
                            </div>
                        </div>
                        <div class="price">$2,600,000</div>
                        <button class="view-btn"><i class="fas fa-search"></i> View Details</button>
                    </div>
                </div>

                <!-- Yacht Card 2 -->
                <div class="yacht-card">
                    <div class="yacht-card-imageee">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/DUKE%202018%20Cruisers%2050%201.jpg"
                            alt="DUKE">
                        <div class="yacht-card-overlay">
                            <a href="#" class="yacht-view-btn"><i class="fas fa-eye"></i> View Details</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="yacht-name">DUKE</h3>
                        <div class="specs">
                            <div class="spec-box">
                                <span class="spec-label">YEAR</span>
                                <span class="spec-value">2018</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">LENGTH</span>
                                <span class="spec-value">50 ft</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">MAKE</span>
                                <span class="spec-value">Cruisers</span>
                            </div>
                        </div>
                        <div class="price">$799,000</div>
                        <button class="view-btn"><i class="fas fa-search"></i> View Details</button>
                    </div>
                </div>

                <!-- Yacht Card 3 -->
                <div class="yacht-card">
                    <div class="yacht-card-imageee">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/dutch--zeelander--55ft-0b2dc9cd/photos/2019%20Zeelander%2055%20Z55%20Dutch%20For%20Sale%20fort%20lauderdale%20Jordan%20Truchan%20High%20Seas%20Yachting%201.jpg"
                            alt="Dutch">
                        <div class="yacht-card-overlay">
                            <a href="#" class="yacht-view-btn"><i class="fas fa-eye"></i> View Details</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="yacht-name">Dutch</h3>
                        <div class="specs">
                            <div class="spec-box">
                                <span class="spec-label">YEAR</span>
                                <span class="spec-value">2019</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">LENGTH</span>
                                <span class="spec-value">55 ft</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">MAKE</span>
                                <span class="spec-value">Zeelander</span>
                            </div>
                        </div>
                        <div class="price">$2,700,000</div>
                        <button class="view-btn"><i class="fas fa-search"></i> View Details</button>
                    </div>
                </div>

                <!-- Yacht Card 4 -->
                <div class="yacht-card">
                    <div class="yacht-card-imageee">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/LL%20On%20The%20Rocks%202012%20Azimut%2053%201.webp"
                            alt="LL On The Rocks">
                        <div class="yacht-card-overlay">
                            <a href="#" class="yacht-view-btn"><i class="fas fa-eye"></i> View Details</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="yacht-name">LL On The Rocks</h3>
                        <div class="specs">
                            <div class="spec-box">
                                <span class="spec-label">YEAR</span>
                                <span class="spec-value">2012</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">LENGTH</span>
                                <span class="spec-value">53 ft</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">MAKE</span>
                                <span class="spec-value">Azimut</span>
                            </div>
                        </div>
                        <div class="price">$475,000</div>
                        <button class="view-btn"><i class="fas fa-search"></i> View Details</button>
                    </div>
                </div>

                <!-- Yacht Card 5 -->
                <div class="yacht-card">
                    <div class="yacht-card-imageee">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/(Elise)%20(2017)%20(Fjord)%20(40)%203.jpg"
                            alt="Elise">
                        <div class="yacht-card-overlay">
                            <a href="#" class="yacht-view-btn"><i class="fas fa-eye"></i> View Details</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="yacht-name">Elise</h3>
                        <div class="specs">
                            <div class="spec-box">
                                <span class="spec-label">YEAR</span>
                                <span class="spec-value">2017</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">LENGTH</span>
                                <span class="spec-value">40 ft</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">MAKE</span>
                                <span class="spec-value">Fjord</span>
                            </div>
                        </div>
                        <div class="price">$470,000</div>
                        <button class="view-btn"><i class="fas fa-search"></i> View Details</button>
                    </div>
                </div>

                <!-- Yacht Card 6 -->
                <div class="yacht-card">
                    <div class="yacht-card-imageee">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/Un-Reel%202004%20Jupiter%2031%20Verado%201.jpg"
                            alt="Un-Reel">
                        <div class="yacht-card-overlay">
                            <a href="#" class="yacht-view-btn"><i class="fas fa-eye"></i> View Details</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="yacht-name">Un-Reel</h3>
                        <div class="specs">
                            <div class="spec-box">
                                <span class="spec-label">YEAR</span>
                                <span class="spec-value">2004</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">LENGTH</span>
                                <span class="spec-value">31 ft</span>
                            </div>
                            <div class="spec-box">
                                <span class="spec-label">MAKE</span>
                                <span class="spec-value">Jupiter</span>
                            </div>
                        </div>
                        <div class="price">$169,000</div>
                        <button class="view-btn"><i class="fas fa-search"></i> View Details</button>
                    </div>
                </div>

            </div>

            <div class="view-more">
                <a href="#" class="view-more-btn"><i class="fas fa-ship"></i> View More Yachts</a>
            </div>
        </div>
    </section>


    <!-- ====================== POPULAR DESTINATIONS SECTION ====================== -->
    <section class="destinations-section">
        <div class="destinations-container">
            <div class="section-header">
                <span class="destinations-subtitle">Popular Destinations</span>
                <h2 class="section-title">Top Charter Destinations</h2>
            </div>

            <div class="destinations-slider" id="destinationsSlider">

                <!-- Destination Card 1 - Maldives (Featured) -->
                <div class="destination-card featured">
                    <div class="destination-card-image">
                        <img src="https://new.highseasyachting.com/assets/img/destination/destination_1_5.jpg"
                            alt="Maldives">
                        <div class="destination-card-overlay">
                            <a href="#" class="explore-btn"><i class="fas fa-compass"></i> Explore Now</a>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="destination-name">Maldives</h3>
                        <p class="listings"><i class="fas fa-ship"></i> 15 Listings</p>
                    </div>
                </div>

                <!-- Destination Card 2 -->
                <div class="destination-card">
                    <div class="destination-card-image">
                        <img src="https://new.highseasyachting.com/assets/img/destination/destination_1_4.jpg"
                            alt="Bahamas">
                        <div class="destination-card-overlay">
                            <a href="#" class="explore-btn"><i class="fas fa-compass"></i> Explore Now</a>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="destination-name">Bahamas</h3>
                        <p class="listings"><i class="fas fa-ship"></i> 12 Listings</p>
                    </div>
                </div>

                <!-- Destination Card 3 -->
                <div class="destination-card">
                    <div class="destination-card-image">
                        <img src="https://new.highseasyachting.com/assets/img/destination/destination_1_3.jpg"
                            alt="Greek Islands">
                        <div class="destination-card-overlay">
                            <a href="#" class="explore-btn"><i class="fas fa-compass"></i> Explore Now</a>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="destination-name">Greek Islands</h3>
                        <p class="listings"><i class="fas fa-ship"></i> 18 Listings</p>
                    </div>
                </div>

                <!-- Destination Card 4 -->
                <div class="destination-card">
                    <div class="destination-card-image">
                        <img src="https://new.highseasyachting.com/assets/img/destination/destination_1_2.jpg"
                            alt="French Riviera">
                        <div class="destination-card-overlay">
                            <a href="#" class="explore-btn"><i class="fas fa-compass"></i> Explore Now</a>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="destination-name">French Riviera</h3>
                        <p class="listings"><i class="fas fa-ship"></i> 9 Listings</p>
                    </div>
                </div>

                <!-- Destination Card 5 -->
                <div class="destination-card">
                    <div class="destination-card-image">
                        <img src="https://new.highseasyachting.com/assets/img/destination/destination_1_1.jpg"
                            alt="Caribbean">
                        <div class="destination-card-overlay">
                            <a href="#" class="explore-btn"><i class="fas fa-compass"></i> Explore Now</a>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="destination-name">Caribbean</h3>
                        <p class="listings"><i class="fas fa-ship"></i> 22 Listings</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ====================== OUR TEAM SECTION ====================== -->
    <section class="hs-team-section">
        <div class="hs-team-container">
            <div class="hs-team-header">
                <span class="hs-team-tag">Our Team</span>
                <h2 class="hs-team-title">Meet Our Expert Brokers</h2>
            </div>

            <div class="hs-team-slider-wrapper">
                <button class="hs-team-arrow hs-team-prev" id="hsTeamPrev">
                    <i class="fas fa-chevron-left"></i>
                </button>

                <div class="hs-team-slider" id="hsTeamSlider">

                    <!-- Team Member 1 -->
                    <div class="hs-team-card">
                        <div class="hs-team-card-image">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
                                alt="David Pemberty">
                            <div class="hs-team-card-overlay">
                                <a href="#" class="hs-team-view-btn-overlay"><i class="fas fa-user"></i> View Details</a>
                            </div>
                        </div>
                        <div class="hs-team-card-info">
                            <h3>David Pemberty</h3>
                            <p class="hs-team-role">Sales</p>
                            <div class="hs-team-contact">
                                <a href="#"><i class="fas fa-envelope"></i></a>
                                <a href="#"><i class="fas fa-phone"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Team Member 2 -->
                    <div class="hs-team-card">
                        <div class="hs-team-card-image">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800"
                                alt="Lola Gilder">
                            <div class="hs-team-card-overlay">
                                <a href="#" class="hs-team-view-btn-overlay"><i class="fas fa-user"></i> View Details</a>
                            </div>
                        </div>
                        <div class="hs-team-card-info">
                            <h3>Lola Gilder</h3>
                            <p class="hs-team-role">Admin</p>
                            <div class="hs-team-contact">
                                <a href="#"><i class="fas fa-envelope"></i></a>
                                <a href="#"><i class="fas fa-phone"></i></a>
                            </div>
                        </div>
                    </div>

                     <!-- Team Member 4 -->
                    <div class="hs-team-card">
                        <div class="hs-team-card-image">
                            <img src="https://www.photomaintenant.fr/_next/image?url=https%3A%2F%2Fpayload-photomaintenant.vercel.app%2Fapi%2Fstl%2Ffile%2Fphoto-professionnelle-ia-homme-fond-immeuble-costume-noir.webp&w=3840&q=75"
                                alt="Sebastian Escobar">
                            <div class="hs-team-card-overlay">
                                <a href="#" class="hs-team-view-btn-overlay"><i class="fas fa-user"></i> View Details</a>
                            </div>
                        </div>
                        <div class="hs-team-card-info">
                            <h3>Sebastian Escobar</h3>
                            <p class="hs-team-role">Sales/Management</p>
                            <div class="hs-team-contact">
                                <a href="#"><i class="fas fa-envelope"></i></a>
                                <a href="#"><i class="fas fa-phone"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Team Member 3 -->
                    <div class="hs-team-card">
                        <div class="hs-team-card-image">
                            <img src="https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg"
                                alt="Yali Goldenberg">
                            <div class="hs-team-card-overlay">
                                <a href="#" class="hs-team-view-btn-overlay"><i class="fas fa-user"></i> View Details</a>
                            </div>
                        </div>
                        <div class="hs-team-card-info">
                            <h3>Yali Goldenberg</h3>
                            <p class="hs-team-role">Sales/Charter</p>
                            <div class="hs-team-contact">
                                <a href="#"><i class="fas fa-envelope"></i></a>
                                <a href="#"><i class="fas fa-phone"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Team Member 4 -->
                    <div class="hs-team-card">
                        <div class="hs-team-card-image">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800"
                                alt="Sebastian Escobar">
                            <div class="hs-team-card-overlay">
                                <a href="#" class="hs-team-view-btn-overlay"><i class="fas fa-user"></i> View Details</a>
                            </div>
                        </div>
                        <div class="hs-team-card-info">
                            <h3>Sebastian Escobar</h3>
                            <p class="hs-team-role">Sales/Management</p>
                            <div class="hs-team-contact">
                                <a href="#"><i class="fas fa-envelope"></i></a>
                                <a href="#"><i class="fas fa-phone"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                <button class="hs-team-arrow hs-team-next" id="hsTeamNext">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>

            <!-- Dots -->
            <div class="hs-team-dots" id="hsTeamDots"></div>

            <div class="hs-team-view-all">
                <a href="#" class="hs-team-view-btn"><i class="fas fa-users" style="margin-right: 10px;"></i> View All Team Members</a>
            </div>
        </div>
    </section>

    <!-- ====================== CONTACT US SECTION ====================== -->
    <section class="hs-contact-section">
        <div class="hs-contact-container">

            <div class="hs-contact-grid">

                <!-- LEFT SIDE - INFORMATION -->
                <div class="hs-contact-info">
                    <span class="hs-contact-tag">Get In Touch</span>
                    <h2 class="hs-contact-title">Let's Build Our Relationship</h2>
                    <p class="hs-contact-desc">
                        Have a question or ready to find your dream yacht? 
                        Reach out and our team will get back to you promptly.
                    </p>

                    <!-- Contact Cards -->
                    <div class="hs-contact-cards">

                        <div class="hs-contact-card">
                            <div class="hs-contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="hs-contact-details">
                                <span class="hs-label">Call</span>
                                <a href="tel:+19546861671" class="hs-value">(954) 686-1671</a>
                            </div>
                        </div>

                        <div class="hs-contact-card">
                            <div class="hs-contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="hs-contact-details">
                                <span class="hs-label">Email</span>
                                <a href="mailto:Sales@HighSeasYachting.com" class="hs-value">Sales@HighSeasYachting.com</a>
                            </div>
                        </div>

                        <div class="hs-contact-card">
                            <div class="hs-contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="hs-contact-details">
                                <span class="hs-label">Location</span>
                                <span class="hs-value">Fort Lauderdale, FL</span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- RIGHT SIDE - CONTACT FORM -->
                <div class="hs-contact-form-wrapper">
                    <div class="hs-contact-form">
                        <h3 class="hs-form-title">Contact Us</h3>

                        <form id="hsContactForm">
                            <div class="hs-form-row">
                                <div class="hs-form-group">
                                    <label>First Name <span>*</span></label>
                                    <input type="text" placeholder="First Name" required>
                                </div>
                                <div class="hs-form-group">
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" placeholder="Last Name" required>
                                </div>
                            </div>

                            <div class="hs-form-row">
                                <div class="hs-form-group">
                                    <label>Email <span>*</span></label>
                                    <input type="email" placeholder="your@email.com" required>
                                </div>
                                <div class="hs-form-group">
                                    <label>Phone</label>
                                    <input type="tel" placeholder="(000) 000-0000">
                                </div>
                            </div>

                            <div class="hs-form-group">
                                <label>Interest <span>*</span></label>
                                <select required>
                                    <option value="">Select Interest</option>
                                    <option value="purchase">Yacht Purchase</option>
                                    <option value="charter">Yacht Charter</option>
                                    <option value="sale">Sell My Yacht</option>
                                    <option value="dockage">Dockage</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="hs-form-row">
                                <div class="hs-form-group">
                                    <label>City</label>
                                    <input type="text" placeholder="Your City">
                                </div>
                                <div class="hs-form-group">
                                    <label>Budget</label>
                                    <input type="text" placeholder="e.g. $500,000">
                                </div>
                            </div>

                            <div class="hs-form-group">
                                <label>Message</label>
                                <textarea placeholder="Message / Special Notes" rows="4"></textarea>
                            </div>

                            <button type="submit" class="hs-submit-btn">
                                <i class="fas fa-paper-plane"></i> Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ====================== BLOG SECTION ====================== -->
    <section class="hs-blog-section">
        <div class="hs-blog-container">

            <div class="hs-blog-header">
                <div class="hs-blog-header-left">
                    <span class="hs-blog-tag">Blog & Articles</span>
                    <h2 class="hs-blog-title">Latest News From HSY</h2>
                </div>

                <a href="#" class="hs-see-more-btn">
                    See All Articles
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>

            <div class="hs-blog-grid">

                <!-- Large Featured Blog -->
                <div class="hs-blog-card hs-featured-card">
                    <div class="hs-blog-image">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/blog-images/blog-images/1773055295014-lzt0b5.jpg"
                            alt="Luxury Yacht">
                    </div>
                    <div class="hs-blog-content">
                        <div class="hs-blog-meta">
                            <span><i class="fas fa-calendar-alt"></i> Mar 9, 2026</span>
                            <span><i class="fas fa-clock"></i> 5 min read</span>
                        </div>
                        <h3 class="hs-blog-post-title">The Ultimate Guide to Luxury Yachts: Everything You Need to Know</h3>
                        <a href="#" class="hs-read-more">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Blog Card 2 -->
                <div class="hs-blog-card">
                    <div class="hs-blog-image">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/blog-images/blog-images/1773054665901-s769o.jpg"
                            alt="Ocean Wave">
                    </div>
                    <div class="hs-blog-content">
                        <div class="hs-blog-meta">
                            <span><i class="fas fa-calendar-alt"></i> Mar 8, 2026</span>
                            <span><i class="fas fa-clock"></i> 3 min read</span>
                        </div>
                        <h3 class="hs-blog-post-title">Top 5 Destinations for Yacht Lovers</h3>
                        <a href="#" class="hs-read-more">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Blog Card 3 -->
                <div class="hs-blog-card">
                    <div class="hs-blog-image">
                        <img src="https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/blog-images/blog-images/1773054720347-g0za2k.jpg"
                            alt="Sunset Beach">
                    </div>
                    <div class="hs-blog-content">
                        <div class="hs-blog-meta">
                            <span><i class="fas fa-calendar-alt"></i> Mar 7, 2026</span>
                            <span><i class="fas fa-clock"></i> 4 min read</span>
                        </div>
                        <h3 class="hs-blog-post-title">How to Choose the Perfect Yacht for Your Needs</h3>
                        <a href="#" class="hs-read-more">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <FooterSection />
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import FooterSection from '../components/FooterSection.vue';
import NavbarSection from '../components/NavbarSection.vue';

onMounted(() => {
    const style = document.createElement('style');
    style.textContent = `
      .slider-nav-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
      }
      .slider-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: white;
        border: none;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .slider-btn:hover {
        background: #416B3C;
        color: white;
        transform: scale(1.1);
      }
      .slider-btn i {
        color: #1a3320;
        font-size: 1rem;
        transition: color 0.3s ease;
      }
      .slider-btn:hover i {
        color: white;
      }
      @media (max-width: 768px) {
        .slider-nav-buttons {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);

    // Yacht Slider (in hero section)
    const yachtSliderContainer = document.querySelector('.yacht-slider-container');
    
    if (yachtSliderContainer) {
        // Enable mouse drag scrolling for yacht slider
        let yachtIsDown = false;
        let yachtStartX;
        let yachtScrollLeft;

        yachtSliderContainer.addEventListener('mousedown', (e) => {
            yachtIsDown = true;
            yachtSliderContainer.style.cursor = 'grabbing';
            yachtStartX = e.pageX - yachtSliderContainer.offsetLeft;
            yachtScrollLeft = yachtSliderContainer.scrollLeft;
        });

        yachtSliderContainer.addEventListener('mouseleave', () => {
            yachtIsDown = false;
            yachtSliderContainer.style.cursor = 'grab';
        });

        yachtSliderContainer.addEventListener('mouseup', () => {
            yachtIsDown = false;
            yachtSliderContainer.style.cursor = 'grab';
        });

        yachtSliderContainer.addEventListener('mousemove', (e) => {
            if (!yachtIsDown) return;
            e.preventDefault();
            const x = e.pageX - yachtSliderContainer.offsetLeft;
            const walk = (x - yachtStartX) * 2;
            yachtSliderContainer.scrollLeft = yachtScrollLeft - walk;
        });
    }

    // Team Slider
    const hsSlider = document.getElementById('hsTeamSlider');
    const hsPrev = document.getElementById('hsTeamPrev');
    const hsNext = document.getElementById('hsTeamNext');
    const hsDotsContainer = document.getElementById('hsTeamDots');

    if (hsSlider && hsPrev && hsNext && hsDotsContainer) {
        let hsCurrentIndex = 0;
        const hsCardWidth = 310;

        function hsCreateDots() {
            hsDotsContainer.innerHTML = '';
            const total = hsSlider.children.length;
            for (let i = 0; i < total - 1; i++) {
                const dot = document.createElement('div');
                dot.classList.add('hs-team-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    hsCurrentIndex = i;
                    hsUpdateSlider();
                });
                hsDotsContainer.appendChild(dot);
            }
        }

        function hsUpdateSlider() {
            hsSlider.scrollLeft = hsCurrentIndex * hsCardWidth;
            const dots = hsDotsContainer.querySelectorAll('.hs-team-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === hsCurrentIndex);
            });
        }

        hsNext.addEventListener('click', () => {
            const max = hsSlider.scrollWidth - hsSlider.clientWidth;
            if (hsSlider.scrollLeft >= max - 50) {
                hsCurrentIndex = 0;
            } else {
                hsCurrentIndex++;
            }
            hsUpdateSlider();
        });

        hsPrev.addEventListener('click', () => {
            if (hsCurrentIndex === 0) {
                hsCurrentIndex = Math.floor(hsSlider.scrollWidth / hsCardWidth) - 2;
            } else {
                hsCurrentIndex--;
            }
            hsUpdateSlider();
        });

        // Enable drag scrolling for team slider
        let hsIsDown = false;
        let hsStartX;
        let hsScrollLeft;

        hsSlider.addEventListener('mousedown', (e) => {
            hsIsDown = true;
            hsSlider.style.cursor = 'grabbing';
            hsStartX = e.pageX - hsSlider.offsetLeft;
            hsScrollLeft = hsSlider.scrollLeft;
        });

        hsSlider.addEventListener('mouseleave', () => {
            hsIsDown = false;
            hsSlider.style.cursor = 'grab';
        });

        hsSlider.addEventListener('mouseup', () => {
            hsIsDown = false;
            hsSlider.style.cursor = 'grab';
        });

        hsSlider.addEventListener('mousemove', (e) => {
            if (!hsIsDown) return;
            e.preventDefault();
            const x = e.pageX - hsSlider.offsetLeft;
            const walk = (x - hsStartX) * 2;
            hsSlider.scrollLeft = hsScrollLeft - walk;
        });

        hsCreateDots();
        hsUpdateSlider();
    }

    // Destinations Slider
    const destinationsSlider = document.getElementById('destinationsSlider');
    
    if (destinationsSlider) {
        let destIsDown = false;
        let destStartX;
        let destScrollLeft;

        destinationsSlider.addEventListener('mousedown', (e) => {
            destIsDown = true;
            destinationsSlider.style.cursor = 'grabbing';
            destStartX = e.pageX - destinationsSlider.offsetLeft;
            destScrollLeft = destinationsSlider.scrollLeft;
        });

        destinationsSlider.addEventListener('mouseleave', () => {
            destIsDown = false;
            destinationsSlider.style.cursor = 'grab';
        });

        destinationsSlider.addEventListener('mouseup', () => {
            destIsDown = false;
            destinationsSlider.style.cursor = 'grab';
        });

        destinationsSlider.addEventListener('mousemove', (e) => {
            if (!destIsDown) return;
            e.preventDefault();
            const x = e.pageX - destinationsSlider.offsetLeft;
            const walk = (x - destStartX) * 2;
            destinationsSlider.scrollLeft = destScrollLeft - walk;
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('hsContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Thank you! Your inquiry has been received. We'll get back to you shortly.");
            this.reset();
        });
    }
});
</script>

<style scoped>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
        }

        /* HERO SECTION */
        .hero {
            position: relative;
            height: 100vh;
            min-height: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .hero-video-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45));
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: white;
            max-width: 900px;
            padding: 0 20px;
            margin-bottom: 120px;
        }

        

        .welcome-pill {
            display: inline-block;
            background: #416B3C;
            color: white;
            padding: 8px 28px;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 1rem;
            box-shadow: 0 4px 15px rgba(65, 107, 60, 0.4);
        }

        .main-title {
            font-size: 4.8rem;
            font-weight: 700;
            line-height: 1.05;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .subtitle {
            font-size: 1.35rem;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 2.5rem;
            font-weight: 500;
        }

        .hero-buttons {
            display: flex;
            gap: 1.2rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .btn {
            padding: 16px 36px;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.4s ease;
            cursor: pointer;
        }

        .btn-green {
            background: #416B3C;
            color: white;
            border: 2px solid #416B3C;
        }

        .btn-green:hover {
            background: #355a32;
            transform: translateY(-5px);
        }

        .btn-outline {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .btn-outline:hover {
            background: white;
            color: #1a3320;
            transform: translateY(-5px);
        }

        /* YACHT CARDS SLIDER */
        .yacht-slider-section {
            position: absolute;
            bottom: 40px;
            left: 0;
            width: 100%;
            z-index: 10;

        }

        .yacht-slider-container {
            max-width: 510px;
            margin: 0 auto;
            padding: 0 2rem;
            overflow-x: auto;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
            cursor: grab;
        }

        .yacht-slider-container::-webkit-scrollbar {
            display: none;
        }

        .yacht-slider {
            display: flex;
            gap: 24px;
            padding: 10px 0;
        }

        .yacht-card {
            flex: 0 0 230px;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            transition: all 0.4s ease;
            cursor: pointer;
        }

        .yacht-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .yacht-card-image {
            position: relative;
            width: 100%;
            height: 180px;
            overflow: hidden;
        }

        .yacht-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .yacht-card:hover .yacht-card-image img {
            transform: scale(1.1);
        }

        .yacht-card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .yacht-card:hover .yacht-card-overlay {
            opacity: 1;
        }

        .view-details-btn {
            background: #416B3C;
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }

        .yacht-card:hover .view-details-btn {
            transform: translateY(0);
        }

        .view-details-btn:hover {
            background: #355a32;
        }

        .yacht-card-info {
            padding: 18px;
        }

        .yacht-card-name {
            font-size: 15px;
            font-weight: 700;
            color: #1a3320;
            line-height: 1.3;
        }

        .yacht-card-price {
            font-size: 15px;
            font-weight: 700;
            color: #416B3C;
            margin-top: 5px;
                    }

        @media (max-width: 1024px) {
            .yacht-slider-section {
                bottom: 20px;
            }

            .yacht-card {
                flex: 0 0 250px;
            }
        }

        @media (max-width: 768px) {
            .main-title {
                font-size: 2.8rem;
            }

            .subtitle {
                font-size: 1.1rem;
            }

            .hero-content {
                margin-top: 90px;
            }

            .yacht-slider-section {
                bottom: 15px;
            }

            .yacht-slider-container {
                padding: 0 1rem;
            }

            .yacht-card {
                flex: 0 0 220px;
            }

            .yacht-card-image {
                height: 150px;
            }

            .yacht-card-info {
                padding: 14px;
            }

            .yacht-card-name {
                font-size: 1rem;
            }

            .yacht-card-price {
                font-size: 1.1rem;
            }

            .welcome-pill {
                font-size: 0.85rem;
                padding: 6px 20px;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 280px;
                justify-content: center;
            }
        }

        @media (max-width: 480px) {
            .main-title {
                font-size: 2.2rem;
            }

            .nav-container {
                padding: 0 1rem;
            }

            .yacht-card {
                flex: 0 0 200px;
            }

            .yacht-card-image {
                height: 130px;
            }
        }

        /* EXPLORE SECTION */
        .explore-section {
            padding: 100px 0;
            background: linear-gradient(180deg, #ffffff 0%, #f8f9f7 100%);
            font-family: 'Poppins', sans-serif;
        }

        .explore-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .explore-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        /* Image Column */
        .main-image-wrapper {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.2);
        }

        .main-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
        }

        .main-image-wrapper:hover .main-image {
            transform: scale(1.05);
        }

        .experience-badge {
            position: absolute;
            top: 25px;
            left: 25px;
            background: #416B3C;
            color: white;
            padding: 20px 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(65, 107, 60, 0.4);
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-10px);
            }
        }

        .years {
            display: block;
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1;
        }

        .badge-text {
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .overlay-image {
            position: absolute;
            bottom: -30px;
            right: -30px;
            width: 45%;
            border: 6px solid white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
            overflow: hidden;
        }

        .overlay-image img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            display: block;
        }

        /* Content Column */
        .section-title-explore {
            font-size: 2.8rem;
            font-weight: 700;
            color: rgb(0, 0, 0);
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }

        .section-title-explore span {
            color: #416B3C;
        }

        .description {
            color: #6e7070;
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 2rem;
        }

        .features {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 2.5rem;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 1rem;
            color: #1a3320;
        }

        .check {
            background: #416B3C;
            color: white;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: bold;
            flex-shrink: 0;
        }

        /* Call Button */
        .call-btn {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            background: #416B3C;
            color: white;
            padding: 16px 28px;
            border-radius: 10px;
            text-decoration: none;
            transition: all 0.4s ease;
            box-shadow: 0 8px 25px rgba(65, 107, 60, 0.35);
        }

        .call-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(65, 107, 50, 0.4);
            background: #355a32;
        }

        .phone-icon {
            font-size: 1.5rem;
        }

        .call-text {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .phone-number {
            font-size: 1.2rem;
            font-weight: 700;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .explore-grid {
                grid-template-columns: 1fr;
                gap: 50px;
            }

            .explore-section {
                padding: 80px 0;
            }

            .overlay-image {
                right: 5%;
                width: 40%;
            }

            .section-title-explore {
                font-size: 2.2rem;
            }
        }

        @media (max-width: 600px) {
            .explore-section {
                padding: 60px 0;
            }

            .explore-container {
                padding: 0 1rem;
            }

            .main-image {
                height: 350px;
            }

            .experience-badge {
                padding: 15px 20px;
                top: 15px;
                left: 15px;
            }

            .years {
                font-size: 2rem;
            }

            .overlay-image {
                bottom: -20px;
                right: -15px;
                width: 45%;
            }

            .overlay-image img {
                height: 100px;
            }

            .section-title {
                font-size: 1.8rem;
            }

            .description {
                font-size: 0.95rem;
            }

            .call-btn {
                width: 100%;
                justify-content: center;
            }
        }

        .yachts-section {
            padding: 100px 0;
            font-family: 'Poppins', sans-serif;
            background: #416B3C;
            color: white;
            font-family: 'Poppins', sans-serif;
            position: relative;
        }

        .yachts-container {
            max-width: 1350px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .tag {
            display: inline-block;
            background: white;
            color: #416B3C;
            padding: 8px 24px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            margin-bottom: 16px;
            text-transform: uppercase;
        }

        .section-title-yacht {
            font-size: 3rem;
            font-weight: 700;
            color: white;
        }

        .yachts-subtitle {
            font-size: 1.15rem;
            color: white;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .yachts-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .yacht-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            color: #1a3320;
        }

        .yacht-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .yacht-card-image {
            position: relative;
            overflow: hidden;
            height: 120px;
        }

        .yacht-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .yacht-card:hover .yacht-card-image img {
            transform: scale(1.1);
        }

        .yacht-card-imageee {
            position: relative;
            overflow: hidden;
            height: 250px;
        }

        .yacht-card-imageee img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .yacht-card:hover .yacht-card-imageee img {
            transform: scale(1.1);
        }

        .yacht-card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .yacht-card:hover .yacht-card-overlay {
            opacity: 1;
        }

        .yacht-view-btn {
            background: white;
            color: #1a3320;
            padding: 14px 28px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }

        .yacht-card:hover .yacht-view-btn {
            transform: translateY(0);
        }

        .yacht-view-btn:hover {
            background: #416B3C;
            color: white;
        }

        .card-body {
            padding: 24px;
        }

        .yacht-name {
            font-size: 1.35rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: #1a3320;
        }

        .specs {
            display: flex;
            gap: 10px;
            margin-bottom: 18px;
        }

        .spec-box {
            background: #f5f5f5;
            padding: 10px 12px;
            border-radius: 10px;
            font-size: 0.8rem;
            text-align: center;
            flex: 1;
        }

        .spec-label {
            font-size: 0.7rem;
            font-weight: 500;
            color: #6e7070;
            display: block;
            margin-bottom: 2px;
        }

        .spec-value {
            font-weight: 600;
            color: #1a3320;
        }

        .price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #416B3C;
            margin-bottom: 18px;
        }

        .view-btn {
            width: 100%;
            background: #416B3C;
            color: white;
            border: none;
            padding: 14px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .view-btn:hover {
            background: #1a3320;
            transform: translateX(8px);
        }

        .view-more {
            text-align: center;
            margin-top: 50px;
        }

        .view-more-btn {
            display: inline-block;
            background: white;
            color: #355a32;
            padding: 16px 40px;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.4s ease;
            box-shadow: 0 4px 20px rgba(65, 107, 60, 0.3);
        }

        .view-more-btn:hover {
            background: #355a32;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(65, 107, 60, 0.4);
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .yachts-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .yachts-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .section-title-yacht {
                font-size: 2.2rem;
            }

            .yachts-section {
                padding: 70px 0;
            }

            .yacht-card-image {
                height: 120px;
            }

            .specs {
                gap: 8px;
            }

            .spec-box {
                padding: 8px 10px;
            }
        }


        .destinations-section {
            padding: 100px 0;
            background: linear-gradient(180deg, #ffffff 0%, #f8f9f7 100%);
            font-family: 'Poppins', sans-serif;
        }

        .destinations-container {
            max-width: 1350px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title {
            font-size: 3rem;
            font-weight: 700;
            color: #1a3320;
            margin-bottom: 12px;
        }

        .destinations-subtitle {
            font-size: 1.15rem;
            color: #416B3C;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        /* Slider Container */
        .destinations-slider {
            display: flex;
            gap: 25px;
            overflow-x: auto;
            scroll-behavior: smooth;
            padding: 10px 0 30px;
            scrollbar-width: none;
            cursor: grab;
        }

        .destinations-slider:active {
            cursor: grabbing;
        }

        .destinations-slider::-webkit-scrollbar {
            display: none;
        }

        .destination-card {
            min-width: 380px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
            position: relative;
            flex-shrink: 0;
        }

        .destination-card.featured {
            min-width: 420px;
            box-shadow: 0 20px 50px rgba(65, 107, 60, 0.2);
        }

        .destination-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .destination-card-image {
            position: relative;
            height: 420px;
            overflow: hidden;
        }

        .destination-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .destination-card:hover .destination-card-image img {
            transform: scale(1.1);
        }

        .destination-card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding-bottom: 30px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .destination-card:hover .destination-card-overlay {
            opacity: 1;
        }

        .explore-btn {
            background: white;
            color: #1a3320;
            padding: 14px 32px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transform: translateY(20px);
            transition: all 0.3s ease;
            margin-bottom: 180px;
        }

        .destination-card:hover .explore-btn {
            transform: translateY(0);
        }

        .explore-btn:hover {
            background: #416B3C;
            color: white;
        }

        .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 30px 28px;
            color: white;
        }

        .destination-name {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 6px;
        }

        .listings {
            font-size: 1rem;
            opacity: 0.9;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .listings i {
            font-size: 0.9rem;
        }

        .view-btn {
            display: inline-flex;
            text-align: center;
            gap: 10px;
            background: #416b3c;
            color: white;
            padding: 17px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            font-size: 1rem;
            transition: all 0.3s ease;
            justify-content: center;
        }

        .view-btn:hover {
            background: #162514;
            transform: translateX(8px);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .destination-card {
                min-width: 340px;
            }

            .destination-card.featured {
                min-width: 370px;
            }

            .destination-card-image {
                height: 380px;
            }
        }

        @media (max-width: 768px) {
            .destinations-slider {
                gap: 18px;
            }

            .destination-card {
                min-width: 300px;
            }

            .destination-card.featured {
                min-width: 320px;
            }

            .destination-card-image {
                height: 320px;
            }

            .section-title {
                font-size: 2.2rem;
            }

            .destinations-section {
                padding: 70px 0;
            }

            .card-content {
                padding: 24px 20px;
            }

            .destination-name {
                font-size: 1.4rem;
            }
        }

        @media (max-width: 480px) {
            .destination-card {
                min-width: 280px;
            }

            .destination-card.featured {
                min-width: 300px;
            }

            .destination-card-image {
                height: 280px;
            }
        }

        .hs-team-section {
            padding: 100px 0;
            background: linear-gradient(180deg, #ffffff 0%, #f8f9f7 100%);
            font-family: 'Poppins', sans-serif;
        }

        .hs-team-container {
            max-width: 1350px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .hs-team-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .hs-team-tag {
            display: inline-block;
            color: #416B3C;
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .hs-team-title {
            font-size: 3rem;
            font-weight: 700;
            color: #1a3320;
        }

        .hs-team-slider-wrapper {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
        }

        .hs-team-slider {
            display: flex;
            gap: 30px;
            overflow-x: auto;
            scroll-behavior: smooth;
            padding: 10px 0;
            scrollbar-width: none;
            cursor: grab;
        }

        .hs-team-slider:active {
            cursor: grabbing;
        }

        .hs-team-slider::-webkit-scrollbar {
            display: none;
        }

        .hs-team-card {
            min-width: 280px;
            flex-shrink: 0;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
        }

        .hs-team-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(65, 107, 60, 0.15);
        }

        .hs-team-card-image {
            position: relative;
            overflow: hidden;
            height: 300px;
            width: 100%;
        }

        .hs-team-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.5s ease;
        }

        .hs-team-card:hover .hs-team-card-image img {
            transform: scale(1.1);
        }

        .hs-team-card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .hs-team-card:hover .hs-team-card-overlay {
            opacity: 1;
        }

        .hs-team-view-btn-overlay {
            background: white;
            color: #1a3320;
            padding: 14px 28px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }

        .hs-team-card:hover .hs-team-view-btn-overlay {
            transform: translateY(0);
        }

        .hs-team-view-btn-overlay:hover {
            background: #416B3C;
            color: white;
        }

        .hs-team-card-info {
            padding: 24px;
            text-align: center;
        }

        .hs-team-card-info h3 {
            font-size: 1.25rem;
            color: #1a3320;
            margin-bottom: 4px;
        }

        .hs-team-role {
            color: #416B3C;
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 16px;
        }

        .hs-team-contact {
            display: flex;
            justify-content: center;
            gap: 12px;
        }

        .hs-team-contact a {
            width: 40px;
            height: 40px;
            border: 2px solid #e0e0e0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6e7070;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .hs-team-contact a:hover {
            background: #416B3C;
            border-color: #416B3C;
            color: white;
        }

        .hs-team-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            background: white;
            border: none;
            border-radius: 50%;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #1a3320;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
        }

        .hs-team-prev {
            left: -25px;
        }

        .hs-team-next {
            right: -25px;
        }

        .hs-team-arrow:hover {
            background: #416B3C;
            color: white;
        }

        .hs-team-dots {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 40px 0;
        }

        .hs-team-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .hs-team-dot.active {
            background: #416B3C;
            width: 30px;
            border-radius: 20px;
        }

        .hs-team-view-all {
            text-align: center;
            margin-top: 30px;
        }

        .hs-team-view-btn {
            display: inline-block;
            background: #416B3C;
            color: white;
            padding: 16px 42px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.4s ease;
            box-shadow: 0 4px 20px rgba(65, 107, 60, 0.3);
        }

        .hs-team-view-btn:hover {
            background: #355a32;
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(65, 107, 60, 0.4);
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hs-team-prev {
                left: 10px;
            }
            .hs-team-next {
                right: 10px;
            }
        }

        @media (max-width: 992px) {
            .hs-team-card {
                min-width: 260px;
            }
            .hs-team-card-image {
                height: 280px;
            }
        }

        @media (max-width: 768px) {
            .hs-team-slider {
                gap: 20px;
            }
            .hs-team-card {
                min-width: 240px;
            }
            .hs-team-card-image {
                height: 260px;
            }
            .hs-team-arrow {
                width: 40px;
                height: 40px;
                font-size: 1rem;
            }
            .hs-team-prev {
                left: 5px;
            }
            .hs-team-next {
                right: 5px;
            }
            .hs-team-title {
                font-size: 2.2rem;
            }
            .hs-team-section {
                padding: 70px 0;
            }
        }

        @media (max-width: 480px) {
            .hs-team-card {
                min-width: 220px;
            }
            .hs-team-card-image {
                height: 240px;
            }
        }

        .hs-contact-section {
            padding: 100px 0;
            background: linear-gradient(135deg, #416B3C 0%, #2d4a29 100%);
            color: white;
            font-family: 'Poppins', sans-serif;
            position: relative;
            overflow: hidden;
        }

        .hs-contact-section::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -100px;
            width: 400px;
            height: 400px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
        }

        .hs-contact-section::after {
            content: '';
            position: absolute;
            bottom: -150px;
            left: -100px;
            width: 350px;
            height: 350px;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 50%;
        }

        .hs-contact-container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 1;
        }

        .hs-contact-grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 60px;
            align-items: start;
        }

        /* Left Side */
        .hs-contact-tag {
            display: inline-block;
            background: rgba(255, 255, 255, 0.15);
            padding: 8px 20px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        .hs-contact-title {
            font-size: 2.8rem;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 20px;
        }

        .hs-contact-desc {
            font-size: 1.1rem;
            line-height: 1.7;
            opacity: 0.92;
            max-width: 450px;
            margin-bottom: 40px;
        }

        .hs-contact-cards {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .hs-contact-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 18px;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hs-contact-card:hover {
            background: rgba(255, 255, 255, 0.18);
            transform: translateX(8px);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .hs-contact-icon {
            width: 52px;
            height: 52px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            flex-shrink: 0;
        }

        .hs-contact-details {
            display: flex;
            flex-direction: column;
        }

        .hs-label {
            font-size: 0.75rem;
            font-weight: 500;
            opacity: 0.75;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 2px;
        }

        .hs-value {
            font-size: 1.05rem;
            font-weight: 600;
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .hs-value:hover {
            color: rgba(255, 255, 255, 0.8);
        }

        /* Form */
        .hs-contact-form-wrapper {
            background: white;
            border-radius: 24px;
            padding: 45px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }

        .hs-contact-form {
            color: #1a3320;
        }

        .hs-form-title {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #1a3320;
        }

        .hs-form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .hs-form-group {
            margin-bottom: 20px;
        }

        .hs-form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 0.9rem;
            color: #1a3320;
        }

        .hs-form-group span {
            color: #e74c3c;
        }

        .hs-form-group input,
        .hs-form-group select,
        .hs-form-group textarea {
            width: 100%;
            padding: 14px 18px;
            border: 2px solid #e8e8e8;
            border-radius: 12px;
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s ease;
            background: #fafafa;
        }

        .hs-form-group input:focus,
        .hs-form-group select:focus,
        .hs-form-group textarea:focus {
            outline: none;
            border-color: #416B3C;
            box-shadow: 0 0 0 4px rgba(65, 107, 60, 0.1);
            background: white;
        }

        .hs-form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .hs-submit-btn {
            width: 100%;
            background: #416B3C;
            color: white;
            border: none;
            padding: 18px;
            border-radius: 12px;
            font-size: 1.05rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 10px;
            transition: all 0.4s ease;
            box-shadow: 0 4px 20px rgba(65, 107, 60, 0.3);
        }

        .hs-submit-btn:hover {
            background: #355a32;
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(65, 107, 60, 0.4);
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hs-contact-grid {
                grid-template-columns: 1fr;
                gap: 50px;
            }
            .hs-contact-form-wrapper {
                padding: 35px;
            }
        }

        @media (max-width: 768px) {
            .hs-contact-section {
                padding: 70px 0;
            }
            .hs-contact-title {
                font-size: 2.2rem;
            }
            .hs-contact-form-wrapper {
                padding: 30px 25px;
            }
            .hs-form-row {
                grid-template-columns: 1fr;
            }
            .hs-contact-card {
                padding: 16px;
            }
            .hs-contact-icon {
                width: 45px;
                height: 45px;
                font-size: 1.1rem;
            }
        }

        @media (max-width: 480px) {
            .hs-contact-title {
                font-size: 1.8rem;
            }
            .hs-contact-desc {
                font-size: 1rem;
            }
        }

        .hs-blog-section {
            padding: 100px 0;
            background: linear-gradient(180deg, #ffffff 0%, #f8f9f7 100%);
            font-family: 'Poppins', sans-serif;
        }

        .hs-blog-container {
            max-width: 1350px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .hs-blog-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .hs-blog-header-left {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .hs-blog-tag {
            display: inline-block;
            color: #416B3C;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .hs-blog-title {
            font-size: 2.8rem;
            font-weight: 700;
            color: #1a3320;
        }

        .hs-see-more-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 32px;
            border: 2px solid #416B3C;
            color: #416B3C;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            transition: all 0.4s ease;
        }

        .hs-see-more-btn:hover {
            background: #416B3C;
            color: white;
        }

        /* Blog Grid */
        .hs-blog-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 30px;
        }

        .hs-blog-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
            transition: all 0.4s ease;
        }

        .hs-blog-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(65, 107, 60, 0.12);
        }

        .hs-featured-card {
            grid-row: span 2;
        }

        .hs-blog-image {
            position: relative;
            overflow: hidden;
        }

        .hs-blog-image img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .hs-blog-card:hover .hs-blog-image img {
            transform: scale(1.08);
        }

        .hs-featured-card .hs-blog-image img {
            height: 400px;
        }

        .hs-blog-content {
            padding: 24px;
        }

        .hs-blog-meta {
            display: flex;
            gap: 16px;
            margin-bottom: 14px;
            font-size: 0.85rem;
            color: #6e7070;
        }

        .hs-blog-meta i {
            margin-right: 5px;
            color: #416B3C;
        }

        .hs-blog-post-title {
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 1.35;
            color: #1a3320;
            margin-bottom: 16px;
            transition: color 0.3s ease;
        }

        .hs-blog-card:hover .hs-blog-post-title {
            color: #416B3C;
        }

        .hs-featured-card .hs-blog-post-title {
            font-size: 1.5rem;
        }

        .hs-read-more {
            color: #416B3C;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }

        .hs-read-more:hover {
            gap: 14px;
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hs-blog-grid {
                grid-template-columns: 1fr 1fr;
            }
            .hs-featured-card {
                grid-column: span 2;
                grid-row: span 1;
            }
            .hs-featured-card .hs-blog-image img {
                height: 350px;
            }
        }

        @media (max-width: 768px) {
            .hs-blog-section {
                padding: 70px 0;
            }
            .hs-blog-grid {
                grid-template-columns: 1fr;
            }
            .hs-featured-card {
                grid-column: span 1;
            }
            .hs-featured-card .hs-blog-image img {
                height: 280px;
            }
            .hs-blog-header {
                flex-direction: column;
                text-align: center;
            }
            .hs-blog-title {
                font-size: 2.2rem;
            }
            .hs-blog-image img {
                height: 220px !important;
            }
            .hs-blog-post-title {
                font-size: 1.15rem;
            }
        }
</style>