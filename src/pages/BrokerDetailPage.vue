<template>
    <NavbarSection />
<header class="page-hero">
    <div class="hero-content">
      <span class="hero-label"><i class="fas fa-user"></i> Broker Profile</span>
      <h1 class="hero-title">Brett Horowitz</h1>
    </div>
  </header>

  <main class="content-shell">
    <div class="broker-content">
      
      <div class="profile-content">
        <h2 class="section-title">Profile Overview</h2>
        <p class="profile-text">
          Brett Horowitz is a distinguished yacht broker specializing in high-end yacht sales and 
          bespoke charter experiences, trusted by elite clients worldwide for his precision 
          and discretion.
        </p>

        <h2 class="section-title">About Brett Horowitz</h2>
        <p class="profile-text">
          With a refined understanding of the global luxury market, Brett Horowitz delivers exceptional 
          results through integrity, expertise, and meticulous attention to detail. His career is defined 
          by guiding clients through complex transactions with clarity and confidence. From exclusive 
          yacht acquisitions to tailored charter management, Brett ensures every engagement reflects 
          his commitment to excellence and seamless execution.
        </p>
        
        <p class="profile-text">
          Recognized for his professional excellence and client-first approach, Brett has established 
          lasting relationships with discerning yacht owners and buyers across the globe.
        </p>
      </div>

      <div class="profile-card">
        <div class="profile-image-wrapper">
          <img src="https://new.highseasyachting.com/assets/img/team/brett.webp" 
               alt="Brett Horowitz" class="profile-image">
          
          <div class="floating-yacht">
            <img src="https://e5m5sskeexb.exactdn.com/wp-content/uploads/2025/02/EDIT_Majesty-175-Profile-3-1300x867.jpg?strip=all" 
                 alt="Yacht">
          </div>
        </div>

        <div class="profile-info">
          <h3 class="profile-name">Brett Horowitz</h3>
          
          <div class="contact-row">
            <i class="fas fa-envelope"></i>
            <div>
              <span class="contact-label">Email</span>
              <a href="mailto:Brett@highseasyachting.com" class="contact-value">Brett@highseasyachting.com</a>
            </div>
          </div>

          <div class="contact-row">
            <i class="fas fa-phone"></i>
            <div>
              <span class="contact-label">Phone</span>
              <a href="tel:+19546618225" class="contact-value">954-661-8225</a>
            </div>
          </div>

          <button onclick="alert('Message sent to Brett Horowitz!')" class="message-btn">
            <i class="fas fa-paper-plane"></i>
            SEND MESSAGE
          </button>
        </div>
      </div>

    </div>
  </main>


  <!-- ====================== BRETT HOROWITZ LISTINGS SECTION ====================== -->
