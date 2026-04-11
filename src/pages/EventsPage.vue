<template>
    <NavbarSection />
<section class="page-hero">
    <div class="hero-content">
      <div class="hero-label"><i class="fas fa-calendar-alt"></i> Events</div>
      <h1 class="hero-title">Discover the Latest Yacht Shows & Experiences</h1>
      <p class="hero-copy">From world-class boat shows to exclusive client cruises, explore the events that showcase High Seas Yachting's luxury fleet and bespoke service.</p>
    </div>
  </section>

  <main class="content-shell">
    <section class="section-heading">
      <h2>Upcoming Events</h2>
      <p>Stay ahead with our curated schedule of yacht shows, charter launches, and premium industry gatherings designed for owners, buyers, and luxury travelers.</p>
    </section>

    <section class="event-highlight">
      <article class="event-card">
        <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80" alt="Yacht show event">
        <div class="event-card-body">
          <span class="event-pill">Yacht Show</span>
          <h2 class="event-title">Miami International Boat Show</h2>
          <div class="event-location"><i class="fas fa-map-marker-alt"></i> Miami Beach Convention Center</div>
          <p class="event-description">Experience the best in luxury yachting as High Seas Yachting brings top vessels, expert advisors, and VIP access.</p>
          <div class="event-meta">
            <div class="event-date"><i class="fas fa-calendar-day"></i> Feb 14 - Feb 18</div>
            <div class="status-badge">Featured</div>
          </div>
        </div>
      </article>

      <article class="event-card">
        <img src="https://www.pershing-yacht.com/Upload/NewsEvents/N-2541/img-N-2541-20260213132052.jpg" alt="Fort Lauderdale">
        <div class="event-card-body">
          <span class="event-pill">Yacht Show</span>
          <h2 class="event-title">Fort Lauderdale Boat Show</h2>
          <div class="event-location"><i class="fas fa-map-marker-alt"></i> Broward Convention Center</div>
          <p class="event-description">Join us at the world's largest in-water boat show featuring thousands of yachts and marine products.</p>
          <div class="event-meta">
            <div class="event-date"><i class="fas fa-calendar-day"></i> Oct 29 - Nov 2</div>
            <div class="status-badge">Upcoming</div>
          </div>
        </div>
      </article>

      <article class="event-card">
        <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80" alt="Annapolis">
        <div class="event-card-body">
          <span class="event-pill">Yacht Show</span>
          <h2 class="event-title">Annapolis Boat Show</h2>
          <div class="event-location"><i class="fas fa-map-marker-alt"></i> Annapolis Waterfront</div>
          <p class="event-description">The premier mid-Atlantic boat show showcasing the finest sailing and power vessels.</p>
          <div class="event-meta">
            <div class="event-date"><i class="fas fa-calendar-day"></i> Sep 18 - 22</div>
            <div class="status-badge">Upcoming</div>
          </div>
        </div>
      </article>
    </section>
  </main>
    <FooterSection />
</template>

