# Electric Vehicle Population Dashboard

![EV Dashboard](https://evdashboardshreyas.netlify.app/api/placeholder/1200/600)

## 🚀 Live Demo
[View Live Dashboard](https://evdashboardshreyas.netlify.app/)

## 📝 Description
A modern, responsive dashboard built with React and Material-UI that visualizes electric vehicle population data. The dashboard features interactive charts and statistics about EV adoption, manufacturers, and geographic distribution.

## ✨ Features

- **Dark Theme**: Sleek dark mode interface with gradient accents
- **Interactive Charts**: 
  - EV Type Distribution (Pie Chart)
  - Top Manufacturers (Bar Chart)
  - Yearly Growth Trend (Line Chart)
  - Top Cities (Bar Chart)
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Real-time Statistics**: Dynamic calculation of key metrics
- **Glassmorphic UI**: Modern glass-effect cards and containers
- **Data Visualization**: Powered by Recharts for smooth, interactive charts

## 🛠️ Technologies Used

- React 18
- Vite
- Material-UI (MUI)
- Recharts
- PapaParse
- Netlify (Hosting)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ev-dashboard.git
cd ev-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure
```
ev-dashboard/
├── public/
│   └── Electric_Vehicle_Population_Data.csv
├── src/
│   ├── components/
│   │   └── Dashboard.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

## 🔧 Configuration
The project uses Vite for build configuration. You can modify the configuration in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  // Add custom configuration here
})
```

## 📊 Data Source
The dashboard uses the Electric Vehicle Population Data CSV file, which should be placed in the `public` directory. The data includes:
- Vehicle makes and models
- Electric vehicle types
- Geographic distribution
- Year-over-year growth

## 🚀 Deployment
The project is deployed on Netlify. To deploy your own instance:

1. Create a Netlify account
2. Connect your repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- Data provided by public EV registration records
- UI inspiration from modern dashboard designs
- Built with React and Material-UI components

## 📞 Contact
For questions or feedback, please visit [https://evdashboardshreyas.netlify.app/](https://evdashboardshreyas.netlify.app/)