<template>
    <NavbarSection />
 <header class="page-hero">
    <div class="hero-content">
      <h1 class="hero-title">The Ultimate Guide to Luxury Yachts</h1>
    </div>
  </header>

  <main class="content-shell">
    <div class="blog-detail-layout">
      <article class="blog-main">
        <img class="blog-image" src="https://www.zaha-hadid.com/wp-content/uploads/2019/12/zha_bv_twinview.jpg" alt="Luxury yacht on blue water">
        
        <div class="blog-content">
          <div class="blog-header">
            <div class="blog-meta-detail">
              <span><i class="fas fa-user"></i> By Admin</span>
              <span><i class="fas fa-calendar-alt"></i> Mar 9, 2026</span>
              <span><i class="fas fa-tag"></i> Boating Guide</span>
            </div>
            <h2 class="blog-title">The Ultimate Guide to Luxury Yachts</h2>
          </div>

          <div class="blog-body">
            <p>Luxury yachts represent the perfect blend of engineering, design, and lifestyle. These magnificent vessels are designed not only for transportation but also for comfort, relaxation, and entertainment on the water.</p>

            <p>Modern yachts feature spacious decks, elegant interiors, private cabins, swimming platforms, and even onboard cinemas. Many luxury yachts also include jacuzzis, gyms, and fine dining areas, creating a five-star experience at sea.</p>

            <h2>What Defines a Luxury Yacht?</h2>
            <p>The size of luxury yachts can vary greatly. Some are designed for private family use, while others are massive superyachts that can host large gatherings and events. A yacht is typically considered luxury when it features:</p>

            <ul>
              <li>Advanced navigation technology and automation systems</li>
              <li>Premium materials and high-end furnishings</li>
              <li>Spacious and well-designed living quarters</li>
              <li>State-of-the-art entertainment systems</li>
              <li>Professional crew and concierge services</li>
            </ul>

            <h2>Benefits of Yacht Ownership</h2>
            <p>Technology plays a major role in modern yacht design. Advanced navigation systems, stabilization technology, and powerful engines ensure smooth and safe travel across oceans.</p>

            <p>For many yacht owners, the appeal lies in freedom. With a yacht, you can explore remote islands, beautiful coastlines, and hidden beaches that are inaccessible by land. Whether it's the Caribbean, Mediterranean, or beyond, yacht ownership opens up a world of possibilities.</p>

            <h2>Choosing the Right Yacht</h2>
            <p>Owning or chartering a yacht offers an unmatched sense of adventure, luxury, and privacy, making it one of the most exclusive travel experiences in the world.</p>

            <p>When selecting a yacht, consider factors such as:</p>
            <ul>
              <li>Your cruising destinations and preferred season</li>
              <li>Size and cabin requirements</li>
              <li>Onboard amenities and entertainment options</li>
              <li>Fuel efficiency and operating costs</li>
              <li>Crew size and support services</li>
            </ul>

            <p>Whether you're a seasoned sailing enthusiast or new to the world of yachting, understanding the options available will help you make an informed decision that matches your lifestyle and travel goals.</p>

            <div class="blog-footer">
              <div class="blog-tags">
                <span class="tag-badge">Yachts</span>
                <span class="tag-badge">Luxury</span>
                <span class="tag-badge">Boating Guide</span>
                <span class="tag-badge">Travel</span>
              </div>

              <div class="blog-share">
                <span class="blog-share-label">Share:</span>
                <div class="share-buttons">
                  <a class="share-btn" href="#" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                  <a class="share-btn" href="#" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                  <a class="share-btn" href="#" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                  <a class="share-btn" href="#" title="Share via WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <aside class="sidebar">
        <div class="sidebar-panel">
          <h3 class="sidebar-title">Recent Posts</h3>
          <ul class="recent-list">
            <li class="recent-item">
              <div class="recent-item-title">Understanding Luxury Yachts and Key Facts</div>
              <div class="recent-item-date"><i class="fas fa-calendar-alt"></i> Mar 5, 2026</div>
            </li>
            <li class="recent-item">
              <div class="recent-item-title">Top 5 Destinations for Yacht Lovers</div>
              <div class="recent-item-date"><i class="fas fa-calendar-alt"></i> Mar 8, 2026</div>
            </li>
            <li class="recent-item">
              <div class="recent-item-title">How To Choose The Perfect Yacht For Your Needs</div>
              <div class="recent-item-date"><i class="fas fa-calendar-alt"></i> Mar 10, 2026</div>
            </li>
          </ul>
        </div>

        <div class="sidebar-panel">
          <h3 class="sidebar-title">Categories</h3>
          <ul class="category-list">
            <li class="category-item"><span>Luxury Lifestyle</span><span>1</span></li>
            <li class="category-item"><span>Boating Guide</span><span>1</span></li>
            <li class="category-item"><span>Travel</span><span>1</span></li>
          </ul>
        </div>

        <div class="sidebar-panel">
          <h3 class="sidebar-title">Popular Tags</h3>
          <div class="tag-list">
            <span class="tag-item">Yachts</span>
            <span class="tag-item">Yacht Buying</span>
            <span class="tag-item">Yacht Travel</span>
          </div>
        </div>
      </aside>
    </div>
  </main>
    <FooterSection />
</template>

