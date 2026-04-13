import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const LISTINGS_PATH = path.join(process.cwd(), 'listings.json');
const BROKERS_PATH = path.join(process.cwd(), 'broker.json');

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

function loadListings() {
  try {
    if (fs.existsSync(LISTINGS_PATH)) {
      const data = fs.readFileSync(LISTINGS_PATH, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading listings:', error);
  }
  return [];
}

function saveListings(listings) {
  fs.writeFileSync(LISTINGS_PATH, JSON.stringify(listings, null, 2));
}

function loadBrokers() {
  try {
    if (fs.existsSync(BROKERS_PATH)) {
      const data = fs.readFileSync(BROKERS_PATH, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading brokers:', error);
  }
  return [];
}

function saveBrokers(brokers) {
  fs.writeFileSync(BROKERS_PATH, JSON.stringify(brokers, null, 2));
}

app.post('/api/listings', (req, res) => {
  try {
    console.log('Received data type:', typeof req.body);
    console.log('Is array:', Array.isArray(req.body));
    
    let newListings = req.body;

    if (typeof newListings === 'object' && !Array.isArray(newListings)) {
      const possibleArrays = [newListings.data, newListings.listings, newListings.items, newListings.results];
      for (const arr of possibleArrays) {
        if (Array.isArray(arr)) {
          newListings = arr;
          break;
        }
      }
    }

    if (!Array.isArray(newListings)) {
      newListings = [newListings];
    }

    if (newListings.length > 0 && newListings[0] !== undefined && newListings[0] !== null) {
      const existingListings = loadListings();
      const combinedListings = [...existingListings, ...newListings];
      saveListings(combinedListings);

      console.log(`Saved ${newListings.length} listings`);

      res.json({ 
        success: true, 
        message: `Added ${newListings.length} listings`,
        total: combinedListings.length 
      });
    } else {
      res.json({ success: true, message: 'No data to save' });
    }
  } catch (error) {
    console.error('Error saving listings:', error);
    res.status(500).json({ error: 'Failed to save listings' });
  }
});

app.get('/api/listings', (req, res) => {
  try {
    const listings = loadListings();
    res.json(listings);
  } catch (error) {
    console.error('Error reading listings:', error);
    res.status(500).json({ error: 'Failed to read listings' });
  }
});

app.post('/api/brokers', (req, res) => {
  try {
    console.log('Received brokers data type:', typeof req.body);
    console.log('Is array:', Array.isArray(req.body));
    
    let newBrokers = req.body;

    if (typeof newBrokers === 'object' && !Array.isArray(newBrokers)) {
      const possibleArrays = [newBrokers.data, newBrokers.brokers, newBrokers.items, newBrokers.results];
      for (const arr of possibleArrays) {
        if (Array.isArray(arr)) {
          newBrokers = arr;
          break;
        }
      }
    }

    if (!Array.isArray(newBrokers)) {
      newBrokers = [newBrokers];
    }

    if (newBrokers.length > 0 && newBrokers[0] !== undefined && newBrokers[0] !== null) {
      const existingBrokers = loadBrokers();
      const combinedBrokers = [...existingBrokers, ...newBrokers];
      saveBrokers(combinedBrokers);

      console.log(`Saved ${newBrokers.length} brokers`);

      res.json({ 
        success: true, 
        message: `Added ${newBrokers.length} brokers`,
        total: combinedBrokers.length 
      });
    } else {
      res.json({ success: true, message: 'No data to save' });
    }
  } catch (error) {
    console.error('Error saving brokers:', error);
    res.status(500).json({ error: 'Failed to save brokers' });
  }
});

app.get('/api/brokers', (req, res) => {
  try {
    const brokers = loadBrokers();
    res.json(brokers);
  } catch (error) {
    console.error('Error reading brokers:', error);
    res.status(500).json({ error: 'Failed to read brokers' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  POST /api/listings - Add listings`);
  console.log(`  GET  /api/listings - Get all listings`);
  console.log(`  POST /api/brokers - Add brokers`);
  console.log(`  GET  /api/brokers - Get all brokers`);
});