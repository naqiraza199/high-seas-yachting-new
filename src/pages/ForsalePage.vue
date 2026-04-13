<template>
    <NavbarSection />
       
<header class="page-hero">
  <div class="page-hero-content">
    <h1 class="hero-title">Yachts For Sale</h1>
    <p class="hero-copy">Discover our curated collection of luxury yachts available for purchase. From sleek sport yachts to elegant motor yachts, find your perfect vessel.</p>
  </div>
</header>

<!-- ====================== BOATS FOR SALE SECTION ====================== -->
<section class="hs-listings-section">
  <div class="hs-container">
    
    <div class="hs-listings-main">
      
      <!-- FILTERS SIDEBAR -->
      <aside class="hs-filters-sidebar">
        <div class="hs-filters-header">
          <div class="hs-filters-header-icon">
            <i class="fas fa-sliders-h"></i>
          </div>
          <h3>Filters</h3>
        </div>

        <div class="hs-filters-grid">
          <div class="hs-filter-group">
            <label>Search Location</label>
            <input 
              type="text" 
              v-model="filters.location"
              placeholder="e.g., Fort Lauderdale, Miami..."
              list="location-suggestions"
            >
            <datalist id="location-suggestions">
              <option v-for="loc in uniqueLocations" :key="loc" :value="loc"></option>
            </datalist>
          </div>

          <div class="hs-filter-group">
            <label>Yacht Make</label>
            <input 
              type="text" 
              v-model="filters.make"
              placeholder="e.g., Azimut, Sea Ray..."
              list="make-suggestions"
            >
            <datalist id="make-suggestions">
              <option v-for="make in uniqueMakes" :key="make" :value="make"></option>
            </datalist>
          </div>

          <div class="hs-filter-group">
            <label>Yacht Model</label>
            <input 
              type="text" 
              v-model="filters.model"
              placeholder="e.g., Aquila, Princess..."
              list="model-suggestions"
            >
            <datalist id="model-suggestions">
              <option v-for="model in uniqueModels" :key="model" :value="model"></option>
            </datalist>
          </div>

          <div class="hs-filter-group">
            <label>Length (ft)</label>
            <input 
              type="text" 
              v-model="filters.length"
              placeholder="e.g., 47"
              list="length-suggestions"
            >
            <datalist id="length-suggestions">
              <option v-for="len in uniqueLengths" :key="len" :value="len"></option>
            </datalist>
          </div>

          <div class="hs-filter-group">
            <label>Max Price ($)</label>
            <input 
              type="text" 
              v-model="filters.price"
              placeholder="e.g., 1000000"
              list="price-suggestions"
            >
            <datalist id="price-suggestions">
              <option v-for="price in uniquePrices" :key="price" :value="price"></option>
            </datalist>
          </div>

          <div class="hs-filter-group">
            <label>Year</label>
            <input 
              type="text" 
              v-model="filters.year"
              placeholder="e.g., 2026"
              list="year-suggestions"
            >
            <datalist id="year-suggestions">
              <option v-for="year in uniqueYears" :key="year" :value="year"></option>
            </datalist>
          </div>
        </div>

       
      </aside>

      <!-- MAIN CONTENT -->
      <div class="hs-listings-content">
        
        <!-- Top Bar -->
        <div class="hs-top-bar">
          <div class="hs-search-box">
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Search yachts, brands..."
            >
            <button class="hs-search-btn"><i class="fas fa-search"></i></button>
          </div>
          
          <div class="hs-sort-wrapper">
            <span class="hs-sort-label">Sort by:</span>
            <select class="hs-sort-select" v-model="sortBy">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="length-high">Length: High to Low</option>
            </select>
          </div>
        </div>

