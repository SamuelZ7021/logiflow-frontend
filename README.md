# LogiFlow - Logistics Management System

LogiFlow is a modern, responsive web application designed for logistics and supply chain management. It provides a comprehensive dashboard for tracking shipments, managing customers, and analyzing operational performance.

## 🚀 Features

The application consists of several key modules:

- **Dashboard**: Real-time overview of active shipments, fleet status, and key performance indicators (KPIs). Includes visual charts and a live fleet map.
- **Shipments**: Detailed tracking of logistics operations with status monitoring (In Transit, Delivered, Incident, Pending) and filtering capabilities.
- **Customers**: Client management interface with detailed profiles, shipment history, and quick access actions.
- **Reports**: Analytical views for shipment volumes, delivery performance, and route efficiency.
- **Settings**: User configuration for system preferences, notifications, and profile management.

## 🛠️ Technology Stack

- **Framework**: Angular 19+ (Standalone Components, Signals)
- **Styling**: TailwindCSS
- **Icons**: Lucide Angular
- **Build Tool**: Angular CLI

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd logiflow-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

4. **Build for production**
   ```bash
   ng build
   ```
   The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

- Run `ng test` to execute the unit tests via Karma.
