# Florida Health Data Enhancement Dashboard

A modern, interactive web dashboard showcasing Florida county health data with enhanced visualizations. Built as a work sample for an OPS Research and Statistics Consultant position with the Florida Department of Health.

##  Project Overview

This dashboard demonstrates skills in data analysis, web development, and public health reporting through an interactive visualization of Florida county health metrics. The application features modern UI/UX design, responsive layouts, and comprehensive data visualization capabilities.

##  Features

### 📊 **Interactive Visualizations**
- **Trend Analysis Charts**: 3-year trend data (2021-2023) with gradient-filled area charts
- **Health Disparities by Race**: Bar charts showing demographic breakdowns with gradient fills
- **County Comparison**: Choropleth-style county comparisons with severity-based color coding
- **Detailed Data Table**: Sortable table with modern borders and color-coded metrics

###  **Modern UI/UX**
- **Glassmorphism Effects**: Frosted glass backgrounds with backdrop blur
- **Gradient Styling**: Modern gradient backgrounds, text, and chart elements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Professional Typography**: Inter font family with modern spacing

###  **Interactive Features**
- **County Selection**: Dropdown with search functionality
- **Metric Selection**: Choose from maternal mortality, low birth weight, preterm birth, teen birth rate
- **Data Sorting**: Click column headers to sort table data
- **CSV Export**: Download filtered data for further analysis
- **Real-time Filtering**: Search counties by name

###  **Data Metrics**
- **Maternal Mortality Rate** (per 100,000 births)
- **Low Birth Weight Percentage** (% of births under 2,500g)
- **Preterm Birth Percentage** (% of births before 37 weeks)
- **Teen Birth Rate** (per 1,000 females aged 15-19)

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Charts**: Recharts library for data visualization
- **Icons**: Lucide React for modern iconography
- **Build Tool**: CRACO (Create React App Configuration Override)
- **Fonts**: Inter (primary) and JetBrains Mono (code)

##  Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FDH-JoshikaGopisetti
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
FDH-JoshikaGopisetti/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # App icon
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx           # Main dashboard component
│   │   ├── TrendChart.tsx          # 3-year trend visualization
│   │   ├── DemographicsChart.tsx   # Race/ethnicity disparities
│   │   ├── CountyComparisonChart.tsx # County comparison chart
│   │   └── DataTable.tsx           # Sortable data table
│   ├── data/
│   │   └── floridaHealthData.ts    # Mock data and interfaces
│   ├── App.tsx                     # Root component
│   ├── index.tsx                   # Entry point
│   └── index.css                   # Global styles and Tailwind
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── craco.config.js                 # CRACO build configuration
└── tsconfig.json                   # TypeScript configuration
```

## Design System

### Color Palette
- **Florida Blue**: `#0066CC` - Primary brand color
- **Florida Green**: `#00A651` - Secondary brand color
- **Florida Orange**: `#FF6600` - Accent color
- **Health Blue**: `#1E40AF` - Chart accent
- **Health Green**: `#059669` - Success indicators

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Code Font**: JetBrains Mono
- **Font Weights**: 300-900 (Light to Black)

### Animations
- **Fade In**: 0.6s ease-out
- **Slide Up**: 0.8s ease-out
- **Hover Effects**: 0.3s cubic-bezier transitions
- **Loading Spinner**: Smooth rotation animation

## Data Structure

The application uses TypeScript interfaces for type safety:

```typescript
interface CountyData {
  county: string;
  population: number;
  metrics: HealthMetrics;
  demographics: Demographics;
}

interface HealthMetrics {
  maternalMortality: { [year: number]: number };
  lowBirthWeight: { [year: number]: number };
  pretermBirth: { [year: number]: number };
  teenBirthRate: { [year: number]: number };
}
```

## Key Features Explained

### County Selection & Search
- Dropdown with all 10 Florida counties
- Real-time search functionality
- Automatic data filtering

### Metric Visualization
- **Trend Charts**: Area charts with gradient fills showing 3-year trends
- **Demographics**: Bar charts with race-specific gradient colors
- **County Comparison**: Severity-based color coding (red=high, green=low)

### Data Table
- **Sortable Columns**: Click headers to sort by any metric
- **Color Coding**: Values colored by severity level
- **Modern Borders**: Clean, professional table styling
- **Responsive**: Horizontal scroll on smaller screens

## Professional Features

### Export Functionality
- **CSV Download**: Export filtered data for analysis
- **Formatted Data**: Properly formatted with headers and units

### Accessibility
- **Color Blind Friendly**: Uses patterns and contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML

### Performance
- **Memoized Components**: React.useMemo for performance optimization
- **Lazy Loading**: Components load efficiently
- **Optimized Builds**: Production-ready with code splitting

## Development Notes

### Mock Data
The application uses realistic mock data for 10 Florida counties:
- Miami-Dade, Broward, Orange, Hillsborough, Palm Beach
- Pinellas, Duval, Lee, Polk, Brevard

### Styling Approach
- **Utility-First CSS**: Tailwind CSS for rapid development
- **Custom Components**: Reusable styled components
- **Responsive Design**: Mobile-first approach

### Code Quality
- **TypeScript**: Full type safety throughout
- **ESLint**: Code quality and consistency
- **Modern React**: Hooks-based functional components

## Deployment

The application can be deployed to any static hosting service:

```bash
npm run build
```

The `build/` folder contains the production-ready files.

## Author

**Joshika Gopisetti**
- Built for Florida Department of Health OPS Research and Statistics Consultant position
- Demonstrates expertise in data visualization, web development, and public health analytics

## 📄 License

This project is created as a work sample and demonstration of technical skills.

---