<section class="brett-listings">
  <div class="listings-inner">
    
    <div class="listings-header">
      <h1 class="listings-title">Brett Horowitz's Listings</h1>
      <p class="listings-subtitle">Explore Brett Horowitz's exclusive for sale yachts</p>
    </div>

    <div class="listings-tabs">
      <a href="#forsale" class="tab-btn active" @click="switchTab($event, 'forsale')">
        <i class="fas fa-anchor"></i> For Sale <span class="tab-count">6</span>
      </a>
      <a href="#daycharter" class="tab-btn" @click="switchTab($event, 'daycharter')">
        <i class="fas fa-sun"></i> Day Charter <span class="tab-count">13</span>
      </a>
      <a href="#termcharter" class="tab-btn" @click="switchTab($event, 'termcharter')">
        <i class="fas fa-calendar-alt"></i> Term Charter <span class="tab-count">29</span>
      </a>
    </div>

    <div id="forsale" class="tab-content active">
      <div class="listings-grid">
        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1583422409510-0b5c8f6d2c4d?q=80&w=800" alt="DUKE">
            <div class="yacht-badge">FOR SALE</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">DUKE</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-calendar-alt"></i> 2018</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 50 ft</span>
            </div>
            <div class="yacht-price">$799,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1569263979109-5d6d7d6b5b5f?q=80&w=800" alt="Riva 33 Aquariva">
            <div class="yacht-badge">FOR SALE</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Riva 33 Aquariva</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-calendar-alt"></i> 2025</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 33 ft</span>
            </div>
            <div class="yacht-price">$1,395,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1540946485063-4d3a2a2f8b0d?q=80&w=800" alt="Ally">
            <div class="yacht-badge">FOR SALE</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Ally</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-calendar-alt"></i> 2026</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 47 ft</span>
            </div>
            <div class="yacht-price">$1,499,999</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1506929562872-bb421503efbf?q=80&w=800" alt="Luhrs">
            <div class="yacht-badge">FOR SALE</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Luhrs</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-calendar-alt"></i> 1994</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 38 ft</span>
            </div>
            <div class="yacht-price">$69,900</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" alt="Note To Self">
            <div class="yacht-badge">FOR SALE</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Note To Self</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-calendar-alt"></i> 2019</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 36 ft</span>
            </div>
            <div class="yacht-price">$449,995</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1574680096145-d05b474c2155?q=80&w=800" alt="Down Time">
            <div class="yacht-badge">FOR SALE</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Down Time</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-calendar-alt"></i> 2015</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 44 ft</span>
            </div>
            <div class="yacht-price">$689,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>
      </div>
    </div>

    <div id="daycharter" class="tab-content">
      <div class="listings-grid">
        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1515382592480-9b45c53e3fa0?q=80&w=800" alt="Sunset Cruise">
            <div class="yacht-badge charter">DAY CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Sunset Cruise</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 4 Hours</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 55 ft</span>
            </div>
            <div class="yacht-price">$1,200</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=800" alt="Island Hopping">
            <div class="yacht-badge charter">DAY CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Island Hopping</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Miami</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 6 Hours</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 62 ft</span>
            </div>
            <div class="yacht-price">$1,800</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=800" alt="Fishing Adventure">
            <div class="yacht-badge charter">DAY CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Fishing Adventure</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Palm Beach</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 8 Hours</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 45 ft</span>
            </div>
            <div class="yacht-price">$2,500</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" alt="Luxury Day Trip">
            <div class="yacht-badge charter">DAY CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Luxury Day Trip</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 5 Hours</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 70 ft</span>
            </div>
            <div class="yacht-price">$3,200</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800" alt="Beach Club">
            <div class="yacht-badge charter">DAY CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Beach Club Experience</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Miami Beach</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 4 Hours</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 48 ft</span>
            </div>
            <div class="yacht-price">$1,500</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800" alt="Party Cruise">
            <div class="yacht-badge charter">DAY CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Premium Party Cruise</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Fort Lauderdale</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 3 Hours</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 52 ft</span>
            </div>
            <div class="yacht-price">$2,200</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>
      </div>
    </div>

    <div id="termcharter" class="tab-content">
      <div class="listings-grid">
        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1583422409510-0b5c8f6d2c4d?q=80&w=800" alt="Bahamas Escape">
            <div class="yacht-badge charter">TERM CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Bahamas Escape</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Nassau</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 7 Days</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 85 ft</span>
            </div>
            <div class="yacht-price">$28,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=800" alt="Caribbean Journey">
            <div class="yacht-badge charter">TERM CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Caribbean Journey</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> St. Martin</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 10 Days</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 95 ft</span>
            </div>
            <div class="yacht-price">$45,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=800" alt="Mediterranean">
            <div class="yacht-badge charter">TERM CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Mediterranean Explorer</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Monaco</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 14 Days</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 120 ft</span>
            </div>
            <div class="yacht-price">$85,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" alt="Alaska Adventure">
            <div class="yacht-badge charter">TERM CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Alaska Adventure</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Seattle</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 7 Days</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 80 ft</span>
            </div>
            <div class="yacht-price">$32,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800" alt="Greek Islands">
            <div class="yacht-badge charter">TERM CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">Greek Islands Luxury</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Athens</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 10 Days</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 90 ft</span>
            </div>
            <div class="yacht-price">$52,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>

        <article class="yacht-card">
          <div class="yacht-image">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800" alt="French Riviera">
            <div class="yacht-badge charter">TERM CHARTER</div>
          </div>
          <div class="yacht-info">
            <h3 class="yacht-name">French Riviera Retreat</h3>
            <div class="yacht-meta">
              <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Nice</span>
              <span class="meta-item"><i class="fas fa-clock"></i> 7 Days</span>
              <span class="meta-item"><i class="fas fa-ruler-horizontal"></i> 75 ft</span>
            </div>
            <div class="yacht-price">$38,000</div>
            <a href="#" class="view-btn">View Details →</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
    <FooterSection />
</template>

<script>
import FooterSection from '../components/FooterSection.vue';
import NavbarSection from '../components/NavbarSection.vue';

    export default {
        name: 'BrokerDetailPage',
        components: {
            NavbarSection,
            FooterSection
        },
        methods: {
            switchTab(event, tabId) {
                const btn = event.currentTarget;
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
            }
        }
    }
</script>