<!-- Yacht Grid -->
        <div class="hs-yacht-grid">
          <article 
            v-for="listing in paginatedListings" 
            :key="listing.id" 
            class="hs-yacht-card"
          >
            <div class="hs-yacht-image">
              <router-link :to="'/listing-detail/' + getListingSlug(listing)">
                <img 
                  :src="getImageUrl(listing.photos[0])" 
                  :alt="listing.yachtName" 
                  loading="lazy"
                  @error="($event.target.src = 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80')"
                >
              </router-link>
              <div class="hs-forsale-badge">For Sale</div>
            
              <router-link :to="'/listing-detail/' + getListingSlug(listing)" class="hs-view-details-overlay">
                <i class="fas fa-eye"></i>
                View Details
              </router-link>
            </div>
            <div class="hs-yacht-info">
              <h3 class="hs-yacht-name">{{ listing.year }} {{ listing.manufacturer }} {{ listing.yachtName }}</h3>
              <p class="hs-yacht-location">
                <i class="fas fa-map-marker-alt"></i>
                {{ listing.city ? listing.city.charAt(0).toUpperCase() + listing.city.slice(1).replace(/,/g, ', ') : 'N/A' }}, FL
              </p>
              <div class="hs-yacht-specs">
                <div class="hs-spec-item">
                  <span class="hs-spec-value">{{ formatLength(listing.length) }}</span>
                  <span class="hs-spec-label">Length</span>
                </div>
                <div class="hs-spec-item">
                  <span class="hs-spec-value">{{ listing.manufacturer || 'N/A' }}</span>
                  <span class="hs-spec-label">Make</span>
                </div>
                <div class="hs-spec-item">
                  <span class="hs-spec-value">{{ listing.year }}</span>
                  <span class="hs-spec-label">Year</span>
                </div>
              </div>
              <div class="hs-yacht-price-row">
                <div class="hs-yacht-price">{{ formatPrice(listing.price) }}</div>
              </div>
              <div class="hs-card-actions">
                <router-link :to="'/listing-detail/' + getListingSlug(listing)" class="hs-view-details-btn">
                  View Details
                  <i class="fas fa-arrow-right"></i>
                </router-link>
                <button class="hs-contact-btn" aria-label="Contact seller">
                  <i class="fas fa-phone"></i>
                </button>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="hs-pagination-wrapper" v-if="forsaleListings.length > 0">
          <p class="hs-results-info">Showing <strong>{{ startItem }} - {{ endItem }}</strong> of <strong>{{ forsaleListings.length }}</strong> results</p>
          
          <div class="hs-pagination">
            <button 
              class="hs-page-arrow" 
              :disabled="currentPage === 1"
              @click="goToPage(currentPage - 1)"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="hs-page-numbers">
              <span 
                v-for="(page, index) in pageNumbers" 
                :key="index"
                :class="['hs-page', { active: page === currentPage, 'hs-page-dots': page === '...' }]"
                @click="page !== '...' && goToPage(page)"
              >
                {{ page }}
              </span>
            </div>
            <button 
              class="hs-page-arrow" 
              :disabled="currentPage === totalPages"
              @click="goToPage(currentPage + 1)"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="forsaleListings.length > 0 && filteredListings.length === 0" class="hs-no-results">
          <p>No yachts match your search criteria. Try adjusting your filters.</p>
        </div>
        <div v-else-if="forsaleListings.length === 0" class="hs-no-results">
          <p>No yachts for sale at the moment. Please check back later.</p>
        </div>

      </div>
    </div>
  </div>
</section>
    <FooterSection />    
</template>

<script>
import NavbarSection from '../components/NavbarSection.vue';
import FooterSection from '../components/FooterSection.vue';
import listingsDataRaw from '../../listings.json';

const listingsData = Array.isArray(listingsDataRaw) ? listingsDataRaw : [listingsDataRaw];

const SUPABASE_URL = 'https://qumgjqbfreeskjgltfvu.supabase.co/storage/v1/object/public/listings/';