<script>
import FooterSection from '../components/FooterSection.vue';
import NavbarSection from '../components/NavbarSection.vue';

    export default {
        name: 'EventsPage',
        components: {
            NavbarSection,
            FooterSection,
        },
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
      background: #fdfdfd;
      color: #102012;
      line-height: 1.7;
      min-height: 100vh;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .page-hero {
      position: relative;
      background: linear-gradient(180deg, rgba(15, 40, 24, 0.82) 0%, rgba(15, 40, 24, 0.2) 60%),
        url('https://photos.superyachtapi.com/download/349139/large') center/cover no-repeat;
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
      max-width: 850px;
    }

    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .hero-title {
      font-size: clamp(3rem, 5vw, 4.8rem);
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.03em;
      margin-bottom: 18px;
      text-transform: uppercase;
      word-spacing: 0.1em;
    }

    .hero-copy {
      max-width: 640px;
      margin: 0 auto;
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.87);
      line-height: 1.85;
    }

    .content-shell {
      max-width: 1300px;
      margin: 0 auto;
      padding: 100px 24px 120px;
    }

    .section-heading {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-heading h2 {
      font-size: 2.4rem;
      font-weight: 800;
      color: #1a3a2a;
      margin-bottom: 16px;
      line-height: 1.1;
    }

    .section-heading h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #1a3a2a, #355a32);
      border-radius: 2px;
      margin: 18px auto 0;
    }

    .section-heading p {
      max-width: 700px;
      margin: 0 auto;
      color: #5f6d60;
      font-size: 1.03rem;
      line-height: 1.8;
    }

    .event-highlight {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 28px;
      align-items: stretch;
      margin-top: 60px;
    }

    .event-card {
      border-radius: 32px;
      overflow: hidden;
      background: #ffffff;
      box-shadow: 0 18px 45px rgba(15, 40, 24, 0.14);
      border: 1px solid rgba(15, 40, 24, 0.08);
      display: flex;
      flex-direction: column;
      min-height: 520px;
      position: relative;
    }

    .event-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #1a3a2a, #355a32);
    }

    .event-card img {
      width: 100%;
      height: 340px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .event-card:hover img {
      transform: scale(1.05);
    }

    .event-card-body {
      padding: 36px 34px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }

    .event-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 999px;
      background: linear-gradient(135deg, rgba(53, 90, 50, 0.12), rgba(53, 90, 50, 0.06));
      color: #1a3a2a;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.75rem;
      width: fit-content;
    }

    .event-title {
      font-size: 2.2rem;
      font-weight: 800;
      color: #1a3a2a;
      line-height: 1.1;
      position: relative;
    }

    .event-title::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #1a3a2a, #355a32);
      border-radius: 2px;
      margin-top: 16px;
    }

    .event-location {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #5f6d60;
      font-size: 0.95rem;
      font-weight: 500;
    }

    .event-location i {
      color: #355a32;
    }

    .event-description {
      color: #5f6d60;
      font-size: 1.05rem;
      line-height: 1.8;
      flex: 1;
    }

    .event-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid rgba(15, 40, 24, 0.1);
    }

    .event-date {
      padding: 14px 20px;
      border-radius: 16px;
      background: #f8faf6;
      color: #1a3a2a;
      font-weight: 700;
      letter-spacing: 0.02em;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 0.95rem;
    }

    .event-date i {
      color: #355a32;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 28px;
      border-radius: 999px;
      background: linear-gradient(135deg, #1a3a2a, #2d5a45);
      color: white;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-size: 0.8rem;
      box-shadow: 0 4px 15px rgba(26, 58, 42, 0.3);
    }

    .event-info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-items: stretch;
    }

    .mini-card {
      background: #ffffff;
      border-radius: 32px;
      padding: 0;
      box-shadow: 0 10px 30px rgba(15, 40, 24, 0.08);
      border: 1px solid rgba(15, 40, 24, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .mini-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 45px rgba(15, 40, 24, 0.14);
    }

    .mini-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .mini-card:hover img {
      transform: scale(1.03);
    }

    .mini-card-content {
      padding: 24px 22px 26px;
    }

    .mini-card h3 {
      font-size: 1.05rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #1a3a2a;
      margin-bottom: 14px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .mini-card h3::before {
      content: '';
      width: 4px;
      height: 20px;
      background: linear-gradient(180deg, #1a3a2a, #355a32);
      border-radius: 2px;
    }

    .mini-card p {
      color: #5f6d60;
      font-size: 0.98rem;
      line-height: 1.75;
    }

    @media (max-width: 1024px) {
      .event-highlight {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .event-card {
        min-height: auto;
      }
    }

    @media (max-width: 768px) {
      .page-hero {
        min-height: 320px;
        padding: 60px 18px;
      }

      .hero-title {
        font-size: 2.4rem;
      }

      .hero-copy {
        font-size: 1rem;
      }

      .content-shell {
        padding: 80px 18px 100px;
      }

      .event-card img {
        height: 260px;
      }

      .event-info-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 520px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-label {
        padding: 10px 18px;
        font-size: 0.7rem;
      }

      .event-highlight {
        margin-top: 40px;
        grid-template-columns: 1fr;
      }

      .event-card {
        min-height: auto;
      }

      .event-card img {
        height: 240px;
      }

      .event-card-body {
        padding: 24px 20px;
      }

      .event-title {
        font-size: 1.6rem;
      }

      .event-title::after {
        width: 40px;
        height: 3px;
        margin-top: 12px;
      }

      .event-description {
        font-size: 1rem;
      }

      .event-meta {
        display: flex;
        flex-direction: column;
        gap: 14px;
        align-items: stretch;
      }

      .event-date {
        justify-content: center;
      }

      .status-badge {
        justify-self: stretch;
        text-align: center;
      }

      .mini-card {
        padding: 0;
      }

      .mini-card img {
        height: 140px;
      }

      .mini-card-content {
        padding: 20px 18px 22px;
      }

      .mini-card h3 {
        font-size: 0.95rem;
      }
    }
</style>