<style scoped>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      color: #102012;
      line-height: 1.7;
    }

    .page-hero {
      position: relative;
      background: linear-gradient(180deg, rgba(15, 40, 24, 0.8) 0%, rgba(15, 40, 24, 0.2) 55%),
        url('https://frg-fwm.azurewebsites.net/asset/fwm/Upload/Models/Images/Main/Ferretti/83594.jpg') center/cover no-repeat;
      min-height: 420px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 24px;
      color: white;
      margin-top: 100px;
    }

    .hero-content {
      max-width: 900px;
    }

    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      border-radius: 50px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .hero-title {
      font-size: clamp(3rem, 5vw, 4.6rem);
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      word-spacing: 0.1em;
    }

    .hero-copy {
      max-width: 600px;
      margin: 16px auto 0;
      font-size: 1.1rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.8;
    }

    .content-shell {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 24px 100px;
    }

    .broker-content {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 40px;
      align-items: start;
    }

    .profile-card {
      background: #ffffff;
      border-radius: 32px;
      overflow: hidden;
      box-shadow: 0 18px 45px rgba(15, 40, 24, 0.14);
      border: 1px solid rgba(15, 40, 24, 0.08);
    }

    .profile-image-wrapper {
      position: relative;
      height: 420px;
    }

    .profile-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-image-wrapper::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(15,40,24,0.4) 0%, transparent 50%);
      pointer-events: none;
    }

    .floating-yacht {
      position: absolute;
      bottom: -40px;
      right: 24px;
      width: 200px;
      border: 6px solid white;
      border-radius: 26px;
      box-shadow: 0 18px 45px rgba(15, 40, 24, 0.14);
      overflow: hidden;
      z-index: 2;
    }

    .floating-yacht img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      display: block;
    }

    .profile-info {
      padding: 36px 32px;
    }

    .profile-name {
      font-size: 1.8rem;
      font-weight: 800;
      color: #1a3a2a;
      margin-bottom: 28px;
      position: relative;
    }

    .profile-name::after {
      content: '';
      display: block;
      width: 50px;
      height: 4px;
      background: linear-gradient(90deg, #1a3a2a, #355a32);
      border-radius: 2px;
      margin-top: 14px;
    }

    .contact-row {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 22px;
      padding: 18px 20px;
      background: #f8faf6;
      border-radius: 18px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .contact-row:hover {
      transform: translateX(4px);
      box-shadow: 0 10px 30px rgba(15, 40, 24, 0.08);
    }

    .contact-row i {
      font-size: 1.3rem;
      color: #355a32;
      width: 24px;
      margin-top: 2px;
    }

    .contact-label {
      font-size: 0.8rem;
      font-weight: 700;
      color: #5f6d60;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }

    .contact-value {
      color: #102012;
      font-weight: 600;
      text-decoration: none;
      font-size: 1rem;
      display: block;
    }

    .contact-value:hover {
      color: #355a32;
    }

    .message-btn {
      width: 100%;
      background: linear-gradient(135deg, #1a3a2a, #2d5a45);
      color: white;
      border: none;
      padding: 18px;
      border-radius: 18px;
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 8px;
      transition: all 0.4s ease;
      box-shadow: 0 8px 25px rgba(26, 58, 42, 0.25);
    }

    .message-btn:hover {
      background: #355a32;
      transform: translateY(-4px);
      box-shadow: 0 12px 35px rgba(26, 58, 42, 0.35);
    }

    .profile-content {
      background: #ffffff;
      border-radius: 32px;
      padding: 48px;
      box-shadow: 0 10px 30px rgba(15, 40, 24, 0.08);
      border: 1px solid rgba(15, 40, 24, 0.08);
    }

    .section-title {
      font-size: 2rem;
      font-weight: 800;
      color: #1a3a2a;
      margin-bottom: 24px;
      line-height: 1.1;
      position: relative;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 50px;
      height: 4px;
      background: linear-gradient(90deg, #1a3a2a, #355a32);
      border-radius: 2px;
      margin-top: 14px;
    }

    .profile-text {
      color: #5f6d60;
      font-size: 1.08rem;
      line-height: 1.9;
      margin-bottom: 36px;
    }

    .profile-text:last-child {
      margin-bottom: 0;
    }

    .stats-row {
      display: flex;
      gap: 24px;
      margin-top: 40px;
      padding-top: 32px;
      border-top: 1px solid rgba(15, 40, 24, 0.1);
    }

    .stat-item {
      flex: 1;
      text-align: center;
    }

    .stat-number {
      font-size: 2.2rem;
      font-weight: 800;
      color: #1a3a2a;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.85rem;
      color: #5f6d60;
      margin-top: 8px;
    }

    @media (max-width: 1024px) {
      .broker-content {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .profile-card {
        max-width: 500px;
        margin: 0 auto;
      }

      .profile-image-wrapper {
        height: 380px;
      }

      .floating-yacht {
        width: 160px;
        bottom: -30px;
      }

      .floating-yacht img {
        height: 110px;
      }
    }

    @media (max-width: 680px) {
      .page-hero {
        min-height: 340px;
        padding: 60px 18px;
      }

      .hero-title {
        font-size: 2.4rem;
      }

      .content-shell {
        padding: 40px 18px 60px;
      }

      .profile-content {
        padding: 32px 26px;
      }

      .section-title {
        font-size: 1.6rem;
      }

      .profile-text {
        font-size: 1rem;
      }

      .profile-image-wrapper {
        height: 320px;
      }

      .profile-info {
        padding: 28px 24px;
      }

      .profile-name {
        font-size: 1.5rem;
      }

      .contact-row {
        padding: 14px 16px;
      }

      .stats-row {
        flex-wrap: wrap;
        gap: 16px;
      }

      .stat-item {
        flex: 1 1 calc(50% - 8px);
      }

      .stat-number {
        font-size: 1.6rem;
      }
    }

    .brett-listings {
      padding: 80px 24px;
      background: #f8faf6;
    }

    .listings-inner {
      max-width: 1300px;
      margin: 0 auto;
    }

    .listings-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .listings-title {
      font-size: 2.4rem;
      font-weight: 800;
      color: #1a3a2a;
      margin-bottom: 12px;
      position: relative;
    }

    .listings-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #1a3a2a, #355a32);
      border-radius: 2px;
      margin: 16px auto 0;
    }

    .listings-subtitle {
      color: #5f6d60;
      font-size: 1.1rem;
    }

    .listings-tabs {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }

    .tab-btn {
      padding: 14px 28px;
      border: none;
      background: #ffffff;
      border-radius: 999px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(15, 40, 24, 0.08);
      color: #5f6d60;
      font-size: 0.95rem;
      text-decoration: none;
    }

    .tab-btn:hover {
      background: #f8faf6;
      transform: translateY(-2px);
    }

    .tab-btn.active {
      background: linear-gradient(135deg, #1a3a2a, #2d5a45);
      color: white;
      box-shadow: 0 8px 25px rgba(26, 58, 42, 0.25);
    }

    .tab-count {
      background: rgba(255,255,255,0.2);
      padding: 2px 10px;
      border-radius: 20px;
      font-size: 0.85rem;
    }

    .tab-btn:not(.active) .tab-count {
      background: #f8faf6;
    }

    .tab-content {
      display: none;
    }

    .tab-content.active {
      display: block;
      animation: fadeIn 0.4s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .listings-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .yacht-card {
      background: #ffffff;
      border-radius: 32px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(15, 40, 24, 0.08);
      border: 1px solid rgba(15, 40, 24, 0.08);
      transition: all 0.4s ease;
    }

    .yacht-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 18px 45px rgba(15, 40, 24, 0.14);
    }

    .yacht-image {
      position: relative;
      height: 240px;
      overflow: hidden;
    }

    .yacht-image::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(15,40,24,0.3) 0%, transparent 40%);
      pointer-events: none;
    }

    .yacht-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .yacht-card:hover .yacht-image img {
      transform: scale(1.05);
    }

    .yacht-badge {
      position: absolute;
      top: 20px;
      left: 20px;
      background: #1a3a2a;
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      z-index: 1;
    }

    .yacht-badge.charter {
      background: #355a32;
    }

    .yacht-info {
      padding: 24px 22px 26px;
    }

    .yacht-name {
      font-size: 1.35rem;
      font-weight: 800;
      color: #1a3a2a;
      margin-bottom: 14px;
    }

    .yacht-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 18px;
    }

    .meta-item {
      background: #f8faf6;
      padding: 6px 14px;
      border-radius: 30px;
      font-size: 0.88rem;
      display: flex;
      align-items: center;
      gap: 6px;
      color: #5f6d60;
    }

    .meta-item i {
      color: #355a32;
      font-size: 0.8rem;
    }

    .yacht-price {
      font-size: 1.5rem;
      font-weight: 800;
      color: #1a3a2a;
      margin-bottom: 18px;
    }

    .view-btn {
      width: 100%;
      padding: 14px;
      background: #1a3a2a;
      color: white;
      border: none;
      border-radius: 18px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.95rem;
      text-decoration: none;
      display: block;
      text-align: center;
    }

    .view-btn:hover {
      background: #355a32;
      transform: translateY(-2px);
    }

    @media (max-width: 1024px) {
      .listings-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 680px) {
      .brett-listings {
        padding: 60px 18px;
      }

      .listings-title {
        font-size: 1.8rem;
      }

      .listings-tabs {
        gap: 10px;
      }

      .tab-btn {
        padding: 12px 20px;
        font-size: 0.88rem;
      }

      .listings-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .yacht-image {
        height: 200px;
      }

      .yacht-name {
        font-size: 1.2rem;
      }
    }
    .tab-content {
    display: none;
  }
  .tab-content.active {
    display: block;
  }
</style>