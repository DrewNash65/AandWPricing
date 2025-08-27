# 1-to-1 Aesthetics & Wellness - Pricing Portal

A QR code-accessible pricing website for 1-to-1 Aesthetics & Wellness with location-based and customer-type-specific pricing.

## 🌟 Features

- **QR Code Entry Point**: Customers scan QR code to access pricing
- **Location Selection**: Choose between Penn Valley or Danville locations
- **Customer Type Routing**: First Time Patient, Existing Patient, or Party Host
- **Dynamic Pricing**: 6 different pricing pages based on location and customer type
- **Professional Design**: Matches existing 1to1WellnessMD.com branding
- **Mobile Responsive**: Works perfectly on all devices
- **QR Code Generator**: Built-in tool to create QR codes for your website

## 📁 File Structure

```
/
├── index.html                          # Landing page with QR code entry
├── location.html                       # Location selection page
├── customer-type.html                  # Customer type selection page
├── pricing-penn-valley-first-time.html # Penn Valley first-time pricing
├── pricing-penn-valley-existing.html   # Penn Valley existing patient pricing
├── pricing-penn-valley-party-host.html # Penn Valley party host pricing
├── pricing-danville-first-time.html    # Danville first-time pricing
├── pricing-danville-existing.html      # Danville existing patient pricing
├── pricing-danville-party-host.html    # Danville party host pricing
├── qr-generator.html                   # QR code generator tool
├── styles.css                          # All styling (matches your branding)
├── script.js                           # Navigation and interactivity
└── README.md                           # This file
```

## 🚀 Setup Instructions

### 1. Upload to Web Hosting
- Upload all files to your web hosting provider
- Ensure all files are in the same directory
- Test that the website loads at your domain

### 2. Generate QR Codes
- Open `qr-generator.html` in your browser
- Enter your website URL (e.g., `https://yourwebsite.com/index.html`)
- Choose QR code size
- Click "Generate QR Code"
- Download or print the QR code

### 3. Display QR Codes
- Print QR codes for office display
- Add to business cards
- Include in marketing materials
- Share on social media

## 🎨 Design Features

### Color Scheme (Matching 1to1WellnessMD.com)
- **Primary Blue**: #1e40af (blue-700)
- **Light Blue**: #3b82f6 (blue-500)
- **Background**: #dbeafe (blue-50)
- **Text**: Professional dark grays

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly buttons and navigation

## 🔄 Navigation Flow

1. **QR Code Scan** → `index.html`
2. **Choose Location** → `location.html`
3. **Select Customer Type** → `customer-type.html`
4. **View Pricing** → Appropriate pricing page

## 💰 Pricing Structure

### First Time Patients
- **Botox**: $12/unit (reg. $15)
- **Dysport**: $4/unit (reg. $5)
- **Jeuveau**: $11/unit (reg. $14)
- **Fillers**: $550/syringe (reg. $650)
- **TMJ**: $400 (reg. $500)
- **Migraines**: $1,200 (reg. $1,500)
- **Hyperhidrosis**: $800 (reg. $1,000)

### Existing Patients
- **Botox**: $13/unit (reg. $15)
- **Dysport**: $4.50/unit (reg. $5)
- **Jeuveau**: $12/unit (reg. $14)
- **Fillers**: $600/syringe (reg. $650)
- **TMJ**: $450 (reg. $500)
- **Migraines**: $1,350 (reg. $1,500)
- **Hyperhidrosis**: $900 (reg. $1,000)

### Party Host
- **Botox**: $11/unit (reg. $15)
- **Dysport**: $3.75/unit (reg. $5)
- **Mixed Treatments**: 15% off regular prices
- **Premium Package**: $10/unit + $200 party fee

## 🎉 Party Host Rewards

- **4-6 participants**: 20 free Botox units ($300 value)
- **7-10 participants**: 40 free Botox units + 0.5ml lip filler ($650 value)
- **11+ participants**: 60 free Botox units + full lip filler ($1,000+ value)

## 📱 Contact Information

- **Phone**: (925) 272-8031
- **Text**: (925) 272-8031
- **Danville Address**: 911 San Ramon Valley Blvd, Suite 100, Danville, CA 94526

## 🛠️ Customization

### To Update Prices
1. Edit the relevant pricing HTML files
2. Update both the displayed price and regular price
3. Ensure consistency across all customer types

### To Add New Services
1. Add new service cards to pricing pages
2. Follow the existing HTML structure
3. Use appropriate CSS classes for styling

### To Change Branding
1. Update CSS variables in `styles.css`
2. Modify colors, fonts, and spacing as needed
3. Update logo and contact information

## 📊 Analytics

The website includes placeholder functions for analytics tracking. You can integrate:
- Google Analytics
- Facebook Pixel
- Other tracking services

## 🔧 Technical Notes

- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Support**: iOS Safari, Android Chrome
- **QR Code Library**: Uses qrcode.js for QR generation
- **No Database Required**: Static HTML/CSS/JS website

## 📞 Support

For technical support or customization requests, contact your web developer or the person who set up this website.

---

**© 2024 1-to-1 Aesthetics & Wellness. All rights reserved.**
