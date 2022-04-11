import bcrypt from 'bcryptjs';
const data = {
  admin: [
    {
      name: 'Mohamed Hamdy',
      email: 'mohamedhamdy@gmail.com',
      password: bcrypt.hashSync('01125594521'),
    },
  ],
  users: [
    {
      name: 'Ahmed Kamal',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Mohamed Hamdy',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'David Zaky',
      email: 'user2@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Mohamed Said',
      email: 'user3@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
   
    {
      //_id:'1',
      name: 'laptop hp',
      slug: 'laptop-hp-1',
      category: 'laptop',
      image: '/images/lp2.jpg',
      price: 2520,
      countInStock: 0,
      brand: 'laptop',
      rating: 3.5,
      numReviews: 9,
      description:
        'HP Elite x2 G4 Multi-Touch 2-in-1 Laptop - 13" FHD BV Sure View Touchscreen w/ IR Camera - 1.6 GHz Intel Core i5-8265U Quad-Core - 8GB - 128GB SSD- Windoes 10 pro',
    },
    {
      //_id:'2',
      name: 'laptop dell',
      slug: 'laptop-dell-1',
      category: 'laptop',
      image: '/images/lp3.jpg',
      price: 3100,
      countInStock: 10,
      brand: 'laptop',
      rating: 4.5,
      numReviews: 12,
      description:
        'Dell G15 15-5510 Gaming laptop - Intel Core i5-10500H 6Cores, 8GB RAM, 512GB SSD, Nvidia Geforce GTX1650 4GB GDDR6 Graphics, 15.6" FHD IPS 120Hz, Backlit Keyboard, UBUNTU - Shadow Grey',
    },
    {
      //_id:'3',
      name: 'Apple MacBook ',
      slug: ' Apple-MacBook-1',
      category: 'laptop',
      image: '/images/lp4.jpg',
      price: 15000,
      countInStock: 7,
      brand: 'laptop',
      rating: 5.0,
      numReviews: 87,
      description:
        'Apple MacBook Pro 2020 Model (13-Inch, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB, 512GB, Touch Bar and Touch ID, MYD92 ), Eng-KB, Space Gray',
    },
    {
      //_id:'4',
      name: 'laptop Lenovo',
      slug: 'laptop-Lenovo-1',
      category: 'laptop',
      image: '/images/lp5.jpg',
      price: 5120,
      countInStock: 9,
      brand: 'laptop',
      rating: 4.5,
      numReviews: 64,
      description:
        'Lenovo Legion 5-15ARH05H Gaming laptop - Ryzen 7 4800H 8-Cores, 16GB RAM, 1TB HDD + 512GB SSD, NVIDIA GeForce RTX 2060 6GB GDDR6 Graphics, 15.6" FHD IPS 144Hz, Windows 10 - Phantom -Black',
    },
    {
      //_id:'4',
      name: 'SAMSUNG Galaxy S20',
      slug: 'SAMSUNG-Galaxy-S20',
      category: 'Mobail',
      image: '/images/m1.jpg',
      price: 1120,
      countInStock: 6,
      brand: 'Mobail',
      rating: 4.0,
      numReviews: 12,
      description:
        'SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Navy',
    },
    {
      //_id:'4',
      name: 'SAMSUNG Galaxy Z',
      slug: 'SAMSUNG-Galaxy-Z',
      category: 'Mobail',
      image: '/images/m2.jpg',
      price: 520,
      countInStock: 8,
      brand: 'Mobail',
      rating: 3.5,
      numReviews: 14,
      description:
        'SAMSUNG Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty, Phantom Black',
    },
    {
      //_id:'4',
      name: 'Latest Android 11',
      slug: 'Latest-Android-11',
      category: 'Mobail',
      image: '/images/m3.jpg',
      price: 2120,
      countInStock: 0,
      brand: 'Mobail',
      rating: 4.5,
      numReviews: 23,
      description:
        'Latest Android 11 Phone, Ulefone Note 6 Unlocked Smartphone, 6.1” HD+ Full Screen, Quad-core 1GB+32GB Mobile Phone, 3300mAh Battery, Face Unlock, AI Camera 5MP+2MP Cell Phones- Purple',
    },
    {
      //_id:'4',
      name: 'Unlocked Cell Phones',
      slug: 'Unlocked-Cell-Phones',
      category: 'Mobail',
      image: '/images/m4.jpg',
      price: 120,
      countInStock: 3,
      brand: 'Mobail',
      rating: 5.0,
      numReviews: 34,
      description:
        'Unlocked Cell Phones, Ulefone Note 12P (2022 New) 6.82" HD+ Unlocked Smartphone, 7700mAh Battery, Octa-core 4GB+64GB, Android 11, 13MP Triple Rear Camera Triple Card Slots, Dual 4G Mobile Phone -Black',
    },
    {
      //_id:'4',
      name: 'Smart Watches',
      slug: 'Smart-Watches',
      category: 'Watches',
      image: '/images/w1.jpg',
      price: 500,
      countInStock: 8,
      brand: 'Watches',
      rating: 3.5,
      numReviews: 12,
      description:
        'Smart Watches for Men Women, Activing Fitness Tracker with Heart Rate Blood Oxygen Monitoring 3ATM Waterproof',
    },
    {
      //_id:'4',
      name: 'Fossil Mens Gen 6',
      slug: 'Fossil-Mens-Gen-6',
      category: 'Watches',
      image: '/images/w2.jpg',
      price: 220,
      countInStock: 4,
      brand: 'Watches',
      rating: 4.5,
      numReviews: 21,
      description:
        'Fossil Mens Gen 6 44mm Touchscreen Smartwatch with Alexa Built-In, Heart Rate, Blood Oxygen, GPS, Contactless Payments, Speaker and Smartphone Notifications',
    },
    {
      //_id:'4',
      name: 'Blackview Smart Watch',
      slug: 'Blackview-Smart-Watch',
      category: 'Watches',
      image: '/images/w3.jpg',
      price: 140,
      countInStock: 9,
      brand: 'Watches',
      rating: 3.0,
      numReviews: 41,
      description:
        'Blackview Smart Watch for Android Phones and iOS Phones, All-Day Activity Tracker with Heart Rate Sleep Monitor, 1.3" Full Touch Screen, 5ATM Waterproof Pedometer, Smartwatch for Men Women',
    },
    {
      //_id:'4',
      name: 'Smart Watch',
      slug: 'Smart-Watch-2',
      category: 'Watches',
      image: '/images/w4.jpg',
      price: 50,
      countInStock: 6,
      brand: 'Watches',
      rating: 4.0,
      numReviews: 15,
      description:
        'Smart Watch for Men and Women,IP68 Waterproof Fitness Tracker with Heart Rate and Sleep Monitor, Blood Pressure Blood Oxygen Tracking Smartwatch Compatible with Android iPhone iOS Phones',
    },
    {
      //_id:'',
      name: 'AIHOOR Wireless',
      slug: 'AIHOOR-Wireless',
      category: 'Earbuds',
      image: '/images/h.jpg',
      price: 20,
      countInStock: 7,
      brand: 'Earbuds',
      rating: 4.5,
      numReviews: 16,
      description:
        'AIHOOR Wireless Earbuds for iOS & Android Phones, Bluetooth 5.0 in-Ear Headphones with Extra Bass, Built-in Mic, Touch Control, USB Charging Case, 30hr Battery Earphones, Waterproof for Sport (Black)      ',
    },
    {
      //_id:'4',
      name: 'Roll over',
      slug: 'Roll-over',
      category: 'Earbuds',
      image: '/images/h2.jpg',
      price: 75,
      countInStock: 2,
      brand: 'Earbuds',
      rating: 5.0,
      numReviews: 23,
      description:
        'Roll over image to zoom inBluetooth 5.2 Wireless Earbuds,Kurdene S8 Deep Bass Sound 38H Playtime Call Clear IPX8 Waterproof Earphones with Microphone in-Ear Stereo Headphones Comfortable for iPhone Android Sports',
    },
    {
      //_id:'4',
      name: 'Monster Mission',
      slug: 'Monster-Mission',
      category: 'Earbuds',
      image: '/images/h3.jpg',
      price: 50,
      countInStock: 5,
      brand: 'Earbuds',
      rating: 3.5,
      numReviews: 51,
      description:
        'Monster Mission V1 Wireless Earbuds, Bluetooth 5.0 Built-in Mic Noise Cancelling Gaming Earbuds, Cool Light Effects with Music & Game Modes, 48ms Ultra Low-Latency Gaming Earphones (Black)',
    },
    {
      //_id:'4',
      name: 'Bluetooth 5.2 Wireless',
      slug: 'Bluetooth-5.2-Wireless',
      category: 'Earbuds',
      image: '/images/h4.jpg',
      price: 100,
      countInStock: 1,
      brand: 'Earbuds',
      rating: 3.0,
      numReviews: 32,
      description:
        'Bluetooth 5.2 Wireless Earbuds,Kurdene S8 Deep Bass Sound 38H Playtime Call Clear IPX8 Waterproof Earphones with Microphone in-Ear Stereo Headphones Comfortable for iPhone Android Sports',
    },
  ],
};
export default data;
