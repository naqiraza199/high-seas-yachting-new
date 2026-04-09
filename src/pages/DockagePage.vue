<template>
    <NavbarSection />
   <header class="page-hero">
        <div class="hero-content">
            <span class="hero-pretitle"><i class="fas fa-anchor"></i> Dockage & Marina Services</span>
            <h1 class="hero-title">Dock With Us — Fort Lauderdale & Miami Services</h1>
            <p class="hero-text">Secure premium slips, concierge dockside support, and seamless marina access across
                South Florida. Our team arranges trusted dockage, event berthing, and long-term stay packages for luxury
                yachts.</p>
        </div>
    </header>

    <main class="page-shell">
        <section class="section-card">
            <h2 class="section-title">Dockage & Marina Access</h2>
            <p class="section-copy">We help owners secure premium slips and marina spots at top-tier locations across
                Miami, Fort Lauderdale, and Palm Beach. Whether for long-term docking or show events, our network
                ensures priority access and optimized pricing.</p>
        </section>
    </main>

    <div class="dockage-form-section">
        <div class="dockage-form-header">
            <span class="dockage-form-tag"><i class="fas fa-anchor"></i> Dockage Services</span>
            <h2 class="dockage-form-title">Request Dockage Quote or Services Consultation</h2>
            <div class="dockage-form-divider"></div>
        </div>
        <iframe src="https://app.highseasyachting.com/embed/dockage" class="dockage-iframe"></iframe>
    </div>
    <FooterSection />
</template>

<script>
import FooterSection from '../components/FooterSection.vue';
import NavbarSection from '../components/NavbarSection.vue';

    export default {
        name: 'DockagePage',
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
            background: #f4f4f4;
            color: #1a1f1a;
            line-height: 1.7;
            min-height: 100vh;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        .page-hero {
            position: relative;
            background: linear-gradient(180deg, rgba(12, 31, 18, 0.7) 0%, rgba(12, 31, 18, 0.18) 60%),
                url('https://new.highseasyachting.com/assets/img/hero/term-charter-main.webp') center/cover no-repeat;
            min-height: 520px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 120px 24px 80px;
            text-align: center;
            color: white;
            margin-top: 100px;
        }

        .hero-content {
            max-width: 940px;
            margin: 0 auto;
        }

        .hero-pretitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 24px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.13);
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            margin-bottom: 22px;
        }

        .hero-title {
            font-size: 57px;
            font-weight: 800;
            line-height: 1.05;
            margin-bottom: 24px;
        }

        .hero-text {
            max-width: 720px;
            margin: 0 auto;
            font-size: 1.05rem;
            color: rgba(255, 255, 255, 0.9);
        }

        .page-shell {
            max-width: 1200px;
            margin: 100px auto 0;
            padding: 0 24px 80px;
        }

        .section-card {
            background: #ffffff;
            border-radius: 36px;
            padding: 45px 48px;
            box-shadow: 0 8px 30px rgba(26, 58, 42, 0.08);
            border: 1px solid rgba(26, 58, 42, 0.08);
            margin-bottom: 36px;
        }

        .section-title {
            font-size: clamp(2.2rem, 3.2vw, 3.4rem);
            font-weight: 800;
            margin-bottom: 18px;
            color: #1a3a2a;
        }

        .section-copy {
            max-width: 760px;
            color: #5f7062;
            font-size: 1rem;
            line-height: 1.9;
        }



        @media (max-width: 1050px) {

            .content-split,
            .request-card {
                grid-template-columns: 1fr;
            }

            .hero-title {
                font-size: clamp(2.5rem, 6vw, 3.4rem);
            }
        }

        @media (max-width: 760px) {
            .page-hero {
                padding: 100px 20px 60px;
            }

            .page-shell {
                margin-top: -60px;
                padding: 0 16px 60px;
            }

            .section-card {
                padding: 32px 26px;
                margin-top: 120px;
            }

            .feature-grid {
                grid-template-columns: 1fr;
            }

            .content-split {
                gap: 24px;
            }

            .request-card {
                gap: 0;
            }

            .request-info,
            .request-form {
                padding: 30px 24px;
            }

            .request-form .form-row {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 520px) {
            .hero-pretitle {
                padding: 10px 18px;
            }

            .hero-text,
            .section-copy,
            .content-copy p,
            .request-info p {
                font-size: 0.97rem;
            }

            .request-form button {
                width: 100%;
            }
        }
         .dockage-form-section {
            max-width: 1400px;
            margin: 10px auto 80px;
            padding: 0 24px;
        }

        .dockage-form-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .dockage-form-tag {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #1a3a2a, #2d5a45);
            color: white;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        .dockage-form-title {
            font-size: clamp(1.75rem, 3vw, 2.5rem);
            font-weight: 800;
            color: #1a1f1a;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .dockage-form-divider {
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #1a3a2a, #d4a853);
            border-radius: 2px;
            margin: 0 auto;
        }

        .dockage-iframe {
            width: 100%;
            min-height: 1100px;
            border: none;
            border-radius: 24px;
            box-shadow: 0 18px 45px rgba(26, 58, 42, 0.12);
            background: white !important;
        }

        @media (max-width: 768px) {
            .dockage-form-section {
                margin: 60px auto 50px;
                padding: 0 16px;
            }

            .dockage-iframe {
                min-height: 900px;
                border-radius: 18px;
            }
        }

        @media (max-width: 480px) {
            .dockage-form-title {
                font-size: 1.4rem;
            }

            .dockage-iframe {
                min-height: 800px;
                border-radius: 14px;
            }
        }
</style>