export default {
  name: 'ForsalePage',
  components: {
    NavbarSection,
    FooterSection
  },
  data() {
    return {
      forsaleListings: [],
      filteredListings: [],
      currentPage: 1,
      itemsPerPage: 12,
      filters: {
        location: '',
        make: '',
        model: '',
        length: '',
        price: '',
        year: ''
      },
      sortBy: 'newest',
      searchQuery: ''
    };
  },
  computed: {
    paginatedListings() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredListings.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredListings.length / this.itemsPerPage);
    },
    startItem() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.currentPage * this.itemsPerPage, this.filteredListings.length);
    },
    pageNumbers() {
      const pages = [];
      const total = this.totalPages;
      const current = this.currentPage;
      
      if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i);
      } else {
        pages.push(1);
        if (current > 3) pages.push('...');
        for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
          pages.push(i);
        }
        if (current < total - 2) pages.push('...');
        pages.push(total);
      }
      return pages;
    },
    sortedListings() {
      let result = [...this.filteredListings];
      
      switch(this.sortBy) {
        case 'price-low':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'length-high':
          result.sort((a, b) => b.length - a.length);
          break;
        case 'newest':
        default:
          result.sort((a, b) => b.year - a.year);
          break;
      }
      
      return result;
    },
    getListingSlug() {
      return (listing) => {
        if (!listing) return '';
        return `${listing.year}-${listing.manufacturer}-${listing.yachtName}-for-sale`.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
      };
    },
    uniqueLocations() {
      const locations = this.forsaleListings
        .map(item => item.city)
        .filter(city => city)
        .map(city => city.charAt(0).toUpperCase() + city.slice(1));
      return [...new Set(locations)].sort();
    },
    uniqueMakes() {
      const makes = this.forsaleListings
        .map(item => item.manufacturer)
        .filter(m => m);
      return [...new Set(makes)].sort();
    },
    uniqueModels() {
      const models = this.forsaleListings
        .map(item => item.yachtName)
        .filter(m => m);
      return [...new Set(models)].sort();
    },
    uniqueLengths() {
      const lengths = this.forsaleListings
        .map(item => item.length)
        .filter(l => l);
      return [...new Set(lengths)].sort((a, b) => a - b);
    },
    uniquePrices() {
      const prices = this.forsaleListings
        .map(item => item.price)
        .filter(p => p);
      return [...new Set(prices)].sort((a, b) => a - b);
    },
    uniqueYears() {
      const years = this.forsaleListings
        .map(item => item.year)
        .filter(y => y);
      return [...new Set(years)].sort((a, b) => b - a);
    }
  },
  watch: {
    filters: {
      handler() {
        this.applyFilters();
      },
      deep: true
    },
    sortBy() {
      this.applyFilters();
    },
    searchQuery() {
      this.applyFilters();
    }
  },
  mounted: function() {
    this.loadForsaleListings();
  },
  methods: {
    loadForsaleListings() {
      let records = [];
      
      if (listingsData) {
        if (Array.isArray(listingsData) && listingsData.length > 0) {
          const firstItem = listingsData[0];
          if (firstItem && firstItem.records && Array.isArray(firstItem.records)) {
            records = firstItem.records;
          } else if (Array.isArray(listingsData)) {
            records = listingsData;
          }
        } else if (listingsData.records && Array.isArray(listingsData.records)) {
          records = listingsData.records;
        }
      }
      
      console.log('Found records:', records.length);
      
      this.forsaleListings = records
        .filter(item => item && item.type === 'forsale')
        .map(listing => ({
          id: listing.id,
          yachtName: listing.yacht_name,
          year: listing.year,
          manufacturer: listing.manufacturer,
          length: listing.length,
          beam: listing.beam,
          draft: listing.draft,
          description: listing.description,
          city: listing.metadata?.city || '',
          price: listing.metadata?.price || 0,
          photos: listing.metadata?.photos || []
        }));
      
      this.filteredListings = [...this.forsaleListings];
    },
    applyFilters() {
      let result = [...this.forsaleListings];
      
      const searchLower = (this.searchQuery || '').toLowerCase();
      if (searchLower) {
        result = result.filter(item => 
          item.yachtName.toLowerCase().includes(searchLower) ||
          item.manufacturer.toLowerCase().includes(searchLower) ||
          item.city.toLowerCase().includes(searchLower) ||
          String(item.year).includes(searchLower)
        );
      }
      
      if (this.filters.location) {
        const loc = this.filters.location.toLowerCase();
        result = result.filter(item => 
          item.city && item.city.toLowerCase().includes(loc)
        );
      }
      
      if (this.filters.make) {
        const make = this.filters.make.toLowerCase();
        result = result.filter(item => 
          item.manufacturer && item.manufacturer.toLowerCase().includes(make)
        );
      }
      
      if (this.filters.model) {
        const model = this.filters.model.toLowerCase();
        result = result.filter(item => 
          item.yachtName && item.yachtName.toLowerCase().includes(model)
        );
      }
      
      if (this.filters.length) {
        const len = this.filters.length.toLowerCase();
        result = result.filter(item => 
          item.length && String(item.length).includes(len)
        );
      }
      
      if (this.filters.price) {
        const priceInput = this.filters.price.replace(/[^0-9]/g, '');
        if (priceInput) {
          const priceNum = parseInt(priceInput);
          result = result.filter(item => 
            item.price && item.price <= priceNum
          );
        }
      }
      
      if (this.filters.year) {
        const year = this.filters.year.toLowerCase();
        result = result.filter(item => 
          item.year && String(item.year).includes(year)
        );
      }
      
      switch(this.sortBy) {
        case 'price-low':
          result.sort((a, b) => (a.price || 0) - (b.price || 0));
          break;
        case 'price-high':
          result.sort((a, b) => (b.price || 0) - (a.price || 0));
          break;
        case 'length-high':
          result.sort((a, b) => (b.length || 0) - (a.length || 0));
          break;
        case 'newest':
        default:
          result.sort((a, b) => (b.year || 0) - (a.year || 0));
          break;
      }
      
      this.filteredListings = result;
      this.currentPage = 1;
    },
    getImageUrl(photoPath) {
      if (!photoPath) return '';
      const filename = photoPath.split('/').pop();
      return SUPABASE_URL + encodeURIComponent(filename);
    },
    formatPrice(price) {
      if (!price) return 'Price on request';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price);
    },
    formatLength(length) {
      return length ? `${length} ft` : 'N/A';
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        window.scrollTo({ top: 400, behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #f0f5f2 0%, #e8ede8 100%);
      color: #0d1117;
      line-height: 1.6;
      overflow-x: hidden;
      min-height: 100vh;
    }

    /* Hero Section */
    .page-hero {
      position: relative;
      background: linear-gradient(180deg, rgba(15,40,24,0.75) 0%, rgba(15,40,24,0.35) 50%, rgba(15,40,24,0.15) 100%),
        url('https://www.royalhuisman.com/images/royal-huisman-sky-exterior-sunset-c1resize.png') center/cover no-repeat;
      min-height: 480px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding: 180px 24px 60px;
    }

    .page-hero-content {
      position: relative;
      z-index: 1;
      max-width: 850px;
    }

    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 24px;
      border-radius: 50px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.8rem;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .hero-title {
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .hero-copy {
      max-width: 650px;
      margin: 0 auto;
      font-size: 1.1rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.8;
    }

    /* ============================================
       LISTINGS SECTION
    ============================================ */
    .hs-listings-section {
      min-height: 100vh;
      background: white;
      padding: 120px 0 90px;
    }

    .hs-container {
      max-width: 1480px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Header */
    .hs-listings-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .hs-section-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, rgba(65, 107, 60, 0.1), rgba(65, 107, 60, 0.05));
      color: #0f2818;
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .hs-page-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: #0f2818;
      margin-bottom: 12px;
      letter-spacing: -0.02em;
    }

    .hs-subtitle {
      font-size: 1.1rem;
      color: #5a6b63;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Main Layout */
    .hs-listings-main {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 40px;
      align-items: start;
    }

    /* ============================================
       FILTERS SIDEBAR
    ============================================ */
    .hs-filters-sidebar {
      background: #ffffff;
      border-radius: 28px;
      padding: 28px;
      position: sticky;
      top: 24px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
      border: 1px solid rgba(0,0,0,0.04);
    }

    .hs-filters-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
      padding-bottom: 20px;
      border-bottom: 2px solid #f0f0f0;
    }

    .hs-filters-header-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #0f2818, #1a4d35);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.1rem;
    }

    .hs-filters-header h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f2818;
    }

    .hs-filter-group {
      margin-bottom: 24px;
    }

    .hs-filter-group:last-child {
      margin-bottom: 0;
    }

    .hs-filter-group label {
      display: block;
      font-size: 0.8rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: #0d1117;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .hs-filter-group input,
    .hs-filter-group select {
      width: 100%;
      padding: 14px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 0.95rem;
      font-family: 'Poppins', sans-serif;
      color: #0d1117;
      background: #ffffff;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
      appearance: none;
    }

    .hs-filter-group input::placeholder {
      color: #8b9a8f;
    }

    .hs-filter-group input:hover,
    .hs-filter-group select:hover {
      border-color: #1a4d35;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95));
    }

    .hs-filter-group input:focus,
    .hs-filter-group select:focus {
      outline: none;
      border-color: #0f2818;
      box-shadow: 0 0 0 4px rgba(15, 40, 24, 0.1);
      background: #ffffff;
    }

    .hs-filter-group select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%235a6b63' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 18px;
      padding-right: 40px;
    }

    .hs-range-group {
      margin-bottom: 24px;
    }

    .hs-range-group:last-child {
      margin-bottom: 0;
    }

    .hs-range-inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .hs-range-input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .hs-range-input-label {
      font-size: 0.75rem;
      color: #8b9a8f;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .hs-range-group input {
      width: 100%;
      padding: 14px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 0.95rem;
      font-family: 'Poppins', sans-serif;
      color: #0d1117;
      background: #ffffff;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    }

    .hs-range-group input::placeholder {
      color: #8b9a8f;
    }

    .hs-range-group input:hover {
      border-color: #1a4d35;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95));
    }

    .hs-range-group input:focus {
      outline: none;
      border-color: #0f2818;
      box-shadow: 0 0 0 4px rgba(15, 40, 24, 0.1);
      background: #ffffff;
    }

    .hs-filter-actions {
      display: flex;
      gap: 12px;
      margin-top: 28px;
    }

    .hs-apply-btn,
    .hs-reset-btn {
      flex: 1;
      padding: 16px;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .hs-apply-btn {
      background: linear-gradient(135deg, #0f2818, #1a4d35);
      color: white;
      box-shadow: 0 2px 8px rgba(15, 40, 24, 0.15);
    }

    .hs-apply-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 40px rgba(65, 107, 60, 0.20);
    }

    .hs-apply-btn:active {
      transform: translateY(0);
    }

    .hs-reset-btn {
      background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
      color: #0d1117;
      border: 2px solid #e5e7eb;
    }

    .hs-reset-btn:hover {
      background: linear-gradient(135deg, #e5e7eb, #d1d5db);
      border-color: #1a4d35;
      transform: translateY(-2px);
    }

    .hs-reset-btn:active {
      transform: translateY(0);
    }

    /* ============================================
       MAIN CONTENT
    ============================================ */
    .hs-listings-content {
      min-height: 600px;
    }

    /* Top Bar */
    .hs-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      flex-wrap: wrap;
      gap: 20px;
    }

    .hs-search-box {
      display: flex;
      background: #ffffff;
      border-radius: 50px;
      padding: 8px 8px 8px 24px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
      border: 2px solid transparent;
      transition: all 0.3s ease;
      flex: 1;
      max-width: 730px;
    }

    .hs-search-box:focus-within {
      border-color: #0f2818;
      box-shadow: 0 10px 40px rgba(65, 107, 60, 0.20);
    }

    .hs-search-box input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
      color: #0d1117;
    }

    .hs-search-box input::placeholder {
      color: #8b9a8f;
    }

    .hs-search-btn {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #0f2818, #1a4d35);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .hs-search-btn:hover {
      transform: scale(1.05);
    }

    .hs-sort-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .hs-sort-label {
      font-size: 0.9rem;
      color: #5a6b63;
      font-weight: 500;
    }

    .hs-sort-select {
      padding: 14px 20px;
      padding-right: 44px;
      border: 2px solid #e8e8e8;
      border-radius: 12px;
      font-size: 0.95rem;
      font-family: 'Poppins', sans-serif;
      color: #0d1117;
      background: white;
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 18px;
      transition: all 0.3s ease;
    }

    .hs-sort-select:hover,
    .hs-sort-select:focus {
      border-color: #0f2818;
      outline: none;
    }

    .hs-view-toggle {
      display: flex;
      gap: 8px;
    }

    .hs-view-btn-toggle {
      width: 48px;
      height: 48px;
      border: 2px solid #e8e8e8;
      background: #ffffff;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #5a6b63;
      transition: all 0.3s ease;
    }

    .hs-view-btn-toggle.active {
      background: #0f2818;
      border-color: #0f2818;
      color: white;
    }

    /* ============================================
       YACHT GRID - 3 CARDS PER ROW
    ============================================ */
    .hs-yacht-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      margin-bottom: 40px;
    }

    /* Yacht Card */
    .hs-yacht-card {
      background: #ffffff;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
      border: 1px solid rgba(0,0,0,0.03);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
      position: relative;
      display: flex;
      flex-direction: column;
      animation: fadeInUp 0.7s ease forwards;
    }

    .hs-yacht-card:nth-child(1) { animation-delay: 0.1s; }
    .hs-yacht-card:nth-child(2) { animation-delay: 0.2s; }
    .hs-yacht-card:nth-child(3) { animation-delay: 0.3s; }
    .hs-yacht-card:nth-child(4) { animation-delay: 0.1s; }
    .hs-yacht-card:nth-child(5) { animation-delay: 0.2s; }
    .hs-yacht-card:nth-child(6) { animation-delay: 0.3s; }
    .hs-yacht-card:nth-child(7) { animation-delay: 0.1s; }
    .hs-yacht-card:nth-child(8) { animation-delay: 0.2s; }
    .hs-yacht-card:nth-child(9) { animation-delay: 0.3s; }
    .hs-yacht-card:nth-child(10) { animation-delay: 0.1s; }
    .hs-yacht-card:nth-child(11) { animation-delay: 0.2s; }
    .hs-yacht-card:nth-child(12) { animation-delay: 0.3s; }

    .hs-yacht-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, #0f2818, #355a32, #0f2818);
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: 10;
    }

    .hs-yacht-card:hover {
      transform: translateY(-16px);
      box-shadow: 0 25px 70px rgba(15, 40, 24, 0.15);
      border-color: rgba(53, 90, 50, 0.1);
      cursor: pointer;
    }

    .hs-yacht-card:hover::before {
      opacity: 1;
    }

    /* Image Container */
    .hs-yacht-image {
      position: relative;
      height: 260px;
      overflow: hidden;
      background: linear-gradient(135deg, #f0f5f2 0%, #e8ede8 100%);
    }

    .hs-yacht-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(0.33, 0.66, 0.66, 1);
    }

    .hs-yacht-card:hover .hs-yacht-image img {
      transform: scale(1.12);
      opacity: 0.3;
    }

    /* View Details Overlay Button */
    .hs-view-details-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      background: #355a32;
      backdrop-filter: blur(20px);
      color: white;
      border: 3px solid #355a32;
      padding: 10px 10px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
      box-shadow: 0 12px 40px rgba(53, 90, 50, 0.3);
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-decoration: none;
    }

    .hs-yacht-card:hover .hs-view-details-overlay {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%) scale(1);
    }

    .hs-view-details-overlay:hover {
      background: linear-gradient(135deg, #355a32, #6ba860);
      color: white;
      border-color: #355a32;
      transform: translate(-50%, -50%) scale(1.08);
      box-shadow: 0 16px 50px rgba(53, 90, 50, 0.4);
      text-decoration: none;
    }

    .hs-view-details-overlay:active {
      transform: translate(-50%, -50%) scale(0.95);
    }

    .hs-forsale-badge {
     position: absolute;
  top: 16px;
  left: 16px;
  background: #355a32;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  box-shadow: 0 4px 20px rgba(15, 40, 24, 0.35);
  backdrop-filter: blur(8px);
    }

    .hs-wishlist-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 50px;
      height: 50px;
      background: rgba(255,255,255,0.95);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #5a6b63;
      font-size: 1.25rem;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      z-index: 5;
    }

    .hs-wishlist-btn:hover {
      color: #e74c3c;
      transform: scale(1.15);
      box-shadow: 0 6px 28px rgba(231, 76, 60, 0.3);
    }

    .hs-wishlist-btn:active {
      transform: scale(0.95);
    }

    /* Wishlist heart toggle using focus state */
    .hs-wishlist-btn:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(53, 90, 50, 0.3);
    }

    .hs-wishlist-btn i.fas {
      color: #e74c3c;
    }

    /* Card Content */
    .hs-yacht-info {
      padding: 28px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .hs-yacht-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: #0d1117;
      margin-bottom: 8px;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }

    .hs-yacht-location {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #1a4d35;
      font-size: 0.85rem;
      margin-bottom: 18px;
      font-weight: 400;
    }

    .hs-yacht-location i {
      font-size: 0.85rem;
    }

    .hs-yacht-specs {
      display: flex;
      gap: 16px;
      margin-bottom: 20px;
      padding: 10px;
      background: linear-gradient(135deg, rgba(15, 40, 24, 0.03), rgba(53, 90, 50, 0.03));
      border-radius: 20px;
      border: 1px solid rgba(53, 90, 50, 0.1);
    }

    .hs-spec-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      text-align: center;
    }

    .hs-spec-item i {
      color: #355a32;
      font-size: 1.2rem;
      margin-bottom: 6px;
    }

    .hs-spec-value {
      font-weight: 500;
      color: #0d1117;
      font-size: 0.88rem;
    }

    .hs-spec-label {
      font-size: 0.65rem;
      color: #8b9a8f;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 2px;
      font-weight: 400;
    }

    .hs-yacht-price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .hs-yacht-price {
      font-size: 1.35rem;
      font-weight: 700;
      color: #355a32;
      letter-spacing: -0.02em;
    }

    .hs-year-badge {
      background: linear-gradient(135deg, #6ba860 0%, #355a32 100%);
      color: white;
      padding: 6px 14px;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 500;
      box-shadow: 0 2px 8px rgba(53, 90, 50, 0.3);
    }

    .hs-card-actions {
      display: flex;
      gap: 12px;
      margin-top: auto;
    }

    .hs-view-details-btn {
      flex: 1;
      padding: 14px 20px;
      background: #355a32;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
    }

    .hs-view-details-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 40px rgba(65, 107, 60, 0.20);
    }

    .hs-view-details-btn:active {
      transform: translateY(-1px);
    }

    .hs-contact-btn {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, rgba(53, 90, 50, 0.15), rgba(53, 90, 50, 0.08));
      color: #355a32;
      border: 2px solid #355a32;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    }

    .hs-contact-btn:hover {
      background: #355a32;
      color: white;
      box-shadow: 0 4px 15px rgba(53, 90, 50, 0.3);
    }

    .hs-contact-btn:active {
      transform: scale(0.95);
    }

    /* ============================================
       PAGINATION
    ============================================ */
    .hs-pagination-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;
      padding-top: 30px;
      border-top: 1px solid #eee;
    }

    .hs-results-info {
      color: #5a6b63;
      font-size: 0.95rem;
    }

    .hs-results-info strong {
      color: #0f2818;
    }

    .hs-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .hs-page-arrow {
      width: 44px;
      height: 44px;
      background: #ffffff;
      border: 2px solid #e8e8e8;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #5a6b63;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .hs-page-arrow:hover:not(:disabled) {
      background: #0f2818;
      border-color: #0f2818;
      color: white;
    }

    .hs-page-arrow:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .hs-page-numbers {
      display: flex;
      gap: 6px;
    }

    .hs-page {
      min-width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 2px solid #e8e8e8;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.95rem;
      color: #5a6b63;
      transition: all 0.3s ease;
    }

    .hs-page:hover {
      border-color: #0f2818;
      color: #0f2818;
    }

    .hs-page.active {
      background: linear-gradient(135deg, #0f2818, #1a4d35);
      border-color: #0f2818;
      color: white;
      box-shadow: 0 4px 15px rgba(65, 107, 60, 0.3);
    }

    .hs-page-dots {
      padding: 0 8px;
      color: #8b9a8f;
    }

    /* ============================================
       RESPONSIVE DESIGN
    ============================================ */
    @media (max-width: 1400px) {
      .hs-yacht-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
      }
    }

    @media (max-width: 1200px) {
      .hs-yacht-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 28px;
      }

      .hs-listings-main {
        grid-template-columns: 1fr;
      }

      .hs-filters-sidebar {
        position: static;
        margin-bottom: 32px;
      }

      .hs-filters-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .hs-filter-group,
      .hs-range-group {
        margin-bottom: 0;
      }

      .hs-range-display {
        flex-direction: column;
        gap: 4px;
        text-align: center;
      }

      .hs-apply-btn {
        grid-column: span 2;
      }
    }

    @media (max-width: 900px) {
      .hs-yacht-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      .hs-top-bar {
        flex-direction: column;
        align-items: stretch;
      }

      .hs-search-box {
        max-width: 100%;
      }

      .hs-sort-wrapper {
        justify-content: space-between;
      }

      .hs-view-toggle {
        display: none;
      }

      .hs-filters-grid {
        grid-template-columns: 1fr;
      }

      .hs-apply-btn {
        grid-column: span 1;
      }

      .hs-pagination-wrapper {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }

      .hs-yacht-image {
        height: 220px;
      }

      .hs-yacht-info {
        padding: 24px;
      }

      .hs-yacht-specs {
        padding: 14px;
        gap: 12px;
      }

      .hs-spec-value {
        font-size: 0.9rem;
      }

      .hs-yacht-name {
        font-size: 1.1rem;
      }

      .hs-yacht-price {
        font-size: 1.4rem;
      }
    }

    @media (max-width: 768px) {
      .hs-listings-section {
        padding: 50px 0 70px;
      }

      .hs-yacht-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .hs-top-bar {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
        margin-bottom: 28px;
      }

      .hs-search-box {
        max-width: 100%;
      }

      .hs-sort-wrapper {
        width: 100%;
        justify-content: space-between;
      }

      .hs-container {
        padding: 0 16px;
      }

      .hs-filters-sidebar {
        margin-bottom: 28px;
      }

      .hs-page-title {
        font-size: 2rem;
      }

      .hs-yacht-image {
        height: 240px;
      }

      .hs-yacht-info {
        padding: 22px;
      }

      .hs-yacht-specs {
        padding: 16px;
        gap: 12px;
      }

      .hs-yacht-name {
        font-size: 1.15rem;
      }

      .hs-yacht-price {
        font-size: 1.4rem;
      }

      .hs-page-numbers {
        display: none;
      }

      .hs-pagination {
        gap: 12px;
      }
    }

    @media (max-width: 640px) {
      .hs-listings-section {
        padding: 40px 0 60px;
      }

      .hs-yacht-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .hs-page-title {
        font-size: 1.75rem;
      }

      .hs-subtitle {
        font-size: 0.95rem;
      }

      .hs-container {
        padding: 0 14px;
      }

      .hs-yacht-image {
        height: 200px;
      }

      .hs-yacht-info {
        padding: 20px;
      }

      .hs-yacht-specs {
        padding: 14px;
        gap: 10px;
      }

      .hs-spec-item i {
        font-size: 1rem;
      }

      .hs-spec-value {
        font-size: 0.85rem;
      }

      .hs-spec-label {
        font-size: 0.65rem;
      }

      .hs-yacht-name {
        font-size: 1.05rem;
      }

      .hs-yacht-price {
        font-size: 1.3rem;
      }

      .hs-card-actions {
        gap: 10px;
      }

      .hs-contact-btn {
        width: 45px;
        height: 45px;
        font-size: 1rem;
      }

      .hs-view-details-btn {
        padding: 12px 16px;
        font-size: 0.9rem;
      }

      .hs-page-numbers {
        display: none;
      }

      .hs-pagination {
        gap: 10px;
      }

      .hs-page-arrow {
        width: 40px;
        height: 40px;
      }
    }

    @media (max-width: 480px) {
      .hs-listings-section {
        padding: 35px 0 50px;
      }

      .hs-container {
        padding: 0 12px;
      }

      .hs-page-title {
        font-size: 1.5rem;
      }

      .hs-section-label {
        font-size: 0.75rem;
        padding: 6px 14px;
      }

      .hs-yacht-grid {
        gap: 16px;
      }

      .hs-yacht-image {
        height: 180px;
      }

      .hs-yacht-info {
        padding: 18px;
      }

      .hs-yacht-specs {
        padding: 12px;
        gap: 8px;
      }

      .hs-yacht-name {
        font-size: 1rem;
        margin-bottom: 6px;
      }

      .hs-yacht-location {
        font-size: 0.85rem;
        margin-bottom: 14px;
      }

      .hs-yacht-price-row {
        margin-bottom: 16px;
      }

      .hs-yacht-price {
        font-size: 1.2rem;
      }

      .hs-view-details-btn {
        padding: 11px 14px;
        font-size: 0.85rem;
      }

      .hs-contact-btn {
        width: 42px;
        height: 42px;
        font-size: 0.95rem;
      }

      .hs-top-bar {
        margin-bottom: 24px;
      }

      .hs-search-box {
        padding: 6px 6px 6px 16px;
      }

      .hs-search-box input {
        font-size: 0.95rem;
      }

      .hs-sort-select {
        font-size: 0.9rem;
        padding: 12px 16px;
        padding-right: 36px;
      }
    }

    /* Animation for cards on load */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

@keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }

    .hs-no-results {
      text-align: center;
      padding: 80px 20px;
      background: #ffffff;
      border-radius: 28px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    }

    .hs-no-results p {
      font-size: 1.2rem;
      color: #5a6b63;
    }
  </style>