<script>
import FooterSection from '../components/FooterSection.vue';
import NavbarSection from '../components/NavbarSection.vue';

    export default {
        name: 'BlogDetailPage',
        components: {
            NavbarSection,
            FooterSection
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
      background: #fbfbfb;
      color: #102012;
      line-height: 1.8;
      min-height: 100vh;
    }

    img {
      max-width: 100%;
      display: block;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .page-hero {
      position: relative;
      background: linear-gradient(180deg, rgba(15, 40, 24, 0.85) 0%, rgba(15, 40, 24, 0.25) 60%),
        url('https://www.ferretti-yachts.com/portals/5/skins/infynito/assets/img/bkg-gamma-infynito.png') center/cover no-repeat;
      min-height: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 24px;
      color: white;
      margin-top: 100px;}

    .hero-content {
      max-width: 900px;
    }

    .hero-title {
      font-size: clamp(2.8rem, 5vw, 4.2rem);
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -0.02em;
      margin-bottom: 20px;
    }

    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      align-items: center;
      color: rgba(255,255,255,0.9);
      font-size: 0.95rem;
    }

    .hero-meta span {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .content-shell {
      max-width: 1500px;
      margin: 0 auto;
      padding: 50px 24px 80px;
    }

    .blog-detail-layout {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 40px;
      align-items: start;
    }

    .blog-main {
      background: #ffffff;
      border-radius: 32px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(15, 40, 24, 0.08);
      border: 1px solid rgba(15, 40, 24, 0.08);
    }

    .blog-image {
      width: 100%;
      height: 420px;
      object-fit: cover;
    }

    .blog-content {
      padding: 45px 48px;
    }

    .blog-header {
      margin-bottom: 36px;
    }

    .blog-meta-detail {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      color: #5f6d60;
      font-size: 0.9rem;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(15, 40, 24, 0.08);
    }

    .blog-meta-detail span {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .blog-title {
      font-size: 2.4rem;
      font-weight: 800;
      color: #1a3a2a;
      line-height: 1.1;
      margin-bottom: 18px;
    }

    .blog-body {
      color: #5f6d60;
      font-size: 1rem;
      line-height: 1.95;
    }

    .blog-body p {
      margin-bottom: 24px;
    }

    .blog-body h2 {
      font-size: 1.8rem;
      color: #1a3a2a;
      margin: 36px 0 18px;
      font-weight: 700;
    }

    .blog-body h3 {
      font-size: 1.3rem;
      color: #1a3a2a;
      margin: 28px 0 14px;
      font-weight: 700;
    }

    .blog-body ul,
    .blog-body ol {
      margin: 20px 0 20px 24px;
    }

    .blog-body li {
      margin-bottom: 10px;
      line-height: 1.85;
    }

    .blog-footer {
      margin-top: 40px;
      padding-top: 36px;
      border-top: 1px solid rgba(15, 40, 24, 0.08);
      display: grid;
      gap: 24px;
    }

    .blog-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tag-badge {
      padding: 8px 16px;
      background: #f8faf6;
      border-radius: 999px;
      font-size: 0.9rem;
      color: #1a3a2a;
      cursor: pointer;
      transition: background 0.25s ease;
    }

    .tag-badge:hover {
      background: rgba(53,90,50,0.15);
    }

    .blog-share {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .blog-share-label {
      font-weight: 700;
      color: #1a3a2a;
    }

    .share-buttons {
      display: flex;
      gap: 12px;
    }

    .share-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #f8faf6;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1a3a2a;
      transition: background 0.25s ease, color 0.25s ease;
    }

    .share-btn:hover {
      background: #1a3a2a;
      color: white;
    }

    .sidebar {
      display: grid;
      gap: 26px;
    }

    .sidebar-panel {
      background: #ffffff;
      border-radius: 32px;
      padding: 26px;
      box-shadow: 0 10px 30px rgba(15, 40, 24, 0.08);
      border: 1px solid rgba(15, 40, 24, 0.08);
    }

    .sidebar-title {
      font-size: 1rem;
      font-weight: 700;
      color: #1a3a2a;
      margin-bottom: 18px;
      letter-spacing: 0.02em;
    }

    .recent-list {
      list-style: none;
      display: grid;
      gap: 16px;
    }

    .recent-item {
      padding: 14px 16px;
      border-radius: 16px;
      background: #f8faf6;
      transition: background 0.25s ease;
    }

    .recent-item:hover {
      background: rgba(53,90,50,0.08);
    }

    .recent-item-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: #1a3a2a;
      margin-bottom: 6px;
      line-height: 1.3;
    }

    .recent-item-date {
      font-size: 0.8rem;
      color: #5f6d60;
    }

    .category-list {
      list-style: none;
      display: grid;
      gap: 14px;
    }

    .category-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 16px;
      background: #f8faf6;
      color: #5f6d60;
      font-size: 0.95rem;
      transition: background 0.25s ease;
    }

    .category-item:hover {
      background: rgba(53,90,50,0.08);
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tag-item {
      padding: 10px 16px;
      background: #f8faf6;
      border-radius: 999px;
      font-size: 0.9rem;
      color: #1a3a2a;
      cursor: pointer;
      transition: background 0.25s ease;
    }

    .tag-item:hover {
      background: rgba(53,90,50,0.12);
    }

    @media (max-width: 1050px) {
      .blog-detail-layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        order: -1;
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

      .hero-meta {
        flex-direction: column;
        gap: 12px;
      }

      .content-shell {
        padding: 40px 18px 60px;
      }

      .blog-image {
        height: 280px;
      }

      .blog-content {
        padding: 32px 22px;
      }

      .blog-title {
        font-size: 1.8rem;
      }

      .blog-body {
        font-size: 0.95rem;
      }

      .blog-share {
        flex-direction: column;
        align-items: flex-start;
      }
    }
</style>